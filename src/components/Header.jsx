import { useState } from 'react'
import { Link } from 'react-router'

const navigation = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Tratamentos', href: '/tratamentos' },
  { label: 'Resultados', href: '/resultados' },
  { label: 'Contato', href: '/contato' },
  { label: 'Blog', href: '/blog' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-20 w-full border-b border-white/10 bg-[#202526]/85 text-white backdrop-blur-sm">
      <div className="mx-auto flex min-h-16 max-w-[1440px] sm:min-h-20 items-center justify-between gap-3 px-4 sm:gap-8 sm:px-10 lg:px-20">
        <Link
          to="/#inicio"
          className="flex shrink-0 items-center gap-2 no-underline sm:gap-3"
          aria-label="Dra. Mariana Oliveira, início"
        >
          <span className="flex flex-col gap-0.5">
            <span className="whitespace-nowrap text-[11px] font-medium uppercase leading-tight tracking-[0.07em] sm:text-[19px] sm:tracking-[0.09em] text-[#FFFFFF]/90">
              Dra. Mariana Oliveira
            </span>
            <span className="label-caps text-[8px] text-[#bfa882] sm:text-[10px]">
              Ortodontia especializada
            </span>
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 xl:flex">
          {navigation.map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              className="whitespace-nowrap text-[12px] font-medium uppercase tracking-[0.09em] text-white/80 no-underline transition-colors hover:text-[#bfa882] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bfa882]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contato#contato"
          className="hidden min-h-10 shrink-0 items-center justify-center rounded-full bg-white px-7 text-[11px] font-semibold uppercase tracking-[0.04em] text-[#202526] no-underline transition-colors hover:bg-[#f0f5f2] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#bfa882] xl:inline-flex"
        >
          
          Agendar consulta
        </Link>
        <button
          type="button"
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#bfa882] xl:hidden"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
            {menuOpen ? (
              <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Navegação principal" className="absolute inset-x-0 top-full border-t border-white/10 bg-[#202526]/95 px-5 pb-6 pt-3 shadow-xl backdrop-blur-md xl:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col">
            {navigation.map(({ label, href }) => (
              <Link key={href} to={href} onClick={() => setMenuOpen(false)} className="border-b border-white/10 py-3.5 text-[12px] font-medium uppercase tracking-[0.09em] text-white/85 no-underline transition-colors hover:text-[#bfa882]">{label}</Link>
            ))}
            <Link to="/contato#contato" onClick={() => setMenuOpen(false)} className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 text-[11px] font-semibold uppercase tracking-[0.07em] text-[#202526] no-underline transition-colors hover:bg-[#f0f5f2]">Agendar</Link>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header





