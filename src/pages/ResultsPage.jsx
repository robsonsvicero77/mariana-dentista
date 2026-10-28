import patient01 from '../assets/resultado-paciente-01.jpg'
import patient02 from '../assets/resultado-paciente-02.jpg'
import patient03 from '../assets/paciente_depois.png'
import patient04 from '../assets/resultado-paciente-04.jpg'
import Booking from '../components/Booking.jsx'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import PageCTA from '../components/PageCTA.jsx'

const resultExamples = [
  { id: 'case-01', name: 'Marcos da Silva', image: patient01, alt: 'Retrato de pessoa sorrindo' },
  { id: 'case-02', name: 'Márcia Santos', image: patient02, alt: 'Retrato de mulher sorrindo' },
  { id: 'case-03', name: 'Marta Cruz', image: patient03, alt: 'Retrato de mulher sorrindo' },
  { id: 'case-04', name: 'Rodrigo Jordan', image: patient04, alt: 'Sorriso em close' },
]

function ResultsPage() {
  return (
    <>
      <div className="relative">
        <Header />
        <main>
          <section className="bg-[#171b1d] px-5 pb-16 pt-36 text-white sm:px-8 sm:pb-20 sm:pt-40 lg:px-20" aria-labelledby="results-page-title">
            <div className="mx-auto max-w-[1280px]">
              <p className="label-caps text-[11px] text-[#c4a273]">Histórias de sorriso</p>
              <h1 id="results-page-title" className="mt-4 max-w-[850px] font-serif text-[42px] leading-[1.12] text-white sm:text-[56px]">
                Resultados construídos com cuidado.
              </h1>
              <p className="mt-5 max-w-[690px] text-[15px] leading-7 text-white/70 sm:text-[16px]">
                Cada sorriso tem uma história e um plano individual. Conheça alguns sorrisos que inspiram nosso cuidado.
              </p>
            </div>
          </section>

          <section className="bg-[#f3f1ed] px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24" aria-labelledby="results-gallery-title">
            <div className="mx-auto max-w-[1280px]">
              <header className="mb-10 max-w-[700px]">
                <p className="label-caps text-[11px] text-primary">Sorrisos</p>
                <h2 id="results-gallery-title" className="mt-3 font-serif text-[34px] leading-tight text-[#202426] sm:text-[42px]">
                  Um cuidado pensado para cada pessoa.
                </h2>
              </header>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
                {resultExamples.map((example) => (
                  <article key={example.id} className="overflow-hidden rounded-2xl border border-[#e8e8e3] bg-white shadow-card">
                    <div className="aspect-[4/3] overflow-hidden bg-[#e7e8e6]">
                      <img src={example.image} alt={example.alt} className="size-full object-cover" loading="lazy" />
                    </div>
                    <div className="flex justify-center px-5 py-4">
                      <h3 className="font-serif text-[18px] leading-6 text-[#202426]">{example.name}</h3>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <PageCTA
            eyebrow="Seu sorriso, seu plano"
            title="Vamos conversar sobre seus objetivos?"
            description="Agende uma avaliação para conhecer as possibilidades de tratamento para o seu caso."
            actionLabel="Agendar avaliação"
            to="#contato"
          />
          <Booking />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default ResultsPage
