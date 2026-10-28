import Booking from '../components/Booking.jsx'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import PageCTA from '../components/PageCTA.jsx'

const address = 'Rua Voluntários da Pátria, 2820, Conjunto 82, Santana, São Paulo - SP, CEP 02401-100'
const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`

function ContactPage() {
  return (
    <>
      <div className="relative">
        <Header />
        <main>
          <section className="bg-[#171b1d] px-5 pb-16 pt-36 text-white sm:px-8 sm:pb-20 sm:pt-40 lg:px-20" aria-labelledby="contact-page-title">
            <div className="mx-auto max-w-[1280px]">
              <p className="label-caps text-[11px] text-[#c4a273]">Estamos por aqui</p>
              <h1 id="contact-page-title" className="mt-4 max-w-[860px] font-serif text-[42px] leading-[1.12] text-white sm:text-[56px]">
                Seu próximo sorriso começa com uma conversa.
              </h1>
              <p className="mt-5 max-w-[690px] text-[15px] leading-7 text-white/70 sm:text-[16px]">
                Fale com nossa equipe ou venha conhecer o consultório em Santana. Será um prazer receber você.
              </p>
            </div>
          </section>

          <section className="bg-[#f3f1ed] px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24" aria-labelledby="contact-details-title">
            <div className="mx-auto max-w-[1280px]">
              <header className="mb-10 max-w-[700px]">
                <p className="label-caps text-[11px] text-primary">Contato e localização</p>
                <h2 id="contact-details-title" className="mt-3 font-serif text-[34px] leading-tight text-[#202426] sm:text-[42px]">
                  Um espaço acolhedor em Santana.
                </h2>
              </header>

              <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
                <div className="space-y-5">
                  <article className="rounded-2xl border border-[#e5e3de] bg-white p-6 shadow-card">
                    <h3 className="font-serif text-[21px] text-[#202426]">Endereço</h3>
                    <address className="mt-3 text-[14px] not-italic leading-6 text-[#626764]">
                      Rua Voluntários da Pátria, 2820<br />
                      Conjunto 82 — Santana<br />
                      São Paulo — SP, CEP 02401-100
                    </address>
                    <a href={`https://maps.google.com/?q=${encodeURIComponent(address)}`} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-[12px] font-semibold uppercase tracking-wide text-primary no-underline hover:underline">
                      Como chegar <span aria-hidden="true" className="ml-2">→</span>
                    </a>
                  </article>

                  <article className="rounded-2xl border border-[#e5e3de] bg-white p-6 shadow-card">
                    <h3 className="font-serif text-[21px] text-[#202426]">Fale com a equipe</h3>
                    <div className="mt-3 space-y-2 text-[14px] leading-6 text-[#626764]">
                      <p><span className="font-medium text-[#202426]">WhatsApp:</span> <a href="https://wa.me/5511999991234" className="text-inherit no-underline hover:text-primary">(11) 99999-1234</a></p>
                      <p><span className="font-medium text-[#202426]">E-mail:</span> <a href="mailto:contato@marianacostaorto.com.br" className="text-inherit no-underline hover:text-primary">contato@marianacostaorto.com.br</a></p>
                    </div>
                  </article>

                  <article className="rounded-2xl border border-[#e5e3de] bg-white p-6 shadow-card">
                    <h3 className="font-serif text-[21px] text-[#202426]">Horários</h3>
                    <dl className="mt-3 space-y-2 text-[13px] text-[#626764]">
                      <div className="flex justify-between gap-4"><dt>Segunda a sexta</dt><dd className="m-0 text-[#202426]">08:30–19:00</dd></div>
                      <div className="flex justify-between gap-4"><dt>Sábados</dt><dd className="m-0 text-[#202426]">08:30–13:00</dd></div>
                      <div className="flex justify-between gap-4"><dt>Domingos e feriados</dt><dd className="m-0">Fechado</dd></div>
                    </dl>
                  </article>
                </div>

                <div className="min-h-[360px] overflow-hidden rounded-2xl border border-[#e5e3de] bg-white shadow-card sm:min-h-[480px]">
                  <iframe
                    title="Mapa de localização do consultório em Santana"
                    src={mapUrl}
                    className="size-full min-h-[360px] border-0 sm:min-h-[480px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>

          <Booking />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default ContactPage
