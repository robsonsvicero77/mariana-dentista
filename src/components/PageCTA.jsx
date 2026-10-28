import { Link } from 'react-router'

function PageCTA({
  eyebrow = 'Seu próximo passo',
  title = 'Vamos cuidar do seu sorriso?',
  description = 'Agende uma avaliação e conheça um plano pensado para você.',
  actionLabel = 'Agendar avaliação',
  to = '/#contato',
}) {
  return (
    <section className="bg-[#335348] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-20" aria-labelledby="page-cta-title">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-[720px]">
          <p className="label-caps text-[11px] text-[#d5c09f]">{eyebrow}</p>
          <h2 id="page-cta-title" className="mt-3 font-serif text-[32px] leading-tight text-white sm:text-[40px]">{title}</h2>
          <p className="mt-3 text-[14px] leading-6 text-white/75">{description}</p>
        </div>
        <Link to={to} className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#202624] no-underline transition-colors hover:bg-[#f0f5f2] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#d5c09f]">
          {actionLabel}<span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}

export default PageCTA
