import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { BigStatement } from './sections/BigStatement'
import { Professional } from './sections/Professional'
// import { Business } from './sections/Business'
import { Stats } from './sections/Stats'
import { Projects } from './sections/Projects'
import { Why } from './sections/Why'
// import { Finale } from './sections/Finale'
import { Certificates } from './sections/Certificates'
import { Contact } from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header />
      <main>
        <Hero />
        <About />
        <BigStatement />
        <Certificates />
        <Stats />
        <Professional />
        {/* <Business /> */}
        <Projects />
        <Why />
        {/* <Finale /> */}
        <Contact />
      </main>
    </div>
  )
}

export default App
