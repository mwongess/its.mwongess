import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import TsParticles from '@/components/Particles'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main className='flex flex-col justify-between min-h-screen '>
      {/* <TsParticles/> */}
      <Header />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </main>
  )
}
