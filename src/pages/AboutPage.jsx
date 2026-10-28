import clinicImage from '../assets/consultorio_santana.png'
import doctorImage from '../assets/dra_mariana_costa.jpg'
import Booking from '../components/Booking.jsx'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import PageCTA from '../components/PageCTA.jsx'

function AboutPage() {
  return (
    <>
      <div className="relative">
        <Header />
        <main>
          <section className="bg-[#171b1d] px-5 pb-16 pt-36 text-white sm:px-8 sm:pb-20 sm:pt-40 lg:px-20" aria-labelledby="about-page-title">
            <div className="mx-auto max-w-[1280px]">
              <p className="label-caps text-[11px] text-[#c4a273]">Sobre o consultório</p>
              <h1 id="about-page-title" className="mt-4 max-w-[860px] font-serif text-[42px] leading-[1.12] text-white sm:text-[56px]">
                Ortodontia moderna, com cuidado próximo e personalizado.
              </h1>
              <p className="mt-5 max-w-[690px] text-[15px] leading-7 text-white/70 sm:text-[16px]">
                Um espaço acolhedor em Santana, dedicado a unir diagnóstico criterioso, tecnologia e sensibilidade estética em cada etapa do tratamento.
              </p>
            </div>
          </section>

          <section id="sobre-consultorio" className="bg-[#f3f1ed] px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24" aria-labelledby="about-clinic-title">
            <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
              <div>
                <p className="label-caps text-[11px] text-primary">Um consultório pensado para você</p>
                <h2 id="about-clinic-title" className="mt-4 font-serif text-[34px] leading-[1.15] text-[#202426] sm:text-[42px]">
                  Mais tranquilidade em cada visita.
                </h2>
                <div className="mt-6 space-y-5 text-[15px] leading-[1.75] text-[#555957] sm:text-[16px]">
                  <p>
                    Localizado estrategicamente em Santana, nosso consultório foi concebido para transformar a experiência da visita ao dentista. Criamos uma atmosfera tranquila e descontraída, onde cada paciente é ouvido com calma e cada detalhe do plano de tratamento é apresentado com total transparência.
                  </p>
                  <p>
                    Aliamos scanners intraorais, fotografias clínicas de alta definição e simulações digitais tridimensionais para planejar correções ortodônticas seguras e confortáveis, sob medida para a anatomia e o estilo de vida de cada pessoa.
                  </p>
                </div>
              </div>
              <figure className="relative m-0 min-h-[300px] overflow-hidden rounded-2xl shadow-card sm:min-h-[390px]">
                <img src={clinicImage} alt="Consultório odontológico em Santana" className="absolute inset-0 size-full object-cover" loading="lazy" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#121619]/80 to-transparent px-6 pb-6 pt-20 text-[12px] text-white/90">
                  Um ambiente acolhedor e equipado para um atendimento cuidadoso.
                </figcaption>
              </figure>
            </div>
          </section>

          <section className="bg-[#faf9f7] px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24" aria-labelledby="about-doctor-title">
            <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 md:grid-cols-[340px_minmax(0,1fr)] md:gap-16">
              <div className="mx-auto w-full max-w-[340px] overflow-hidden rounded-2xl shadow-card">
                <img src={doctorImage} alt="Dra. Mariana Oliveira Costa em seu consultório" className="aspect-[4/5] size-full object-cover" loading="lazy" />
              </div>
              <div>
                <p className="label-caps text-[11px] text-primary">Responsável técnica</p>
                <h2 id="about-doctor-title" className="mt-3 font-serif text-[34px] leading-[1.15] text-[#202426] sm:text-[42px]">
                  Dra. Mariana Oliveira Costa
                </h2>
                <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.055em] text-primary">Cirurgiã-dentista • CRO-SP 108.492</p>
                <div className="mt-5 space-y-4 text-[15px] leading-[1.75] text-[#555957] sm:text-[16px]">
                  <p>
                    Graduada pela Universidade de São Paulo (USP), com especialização em Ortodontia e Ortopedia Facial dos Maxilares, Dra. Mariana dedica-se ao diagnóstico criterioso das más oclusões e a tratamentos alinhados às necessidades de cada paciente.
                  </p>
                  <p>
                    Com alinhadores transparentes e aparelhos estéticos, une precisão biológica e sensibilidade estética para buscar equilíbrio facial, conforto e resultados naturais. Seu trabalho combina rigor científico com acolhimento humano, acompanhando cada pessoa com clareza e atenção.
                  </p>
                </div>
                <div className="mt-7 grid grid-cols-2 gap-6 border-t border-[#e2e2d8] pt-6">
                  <div>
                    <p className="font-serif text-[30px] leading-none text-[#202426]">10+</p>
                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-[#777b79]">Anos de prática odontológica</p>
                  </div>
                  <div>
                    <p className="font-serif text-[30px] leading-none text-[#202426]">1.500+</p>
                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-[#777b79]">Sorrisos transformados</p>
                  </div>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2 p-0 text-[11px] text-[#31574d]">
                  <li className="list-none rounded-full bg-[#e8f0ed] px-4 py-2">Ortodontista Credenciada Invisalign® Doctor</li>
                  <li className="list-none rounded-full bg-[#e8f0ed] px-4 py-2">Ortopedia Funcional dos Maxilares</li>
                  <li className="list-none rounded-full bg-[#e8f0ed] px-4 py-2">Membro da ABOR</li>
                </ul>
              </div>
            </div>
          </section>

          <PageCTA
            eyebrow="Uma conversa pode ser o começo"
            title="Vamos planejar seu sorriso juntos?"
            description="Agende uma avaliação e conheça as opções de tratamento para o seu caso."
            actionLabel="Agendar consulta"
            to="#contato"
          />
          <Booking />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage
