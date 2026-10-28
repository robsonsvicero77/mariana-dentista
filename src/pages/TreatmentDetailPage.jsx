import { Link, useParams } from 'react-router'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import PageCTA from '../components/PageCTA.jsx'
import treatments from '../data/treatments.js'

function TreatmentDetailPage() {
  const { slug } = useParams()
  const treatment = treatments.find((item) => item.slug === slug)

  if (!treatment) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 flex-col items-center justify-center px-6 pt-24 text-center">
          <p className="label-caps text-primary">Tratamento não encontrado</p>
          <h1 className="mt-3 font-serif text-4xl text-[#202426]">Veja todas as opções disponíveis.</h1>
          <Link to="/tratamentos" className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white no-underline hover:bg-primary-dark">Ver tratamentos</Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <>
      <div className="relative">
        <Header />
        <main>
          <section className="bg-[#171b1d] px-5 pb-16 pt-36 text-white sm:px-8 sm:pb-20 sm:pt-40 lg:px-20" aria-labelledby="treatment-detail-title">
            <div className="mx-auto max-w-[1280px]">
              <Link to="/tratamentos" className="text-[11px] uppercase tracking-[0.08em] text-white/60 no-underline hover:text-white">← Todos os tratamentos</Link>
              <p className="label-caps mt-8 text-[11px] text-[#c4a273]">Tratamento ortodôntico</p>
              <h1 id="treatment-detail-title" className="mt-4 max-w-[850px] font-serif text-[42px] leading-[1.12] text-white sm:text-[56px]">
                {treatment.title}
              </h1>
              <p className="mt-5 max-w-[730px] text-[15px] leading-7 text-white/70 sm:text-[16px]">
                {treatment.intro}
              </p>
            </div>
          </section>

          <section className="bg-[#f3f1ed] px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24" aria-labelledby="treatment-overview-title">
            <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1fr] lg:gap-16">
              <figure className="relative m-0 min-h-[300px] overflow-hidden rounded-2xl shadow-card sm:min-h-[420px]">
                <img src={treatment.image} alt={treatment.imageAlt} className="absolute inset-0 size-full object-cover" loading="lazy" />
                {treatment.badge && <figcaption className="absolute right-5 top-5 rounded-full bg-[#252a2a]/85 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-white">{treatment.badge}</figcaption>}
              </figure>
              <div>
                <p className="label-caps text-[11px] text-primary">Como funciona</p>
                <h2 id="treatment-overview-title" className="mt-3 font-serif text-[34px] leading-tight text-[#202426] sm:text-[42px]">
                  Um plano acompanhado em cada etapa.
                </h2>
                <p className="mt-5 text-[15px] leading-7 text-[#555957] sm:text-[16px]">{treatment.howItWorks}</p>
                <ul className="mt-6 space-y-3 p-0 text-[14px] leading-6 text-[#555957]">
                  {treatment.points.map((point) => (
                    <li key={point} className="flex list-none gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-[#faf9f7] px-5 py-14 sm:px-8 sm:py-16 lg:px-20" aria-label="Orientação sobre indicação">
            <div className="mx-auto max-w-[960px] rounded-2xl border border-[#e2e2d8] bg-white px-6 py-6 sm:px-8">
              <p className="text-[14px] leading-7 text-[#60676d]">{treatment.note}</p>
            </div>
          </section>

          <PageCTA
            eyebrow="Converse com a especialista"
            title="Quer saber se este tratamento é indicado para você?"
            description="Uma avaliação individual é o melhor caminho para esclarecer dúvidas e conhecer as possibilidades."
            actionLabel="Agendar avaliação"
            to="/#contato"
          />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default TreatmentDetailPage
