import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Cosmo Base 宇宙用語集',
    default: 'Cosmo Base 宇宙用語集',
  },
  description: '宇宙業界の専門用語を初心者から実務者まで3段階で解説するCosmo Baseの宇宙用語集です。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
