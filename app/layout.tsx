import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Comic_Neue } from 'next/font/google';
import { Toaster } from 'sonner';
import ReactQueryProvider from './providers/TanstackQuery';

//Styles
import './Style/globals.css';

//Fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const comic_neue = Comic_Neue({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-comic-neue',
})



export const metadata: Metadata = {
  title: 'Spelling Bee',
  description: 'Sir John Spelling Bee Web App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${comic_neue.variable} text-xs md:text-sm xl:text-base text-textBlack`} suppressHydrationWarning>
        <ReactQueryProvider>
          {children}
          <Toaster theme="system" richColors={true} position="top-right" closeButton={true} />
        </ReactQueryProvider>
      </body>
    </html>
  )
}
