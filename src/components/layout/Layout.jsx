import { Outlet, useLocation } from "react-router-dom"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

export function Layout() {
  const location = useLocation()
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 relative" id="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}