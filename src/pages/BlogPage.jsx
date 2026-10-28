import { Link, useParams } from 'react-router'
import Booking from '../components/Booking.jsx'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import PageCTA from '../components/PageCTA.jsx'
import { articles } from '../data/articles.js'

function BlogPage() {
  const { slug } = useParams()
  const article = articles.find((item) => item.slug === slug)

  return (
    <>
      <div className="relative">
        <Header />
        <main>
          {article ? (
            <>
              <section className="bg-[#171b1d] px-5 pb-14 pt-36 text-white sm:px-8 sm:pb-16 sm:pt-40 lg:px-20">
                <div className="mx-auto max-w-[980px]">
                  <Link to="/blog" className="text-[12px] text-white/65 no-underline hover:text-white">← Voltar ao Blog</Link>
                  <p className="label-caps mt-8 text-[11px] text-[#c4a273]">{article.category} · {article.readTime}</p>
                  <h1 className="mt-4 font-serif text-[38px] leading-[1.12] text-white sm:text-[54px]">{article.title}</h1>
                  <p className="mt-5 text-[13px] text-white/60">{article.date}</p>
                </div>
              </section>

              <article className="bg-[#f3f1ed] px-5 py-12 sm:px-8 sm:py-16 lg:px-20">
                <div className="mx-auto max-w-[900px]">
                  <img src={article.image} alt={article.alt} className="max-h-[520px] w-full rounded-2xl object-cover shadow-card" />
                  <div className="mx-auto mt-10 max-w-[720px] space-y-5 text-[15px] leading-[1.85] text-[#555957] sm:text-[16px]">
                    {article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  <div className="mt-10 border-t border-[#deddd7] pt-6">
                    <Link to="/blog" className="text-[12px] font-semibold uppercase tracking-wide text-primary no-underline hover:underline">← Todos os artigos</Link>
                  </div>
                </div>
              </article>
            </>
          ) : (
            <>
              <section className="bg-[#171b1d] px-5 pb-16 pt-36 text-white sm:px-8 sm:pb-20 sm:pt-40 lg:px-20" aria-labelledby="blog-page-title">
                <div className="mx-auto max-w-[1280px]">
                  <p className="label-caps text-[11px] text-[#c4a273]">Informação e cuidado</p>
                  <h1 id="blog-page-title" className="mt-4 max-w-[860px] font-serif text-[42px] leading-[1.12] text-white sm:text-[56px]">
                    Um espaço para aprender sobre seu sorriso.
                  </h1>
                  <p className="mt-5 max-w-[690px] text-[15px] leading-7 text-white/70 sm:text-[16px]">
                    Artigos sobre ortodontia, saúde bucal e os cuidados que acompanham cada etapa do tratamento.
                  </p>
                </div>
              </section>

              <section className="bg-[#f3f1ed] px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24" aria-labelledby="blog-articles-title">
                <div className="mx-auto max-w-[1280px]">
                  <header className="mb-10 max-w-[700px]">
                    <p className="label-caps text-[11px] text-primary">Blog da clínica</p>
                    <h2 id="blog-articles-title" className="mt-3 font-serif text-[34px] leading-tight text-[#202426] sm:text-[42px]">Conteúdo para cuidar melhor do sorriso.</h2>
                  </header>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
                    {articles.map((item) => (
                      <article key={item.slug} className="overflow-hidden rounded-2xl border border-[#e8e8e3] bg-white shadow-card">
                        <Link to={`/blog/${item.slug}`} className="block overflow-hidden">
                          <img src={item.image} alt={item.alt} className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-[1.03]" loading="lazy" />
                        </Link>
                        <div className="p-5 sm:p-6">
                          <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.09em] text-primary">
                            <span>{item.category}</span><span className="text-[#888d89]">{item.readTime}</span>
                          </div>
                          <h3 className="mt-3 font-serif text-[22px] leading-[1.25] text-[#202426]">
                            <Link to={`/blog/${item.slug}`} className="text-inherit no-underline hover:text-primary">{item.title}</Link>
                          </h3>
                          <p className="mt-3 text-[13px] leading-6 text-[#686d69]">{item.excerpt}</p>
                          <p className="mt-5 text-[11px] text-[#929692]">{item.date}</p>
                          <Link to={`/blog/${item.slug}`} className="mt-4 inline-flex text-[11px] font-semibold uppercase tracking-wide text-primary no-underline hover:underline">Ler artigo <span aria-hidden="true" className="ml-2">→</span></Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}

          <PageCTA
            eyebrow="Cuidado personalizado"
            title="Tem dúvidas sobre o seu sorriso?"
            description="Converse com nossa equipe e agende uma avaliação com a Dra. Mariana."
            actionLabel="Agendar avaliação"
            to="/contato#contato"
          />
          <Booking />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default BlogPage

