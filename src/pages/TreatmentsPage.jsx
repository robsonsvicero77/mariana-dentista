import { Link } from 'react-router'
import treatments from '../data/treatments.js'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import PageCTA from '../components/PageCTA.jsx'
import TreatmentCard from '../components/TreatmentCard.jsx'

function TreatmentsPage() {
  return (
    <>
      <div className="relative">
        <Header />
        <main>
          <section className="bg-[#171b1d] px-5 pb-16 pt-36 text-white sm:px-8 sm:pb-20 sm:pt-40 lg:px-20" aria-labelledby="treatments-page-title">
            <div className="mx-auto max-w-[1280px]">
              <p className="label-caps text-[11px] text-[#c4a273]">Especialidade &amp; precisão</p>
              <h1 id="treatments-page-title" className="mt-4 max-w-[820px] font-serif text-[42px] leading-[1.12] text-white sm:text-[56px]">
                Tratamentos para cada etapa do seu sorriso.
              </h1>
              <p className="mt-5 max-w-[690px] text-[15px] leading-7 text-white/70 sm:text-[16px]">
                Conheça as opções de ortodontia e converse com a Dra. Mariana para entender qual abordagem pode fazer sentido para você ou sua família.
              </p>
            </div>
          </section>

          <section className="bg-[#f3f1ed] px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24" aria-labelledby="treatments-list-title">
            <div className="mx-auto max-w-[1280px]">
              <header className="mb-10 max-w-[700px]">
                <p className="label-caps text-[11px] text-primary">Opções de cuidado</p>
                <h2 id="treatments-list-title" className="mt-3 font-serif text-[34px] leading-tight text-[#202426] sm:text-[42px]">
                  Encontre o tratamento ideal para o seu momento.
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-[#60676d]">
                  Cada plano começa com uma avaliação individual. Veja um pouco sobre as possibilidades e acesse os detalhes de cada tratamento.
                </p>
              </header>

              <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {treatments.map((treatment) => (
                  <TreatmentCard key={treatment.slug} {...treatment} href={`/tratamentos/${treatment.slug}`} />
                ))}
              </div>
            </div>
          </section>

          <PageCTA
            eyebrow="O primeiro passo é uma conversa"
            title="Vamos descobrir o que funciona para você?"
            description="Agende uma avaliação para conversar sobre objetivos, opções e próximos passos."
            actionLabel="Agendar avaliação"
            to="/#contato"
          />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default TreatmentsPage
