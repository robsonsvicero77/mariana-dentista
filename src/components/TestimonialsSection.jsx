const testimonials = [
  {
    name: 'Camila R.',
    treatment: 'Alinhadores transparentes',
    quote: 'O acompanhamento foi muito cuidadoso em cada etapa. Hoje sorrio com muito mais confiança.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
  },
  {
    name: 'Juliana M.',
    treatment: 'Ortodontia para adultos',
    quote: 'Me senti acolhida desde a primeira consulta. O plano foi explicado com muita clareza.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&h=120&q=80',
  },
  {
    name: 'Rafael T.',
    treatment: 'Avaliação ortodôntica',
    quote: 'A experiência foi leve e organizada. Gostei de entender cada fase antes de começar.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
  },
  {
    name: 'Mariana L.',
    treatment: 'Aparelho fixo',
    quote: 'Atendimento atencioso e um consultório muito agradável. Recomendo conhecer.',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=120&h=120&q=80',
  },
  {
    name: 'Beatriz A.',
    treatment: 'Ortodontia preventiva',
    quote: 'Minha filha ficou tranquila na consulta e recebeu todo o cuidado que precisava.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=120&h=120&q=80',
  },
  {
    name: 'Fernanda C.',
    treatment: 'Alinhadores transparentes',
    quote: 'Adorei o cuidado e a atenção aos detalhes. O tratamento coube super bem na minha rotina.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80',
  },
]

function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card" aria-label={`Depoimento demonstrativo de ${testimonial.name}`}>
      <div className="testimonial-card__stars" aria-label="5 de 5 estrelas">★★★★★</div>
      <blockquote className="testimonial-card__quote">“{testimonial.quote}”</blockquote>
      <div className="testimonial-card__author">
        <img src={testimonial.image} alt="" width="44" height="44" loading="lazy" />
        <div>
          <p className="testimonial-card__name">{testimonial.name}</p>
          <p className="testimonial-card__treatment">{testimonial.treatment}</p>
        </div>
      </div>
    </article>
  )
}

function TestimonialTrack({ items, reverse = false, label }) {
  return (
    <div className={`testimonial-track${reverse ? ' testimonial-track--reverse' : ''}`}>
      <div className="testimonial-track__group" aria-label={label}>
        {items.map((testimonial) => <TestimonialCard key={testimonial.name} testimonial={testimonial} />)}
      </div>
      <div className="testimonial-track__group" aria-hidden="true">
        {items.map((testimonial) => <TestimonialCard key={`${testimonial.name}-duplicate`} testimonial={testimonial} />)}
      </div>
    </div>
  )
}

function TestimonialsSection() {
  const firstRow = testimonials.slice(0, 3)
  const secondRow = testimonials.slice(3)

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="testimonials-section__heading">
        <p className="label-caps text-primary">Palavras que acolhem</p>
        <h2 id="testimonials-title">Uma experiência de cuidado <em>em cada sorriso</em></h2>
        <p>Conheça algumas histórias de pacientes do nosso espaço.</p>
        <span className="testimonials-section__demo">Depoimentos ilustrativos para demonstração</span>
      </div>
      <div className="testimonials-marquee" aria-label="Depoimentos demonstrativos de pacientes">
        <TestimonialTrack items={firstRow} label="Primeira faixa de depoimentos" />
        <TestimonialTrack items={secondRow} reverse label="Segunda faixa de depoimentos" />
      </div>
    </section>
  )
}

export default TestimonialsSection
