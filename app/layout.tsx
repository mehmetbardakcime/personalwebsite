import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://mehmetbardakci.me/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Mehmet Bardakcı',
    template: ''
  },
  description: 'Bu websitesi Mehmet Bardakcı nın kişisel websitedir. Yazlım, teknoloji, uzay, arkeoloji, tarih gibi alanlarda paylaşımlar yapılmaktadır.',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode 
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`   bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
