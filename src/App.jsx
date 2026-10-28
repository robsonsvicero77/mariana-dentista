import { Link, Route, Routes } from 'react-router'
import AboutPage from './pages/AboutPage.jsx'
import AboutSanctuary from './components/AboutSanctuary.jsx'
import Booking from './components/Booking.jsx'
import DoctorProfile from './components/DoctorProfile.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ScrollToHash from './components/ScrollToHash.jsx'
import SmileTransformationShowcase from './components/SmileTransformationShowcase.jsx'
import TreatmentsSection from './components/TreatmentsSection.jsx'
import TreatmentsPage from './pages/TreatmentsPage.jsx'
import TreatmentDetailPage from './pages/TreatmentDetailPage.jsx'
import ResultsPage from './pages/ResultsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import ArticlesSection from './components/ArticlesSection.jsx'

function HomePage() {
  return (
    <>
      <div className="relative">
        <Header />
        <main id="inicio">
          <Hero />
          <TreatmentsSection />
          <AboutSanctuary />
          <DoctorProfile />
          <SmileTransformationShowcase />
          <ArticlesSection />
          <Booking />
        </main>
      </div>
      <Footer />
    </>
  )
}

function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-6 pt-24 text-center">
        <p className="label-caps text-primary">Página não encontrada</p>
        <h1 className="mt-3 font-serif text-4xl text-[#202426]">Vamos voltar ao início?</h1>
        <Link to="/" className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white no-underline hover:bg-primary-dark">Ir para a Home</Link>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/tratamentos" element={<TreatmentsPage />} />
        <Route path="/tratamentos/:slug" element={<TreatmentDetailPage />} />
        <Route path="/resultados" element={<ResultsPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
