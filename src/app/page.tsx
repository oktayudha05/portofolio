import Links from '@/components/links'
import Avatar from '@/components/avatar'
import RootLayout from './layout'

export default function Home() {
  return (
    <div className="px-5 pb-10 pt-0">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex items-center justify-center pb-12 md:hidden">
          <Avatar imageUrl="https://i.imgur.com/DvnOXHk.jpeg?resize=300:*" />
        </div>
        <div className="font-base">
          <h1 className="text-2xl font-heading sm:text-4xl">
            Oktario Mufti Yudha
          </h1>
          <p className="mt-2 text-lg sm:text-xl">Backend Developer</p>

          <div className="mt-8 text-base sm:text-lg">
            <p>
              Hi, my name is Oktario Mufti Yudha, backend engineer based in
              Magelang.
            </p>

            <p>
              Check the{' '}
              <a
                target="_blank"
                className="font-heading underline"
                href="https://github.com/oktayudha05/portofolio"
              >
                github repo
              </a>{' '}
              for more info.
            </p>
          </div>
          <Links />
        </div>

        <div className="hidden md:inline">
          <Avatar imageUrl="https://i.imgur.com/DvnOXHk.jpeg?resize=300:*" />
        </div>
      </div>
    </div>
  )
}
