import { MeshGrid } from "@/components/ui/abstract-shapes"

/**
 * Route-level loading skeleton shown inside <Suspense> while lazy-loaded
 * pages are being fetched. Uses a deliberately generic layout that avoids
 * mimicking any specific page structure — this prevents CLS when the real
 * content swaps in, since the skeleton doesn't commit to a particular
 * content shape that could cause layout shift.
 */
export function PageLoadingSkeleton() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center px-4 overflow-hidden bg-background text-foreground">
      <MeshGrid />
      <div className="w-full max-w-5xl mx-auto py-16 space-y-8">
        {/* Generic header shimmer — no fixed width ratios to avoid CLS mismatch */}
        <div className="space-y-4">
          <div className="h-10 w-48 rounded-xl bg-muted/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full animate-shimmer" />
          </div>
          <div className="h-4 w-72 rounded-md bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full animate-shimmer" />
          </div>
          <div className="h-3 w-full max-w-lg rounded bg-muted/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full animate-shimmer" />
          </div>
        </div>

        {/* Generic content area — matches the project-card grid that's common
            across Home and ProjectsPage to minimize CLS for the most frequent page */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-border bg-card/30 p-5 space-y-4 relative overflow-hidden">
              <div className="h-32 rounded-xl bg-muted/40 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full animate-shimmer" />
              </div>
              <div className="space-y-2.5">
                <div className="h-5 w-3/5 rounded bg-muted/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full animate-shimmer" />
                </div>
                <div className="h-3 w-full rounded bg-muted/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full animate-shimmer" />
                </div>
                <div className="h-3 w-4/5 rounded bg-muted/25 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full animate-shimmer" />
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <div className="h-6 w-14 rounded-full bg-muted/40 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full animate-shimmer" />
                </div>
                <div className="h-6 w-16 rounded-full bg-muted/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full animate-shimmer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
