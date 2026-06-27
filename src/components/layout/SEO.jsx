import { siteConfig } from "@/data/portfolio"

export function SEO({ title, description, image, canonicalUrl }) {
  const seoTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | ${siteConfig.title}`
  const seoDescription = description || siteConfig.description
  const seoImage = image || siteConfig.ogImage
  const seoUrl = canonicalUrl || siteConfig.url

  return (
    <>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={seoUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
    </>
  )
}
