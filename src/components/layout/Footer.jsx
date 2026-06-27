import { Link } from "react-router-dom"
import { Mail, Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/data/portfolio"
import { GithubIcon, LinkedinIcon, LeetcodeIcon, GeeksforgeeksIcon, CodeforcesIcon } from "@/components/ui"
import { BlobOne } from "@/components/ui/abstract-shapes"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const emailAddress = siteConfig.links.email?.replace("mailto:", "") || "aniketshankhwar1531@gmail.com"

  return (
    <footer className="relative border-t border-border bg-muted/20 overflow-hidden" role="contentinfo">
      {/* Background soft blob for premium branding visual finish */}
      <BlobOne className="-bottom-40 -right-40 w-[500px] h-[500px] opacity-[0.12] dark:opacity-[0.08]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="max-w-xs">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight animate-fade-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 rounded-md" aria-label="Go to homepage">
              <img src="/logo_.png" alt="Aniket Shankhwar logo" className="h-9 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Full Stack Developer, building full-stack web apps from database to deployed URL.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-colors hover:scale-105 active:scale-95",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:rounded p-0.5"
                )}
                aria-label="GitHub"
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-colors hover:scale-105 active:scale-95",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:rounded p-0.5"
                )}
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="size-5" />
              </a>
              <a
                href={siteConfig.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-colors hover:scale-105 active:scale-95",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:rounded p-0.5"
                )}
                aria-label="LeetCode"
              >
                <LeetcodeIcon className="size-5" />
              </a>
              <a
                href={siteConfig.links.geeksforgeeks}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-colors hover:scale-105 active:scale-95",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:rounded p-0.5"
                )}
                aria-label="GeeksforGeeks"
              >
                <GeeksforgeeksIcon className="size-5" />
              </a>
              <a
                href={siteConfig.links.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-colors hover:scale-105 active:scale-95",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:rounded p-0.5"
                )}
                aria-label="Codeforces"
              >
                <CodeforcesIcon className="size-5" />
              </a>
              <a
                href={`mailto:${emailAddress}`}
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-colors hover:scale-105 active:scale-95",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:rounded p-0.5"
                )}
                aria-label="Email"
              >
                <Mail className="size-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation" className="md:ml-auto">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="md:ml-auto">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Get In Touch</h3>
            <address className="mt-4 not-italic text-sm text-muted-foreground space-y-3">
              <a
                href={`mailto:${emailAddress}`}
                className="flex items-center gap-2 hover:text-foreground transition-colors py-0.5"
              >
                <Mail className="size-4 text-primary" />
                {emailAddress}
              </a>
              <div className="flex items-center gap-2.5 py-0.5">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
                </span>
                <span>Open to opportunities</span>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            Built with
            <Heart className="text-primary size-3.5 fill-primary/20 animate-pulse" aria-hidden="true" />
            React, Tailwind, & Framer Motion
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link
              to="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
