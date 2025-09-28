'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Mehmet Bardakcı
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Geliştirici, Muallim, Müslim
        </TextEffect>
      </div>

    </header>
  )
}
