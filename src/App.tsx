import { Header } from './components/Header'
import { Marquee } from './components/Marquee'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { BigStatement } from './sections/BigStatement'
import { Professional } from './sections/Professional'
import { Business } from './sections/Business'
import { Stats } from './sections/Stats'
import { Projects } from './sections/Projects'
import { Why } from './sections/Why'
import { Finale } from './sections/Finale'
import { Certificates } from './sections/Certificates'
import { Contact } from './sections/Contact'
import { useLang } from './hooks/useLang'
import { profile } from './data/profile'

function App() {
  const { lang } = useLang()
  const content = profile[lang]

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header />
      <main>
        <Hero />
        <Marquee items={content.meta.roles} />
        <About />
        <BigStatement />
        <Professional />
        <Business />
        <Stats />
        <Projects />
        <Why />
        <Finale />
        <Certificates />
        <Contact />
      </main>
    </div>
  )
}

export default App
