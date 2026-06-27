import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

export function BlobOne({ className, style }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      animate={
        shouldReduceMotion
          ? {}
          : {
              y: [0, -20, 0],
              rotate: [0, 45, 0],
              scale: [1, 1.05, 1],
            }
      }
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "absolute pointer-events-none -z-10 select-none blur-[80px] sm:blur-[100px] opacity-45 dark:opacity-30",
        className
      )}
      style={{
        ...style,
        willChange: "transform",
      }}
    >
      <div
        className="aspect-square w-full rounded-full bg-gradient-to-tr from-primary to-[oklch(0.30_0.04_0)]"
        style={{
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
        }}
      />
    </motion.div>
  )
}

export function BlobTwo({ className, style }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      animate={
        shouldReduceMotion
          ? {}
          : {
              y: [0, 20, 0],
              rotate: [0, -45, 0],
              scale: [1, 1.08, 1],
            }
      }
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "absolute pointer-events-none -z-10 select-none blur-[80px] sm:blur-[110px] opacity-40 dark:opacity-25",
        className
      )}
      style={{
        ...style,
        willChange: "transform",
      }}
    >
      <div
        className="aspect-square w-full rounded-full bg-gradient-to-bl from-[oklch(0.30_0.04_0)] to-primary/60"
        style={{
          borderRadius: "50% 40% 30% 70% / 50% 60% 40% 60%",
        }}
      />
    </motion.div>
  )
}

export function GradientOrb({ className, pulse = true, style }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      animate={
        pulse && !shouldReduceMotion
          ? {
              scale: [1, 1.12, 1],
              opacity: [0.35, 0.45, 0.35],
            }
          : {}
      }
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "absolute pointer-events-none -z-10 select-none rounded-full blur-[70px] sm:blur-[90px] bg-gradient-to-r from-primary/40 to-[oklch(0.22_0.04_0)/50]",
        className
      )}
      style={{
        ...style,
        willChange: "transform",
      }}
    />
  )
}

export function MeshGrid({ className, style }) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none -z-20 select-none opacity-[0.07] dark:opacity-[0.03] transition-opacity",
        className
      )}
      style={{
        ...style,
        backgroundImage: `radial-gradient(var(--border) 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
      }}
    />
  )
}
