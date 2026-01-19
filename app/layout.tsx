import type React from "react"
import type { Metadata } from "next"
import { Zen_Kaku_Gothic_New, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { imagePath } from "@/lib/utils"
import "./globals.css"

const _zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lamech(レメク) | 信頼できるITパートナー",
  description:
    "誰よりも丁寧な対話で、ITの「難しい」を「価値」に変える。アプリ開発を通じて組織の自走を支える伴走型ITパートナーです。",
  generator: "v0.app",
  icons: {
    icon: imagePath("/images/favicon.ico"),
    shortcut: imagePath("/images/favicon.ico"),
    apple: imagePath("/images/favicon.ico"),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
