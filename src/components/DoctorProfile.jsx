import doctorAvatar from '../assets/avatar_mariana.png'
import clinicImage from '../assets/consultorio_santana.png'

function DoctorProfile() {
  return (
    <section id="especialista" className="bg-[#faf9f7] px-5 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-24 lg:px-20" aria-labelledby="doctor-profile-title">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <p className="label-caps text-[11px] text-primary">Responsável técnica</p>
          <h2 id="doctor-profile-title" className="mt-2 font-serif text-[36px] leading-[1.2] text-[#202426] sm:text-[44px]">
            Conheça a Especialista
          </h2>

          <div className="mt-7 size-[176px] rounded-full border-[5px] border-white bg-white p-[3px] shadow-[0_0_0_2px_#c1cec8,0_8px_16px_rgba(24,29,32,0.14)]">
            <img
              src={doctorAvatar}
              alt="Dra. Mariana Oliveira"
              className="size-full rounded-full object-cover"
              loading="lazy"
            />
          </div>

          <h3 className="mt-6 font-serif text-[22px] leading-7 text-[#202426]">
            Dra. Mariana Oliveira
          </h3>
          <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.055em] text-primary">
            Cirurgiã-dentista • CRO-SP 108.492
          </p>
          <p className="mt-5 max-w-[680px] text-[14px] leading-[1.6] text-[#777b79]">
            Graduada pela Universidade de São Paulo (USP) com título de Especialista em Ortodontia e Ortopedia Facial dos Maxilares. Dedicada ao diagnóstico criterioso de más oclusões e ao emprego de mecânicas de ponta através de alinhadores transparentes e aparelhos estéticos, unindo precisão biológica e sensibilidade estética.
          </p>

          <ul className="mt-6 flex max-w-[760px] flex-wrap items-center justify-center gap-3 p-0 text-[11px] text-[#31574d]">
            <li className="list-none rounded-full bg-[#e8f0ed] px-4 py-2">Ortodontista Credenciada Invisalign® Doctor</li>
            <li className="list-none rounded-full bg-[#e8f0ed] px-4 py-2">Ortopedia Funcional dos Maxilares</li>
            <li className="list-none rounded-full bg-[#e8f0ed] px-4 py-2">Membro da ABOR (Associação Brasileira de Ortodontia)</li>
          </ul>
        </div>

        <figure className="relative mt-16 h-[490px] overflow-hidden rounded-[24px] shadow-[0_16px_28px_-15px_rgba(24,29,32,0.38)] sm:mt-20 sm:h-[400px]">
          <img
            src={clinicImage}
            alt="Atendimento odontológico no consultório de Santana"
            className="size-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111715]/60 via-[#111715]/25 to-[#111715]/90 sm:bg-gradient-to-t sm:from-[#111715]/85 sm:via-[#111715]/20 sm:to-transparent" aria-hidden="true" />
          <figcaption className="absolute bottom-6 left-5 right-5 flex flex-col text-white sm:bottom-8 sm:left-8 sm:right-8">
            <div><p className="label-caps text-[10px] text-[#FFFFFF] sm:text-[#c9a873]">Cuidado e humanização</p>
            <blockquote className="mt-2 max-w-[700px] font-serif text-[21px] leading-[1.25] text-white sm:text-[28px]">
              “Cuidado dedicado em cada detalhe, do primeiro acolhimento à retirada do aparelho.”
            </blockquote>
            <p className="mt-3 max-w-[620px] text-[12px] leading-[1.6] text-white/75">
              Nossa equipe e instalações em Santana foram planejadas para garantir consultas pontuais, sem filas e com tempo exclusivo para você tirar dúvidas.
            </p>
            </div>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contato"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#202526] no-underline transition-colors hover:bg-[#f0f5f2] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
              >
                Agendar avaliação
              </a>
              <a
                href="https://wa.me/5511999991234?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20uma%20avalia%C3%A7%C3%A3o."
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/55 bg-white/5 px-6 text-[10px] font-semibold uppercase tracking-[0.08em] text-white no-underline transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
              >
                Conversar no WhatsApp
              </a>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default DoctorProfile

