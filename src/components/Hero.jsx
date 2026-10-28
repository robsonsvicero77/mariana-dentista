import heroImage from '../assets/Hero_consultorio.png'

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-4 shrink-0 text-bronze">
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-4 shrink-0 text-bronze">
      <path d="M7.2 3.8h2.2l1.2 4.1-1.8 1.5a15.3 15.3 0 0 0 5.8 5.8l1.5-1.8 4.1 1.2v2.2c0 1.1-.9 2-2 2A15.2 15.2 0 0 1 5.2 5.8c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  )
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[720px] h-svh max-h-[900px] items-center overflow-hidden text-white" aria-labelledby="hero-title">
      <img
        src={heroImage}
        alt="Dra. Mariana em seu consultório odontológico"
        className="absolute inset-0 -z-20 size-full object-cover object-right"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-[#121918]/20" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#121918]/30 via-[#121918]/10 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#121918]/10 via-transparent to-[#121918]/25" aria-hidden="true" />

      <div className="mx-auto w-full max-w-[1440px] px-5 pb-8 pt-24 sm:px-10 lg:px-20">
        <div className="max-w-[870px] text-center">
          <h1 id="hero-title" className="font-serif text-[clamp(2.5rem,5.1vw,4rem)] font-normal leading-[1.12] tracking-[-0.035em] text-white">
            Acreditamos que todos merecem
            <br className="hidden sm:block" /> um{' '}
            <em className="font-normal">sorriso que amem.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-[690px] text-[15px] leading-[1.65] text-white/85 sm:text-[17px]">
            Ortodontia contemporânea com alinhadores transparentes e aparelhos estéticos. Diagnóstico com rigor científico e acolhimento humano na Zona Norte de São Paulo.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#contato"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 text-[11px] font-semibold uppercase tracking-[0.07em] text-[#202526] no-underline transition-colors hover:bg-[#f0f5f2] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-bronze sm:min-w-[214px]"
            >
              Agendar avaliação
            </a>
            <a
              href="#tratamentos"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/50 bg-white/5 px-7 text-[11px] font-semibold uppercase tracking-[0.07em] text-white no-underline backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-bronze sm:min-w-[264px]"
            >
              Conhecer tratamentos <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="mx-auto mt-14 flex max-w-[870px] flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/20 px-2 pt-5 text-[11px] text-white/80 sm:gap-x-8 sm:text-xs">
            <a href="https://maps.google.com/?q=Rua+Volunt%C3%A1rios+da+P%C3%A1tria%2C+2820%2C+Santana%2C+S%C3%A3o+Paulo" className="inline-flex items-center gap-2 text-inherit no-underline transition-colors hover:text-white">
              <PinIcon />
              <span>Rua Voluntários da Pátria, 2820 — Santana, São Paulo - SP</span>
            </a>
            <a href="tel:+5511999991234" className="inline-flex items-center gap-2 text-inherit no-underline transition-colors hover:text-white">
              <PhoneIcon />
              <span>(11) 99999-1234</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
