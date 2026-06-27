import { useEffect } from "react"
import { useScroll, useTransform, MotionValue } from "framer-motion"

export function useLenis() {
  useEffect(() => {
    let lenis = null

    const initLenis = async () => {
      const { default: Lenis } = await import("lenis")
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: false,
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }

    initLenis()

    return () => {
      if (lenis) lenis.destroy()
    }
  }, [])
}

export function useScrollProgress() {
  const { scrollYProgress } = useScroll()
  return scrollYProgress
}

export function useParallax(speed = 0.5) {
  const { scrollY } = useScroll()
  return useTransform(scrollY, (y) => y * speed)
}

export function useFadeInOut(threshold = 0.3) {
  const { scrollYProgress } = useScroll()
  return useTransform(scrollYProgress, [0, threshold, 1 - threshold, 1], [0, 1, 1, 0])
}

export function useScaleInOut(threshold = 0.3, maxScale = 1.1) {
  const { scrollYProgress } = useScroll()
  return useTransform(scrollYProgress, [0, threshold, 1 - threshold, 1], [1, 1, maxScale, maxScale])
}