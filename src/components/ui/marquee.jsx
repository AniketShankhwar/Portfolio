import { cn } from "@/lib/utils"
import { AsteriskMark } from "@/components/ui/brand-marks"

/**
 * Marquee: full-bleed, infinite-loop horizontal strip used as a
 * section divider or footer accent. CSS-only animation (translateX
 * -50% loop), so it stays off the JS thread.
 *
 * prefers-reduced-motion: animation pauses via the
 * `@media (prefers-reduced-motion: reduce)` block in index.css,
 * which removes `.animate-marquee` entirely. The content remains
 * visible (just not scrolling).
 *
 * Two identical content groups are rendered back-to-back in a flex
 * row with NO gap between them. The -50% translateX animation then
 * scrolls exactly one group's width, creating a seamless loop.
 * Visual spacing between groups comes from each group's px-6 padding
 * (24px right pad of group 1 + 24px left pad of group 2 = 48px).
 *
 * ROOT CAUSE NOTE (from Round 5 diagnosis):
 * The previous version had `gap-12` on the outer flex, which added
 * 48px between the two groups. This made -50% of total width =
 * (group_width + 24px), NOT group_width. The 24px offset caused a
 * visible jump at every loop reset. Removing the gap fixes it.
 */
export function Marquee({
  items = DEFAULT_ITEMS,
  className,
  contentClassName,
}) {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={cn(
        "relative w-full overflow-hidden border-y border-border/40 bg-secondary py-4",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max animate-marquee items-center whitespace-nowrap",
          contentClassName
        )}
      >
        <MarqueeGroup items={items} />
        <MarqueeGroup items={items} />
      </div>
    </div>
  )
}

function MarqueeGroup({ items }) {
  return (
    <div
      aria-hidden="true"
      className="flex shrink-0 items-center gap-12 px-6"
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-6 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/90">
          <span>{item}</span>
          <AsteriskMark
            size={14}
            className="text-primary"
          />
        </span>
      ))}
    </div>
  )
}

const DEFAULT_ITEMS = [
  "Discuss your ideas",
  "Realise your ideas",
  "Enjoy the result",
  "Ship remarkable products",
  "Craft premium experiences",
]
