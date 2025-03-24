import { MetadataRoute } from 'next'
import clientPromise from '@/lib/mongodb'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = await clientPromise
  const db = client.db('portfolio')
  
  const baseUrl = 'https://oyudha.me'
  
  const [projects, experiences] = await Promise.all([
    db.collection('projects').find({}).toArray(),
    db.collection('experiences').find({}).toArray()
  ])

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    
    ...projects.map(project => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: project.updatedAt ? new Date(project.updatedAt) : new Date(),
      priority: 0.7,
    })),
    
    ...experiences.map(exp => ({
      url: `${baseUrl}/experience/${exp.slug}`,
      lastModified: exp.startDate ? new Date(exp.startDate) : new Date(),
      priority: 0.6,
    }))
  ]
}