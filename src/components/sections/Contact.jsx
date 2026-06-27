import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Send } from "lucide-react"
import { siteConfig } from "@/data/portfolio"
import { GithubIcon, LinkedinIcon, LeetcodeIcon, GeeksforgeeksIcon, CodeforcesIcon } from "@/components/ui"
import { BlobOne } from "@/components/ui/abstract-shapes"

const RECIPIENT_EMAIL =
  siteConfig.links.email?.replace("mailto:", "") || "aniketshankhwar1531@gmail.com"

export function Contact() {
  const shouldReduceMotion = useReducedMotion()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [opening, setOpening] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const buildMailtoUrl = ({ name, email, message }) => {
    const subject = `Portfolio Contact from ${name}`
    const body = `From: ${name} (${email})\n\n${message}`
    const params = new URLSearchParams({ subject, body })
    return `mailto:${RECIPIENT_EMAIL}?${params.toString()}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    const mailtoUrl = buildMailtoUrl(formData)
    if (import.meta.env.DEV) {
      console.log("[Contact] mailto URL:", mailtoUrl)
    }

    setOpening(true)
    window.location.assign(mailtoUrl)
    setTimeout(() => setOpening(false), 1200)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background soft blob for premium layout accent */}
      <BlobOne className="top-1/4 -right-16 w-[450px] h-[450px] opacity-[0.14] dark:opacity-[0.09]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 id="contact-heading" className="font-display font-normal text-5xl sm:text-6xl tracking-tight text-gradient">
            Get In Touch
         </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Have a project in mind or just want to say hi? Let's build something exceptional.
         </p>
       </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <Card className="w-full bg-card border border-border gradient-border glow-hover flex flex-col p-6 h-full">
              <div className="flex-1 flex flex-col">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-bold tracking-tight text-foreground">Let's work together</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    I'm always open to discussing new projects, creative design systems, or engineering opportunities.
                 </CardDescription>
               </CardHeader>

                <CardContent className="p-0 space-y-5">
                  <ContactItem
                    icon={Mail}
                    title="Email"
                    description="Best way to reach me"
                    action={
                      <a
                        href={`mailto:${RECIPIENT_EMAIL}`}
                        className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:rounded-sm"
                      >
                        {RECIPIENT_EMAIL}
                        <Send className="size-3" aria-hidden="true" />
                     </a>
                    }
                  />
                  <ContactItem
                    icon={GithubIcon}
                    title="GitHub"
                    description="Check out my source repositories"
                    action={
                      <a
                        href={siteConfig.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:rounded-sm"
                      >
                        github.com/AniketShankhwar
                        <Send className="size-3" aria-hidden="true" />
                     </a>
                    }
                  />
                  <ContactItem
                    icon={LinkedinIcon}
                    title="LinkedIn"
                    description="Connect professionally"
                    action={
                      <a
                        href={siteConfig.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:rounded-sm"
                      >
                        linkedin.com/in/aniket-shankhwar
                        <Send className="size-3" aria-hidden="true" />
                     </a>
                    }
                  />
               </CardContent>
             </div>

              <div className="pt-6 border-t border-border/60 mt-8 space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Availability Status</h4>
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-65"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
                 </span>
                  <span>Available for freelance contracts</span>
               </div>
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-65"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
                 </span>
                  <span>Seeking full-time React engineering roles</span>
               </div>
             </div>
           </Card>
         </motion.div>

          {/* Right Column: Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-7"
          >
            <Card className="w-full bg-card border border-border gradient-border glow-hover flex flex-col p-6 h-full">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold tracking-tight text-foreground">Send a message</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mt-2">
                  Fill out the form below and your email client will open with everything ready to send.
               </CardDescription>
             </CardHeader>

              <CardContent className="p-0 flex-1 flex flex-col">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1 min-h-0" noValidate>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive font-medium" role="alert">{errors.name}</p>
                    )}
                 </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive font-medium" role="alert">{errors.email}</p>
                    )}
                 </div>

                  <div className="space-y-2 flex-1 flex flex-col min-h-0">
                    <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={4}
                      className="flex-1 resize-none"
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive font-medium" role="alert">{errors.message}</p>
                    )}
                 </div>

                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { scale: 1.015, boxShadow: "0 0 25px var(--glow-color)" }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.985, boxShadow: "0 0 30px var(--glow-color)" }}
                    transition={{ type: "spring", stiffness: 450, damping: 15 }}
                    className="w-full"
                  >
                    <Button
                      type="submit"
                      className="w-full font-bold glow-hover cursor-pointer"
                    >
                      <Send className="mr-2 size-4" aria-hidden="true" />
                      {opening ? "Opening mail app..." : "Send Message"}
                   </Button>
                 </motion.div>

               </form>
             </CardContent>
           </Card>
         </motion.div>
       </div>
     </div>
   </section>
  )
}

function ContactItem({ icon: Icon, title, description, action }) {
  return (
    <div className="flex flex-col gap-2 p-4 rounded-xl border border-border/80 bg-background/50 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 size-9 rounded-lg bg-muted flex items-center justify-center border border-border/50" aria-hidden="true">
          <Icon className="size-4 text-primary" />
       </div>
        <h4 className="font-bold text-sm text-foreground tracking-tight">{title}</h4>
     </div>
      {description && (
        <p className="text-xs text-muted-foreground leading-snug pl-12">{description}</p>
      )}
      <div className="pl-12 flex items-center">{action}</div>
   </div>
  )
}

