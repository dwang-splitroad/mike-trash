import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mikestrash.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/residential',
    '/dumpsters',
    '/bulk-pickup',
    '/roll-offs',
    '/holiday-calendar',
    '/faq',
    '/about',
    '/contact',
    '/services',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' as const : (route === 'holiday-calendar' ? 'monthly' as const : 'weekly' as const),
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
