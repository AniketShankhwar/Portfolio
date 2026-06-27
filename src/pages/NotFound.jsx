import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowLeft, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlobOne, BlobTwo, MeshGrid } from "@/components/ui/abstract-shapes"
import { SEO } from "@/components/layout/SEO"

export function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <SEO title="404 Page Not Found" description="The page you are looking for does not exist." />
      {/* Background decoration */}
      <MeshGrid />
      <BlobOne className="-top-20 -left-20 w-[400px] h-[400px] opacity-[0.16] dark:opacity-[0.1]" />
      <BlobTwo className="-bottom-20 -right-20 w-[450px] h-[450px] opacity-[0.14] dark:opacity-[0.08]" />

      <div className="relative z-10 text-center max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Main big 404 text with gradient */}
          <h1 className="font-number text-8xl sm:text-9xl tracking-tight text-gradient select-none">
            404
          </h1>
          
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Page Not Found
          </h2>
          
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            The page you are looking for doesn't exist or has been moved. Let's get you back on track.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default" className="glow-hover font-semibold gap-2">
              <Link to="/">
                <Home className="size-4" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="font-semibold gap-2">
              <Link to="/projects">
                View Projects
                <ArrowLeft className="size-4 rotate-180" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
