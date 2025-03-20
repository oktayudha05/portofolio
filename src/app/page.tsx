import Links from '@/components/links'
import Avatar from '@/components/avatar'
import clientPromise from '@/lib/mongodb'

export default async function Home() {
  const client = await clientPromise
  const db = client.db('portfolio')
  const homeData = await db.collection('home').findOne({})

  return (
    <div className="px-5 pb-10 pt-0">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex items-center justify-center pb-12 md:hidden">
          <Avatar
            imageUrl={
              homeData?.avatarUrl ||
              'https://i.imgur.com/Za4chnq.jpeg?resize=300:*'
            }
          />
        </div>

        <div className="font-base">
          <h1 className="text-2xl font-heading sm:text-4xl">
            Oktario Mufti Yudha
          </h1>
          <p className="mt-2 text-lg sm:text-xl">{homeData?.title}</p>

          <div className="mt-8 text-base sm:text-lg">
            {homeData?.description1 && <p>{homeData.description1}</p>}
            {homeData?.description2 && <p>{homeData.description2}</p>}
          </div>

          <Links />
        </div>

        <div className="hidden md:inline">
          <Avatar
            imageUrl={
              homeData?.avatarUrl ||
              'https://i.imgur.com/Za4chnq.jpeg?resize=300:*'
            }
          />
        </div>
      </div>
    </div>
  )
}