"use client"

import Link from "next/link"
import { Mail, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/useIsMobile"

export default function ContactPage() {
  const isMobile = useIsMobile()

  return (
    <div className="flex min-h-[100dvh] flex-col bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5 text-green-400" />
              <span className="text-xl font-bold">Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-400">Contact Us</h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed">
                  Have questions about SlickTunnel? We're here to help. Reach out to our team directly.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-10 py-12 md:grid-cols-2">
              {/* Prem Contact Card */}
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-green-500/30 bg-zinc-900 p-6">
                <div className="relative h-[200px] w-[200px] overflow-hidden rounded-lg border-4 border-green-400">
                  <img src="/PremSlicktunnelPic.png" alt="Prem Jain" className="h-full w-full object-cover" />
                </div>
                <div className="space-y-2 text-center">
                  <h2 className="text-2xl font-bold text-green-400">Prem Jain</h2>
                  <p className="text-gray-300">Founder & CEO</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-green-400" />
                  <a href="mailto:Prem@slicktunnel.com" className="text-green-300 hover:text-green-200">
                    Prem@slicktunnel.com
                  </a>
                </div>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <a href="mailto:Prem@slicktunnel.com">Send Email</a>
                </Button>
              </div>

              {/* Macauley Contact Card */}
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-green-500/30 bg-zinc-900 p-6">
                <div className="relative h-[200px] w-[200px] overflow-hidden rounded-lg border-4 border-green-400">
                  <img
                    src="/MacauleySlicktunnelPic.png"
                    alt="Macauley Barnhardt"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h2 className="text-2xl font-bold text-green-400">Macauley Barnhardt</h2>
                  <p className="text-gray-300">Founder & CTO</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-green-400" />
                  <a href="mailto:Macauley@slicktunnel.com" className="text-green-300 hover:text-green-200">
                    Macauley@slicktunnel.com
                  </a>
                </div>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <a href="mailto:Macauley@slicktunnel.com">Send Email</a>
                </Button>
              </div>
            </div>

            <div className="mx-auto max-w-3xl space-y-8 text-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-green-400">General Inquiries</h2>
                <p className="text-gray-300">
                  For general questions, partnership opportunities, or other inquiries, please reach out to us at:
                </p>
                <div className="flex justify-center items-center space-x-2">
                  <Mail className="h-5 w-5 text-green-400" />
                  <a href="mailto:info@slicktunnel.com" className="text-green-300 hover:text-green-200">
                    info@slicktunnel.com
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-green-400">Connect With Us</h2>
                <p className="text-gray-300">
                  Follow us on social media for the latest updates, bond market insights, and more.
                </p>
                <div className="flex justify-center space-x-4">{/* Social media icons would go here */}</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-gray-800 bg-black">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-green-400">SlickTunnel</span>
          </div>
          <div className="flex items-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} SlickTunnel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
