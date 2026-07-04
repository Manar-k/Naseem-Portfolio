import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Professional } from './sections/Professional'
import { Business } from './sections/Business'
import { Stats } from './sections/Stats'
import { Projects } from './sections/Projects'
import { Why } from './sections/Why'
import { Finale } from './sections/Finale'
import { Contact } from './sections/Contact'
import { useLang } from './hooks/useLang'

function App() {
  useLang()

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header />
      <main>
        <Hero />
        <About />
        <Professional />
        <Business />
        <Stats />
        <Projects />
        <Why />
        <Finale />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
