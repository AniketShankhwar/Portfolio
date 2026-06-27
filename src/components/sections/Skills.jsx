import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { portfolioData } from "@/data/portfolio"
import { TechIcon } from "@/components/ui/tech-icons"

const skillCategories = [
  {
    key: "frontend",
    title: "Frontend Development",
    description: "Building highly responsive, interactive, and modern user interfaces",
  },
  {
    key: "backend",
    title: "Backend & Systems",
    description: "Designing robust, secure, and scalable server-side architectures",
  },
  {
    key: "tools",
    title: "Tools & Workflow",
    description: "Optimizing code quality, deployment speed, and dev experience",
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="skills-heading"
    >
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 id="skills-heading" className="font-display font-normal text-5xl sm:text-6xl tracking-tight text-gradient">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            The engineering arsenal I leverage to build state-of-the-art products
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: catIndex * 0.15 }}
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 pb-4 border-b border-border/60">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground flex items-center gap-3">
                  <span className="h-6 w-[3px] rounded-full bg-gradient-to-b from-primary to-primary/50" />
                  {category.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mt-2 md:mt-0 font-medium">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioData.skills[category.key].map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: skillIndex * 0.04,
                    }}
                  >
                    <SkillCard skill={skill} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ skill }) {
  return (
    <Card className="group relative overflow-hidden bg-card border border-border p-6 h-full gradient-border glow-hover transition-all duration-300">
      <CardContent className="p-0 flex flex-col gap-4 h-full">
        <div className="flex items-center gap-3.5">
          <div
            className="size-11 rounded-xl bg-background border border-border flex items-center justify-center shadow-[0_0_15px_var(--glow-color)] group-hover:border-primary/40 group-hover:shadow-[0_0_20px_var(--glow-color)] transition-all duration-300 select-none"
            aria-hidden="true"
          >
            <TechIcon
              name={skill.icon}
              className="size-6 text-muted-foreground group-hover:text-primary transition-colors duration-300"
            />
          </div>
          <div>
            <h4 className="font-bold text-foreground tracking-tight">{skill.name}</h4>
          </div>
        </div>

        {/* Proficiency block */}
        <div className="w-full mt-2">
          <div className="flex justify-between items-center mb-1.5 text-xs font-mono font-medium text-muted-foreground">
            <span>Level</span>
            <span className="font-number font-semibold text-primary">{skill.proficiency}%</span>
          </div>
          <div className="relative w-full h-1.5 rounded-full bg-muted/60 overflow-hidden border border-border/10">
            {/* The fill bar using GPU scaleX */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: skill.proficiency / 100 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 55, damping: 15, delay: 0.15 }}
              className="h-full w-full rounded-full bg-gradient-to-r from-primary to-primary/70 origin-left"
              role="progressbar"
              aria-valuenow={skill.proficiency}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${skill.name} proficiency`}
            />
            {/* The sliding glow tip (separated to prevent visual squash)
                Uses translateX for GPU-composited animation instead of left,
                which would trigger layout recalculation every frame. */}
            <motion.div
              initial={{ x: 0 }}
              whileInView={{ x: `${skill.proficiency}%` }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 55, damping: 15, delay: 0.15 }}
              className="absolute top-0 left-0 h-full w-[2.5px] bg-foreground shadow-[0_0_8px_var(--primary)] -translate-x-[2.5px]"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
