import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Mail, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { GithubIcon, LinkedinIcon, LeetcodeIcon, GeeksforgeeksIcon, CodeforcesIcon } from "@/components/ui"
import { siteConfig } from "@/data/portfolio"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState("dark")

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setMounted(true)
    const storedTheme = localStorage.getItem("theme") || "dark"
    setTheme(storedTheme)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
    localStorage.setItem("theme", nextTheme)
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
    } else {
      document.documentElement.classList.add("light")
      document.documentElement.classList.remove("dark")
    }
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: href } })
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  useEffect(() => {
    if (mounted && location.pathname === "/" && location.state?.scrollTo) {
      const href = location.state.scrollTo
      navigate(location.pathname, { replace: true, state: {} })

      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [location, mounted, navigate])

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 h-16" aria-label="Main navigation" />
    )
  }

  const emailAddress = siteConfig.links.email?.replace("mailto:", "") || "aniketshankhwar1531@gmail.com"

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300",
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/50 bg-gradient-to-b from-primary/5 via-transparent to-transparent"
          : "bg-transparent"
      )}
      aria-label="Main navigation"
    >
      <div className="mx-auto grid h-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 rounded-md px-1.5 py-0.5 justify-self-start"
          aria-label="Go to homepage"
        >
          <img src="/logo_.png" alt="Aniket Shankhwar logo" className="h-9 w-auto" />
        </Link>

        <div className="hidden md:flex md:items-center md:gap-8 justify-self-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground py-2 px-1.5 group/link focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 rounded-md"
            >
              {link.label}
              <span className="absolute bottom-0 left-1.5 right-1.5 h-[2px] bg-gradient-to-r from-primary to-primary/60 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left opacity-80 shadow-[0_0_8px_var(--primary)]" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex md:items-center md:gap-3 justify-self-end">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 rounded-full p-0.5"
            aria-label="GitHub"
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 rounded-full p-0.5"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="size-5" />
          </a>
          <a
            href={siteConfig.links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 rounded-full p-0.5 hidden lg:inline-flex"
            aria-label="LeetCode"
          >
            <LeetcodeIcon className="size-5" />
          </a>
          <a
            href={siteConfig.links.geeksforgeeks}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 rounded-full p-0.5 hidden lg:inline-flex"
            aria-label="GeeksforGeeks"
          >
            <GeeksforgeeksIcon className="size-5" />
          </a>
          <a
            href={siteConfig.links.codeforces}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 rounded-full p-0.5 hidden lg:inline-flex"
            aria-label="Codeforces"
          >
            <CodeforcesIcon className="size-5" />
          </a>

          <Separator orientation="vertical" className="h-4 bg-border hidden lg:block" />

          <Button
            variant="ghost"
            size="icon-sm"
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>

          <Button variant="outline" shape="pill" size="sm" asChild className="glow-hover font-medium focus-visible:ring-2 focus-visible:ring-primary/45">
            <a href={`mailto:${emailAddress}`}>
              <Mail className="mr-1.5 size-3.5" />
              Contact
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden col-start-3 justify-self-end">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>

          <button
            className="p-2 text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(
              "md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border",
              isScrolled ? "border-b border-border/50" : ""
            )}
          >
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-left px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45"
                >
                  {link.label}
                </a>
              ))}
              <Separator className="my-2" />
              <div className="flex flex-col gap-2 px-4">
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex items-center gap-3 px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45"
                >
                  <Mail className="size-5" />
                  {emailAddress}
                </a>
                <div className="flex items-center gap-6 px-4 py-2 mt-2">
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 rounded-full p-0.5"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="size-5" />
                  </a>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 rounded-full p-0.5"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="size-5" />
                  </a>
                  <a
                    href={siteConfig.links.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 rounded-full p-0.5"
                    aria-label="LeetCode"
                  >
                    <LeetcodeIcon className="size-5" />
                  </a>
                  <a
                    href={siteConfig.links.geeksforgeeks}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 rounded-full p-0.5"
                    aria-label="GeeksforGeeks"
                  >
                    <GeeksforgeeksIcon className="size-5" />
                  </a>
                  <a
                    href={siteConfig.links.codeforces}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 rounded-full p-0.5"
                    aria-label="Codeforces"
                  >
                    <CodeforcesIcon className="size-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
