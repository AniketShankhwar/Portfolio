import React from "react"
import { Button } from "@/components/ui/button"
import { BlobOne, BlobTwo, MeshGrid } from "@/components/ui/abstract-shapes"
import { RefreshCw, Home } from "lucide-react"

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-background text-foreground">
          <MeshGrid />
          <BlobOne className="-top-20 -left-20 w-[400px] h-[400px] opacity-[0.16] dark:opacity-[0.1]" />
          <BlobTwo className="-bottom-20 -right-20 w-[450px] h-[450px] opacity-[0.14] dark:opacity-[0.08]" />

          <div className="relative z-10 text-center max-w-md mx-auto space-y-6">
            <div className="space-y-3">
              <h1 className="font-display font-normal text-5xl tracking-tight text-gradient select-none">
                Something went wrong
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                An unexpected error occurred while rendering this page. Let's try reloading or heading back home.
              </p>
            </div>

            {this.state.error && (
              <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/10 text-left overflow-auto max-h-40 max-w-full">
                <pre className="font-mono text-xs text-red-400 leading-normal">
                  {this.state.error.toString()}
                </pre>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.reload()}
                variant="default"
                className="glow-hover font-semibold gap-2 cursor-pointer"
              >
                <RefreshCw className="size-4" />
                Reload Page
              </Button>
              <Button
                onClick={() => {
                  this.setState({ hasError: false, error: null })
                  window.location.href = "/"
                }}
                variant="outline"
                className="font-semibold gap-2 cursor-pointer"
              >
                <Home className="size-4" />
                Go Home
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
