import { Link } from 'react-router'
import { articles } from '../data/articles.js'

function ArticlesSection() {
  const latestArticles = articles.slice(0, 3)

  return (
    <section id="artigos" className="bg-[#f3f1ed] px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24" aria-labelledby="home-articles-title">
      <div className="mx-auto max-w-[1280px]">
        <header className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[700px]">
            <p className="label-caps text-[11px] text-primary">Informação e cuidado</p>
            <h2 id="home-articles-title" className="mt-3 font-serif text-[34px] leading-tight text-[#202426] sm:text-[42px]">
              Artigos para cuidar do seu sorriso.
            </h2>
            <p className="mt-4 max-w-[620px] text-[14px] leading-6 text-[#686d69]">
              Conteúdos da clínica sobre ortodontia, saúde bucal e o dia a dia do tratamento.
            </p>
          </div>
          <Link to="/blog" className="inline-flex shrink-0 items-center text-[11px] font-semibold uppercase tracking-wide text-primary no-underline hover:underline">
            Ver todos os artigos <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {latestArticles.map((article) => (
            <article key={article.slug} className="overflow-hidden rounded-2xl border border-[#e8e8e3] bg-white shadow-card">
              <Link to={`/blog/${article.slug}`} className="block overflow-hidden">
                <img src={article.image} alt={article.alt} className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-[1.03]" loading="lazy" />
              </Link>
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.09em] text-primary">
                  <span>{article.category}</span>
                  <span className="text-[#888d89]">{article.readTime}</span>
                </div>
                <h3 className="mt-3 font-serif text-[22px] leading-[1.25] text-[#202426]">
                  <Link to={`/blog/${article.slug}`} className="text-inherit no-underline hover:text-primary">{article.title}</Link>
                </h3>
                <p className="mt-3 text-[13px] leading-6 text-[#686d69]">{article.excerpt}</p>
                <Link to={`/blog/${article.slug}`} className="mt-5 inline-flex text-[11px] font-semibold uppercase tracking-wide text-primary no-underline hover:underline">
                  Ler artigo <span aria-hidden="true" className="ml-2">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArticlesSection
