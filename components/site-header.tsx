"use client"

import Link from "next/link"
import { BookOpen } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/glossary" className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          <span className="font-bold text-foreground">Cosmo Base 宇宙用語集</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <a
            href="https://cosmo-base.jp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            公式サイト
          </a>
          <a
            href="https://x.com/CosmoBase"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            X
          </a>
        </nav>
      </div>
    </header>
  )
}
