import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </main>
  )
}
