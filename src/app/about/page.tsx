import PageTitle from '@/components/pageTitle'
import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'
import clientPromise from '@/lib/mongodb'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Complete Profile of Oktario Mufti Yudha – A Backend Developer with Experience in Building Scalable Systems and IoT Solutions',
  alternates: {
    canonical: '/about',
  },
}

export default async function About() {
  const client = await clientPromise
  const db = client.db('portfolio')
  const experiences = await db
    .collection('experiences')
    .find({})
    .sort({ startDate: -1 })
    .toArray()

  return (
    <div className="px-5 pb-10 pt-0">
      <PageTitle title="About" />

      <div className="pt-2 font-base">
        <div className="mb-10 text-base sm:text-lg"></div>

        <Skills />
        <Experience experiences={JSON.parse(JSON.stringify(experiences))} />
      </div>
    </div>
  )
}