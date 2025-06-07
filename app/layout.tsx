import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SlickTunnel - Simplifying Bond Investments",
  description: "SlickTunnel makes investing in bonds accessible, transparent, and efficient.",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/SlicktunnelFavicon.png", sizes: "any" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* browser logo */}
        <link rel="icon" href="/SlicktunnelFavicon.png" />
        <link rel="shortcut icon" href="/SlicktunnelFavicon.png" />
        <link rel="apple-touch-icon" href="/SlicktunnelFavicon.png" />
        {/* browser logo */}
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
