import { useEffect, useMemo, useState } from 'react'
import { agendaVitaConfigured, clinicSlug, requestAgendaVita } from '../services/agendaVita.js'

const procedures = ['Alinhadores', 'Aparelho Fixo', 'Preventiva / Infantil']
const defaultSpecialties = ['Ortodontia', 'Clínico Geral', 'Odontopediatria']

function getLocalDateValue(date = new Date()) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function CheckMark() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-3">
      <path d="m3.5 8 3 3 6-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const fieldClass = 'mt-1.5 h-[39px] w-full rounded-[9px] border border-[#d6d8d6] bg-white px-3 text-[12px] font-normal normal-case tracking-normal text-[#292e2c] placeholder:text-[#8b929e] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15'
const labelClass = 'block text-[10px] font-medium uppercase tracking-[0.025em] text-[#6c706e]'
const stepClass = 'mb-2 block text-[11px] font-medium uppercase tracking-[0.025em] text-[#6c706e]'

function Booking() {
  const [clinic, setClinic] = useState(null)
  const [professionals, setProfessionals] = useState([])
  const [selectedProfessionalId, setSelectedProfessionalId] = useState('')
  const [specialty, setSpecialty] = useState('Ortodontia')
  const [clinicLoading, setClinicLoading] = useState(true)
  const [clinicError, setClinicError] = useState('')

  const [date, setDate] = useState('')
  const [slots, setSlots] = useState([])
  const [selectedTime, setSelectedTime] = useState('')
  const [slotsLoading, setSlotsLoading] = useState(false)
  const [slotsError, setSlotsError] = useState('')
  const [slotsVersion, setSlotsVersion] = useState(0)

  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState('')
  const [confirmation, setConfirmation] = useState(null)

  const today = useMemo(() => getLocalDateValue(), [])
  const selectedProfessional = professionals.find(
    (professional) => String(professional.id) === selectedProfessionalId,
  )
  const specialties = useMemo(() => {
    const values = [
      ...defaultSpecialties,
      clinic?.specialty,
      ...professionals.map((professional) => professional.specialty),
    ].filter(Boolean)
    return [...new Set(values)]
  }, [clinic, professionals])

  useEffect(() => {
    if (!agendaVitaConfigured) {
      setClinicError('O agendamento online está temporariamente indisponível. Entre em contato com a clínica.')
      setClinicLoading(false)
      return undefined
    }

    const controller = new AbortController()
    setClinicLoading(true)
    setClinicError('')

    requestAgendaVita({ action: 'info' }, controller.signal)
      .then((data) => {
        const activeProfessionals = Array.isArray(data.professionals)
          ? data.professionals.filter((professional) => professional.active !== false)
          : []
        setClinic(data.clinic || null)
        setProfessionals(activeProfessionals)
        if (activeProfessionals.length === 1) {
          setSelectedProfessionalId(String(activeProfessionals[0].id))
          if (activeProfessionals[0].specialty) setSpecialty(activeProfessionals[0].specialty)
        } else {
          setSelectedProfessionalId('')
          if (data.clinic?.specialty) setSpecialty(data.clinic.specialty)
        }
        if (activeProfessionals.length === 0) {
          setClinicError('Nenhum profissional está disponível para agendamento no momento. Entre em contato com a clínica.')
        }
      })
      .catch((error) => {
        if (error.name !== 'AbortError') setClinicError(error.message)
      })
      .finally(() => {
        if (!controller.signal.aborted) setClinicLoading(false)
      })

    return () => controller.abort()
  }, [])

  useEffect(() => {
    setSelectedTime('')
    setSlots([])
    setSlotsError('')
    if (!date || !selectedProfessionalId || !agendaVitaConfigured) {
      setSlotsLoading(false)
      return undefined
    }

    const controller = new AbortController()
    setSlotsLoading(true)
    requestAgendaVita({
      action: 'slots',
      date,
      professionalId: selectedProfessional?.id ?? selectedProfessionalId,
    }, controller.signal)
      .then((data) => {
        setSlots(Array.isArray(data.slots) ? data.slots : [])
      })
      .catch((error) => {
        if (error.name !== 'AbortError') setSlotsError(error.message)
      })
      .finally(() => {
        if (!controller.signal.aborted) setSlotsLoading(false)
      })

    return () => controller.abort()
  }, [date, selectedProfessionalId, selectedProfessional, slotsVersion])

  async function handleSubmit(event) {
    event.preventDefault()
    setFormError('')
    const formElement = event.currentTarget

    if (!selectedProfessionalId) {
      setFormError('Selecione um profissional para continuar.')
      return
    }
    if (!selectedTime) {
      setFormError('Selecione uma data e um horário disponível.')
      return
    }

    const formData = new FormData(formElement)
    const procedure = formData.get('procedure')
    const observations = String(formData.get('notes') || '').trim()
    const notes = [
      `Procedimento de interesse: ${procedure}`,
      observations ? `Observações: ${observations}` : '',
    ].filter(Boolean).join('\n')

    setSubmitting(true)
    try {
      const professionalId = selectedProfessional?.id ?? selectedProfessionalId
      const result = await requestAgendaVita({
        action: 'book',
        date,
        time: selectedTime,
        professionalId,
        specialty: formData.get('specialty'),
        notes,
        patient: {
          name: String(formData.get('name')).trim(),
          phone: String(formData.get('phone')).replace(/\D/g, ''),
          email: String(formData.get('email')).trim(),
          birthDate: formData.get('birthDate'),
          address: String(formData.get('address') || '').trim(),
        },
      })

      if (result.success !== true) {
        throw new Error(result.error || 'Não foi possível confirmar o agendamento. Tente novamente.')
      }
      setConfirmation({
        clinicName: result.clinicName || clinic?.name || 'Dra. Mariana Oliveira Costa',
        professionalName: selectedProfessional?.name,
        date,
        time: selectedTime,
      })
      formElement.reset()
      setDate('')
      setSelectedTime('')
    } catch (error) {
      setFormError(error.message)
      if (error.message === 'time_unavailable' || error.code === 'time_unavailable') {
        setSelectedTime('')
        setSlotsVersion((version) => version + 1)
      }
    } finally {
      setSubmitting(false)
    }
  }

  const handleProfessionalChange = (event) => {
    const nextId = event.target.value
    const nextProfessional = professionals.find((professional) => String(professional.id) === nextId)
    setSelectedProfessionalId(nextId)
    setSelectedTime('')
    setFormError('')
    if (nextProfessional?.specialty) setSpecialty(nextProfessional.specialty)
  }

  return (
    <section id="contato" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24" aria-labelledby="booking-title">
      <div className="mx-auto grid max-w-[1104px] overflow-hidden rounded-[24px] border border-[#e5e6e4] bg-white shadow-[0_22px_48px_-20px_rgba(24,29,32,0.28)] lg:min-h-[575px] lg:grid-cols-[42%_58%]">
        <aside className="flex flex-col bg-[#151a1c] px-8 py-10 text-white sm:px-12 sm:py-14">
          <p className="label-caps text-[10px] text-[#c4a273]">Agendamento fácil</p>
          <h2 id="booking-title" className="mt-3 font-serif text-[27px] leading-[1.2] text-white sm:text-[29px]">
            Agende sua Avaliação
          </h2>
          <p className="mt-4 max-w-[370px] text-[12px] leading-[1.65] text-white/55">
            Selecione a categoria de tratamento e o melhor horário. Nossa equipe responderá de imediato para confirmar o seu atendimento.
          </p>

          <ul className="mt-8 space-y-3 p-0 text-[12px] text-white/75">
            {[
              'Confirmação rápida do agendamento',
              'Avaliação detalhada com escaneamento',
              'Sem filas e com hora estritamente marcada',
            ].map((item) => (
              <li key={item} className="flex list-none items-center gap-3">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#10483c] text-[#42c7a0]">
                  <CheckMark />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-auto border-t border-white/10 pt-8">
            <p className="text-[10px] uppercase tracking-[0.09em] text-white/50">Contato direto / dúvidas</p>
            <p className="mt-2 font-serif text-[16px] text-white">
              (11) 99999-1234 <span className="font-sans text-[12px] text-[#31c99a]">• Online</span>
            </p>
          </div>
        </aside>

        <div className="px-6 py-8 sm:px-12 sm:py-10">
          <form onSubmit={handleSubmit} className="space-y-4" aria-busy={clinicLoading || slotsLoading || submitting}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className={labelClass}>
                Seu nome completo
                <input type="text" name="name" autoComplete="name" placeholder="Ex.: Carolina Silva" required className={fieldClass} />
              </label>
              <label className={labelClass}>
                WhatsApp de contato
                <input type="tel" name="phone" autoComplete="tel" inputMode="tel" placeholder="(11) 90000-0000" minLength={10} required className={fieldClass} />
              </label>
              <label className={labelClass}>
                E-mail
                <input type="email" name="email" autoComplete="email" placeholder="seu@email.com" required className={fieldClass} />
              </label>
              <label className={labelClass}>
                Data de nascimento
                <input type="date" name="birthDate" autoComplete="bday" max={today} required className={fieldClass} />
              </label>
              <label className={`${labelClass} sm:col-span-2`}>
                Endereço <span className="font-normal normal-case text-[#8b929e]">(opcional)</span>
                <input type="text" name="address" autoComplete="street-address" placeholder="Rua, número, bairro e cidade" className={fieldClass} />
              </label>
            </div>

            <div className={`grid grid-cols-1 gap-3 ${professionals.length > 1 ? 'sm:grid-cols-2' : ''}`}>
              {professionals.length !== 1 && <div className={labelClass}>
                Profissional
                {clinicLoading ? (
                  <p className="mt-1.5 flex h-[39px] items-center rounded-[9px] border border-[#d6d8d6] px-3 text-[12px] font-normal normal-case text-[#8b929e">Carregando profissionais…</p>
                ) : professionals.length === 1 ? (
                  <div className="mt-1.5 flex h-[39px] items-center rounded-[9px] border border-[#d6d8d6] bg-[#f9faf8] px-3 text-[12px] font-normal normal-case text-[#292e2c]">{professionals[0].name}</div>
                ) : (
                  <select name="professional" value={selectedProfessionalId} onChange={handleProfessionalChange} required className={fieldClass}>
                    <option value="" disabled>Selecione um profissional</option>
                    {professionals.map((professional) => (
                      <option key={professional.id} value={professional.id}>{professional.name}</option>
                    ))}
                  </select>
                )}
              </div>}
              <label className={labelClass}>
                Especialidade
                <select name="specialty" value={specialty} onChange={(event) => setSpecialty(event.target.value)} required className={fieldClass}>
                  {specialties.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              </label>
            </div>

            {clinic?.name && <p className="-mt-2 text-[10px] text-[#919592]">Agendamento para {clinic.name}</p>}

            <fieldset className="m-0 border-0 p-0">
              <legend className={stepClass}>1. Preferência de horário</legend>
              <label className={`${labelClass} max-w-[266px]`}>
                Selecione a data
                <input
                  type="date"
                  name="date"
                  min={today}
                  value={date}
                  onChange={(event) => { setDate(event.target.value); setFormError('') }}
                  required
                  className={fieldClass}
                />
              </label>

              {!selectedProfessionalId && !clinicLoading && (
                <p className="mt-2 text-[11px] text-[#858a87]">Selecione um profissional para consultar os horários.</p>
              )}
              {slotsLoading && <p className="mt-2 text-[11px] text-primary" role="status">Buscando horários disponíveis…</p>}
              {slotsError && <p className="mt-2 text-[11px] text-[#a4493e]" role="alert">{slotsError}</p>}
              {date && selectedProfessionalId && !slotsLoading && !slotsError && slots.length === 0 && (
                <p className="mt-2 text-[11px] text-[#858a87]">Não há horários disponíveis nesta data. Escolha outra data.</p>
              )}
              {slots.length > 0 && !slotsLoading && (
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4" role="group" aria-label="Horários disponíveis">
                  {slots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      aria-pressed={selectedTime === time}
                      onClick={() => { setSelectedTime(time); setFormError('') }}
                      className={`flex min-h-[35px] items-center justify-center rounded-[9px] border px-2 text-[11px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${selectedTime === time ? 'border-[#171b1d] bg-[#171b1d] text-white' : 'border-[#dedfdd] bg-white text-[#454947] hover:border-[#909895]'}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              )}
            </fieldset>

            <fieldset className="mt-4 border-0 p-0">
              <legend className={stepClass}>2. Escolha o procedimento de interesse</legend>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                {procedures.map((procedure, index) => (
                  <label key={procedure} className="cursor-pointer">
                    <input className="peer sr-only" type="radio" name="procedure" value={procedure} defaultChecked={index === 0} />
                    <span className="flex min-h-[35px] items-center justify-center rounded-[9px] border border-[#dedfdd] px-2 text-center text-[11px] leading-4 text-[#454947] transition-colors peer-checked:border-[#171b1d] peer-checked:bg-[#171b1d] peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary">
                      {procedure}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className={labelClass}>
              3. Observações ou queixa principal <span className="font-normal normal-case text-[#8b929e]">(opcional)</span>
              <textarea name="notes" rows={2} placeholder="Ex.: Gostaria de corrigir diastema e dentes apinhados" className="mt-1.5 min-h-[52px] w-full resize-y rounded-[9px] border border-[#d6d8d6] bg-white px-3 py-2 text-[12px] font-normal normal-case tracking-normal text-[#292e2c] placeholder:text-[#8b929e] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15" />
            </label>

            {clinicError && <p className="text-[11px] leading-4 text-[#a4493e]" role="alert">{clinicError}</p>}
            {formError && <p className="text-[11px] leading-4 text-[#a4493e]" role="alert">{formError}</p>}

            <button type="submit" disabled={submitting || clinicLoading || Boolean(clinicError)} className="flex min-h-[46px] w-full items-center justify-center gap-2 rounded-[9px] bg-[#171b1d] px-4 text-center text-[11px] font-semibold uppercase tracking-[0.075em] text-white shadow-md transition-colors hover:bg-[#293332] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-primary disabled:cursor-wait disabled:opacity-60">
              {submitting ? 'Confirmando agendamento…' : 'Agendar'} <span aria-hidden="true">→</span>
            </button>
            <p className="text-center text-[10px] leading-4 text-[#a5a7a5]">
              Seus dados serão tratados com estrita confidencialidade profissional médica.
            </p>
          </form>
        </div>
      </div>

      {confirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#121619]/55 p-5 backdrop-blur-sm" role="presentation">
          <div role="dialog" aria-modal="true" aria-labelledby="booking-success-title" className="w-full max-w-[440px] rounded-2xl bg-white p-7 text-center shadow-modal sm:p-9">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary-surface text-primary"><CheckMark /></span>
            <h2 id="booking-success-title" className="mt-5 font-serif text-[28px] text-[#202426]">Agendamento confirmado</h2>
            <p className="mt-3 text-[14px] leading-6 text-[#60676d]">
              Sua avaliação em <strong>{confirmation.clinicName}</strong> está marcada para {new Date(`${confirmation.date}T12:00:00`).toLocaleDateString('pt-BR')} às {confirmation.time}.
              {confirmation.professionalName ? ` Profissional: ${confirmation.professionalName}.` : ''}
            </p>
            <button type="button" onClick={() => setConfirmation(null)} className="mt-7 min-h-11 rounded-full bg-primary px-7 text-[12px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-primary-dark focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-primary">
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Booking
