/**
 * Brand marks: small precise SVG icons used as recurring brand symbols.
 * Distinct from `abstract-shapes.jsx` blobs (which are large, blurred ambient).
 * All marks use `currentColor` and inherit from text-color classes.
 * No new hues: only the existing copper accent and foreground are used.
 */

const cn = (...classes) => classes.filter(Boolean).join(" ")

/* SparkMark: 4-pointed concave-sided diamond/sparkle.
   Concave sides give it a "compass-rose sparkle" feel rather than a
   flat star. Filled with currentColor (copper/primary). */
export function SparkMark({ className, size = 24, "aria-label": ariaLabel }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("inline-block shrink-0", className)}
      aria-hidden={ariaLabel ? undefined : "true"}
      aria-label={ariaLabel}
    >
      <path d="M12 1 C 12 7 14 10 23 12 C 14 14 12 17 12 23 C 12 17 10 14 1 12 C 10 10 12 7 12 1 Z" />
    </svg>
  )
}

/* AsteriskMark: bold 8-point asterisk / cross.
   Four overlapping rotated diamonds give 8 visual arms.
   Used primarily as the marquee word separator. */
export function AsteriskMark({ className, size = 20, "aria-label": ariaLabel }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("inline-block shrink-0", className)}
      aria-hidden={ariaLabel ? undefined : "true"}
      aria-label={ariaLabel}
    >
      <path d="M12 2 L13.2 10.8 L22 12 L13.2 13.2 L12 22 L10.8 13.2 L2 12 L10.8 10.8 Z" />
    </svg>
  )
}

/* NodeMark: abstract builder/connection mark.
   One central dot + 3 short arms at 120-degree angles, evoking
   a network hub or molecular node. Communicates "builder/connector"
   without literal gear or code-bracket clichés. */
export function NodeMark({ className, size = 24, "aria-label": ariaLabel }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("inline-block shrink-0", className)}
      aria-hidden={ariaLabel ? undefined : "true"}
      aria-label={ariaLabel}
    >
      <circle cx="12" cy="12" r="3.5" />
      <rect x="11" y="1.5" width="2" height="7" rx="1" />
      <rect
        x="11"
        y="15.5"
        width="2"
        height="7"
        rx="1"
        transform="rotate(120 12 12)"
      />
      <rect
        x="11"
        y="15.5"
        width="2"
        height="7"
        rx="1"
        transform="rotate(240 12 12)"
      />
    </svg>
  )
}
