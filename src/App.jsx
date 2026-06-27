import React, { Suspense, lazy } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "@/components/layout/Layout"
import { useLenis } from "@/hooks/useLenis"
import { PageLoadingSkeleton } from "@/components/ui/loading-skeleton"

// Lazy load pages for chunk-based skeleton loading
const Home = lazy(() => import("@/pages/Home").then(m => ({ default: m.Home })))
const ProjectsPage = lazy(() => import("@/pages/ProjectsPage").then(m => ({ default: m.ProjectsPage })))
const NotFound = lazy(() => import("@/pages/NotFound").then(m => ({ default: m.NotFound })))

function App() {
  useLenis()

  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoadingSkeleton />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<ProjectsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App