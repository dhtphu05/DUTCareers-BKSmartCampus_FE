import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "DUTCareers - Nền tảng việc làm Đại học Bách khoa Đà Nẵng",
  description:
    "Kết nối Sự nghiệp - Kiến tạo Tương lai. Nền tảng việc làm chính thức dành cho sinh viên và cựu sinh viên DUT.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`${roboto.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
