import { Link } from 'react-router'

function TreatmentCard({
  image,
  imageAlt = 'Dentista apresentando um alinhador transparente',
  badge = 'Mais procurado',
  title = 'Alinhadores Transparentes',
  description = 'Aparelhos invisíveis com tecnologia e mapeamento digital 3D. Estética discreta, conforto insuperável e liberdade durante as refeições e higiene diária.',
  href = '#contato',
  actionLabel = 'Saiba mais',
  audience = 'Adultos & Adolescentes',
}) {
  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-[16px] border border-[#e8e8e3] bg-white shadow-card">
      <div className="relative aspect-[1.405/1] shrink-0 overflow-hidden border-b border-[#d6d8d5]">
        <img
          src={image}
          alt={imageAlt}
          className="size-full object-cover"
          loading="lazy"
        />
        {badge && (
          <span className="absolute right-4 top-4 rounded-full bg-[#252a2a]/90 px-3 py-1.5 text-[10px] font-semibold uppercase leading-none tracking-[0.08em] text-white">
            {badge}
          </span>
        )}
      </div>

      <div className="flex min-h-[201px] flex-1 flex-col px-6 pb-5 pt-6">
        <h2 className="font-serif text-[18px] font-normal leading-6 text-[#202624]">
          {title}
        </h2>
        <p className="mt-2 min-h-[60px] text-[12px] leading-[1.65] text-[#777b79]">
          {description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-[#eceeeb] pt-5">
          <Link
            to={href}
            className="whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.04em] text-primary no-underline transition-colors hover:text-primary-dark focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            {actionLabel} <span aria-hidden="true">→</span>
          </Link>
          <span className="text-right text-[11px] leading-4 text-[#a2a5a3]">
            {audience}
          </span>
        </div>
      </div>
    </article>
  )
}

export default TreatmentCard
