import type { Metadata } from 'next'
import { Montserrat, Archivo } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import { ViewTransitions } from 'next-view-transitions'
import { ThemeProvider } from '@/components/theme-provider'
import Loading from './loading'
import { Suspense } from 'react'
import clientPromise from '@/lib/mongodb'

const montserrat = Montserrat({ subsets: ['latin'] })
const archivo = Archivo({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const client = await clientPromise
  const db = client.db('portfolio')
  const siteData = await db.collection('home').findOne({})

  const defaultMetadata = {
    title: 'Oktario Mufti Yudha | Portfolio',
    description:
      'Portfolio Oktario Mufti Yudha - Backend Developer and IoT Engineer',
  }

  return {
    metadataBase: new URL('https://oyudha.me'),
    title: {
      template: `${siteData?.name || 'Oktario Mufti Yudha'}` + ` | %s`,
      default: siteData?.name
        ? `${siteData.name} | Portfolio`
        : defaultMetadata.title,
    },
    description: siteData?.metaDescription || defaultMetadata.description,
    alternates: {
      canonical: '/',
    },
    icons: {
      icon: siteData?.favicon || '/icon.png',
      apple: siteData?.appleTouchIcon || '/apple-touch-icon.png',
      shortcut: siteData?.favicon || '/favicon-32x32.png',
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://oyudha.me',
      siteName: siteData?.name || 'Oktario Mufti Yudha',
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${montserrat.className} ${archivo.className} inset-0 flex min-h-screen w-full flex-col items-center justify-center border-b-2 border-b-border bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base dark:border-b-darkBorder dark:bg-secondaryBlack`}
        >
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <Suspense fallback={<Loading />}>
              <Navbar />
              <div className="mx-auto w-[750px] max-w-full text-text dark:text-darkText md:w-[1000px]">
                {children}
              </div>
            </Suspense>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}