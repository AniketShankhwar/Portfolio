import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"
import { portfolioData } from "@/data/portfolio"
import { ProjectCard } from "@/components/sections/Projects"
import { BlobOne, BlobTwo, MeshGrid } from "@/components/ui/abstract-shapes"
import { SEO } from "@/components/layout/SEO"

export function ProjectsPage() {
  return (
    <div className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <SEO title="Projects" description="A complete showcase of projects built by Aniket Shankhwar." />
      {/* Background decoration */}
      <MeshGrid />
      <BlobOne className="-top-20 -left-20 w-[450px] h-[450px] opacity-[0.16] dark:opacity-[0.1]" />
      <BlobTwo className="bottom-0 right-0 w-[550px] h-[550px] opacity-[0.14] dark:opacity-[0.08]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-6 group"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            Back to Home
          </Link>
          <h1 className="font-display font-normal text-5xl sm:text-6xl tracking-tight text-gradient">All Engineering Works</h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A comprehensive list of developer tools, SaaS applications, and interactive websites built using clean, scalable patterns.
          </p>
        </motion.div>

        {/* Project grid using shared component */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
              className="flex"
            >
              <ProjectCard project={project} featured={project.featured} />
            </motion.article>
          ))}
        </div>

        {/* GitHub link footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <Button variant="outline" size="lg" asChild className="glow-hover font-semibold">
            <a href="https://github.com/AniketShankhwar" target="_blank" rel="noopener noreferrer">
              View Entire Profile on GitHub
              <ExternalLink className="ml-2 size-4 text-muted-foreground" aria-hidden="true" />
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}