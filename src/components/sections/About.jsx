import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { BlobTwo } from "@/components/ui/abstract-shapes"

export function About() {
  return (
    <section
      id="about"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background shape behind cards */}
      <BlobTwo className="bottom-1/4 -left-20 w-[450px] h-[450px] opacity-[0.14] dark:opacity-[0.09]" />
      
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 id="about-heading" className="font-display font-normal text-5xl sm:text-6xl tracking-tight text-gradient">
            About Me
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Get to know the developer behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio on the Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="space-y-5">
              <p className="text-lg sm:text-xl text-foreground font-medium leading-relaxed">
                {portfolioData.bio}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                My journey into development started with curiosity about how things work on the web.
                What began as building simple static pages evolved into shipping full-stack
                applications through internships and independent projects.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Whether it's optimizing database queries with Prisma and PostgreSQL,
                crafting responsive UIs with React and Tailwind, or architecting clean REST APIs
                with Node.js and Express. I approach every challenge with care and attention to detail.
              </p>
            </div>

            {/* Stats Cards Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-6 pt-8 border-t border-border/80"
            >
              <StatItem value="3" label="Projects Shipped" />
              <StatItem value="20+" label="Technologies" />
              <StatItem value="1" label="Internship" />
              <StatItem value="4" label="Certifications" />
            </motion.div>
          </motion.div>

          {/* Cards on the Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="space-y-8"
          >
            {/* Focus Card */}
            <div className="rounded-2xl bg-card border border-border p-8 gradient-border glow-hover">
              <h3 className="text-xl font-bold mb-5 text-foreground tracking-tight">What I'm Focused On</h3>
              <ul className="space-y-3.5 text-muted-foreground">
                {[
                  "Building accessible, performant web applications",
                  "Shipping full-stack projects from database to deployed URL",
                  "Integrating AI APIs (OpenAI, Gemini) into real products",
                  "Optimizing PostgreSQL schemas and REST API performance",
                  "Exploring system design and scalable architectures",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.08 }}
                    className="flex items-center gap-3 text-sm sm:text-base"
                  >
                    <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Learning Card */}
            <div className="rounded-2xl bg-card border border-border p-8 gradient-border glow-hover">
              <h3 className="text-xl font-bold mb-5 text-foreground tracking-tight">Currently Learning</h3>
              <div className="flex flex-wrap gap-2.5">
                {["TypeScript", "DSA", "Ai Tools", "n8n", "Docker", "System Design", "Testing"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="px-3.5 py-1.5 rounded-full bg-background text-sm font-semibold border border-border hover:border-primary/50 transition-all hover:scale-105 duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StatItem({ value, label }) {
  return (
    <div className="text-center p-6 rounded-2xl bg-card border border-border/80 gradient-border glow-hover">
      <div className="font-number text-4xl sm:text-5xl text-gradient">{value}</div>
      <div className="text-sm sm:text-base text-muted-foreground mt-1.5 tracking-tight font-medium">{label}</div>
    </div>
  )
}