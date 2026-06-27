import { SEO } from "@/components/layout/SEO"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Projects } from "@/components/sections/Projects"
import { Contact } from "@/components/sections/Contact"
import { Marquee } from "@/components/ui/marquee"

export function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Marquee />
      <Contact />
    </>
  )
}