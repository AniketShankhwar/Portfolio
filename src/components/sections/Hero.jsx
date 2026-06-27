import { useRef } from "react"
import { motion, useScroll, useTransform, useMotionValue, useReducedMotion, useSpring } from "framer-motion"
import { ArrowRight, Mail, Code, Terminal, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SparkMark } from "@/components/ui/brand-marks"
import { portfolioData, siteConfig } from "@/data/portfolio"
import { cn } from "@/lib/utils"
import { GithubIcon, LinkedinIcon, LeetcodeIcon, GeeksforgeeksIcon, CodeforcesIcon, Separator } from "@/components/ui"
import { BlobOne, BlobTwo } from "@/components/ui/abstract-shapes"

export function Hero() {
  const shouldReduceMotion = useReducedMotion()
  
  // Parallax Scroll-Linked Depth Backgrounds
  const { scrollY } = useScroll()
  const yBlob1 = useTransform(scrollY, [0, 1000], [0, -120])
  const yBlob2 = useTransform(scrollY, [0, 1000], [0, 100])
  const yOrb = useTransform(scrollY, [0, 1000], [0, -60])
  
  const blob1Y = shouldReduceMotion ? 0 : yBlob1
  const blob2Y = shouldReduceMotion ? 0 : yBlob2
  const orbY = shouldReduceMotion ? 0 : yOrb

  // Cursor-Aware Tilt Controls for Mockup Visual Card
  // Normalized -1..1 tilt, then mapped to a clamped rotation magnitude.
  const tiltCardRef = useRef(null)
  const rawXTilt = useMotionValue(0)
  const rawYTilt = useMotionValue(0)
  // Spring adds gentle inertia — feels premium and avoids jittery tracking
  const xTilt = useSpring(rawXTilt, { stiffness: 220, damping: 18, mass: 0.6 })
  const yTilt = useSpring(rawYTilt, { stiffness: 220, damping: 18, mass: 0.6 })

  // Map normalized -1..1 tilt to a small clamped rotation (max ~6°)
  const rotateX = useTransform(
    yTilt,
    [-1, 1],
    shouldReduceMotion ? [0, 0] : [6, -6]
  )
  const rotateY = useTransform(
    xTilt,
    [-1, 1],
    shouldReduceMotion ? [0, 0] : [-6, 6]
  )

  const handleMouseMove = (event) => {
    if (shouldReduceMotion || !tiltCardRef.current) return
    const rect = tiltCardRef.current.getBoundingClientRect()
    // Normalize mouse position to -1..1 centered on the card
    const normX = ((event.clientX - rect.left) / rect.width) * 2 - 1
    const normY = ((event.clientY - rect.top) / rect.height) * 2 - 1
    // Clamp to keep rotation predictable at edges
    rawXTilt.set(Math.max(-1, Math.min(1, normX)))
    rawYTilt.set(Math.max(-1, Math.min(1, normY)))
  }

  const handleMouseLeave = () => {
    rawXTilt.set(0)
    rawYTilt.set(0)
  }

  const socialLinks = [
    { icon: GithubIcon, href: siteConfig.links.github, label: "GitHub" },
    { icon: LinkedinIcon, href: siteConfig.links.linkedin, label: "LinkedIn" },
    { icon: LeetcodeIcon, href: siteConfig.links.leetcode, label: "LeetCode" },
    { icon: GeeksforgeeksIcon, href: siteConfig.links.geeksforgeeks, label: "GeeksforGeeks" },
    { icon: CodeforcesIcon, href: siteConfig.links.codeforces, label: "Codeforces" },
  ]

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 pt-20 pb-16 sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      {/* Background ambient accents — drastically reduced for the cleaner
          gradient direction. Two soft corner blobs, very low opacity,
          positioned for ambient depth rather than visual presence. */}
      <motion.div
        style={{ y: blob1Y, willChange: "transform" }}
        className="absolute -top-32 -left-32 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] opacity-[0.08] pointer-events-none -z-10"
      >
        <BlobOne className="relative inset-0" />
      </motion.div>

      <motion.div
        style={{ y: blob2Y, willChange: "transform" }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] opacity-[0.06] pointer-events-none -z-10"
      >
        <BlobTwo className="relative inset-0" />
      </motion.div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Hero Content Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-left flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
              className="inline-flex self-start items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6"
            >
              <Code className="size-4 text-primary" aria-hidden="true" />
              <span>{portfolioData.name}</span>
              <Terminal className="size-3.5 animate-pulse text-primary" aria-hidden="true" />
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              className="font-display font-normal text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-gradient"
            >
              <HeroTitle title={portfolioData.title} />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              {portfolioData.tagline}
            </motion.p>

            {/* CTA Spring Interactive Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.025, boxShadow: "0 0 25px var(--glow-color)" }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97, boxShadow: "0 0 35px var(--glow-color)" }}
                transition={{ type: "spring", stiffness: 450, damping: 15 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  asChild
                  className="group glow-hover shadow-[0_0_20px_var(--glow-color)] text-sm font-semibold gap-2 cursor-pointer w-full"
                  aria-label="View my projects"
                >
                  <a href="#projects" onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                  }}>
                    View Projects
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.025 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.975 }}
                transition={{ type: "spring", stiffness: 450, damping: 15 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  shape="pill"
                  asChild
                  className="gap-2 text-sm font-semibold cursor-pointer border-border hover:border-primary/30 w-full"
                  aria-label="Download CV"
                >
                  <a
                    href="https://drive.google.com/file/d/14a3SwBjF9tGEjPWN-Khe5wSa9CHbkAAB/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="size-4 text-muted-foreground" aria-hidden="true" />
                    Download CV
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Spring Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              className="mt-12 flex items-center gap-5"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.08, borderColor: "oklch(from var(--primary) l c h / 40%)" }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
                  transition={{ delay: 0.6 + index * 0.08, duration: 0.3, ease: "easeOut" }}
                  className={cn(
                    "flex items-center justify-center size-10 rounded-full border border-border bg-card/60 text-muted-foreground",
                    "hover:text-primary transition-colors duration-300",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 rounded-full"
                  )}
                  aria-label={social.label}
                >
                  <social.icon className="size-4" aria-hidden="true" />
                </motion.a>
              ))}
              <Separator orientation="vertical" className="h-4 bg-border" />
              <a
                href={`mailto:${siteConfig.links.email?.replace("mailto:", "") || "aniketshankhwar1531@gmail.com"}`}
                className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
              >
                aniketshankhwar1531@gmail.com
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Premium Glass Visual Right + Cursor aware Parallax Tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex items-center justify-center lg:justify-end"
            ref={tiltCardRef}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              perspective: 1000,
              willChange: "transform"
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative w-full max-w-[420px] aspect-square rounded-2xl border border-border/80 bg-card/30 backdrop-blur-xl p-6 shadow-2xl overflow-hidden gradient-border">
              {/* Inner glowing elements — kept to blur-lg/blur-xl to avoid
                  stacking three expensive large-radius blurs inside backdrop-blur */}
              <div className="absolute -top-12 -left-12 size-32 rounded-full bg-primary/20 blur-lg pointer-events-none" />
              <div className="absolute -bottom-16 -right-16 size-40 bg-primary/20 blur-xl pointer-events-none" />
              
              {/* Window controls */}
              <div className="flex items-center justify-between border-b border-border/40 pb-4 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="size-3 rounded-full bg-red-500/80" />
                  <div className="size-3 rounded-full bg-yellow-500/80" />
                  <div className="size-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground/70 font-mono">
                  <Terminal className="size-3" />
                  <span>developer.js</span>
                </div>
              </div>

              {/* Mock code text — syntax colors use copper accent family */}
              <pre className="font-mono text-xs sm:text-[13px] text-muted-foreground/90 space-y-2.5 overflow-x-auto leading-relaxed">
                <code>
                  <span className="text-primary font-semibold">const</span> developer = &#123;<br />
                  &nbsp;&nbsp;name: <span className="text-primary/80">"Aniket Shankhwar"</span>,<br />
                  &nbsp;&nbsp;role: <span className="text-primary/80">"Full Stack"</span>,<br />
                  &nbsp;&nbsp;passion: <span className="text-primary/80">"Shipping Real-World Apps"</span>,<br />
                  &nbsp;&nbsp;stack: [<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-muted-foreground">"React"</span>, <span className="text-muted-foreground">"Next.js"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-muted-foreground">"Tailwind"</span>, <span className="text-muted-foreground">"Node.js"</span><br />
                  &nbsp;&nbsp;],<br />
                  &nbsp;&nbsp;cleanAPIs: <span className="text-foreground/60">true</span>,<br />
                  &nbsp;&nbsp;responsiveUI: <span className="text-foreground/60">true</span><br />
                  &#125;;
                </code>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-16 sm:mt-24 flex justify-center"
        >
          <ScrollIndicator />
        </motion.div>
      </div>
    </section>
  )
}

function ScrollIndicator() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="flex flex-col items-center gap-1.5 text-muted-foreground cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
      onClick={() => {
        document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
      }}
      aria-hidden="true"
    >
      <span className="text-[10px] uppercase tracking-widest font-semibold">Explore</span>
      <motion.svg
        className="size-5 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v14M19 12l-7 7-7-7" />
      </motion.svg>
    </motion.div>
  )
}

/* Renders the headline with a SparkMark inline between words. Single-word
   titles get no mark; multi-word titles get a mark between the last two
   words with a small horizontal padding so the mark doesn't crowd text. */
function HeroTitle({ title }) {
  const words = title.split(" ")
  if (words.length <= 1) return <>{title}</>
  const head = words.slice(0, -1).join(" ")
  const tail = words[words.length - 1]
  return (
    <>
      {head}{" "}
      <SparkMark
        size="0.55em"
        className="text-primary/90 align-middle inline-block -translate-y-[0.05em] mx-1"
        aria-label="decorative brand mark"
      />{" "}
      {tail}
    </>
  )
}
