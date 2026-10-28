import BeforeAfterSlider from 'react-before-after-slider-component'
import 'react-before-after-slider-component/dist/build.css'
import beforeImage from '../assets/paciente_antes.png'
import afterImage from '../assets/paciente_depois.png'

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-[17px]">
      <path d="M12 3.5 19 6v5.2c0 4.5-3 7.8-7 9.3-4-1.5-7-4.8-7-9.3V6l7-2.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="m9 11.8 2 2 4-4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-[17px]">
      <path d="m5 12.5 4.3 4.2L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const initialImage = {
  imageUrl: afterImage,
  alt: 'Sorriso após o tratamento ortodôntico',
}

const finalImage = {
  imageUrl: beforeImage,
  alt: 'Sorriso antes do tratamento ortodôntico',
}

function SmileTransformationShowcase() {
  return (
    <section id="resultados" className="bg-[#171b1d] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-20 lg:py-[86px]" aria-labelledby="transformation-title">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-10 lg:grid-cols-[0.7fr_1fr] lg:gap-12">
        <div className="pt-0 lg:pt-9">
          <p className="label-caps text-[11px] text-[#c4a273]">Tecnologia &amp; resultados</p>
          <h2 id="transformation-title" className="mt-6 max-w-[460px] font-serif text-[36px] leading-[1.12] text-white sm:text-[42px]">
            A Transformação
            <br />
            <em className="font-normal">do seu Sorriso</em>
          </h2>
          <p className="mt-6 max-w-[510px] text-[14px] leading-[1.65] text-white/70">
            O tratamento ortodôntico vai além do alinhamento: equilibra a respiração, preserva a musculatura da face e restaura a segurança para sorrir. Com o escaneamento intraoral, você visualiza a projeção de cada movimento antes mesmo de colocar a primeira placa ou braquete.
          </p>

          <div className="mt-10 space-y-4">
            <article className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.055] px-4 py-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#29433e] text-[#d0ad78]">
                <ShieldIcon />
              </span>
              <div>
                <h3 className="font-sans text-[13px] font-semibold leading-5 text-white">Planejamento Digital 3D</h3>
                <p className="mt-1 text-[12px] leading-[1.6] text-white/55">Simulação computadorizada mostrando a posição final dos dentes e o tempo estimado de tratamento.</p>
              </div>
            </article>
            <article className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.055] px-4 py-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#29433e] text-[#d0ad78]">
                <CheckIcon />
              </span>
              <div>
                <h3 className="font-sans text-[13px] font-semibold leading-5 text-white">Finalização &amp; Contenção</h3>
                <p className="mt-1 text-[12px] leading-[1.6] text-white/55">Protocolo de estabilização personalizado para assegurar que seus dentes permaneçam na posição ideal para sempre.</p>
              </div>
            </article>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#contato"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#202526] no-underline transition-colors hover:bg-[#f0f5f2] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
            >
              Agendar avaliação
            </a>
            <a
              href="https://wa.me/5511999991234?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20uma%20avalia%C3%A7%C3%A3o."
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/55 bg-white/5 px-6 text-[10px] font-semibold uppercase tracking-[0.08em] text-white no-underline transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
            >
              Conversar no WhatsApp
            </a>
          </div>
        </div>

        <div>
          <div className="showcase-comparison relative aspect-[4/3] overflow-hidden rounded-xl bg-[#242b30]">
            <BeforeAfterSlider
              firstImage={initialImage}
              secondImage={finalImage}
              currentPercentPosition={50}
              delimiterColor="#ffffff"
              delimiterIconStyles={{
                width: '36px',
                height: '36px',
                backgroundColor: '#ffffff',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.18)',
              }}
            />
            <span className="absolute left-4 top-4 z-10 rounded-full bg-[#252a2a]/75 px-3 py-1.5 text-[9px] uppercase tracking-[0.08em] text-white/90 backdrop-blur-sm">Caso inicial</span>
            <span className="absolute right-4 top-4 z-10 rounded-full bg-[#252a2a]/75 px-3 py-1.5 text-[9px] uppercase tracking-[0.08em] text-[#36d7a2] backdrop-blur-sm">Resultado final</span>
          </div>
          <p className="mt-3 text-center text-[11px] leading-5 text-white/45">
            Arraste o cursor horizontalmente para comparar o planejamento e o alinhamento
          </p>
        </div>
      </div>
    </section>
  )
}

export default SmileTransformationShowcase
