import { motion, useReducedMotion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import { cn } from "@/lib/utils"
import { GithubIcon } from "@/components/ui"

// Predefined tonal profiles for each project: copper + monochrome family
// (no second hue; restraint is the point)
const gradientProfiles = {
  1: "radial-gradient(circle at 10% 20%, oklch(0.65 0.15 40 / 22%), transparent 70%), radial-gradient(circle at 90% 80%, oklch(0.22 0.04 0 / 40%), transparent 70%)",
  2: "radial-gradient(circle at 80% 20%, oklch(0.65 0.15 40 / 18%), transparent 70%), radial-gradient(circle at 20% 80%, oklch(0.22 0.04 0 / 35%), transparent 70%)",
  3: "radial-gradient(circle at 50% 50%, oklch(0.55 0.12 35 / 22%), transparent 70%), radial-gradient(circle at 10% 90%, oklch(0.30 0.06 30 / 30%), transparent 60%)",
  4: "radial-gradient(circle at 90% 10%, oklch(0.65 0.15 40 / 20%), transparent 75%), radial-gradient(circle at 10% 90%, oklch(0.25 0.04 0 / 40%), transparent 70%)",
  5: "radial-gradient(circle at 30% 30%, oklch(0.55 0.13 38 / 18%), transparent 70%), radial-gradient(circle at 70% 70%, oklch(0.20 0.03 0 / 38%), transparent 75%)",
  6: "radial-gradient(circle at 70% 30%, oklch(0.60 0.14 42 / 20%), transparent 70%), radial-gradient(circle at 30% 70%, oklch(0.24 0.04 0 / 36%), transparent 75%)",
  7: "radial-gradient(circle at 50% 20%, oklch(0.58 0.13 36 / 18%), transparent 65%), radial-gradient(circle at 50% 80%, oklch(0.26 0.05 0 / 34%), transparent 70%)",
  8: "radial-gradient(circle at 20% 50%, oklch(0.62 0.14 40 / 20%), transparent 70%), radial-gradient(circle at 80% 50%, oklch(0.22 0.04 0 / 38%), transparent 70%)",
}

export function Projects() {
  const featuredProjects = portfolioData.projects.filter((p) => p.featured)
  const otherProjects = portfolioData.projects.filter((p) => !p.featured)

  return (
    <section
      id="projects"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 id="projects-heading" className="font-display font-normal text-5xl sm:text-6xl tracking-tight text-gradient">
            Featured Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            A curated showcase of engineering and designer-centric solutions
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="flex"
            >
              <ProjectCard project={project} featured />
            </motion.article>
          ))}
        </div>

        {/* More Projects Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 }}
          className="mt-24"
        >
          <h3 className="font-display font-normal text-4xl sm:text-5xl tracking-tight text-center mb-14 text-gradient">
            More Engineering Works
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                className="flex"
              >
                <ProjectCard project={project} featured={false} />
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <Button variant="outline" shape="pill" size="lg" asChild className="glow-hover font-semibold">
            <a href="https://github.com/AniketShankhwar" target="_blank" rel="noopener noreferrer">
              View All on GitHub
              <ExternalLink className="ml-2 size-4 text-muted-foreground" aria-hidden="true" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export function ProjectCard({ project, featured }) {
  const shouldReduceMotion = useReducedMotion()
  const gradient = gradientProfiles[project.id] || "linear-gradient(to bottom, var(--card), var(--muted))"

  return (
    <Card className="group relative overflow-hidden bg-card border border-border h-full flex flex-col gradient-border glow-hover hover:shadow-[0_0_35px_var(--glow-color)] transition-all duration-300">
      {/* Decorative gradient mesh backdrop with subtle GPU-accelerated drift */}
      <div 
        className="aspect-video relative overflow-hidden bg-muted/20 border-b border-border/50"
      >
        <div
          className={cn(
            "absolute inset-0 transition-all duration-700 ease-out",
            shouldReduceMotion 
              ? "group-hover:scale-102" 
              : "group-hover:scale-110 group-hover:translate-x-2.5 group-hover:translate-y-1.5 group-hover:rotate-1.5"
          )}
          style={{ 
            background: gradient,
            willChange: "transform"
          }}
          aria-hidden="true"
        />
        
        {/* Abstract App Shell Mockup inside the project card */}
        <div className="absolute inset-0 flex items-center justify-center p-5 select-none pointer-events-none">
          <div className="w-11/12 h-5/6 rounded-xl border border-border/60 bg-background/40 dark:bg-background/20 backdrop-blur-md p-4 relative overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-300 group-hover:border-primary/20">
            {/* Internal gradient mesh that drifts inside the mockup window on
                hover — sits behind content via -z-10, GPU-composited only.
                Hidden until hover reveals it. */}
            <div
              className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden="true"
            >
              <div
                className={cn(
                  "absolute inset-0 transition-transform duration-[1400ms] ease-out",
                  shouldReduceMotion
                    ? "group-hover:scale-105"
                    : "group-hover:translate-x-3 group-hover:-translate-y-2 group-hover:scale-[1.08] group-hover:rotate-2"
                )}
                style={{
                  background: gradient,
                  willChange: "transform",
                  opacity: 0.45,
                }}
              />
           </div>

            <div className="flex items-center justify-between pb-2.5 border-b border-border/30">
              <div className="flex items-center gap-1.5">
                <div className="size-2 rounded-full bg-red-500/60" />
                <div className="size-2 rounded-full bg-yellow-500/60" />
                <div className="size-2 rounded-full bg-green-500/60" />
              </div>
              <span className="text-[9px] font-mono text-muted-foreground/60">{project.title.toLowerCase()}.app</span>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-1 py-2">
              <span className="text-base sm:text-lg font-extrabold text-foreground tracking-tight">{project.title}</span>
              <span className="text-[10px] text-muted-foreground/80 text-center px-4 font-medium truncate max-w-full">{project.tagline}</span>
            </div>
            <div className="flex justify-between items-center text-[8px] font-mono text-muted-foreground/40 border-t border-border/30 pt-2">
              <span>STATUS: PRODUCTION</span>
              <span>v1.0.0</span>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
      </div>

      <CardContent className="p-6 flex-1 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/10">
            {project.category}
          </span>
          {featured && (
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/10">
              Featured
            </span>
          )}
        </div>

        <div>
          <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h4>
          <p className="text-sm font-medium text-muted-foreground mt-1 leading-snug">{project.tagline}</p>
        </div>

        <p className="text-sm text-muted-foreground/80 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono font-medium rounded bg-muted/80 text-muted-foreground border border-border/80"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="px-2.5 py-1 text-xs font-mono font-medium rounded bg-muted/80 text-muted-foreground border border-border/80">
              +{project.techStack.length - 5}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-0 flex gap-3 mt-auto">
        <motion.div
          whileHover={shouldReduceMotion ? {} : { scale: 1.025 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.975 }}
          transition={{ type: "spring", stiffness: 450, damping: 15 }}
          className="flex-1"
        >
          <Button
            variant="outline"
            size="sm"
            asChild
            className="w-full font-semibold group-hover:border-primary/30 transition-colors"
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="mr-2 size-4 text-muted-foreground" aria-hidden="true" />
              Code
            </a>
          </Button>
        </motion.div>
        {project.liveUrl && (
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.025, boxShadow: "0 0 15px var(--glow-color)" }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.97, boxShadow: "0 0 25px var(--glow-color)" }}
            transition={{ type: "spring", stiffness: 450, damping: 15 }}
            className="flex-1"
          >
            <Button
              variant="default"
              size="sm"
              asChild
              className="w-full font-semibold glow-hover"
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
                <ArrowRight className="ml-1.5 size-4" aria-hidden="true" />
              </a>
            </Button>
          </motion.div>
        )}
      </CardFooter>
    </Card>
  )
}