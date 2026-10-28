import { Link } from 'react-router'

const footerNavigation = [
  ['Início', '/#inicio'],
  ['Sobre o Consultório', '/sobre#sobre-consultorio'],
  ['Alinhadores & Aparelhos', '/tratamentos'],
  ['Dra. Mariana Oliveira', '/#especialista'],
  ['Antes e Depois', '/resultados'],
  ['Agendamento Online', '/contato#contato'],
  ['Blog', '/blog'],
]

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-[18px]">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.6" cy="6.7" r="1" fill="currentColor" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-[18px]">
      <path d="M20 11.7a8 8 0 0 1-11.8 7l-4.2 1.1 1.1-4.1A8 8 0 1 1 20 11.7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 8.2c.2-.4.4-.4.7-.4h.4c.2 0 .3.1.4.4l.6 1.4c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.3 0 .6.5.9 1.2 1.6 2.1 2.1.3.2.5.2.7-.1l.6-.7c.2-.2.4-.2.6-.1l1.3.6c.3.1.4.2.4.4 0 .2-.1.8-.5 1.1-.4.4-1 .6-1.6.6-.5 0-1.2-.2-2.1-.6a8.1 8.1 0 0 1-3.4-3c-.7-1-.9-1.8-.9-2.4 0-.6.3-1.2.7-1.5Z" fill="currentColor" />
    </svg>
  )
}

function Footer() {
  return (
    <footer className="bg-[#171b1d] text-[#a5a7a7]">
      <div className="mx-auto max-w-[1280px] px-5 pb-8 pt-12 sm:px-8 sm:pt-16 lg:px-0">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.05fr_1fr_1.05fr_1fr] lg:gap-12">
          <section aria-labelledby="footer-brand">
            <h2 id="footer-brand" className="font-sans text-[18px] font-medium uppercase leading-tight tracking-[0.08em] text-white">
              Dra. Mariana Oliveira
            </h2>
            <p className="label-caps mt-1 text-[10px] text-[#bfa882]">Ortodontia especializada</p>
            <p className="mt-4 max-w-[280px] text-[12px] leading-[1.65]">
              Excelência no diagnóstico e tratamento de desalinhamentos dentais e harmonia do sorriso com acolhimento em Santana, Zona Norte de São Paulo.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="https://www.instagram.com/" aria-label="Instagram" className="flex size-8 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#bfa882] hover:text-[#bfa882]">
                <InstagramIcon />
              </a>
              <a href="https://wa.me/5511999991234" aria-label="WhatsApp" className="flex size-8 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#bfa882] hover:text-[#bfa882]">
                <WhatsAppIcon />
              </a>
            </div>
          </section>

          <section aria-labelledby="footer-navigation">
            <h2 id="footer-navigation" className="label-caps text-[12px] text-white">Navegação</h2>
            <ul className="mt-3 space-y-1.5 text-[12px]">
              {footerNavigation.map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="text-inherit no-underline transition-colors hover:text-white">{label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-contact">
            <h2 id="footer-contact" className="label-caps text-[12px] text-white">Contato &amp; localização</h2>
            <address className="mt-3 space-y-1.5 text-[12px] not-italic leading-[1.65]">
              <p>Rua Voluntários da Pátria, 2820 — Conjunto 82</p>
              <p>Santana, São Paulo — SP, CEP 02401-100</p>
              <p className="mt-2 text-white">
                WhatsApp: <a href="tel:+5511999991234" className="text-inherit no-underline hover:text-[#bfa882]">(11) 99999-1234</a>
              </p>
              <p>E-mail: <a href="mailto:contato@marianaoliveiraorto.com.br" className="text-inherit no-underline hover:text-[#bfa882]">contato@marianaoliveiraorto.com.br</a></p>
              <p className="pt-1 text-[#bfa882]">CRO-SP: 108.492</p>
            </address>
          </section>

          <section aria-labelledby="footer-hours">
            <h2 id="footer-hours" className="label-caps text-[12px] text-white">Horários de atendimento</h2>
            <dl className="mt-3 space-y-1.5 text-[12px]">
              <div className="flex justify-between gap-4"><dt>Segunda a Sexta</dt><dd className="m-0 whitespace-nowrap text-white">08:30 – 19:00</dd></div>
              <div className="flex justify-between gap-4"><dt>Sábados</dt><dd className="m-0 whitespace-nowrap text-white">08:30 – 13:00</dd></div>
              <div className="flex justify-between gap-4"><dt>Domingos e Feriados</dt><dd className="m-0 whitespace-nowrap text-[#777d7d]">Fechado</dd></div>
            </dl>
            <p className="mt-5 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-3 text-[11px] leading-[1.5]">
              Estacionamento conveniado no próprio edifício com serviço de manobrista.
            </p>
          </section>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-[10px] text-[#737879] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Dra. Mariana Oliveira — Ortodontia. Todos os direitos reservados.</p>
          <nav aria-label="Links legais" className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#privacidade" className="text-inherit no-underline hover:text-white">Política de Privacidade</a>
            <a href="#termos" className="text-inherit no-underline hover:text-white">Termos de Atendimento</a>
            <span>Santana • São Paulo</span>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
