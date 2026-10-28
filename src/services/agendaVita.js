const apiUrl = import.meta.env.VITE_AGENDA_VITA_API_URL
const apiKey = import.meta.env.VITE_AGENDA_VITA_ANON_KEY
export const clinicSlug = import.meta.env.VITE_AGENDA_VITA_CLINIC_SLUG

export const agendaVitaConfigured = Boolean(apiUrl && apiKey && clinicSlug)

export async function requestAgendaVita(payload, signal) {
  if (!agendaVitaConfigured) {
    throw new Error('A configuração do agendamento está incompleta. Confira as variáveis VITE_AGENDA_VITA no ambiente.')
  }

  let response
  try {
    response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        apikey: apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slug: clinicSlug, ...payload }),
      signal,
    })
  } catch (error) {
    if (error.name === 'AbortError') throw error
    throw new Error('Não foi possível conectar ao sistema de agendamento. Verifique sua conexão e tente novamente.')
  }

  let data
  try {
    data = await response.json()
  } catch {
    throw new Error('O sistema de agendamento retornou uma resposta inválida. Tente novamente em instantes.')
  }

  if (!response.ok || data?.error) {
    const errorCode = typeof data?.error === 'string' ? data.error : undefined
    const friendlyMessages = {
      time_unavailable: 'Esse horário acabou de ficar indisponível. Atualizamos as opções; escolha outro horário.',
      professional_has_no_schedule_configuration: 'A agenda deste profissional ainda não está configurada. Entre em contato com a clínica para solicitar um horário.',
    }
    const message = friendlyMessages[errorCode]
      || (errorCode ? 'Não foi possível concluir a solicitação. Tente novamente.' : data?.message)
      || 'Não foi possível concluir a solicitação. Tente novamente.'
    const error = new Error(message)
    error.code = errorCode
    throw error
  }

  return data
}
