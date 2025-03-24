import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
import PageTitle from '@/components/pageTitle'
import clientPromise from '@/lib/mongodb'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Projects of Oktario Mufti Yudha – Implementation of Backend and IoT Projects Developed Using Modern Technologies.',
  alternates: {
    canonical: '/projects',
  },
}

interface Project {
  name: string
  description: string
  liveLink: string | null
  previewImage: string
  repoUrl: string
}

export default async function Work() {
  const client = await clientPromise
  const db = client.db('portfolio')
  
  // Fetch projects dengan sorting
  const projects = await db
    .collection('projects')
    .find({})
    .sort({ order: 1 })
    .toArray()

  return (
    <div className="px-5 pb-10 pt-0">
      <PageTitle title="Projects" />
      <div className="pt-2">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {JSON.parse(JSON.stringify(projects)).map((project: Project, id: number) => (
            <div
              className="rounded-base border-2 border-border bg-main p-4 shadow-light dark:border-darkBorder dark:shadow-dark sm:p-5"
              key={id}
            >
              <AspectRatio
                className="!-bottom-[2px] overflow-hidden rounded-base border-2 border-border shadow-light dark:border-darkBorder dark:shadow-dark"
                ratio={71 / 26}
              >
                <Image
                  className="w-full rounded-base"
                  src={project.previewImage}
                  alt={project.name}
                  height={260}
                  width={710}
                  priority={id < 2}
                />
              </AspectRatio>

              <div className="mt-5 font-base text-text">
                <h2 className="text-xl font-heading sm:text-2xl">
                  {project.name}
                </h2>
                <p className="mt-2">{project.description}</p>

                <div className="mt-8 grid grid-cols-2 gap-5">
                  {project.liveLink ? (
                    <a
                      className="cursor-pointer rounded-base border-2 border-border bg-white px-4 py-2 text-center text-sm font-base shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText dark:shadow-dark dark:hover:shadow-none sm:text-base"
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit
                    </a>
                  ) : (
                    <button
                      className="translate-x-boxShadowX translate-y-boxShadowY cursor-not-allowed rounded-base border-2 border-border bg-gray-300 px-4 py-2 text-center text-sm font-base text-gray-600 shadow-none transition-all hover:shadow-none dark:border-darkBorder dark:bg-secondaryBlack dark:text-gray-400 sm:text-base"
                      disabled
                    >
                      Private Access
                    </button>
                  )}
                  <a
                    className="cursor-pointer rounded-base border-2 border-border bg-white px-4 py-2 text-center text-sm font-base shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText dark:shadow-dark dark:hover:shadow-none sm:text-base"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}