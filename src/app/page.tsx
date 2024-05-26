import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Notification from '@/components/Notification'
import TsParticles from '@/components/Particles'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <>
      <Notification />
      <Header />
      <main className='flex flex-col justify-between min-h-screen p-4 sm:p-28'>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <ContactMe />
      </main>
      <Footer />
    </>
  )
}
