import { Link } from 'react-router'
import treatments from '../data/treatments.js'
import TreatmentCard from './TreatmentCard.jsx'

const homeTreatmentSlugs = new Set([
  'alinhadores-transparentes',
  'aparelhos-fixos-modernos',
  'ortodontia-preventiva-infantil',
])

function TreatmentsSection() {
  return (
    <section id="tratamentos" className="bg-[#faf9f7] px-5 py-20 sm:px-8 sm:py-24 lg:px-20 lg:py-[100px]" aria-labelledby="treatments-title">
      <div className="mx-auto max-w-[1280px]">
        <header className="mx-auto max-w-[720px] text-center">
          <p className="label-caps text-[11px] text-primary">Especialidade &amp; precisão</p>
          <h2 id="treatments-title" className="mt-2 font-serif text-[36px] leading-[1.2] text-[#202426] sm:text-[44px]">
            Tratamentos Ortodônticos
          </h2>
          <p className="mx-auto mt-4 max-w-[660px] text-[14px] leading-[1.5] text-[#858785]">
            Planejamentos digitais individualizados para proporcionar estética facial, mastigação equilibrada e previsibilidade de resultados.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {treatments.filter((treatment) => homeTreatmentSlugs.has(treatment.slug)).map((treatment) => (
            <TreatmentCard key={treatment.slug} {...treatment} href={`/tratamentos/${treatment.slug}`} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/tratamentos"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#d8d9d6] bg-white px-6 text-center text-[11px] font-semibold uppercase tracking-[0.045em] text-[#424644] no-underline shadow-sm transition-colors hover:border-primary hover:bg-primary-surface focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-primary sm:px-7"
          >
            Ver todos os procedimentos ortodônticos <span aria-hidden="true">+</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TreatmentsSection
