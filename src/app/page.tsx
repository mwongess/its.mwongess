import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TsParticles from '@/components/Particles'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <>

      <Header />
      <main className='flex flex-col justify-between min-h-screen p-16'>
        {/* <TsParticles/> */}
        <Hero/>
        <About />
        <Skills />
        <Projects />
        <ContactMe />
      </main>

      <Footer />
    </>
  )
}
