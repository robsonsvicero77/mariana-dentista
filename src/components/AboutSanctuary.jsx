import doctorImage from '../assets/dra_mariana_costa.jpg'

function AboutSanctuary() {
  return (
    <section id="sobre" className="bg-[#f3f1ed] px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24" aria-labelledby="about-title">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.7fr_1fr] lg:gap-12">
        <figure className="relative m-0 h-[460px] overflow-hidden rounded-2xl shadow-[0_20px_35px_-18px_rgba(24,29,32,0.42)] sm:h-[520px]">
          <img
            src={doctorImage}
            alt="Dra. Mariana Oliveira em seu consultório"
            className="size-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#171512]/75 via-[#171512]/25 to-transparent" aria-hidden="true" />
          <figcaption className="absolute inset-x-6 bottom-6 rounded-xl border border-white/25 bg-[#302b26]/55 px-4 py-4 text-white backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:px-5 sm:py-4">
            <blockquote className="font-serif text-[14px] italic leading-6 text-white/95">
              “Harmonia e saúde começam com um sorriso bem cuidado e acompanhamento individualizado.”
            </blockquote>
            <p className="label-caps mt-2 text-[10px] text-[#d2b489]">Dra. Mariana Oliveira</p>
          </figcaption>
        </figure>

        <div className="py-2 lg:py-0">
          <p className="label-caps text-[11px] text-primary">Sobre o consultório</p>
          <h2 id="about-title" className="mt-6 max-w-[720px] font-serif text-[34px] leading-[1.12] text-[#202426] sm:text-[42px]">
            Um espaço acolhedor dedicado à <em className="font-normal">Ortodontia Moderna</em>
          </h2>
          <div className="mt-6 space-y-6 text-[15px] leading-6 text-[#555957] sm:text-[16px]">
            <p>
              Localizado estrategicamente em Santana, nosso consultório foi concebido para transformar a experiência da visita ao dentista. Criamos uma atmosfera tranquila e descontraída, onde o paciente é ouvido com calma e cada detalhe do plano de tratamento é apresentado com total transparência.
            </p>
            <p>
              Aliamos scanners intraorais, fotografias clínicas de alta definição e simulações digitais tridimensionais para proporcionar correções ortodônticas seguras, confortáveis e sob medida para a sua anatomia e estilo de vida.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-6 border-t border-[#d8d7d2] pt-7 sm:gap-10">
            <div>
              <p className="font-serif text-[30px] font-semibold leading-none text-[#202426]">10+</p>
              <p className="mt-2 text-[11px] font-semibold uppercase leading-4 tracking-[0.02em] text-[#777b79]">Anos de prática odontológica</p>
            </div>
            <div>
              <p className="font-serif text-[30px] font-semibold leading-none text-[#202426]">1.500+</p>
              <p className="mt-2 text-[11px] font-semibold uppercase leading-4 tracking-[0.02em] text-[#777b79]">Sorrisos transformados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSanctuary
