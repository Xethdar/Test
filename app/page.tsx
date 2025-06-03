"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { BarChart3, Shield, TrendingUp, ChevronDown, CheckCircle } from "lucide-react"
import { useActionState } from "react"
import { addToWaitlist } from "./actions"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth" })
  }
}

const ScrollToSectionCenter = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" })
  }
}

export default function LandingPage() {
  const [email, setEmail] = useState("")
  const [state, formAction, isPending] = useActionState(addToWaitlist, null)
  const [showThankYou, setShowThankYou] = useState(false)
  const [animateCheckmark, setAnimateCheckmark] = useState(false)

  // Show toast notification when state changes
  useEffect(() => {
    if (state) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        })
        // Clear email input on success
        setEmail("")
        setShowThankYou(true)
        setAnimateCheckmark(true)
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        })
      }
    }
  }, [state])

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SlickTunnel</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection("features")} className="text-sm font-medium hover:text-primary">
              Features
            </button>

            <button onClick={() => scrollToSection("how-it-works")} className="text-sm font-medium hover:text-primary">
              How It Works
            </button>

            <button onClick={() => scrollToSection("faq")} className="text-sm font-medium hover:text-primary">
              FAQ
            </button>
          </nav>
          <div>
            <Button asChild>
              <button
                onClick={() => ScrollToSectionCenter("waitlist")}
                className="text-sm font-medium hover:text-primary"
              >
                Join Waitlist
              </button>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Buying Bonds is Hard, We Want to Make it Easy
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    SlickTunnel wants to simplify and guide everyday people through buying one of the safest and largest
                    asset classes in the world— bonds.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <button
                      onClick={() => ScrollToSectionCenter("waitlist")}
                      className="text-sm font-medium hover:text-primary"
                    >
                      Join Waitlist
                    </button>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <button
                      onClick={() => scrollToSection("features")}
                      className="text-sm font-medium hover:text-primary"
                    >
                      Learn More
                    </button>
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Bond Investment Dashboard"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Choose Slicktunnel?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Our platform is designed to make bond investing simple, transparent, and accessible to everyone.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Digestable Information</h3>
                    <p className="text-muted-foreground">
                      Most platforms use jargon and language meant to confuse everyday people. SlickTunnel explains and
                      displays data in an easy-to-understand interface.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Simplified Guidance</h3>
                    <p className="text-muted-foreground">
                      We'll take you through the process of buying a bond, start to finish--handholding throughout the
                      process.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Diversified Portfolio</h3>
                    <p className="text-muted-foreground">
                      Access to a wide range of bonds from government, corporate, and municipal issuers. We aggregate
                      from many different sources; displaying all sorts of bonds on one platform.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Secure Investments</h3>
                    <p className="text-muted-foreground">
                      In volatile times like these, bonds are a great alternative for those seeking stability in their
                      investments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How Slicktunnel Works</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Our streamlined process makes bond investing accessible to everyone.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12">
              <div className="grid gap-12 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Create Account</h3>
                  <p className="text-muted-foreground">
                    Sign up and complete your investor profile to get personalized recommendations.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Browse Bonds</h3>
                  <p className="text-muted-foreground">
                    Explore our curated selection of bonds with detailed information and risk assessments.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Invest & Track</h3>
                  <p className="text-muted-foreground">
                    Purchase bonds and monitor your portfolio performance with our intuitive dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="waitlist" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join Our Waitlist</h2>
                <p className="mx-auto max-w-[700px] md:text-xl/relaxed opacity-90">
                  Be among the first to access our platform when we launch. Early members will receive exclusive
                  benefits.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                {showThankYou ? (
                  <div className="flex flex-col items-center justify-center space-y-6 py-8">
                    <div
                      className={`transition-all duration-1000 ${animateCheckmark ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
                    >
                      <CheckCircle className="h-24 w-24 text-green-300" />
                    </div>
                    <h3 className="text-2xl font-bold">Thank you for joining!</h3>
                    <p className="text-lg opacity-90">
                      We'll keep you updated on our launch and exclusive early access opportunities.
                    </p>
                  </div>
                ) : (
                  <form action={formAction} className="flex flex-col gap-2 sm:flex-row">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="max-w-lg flex-1 bg-primary-foreground text-background"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button type="submit" variant="secondary" disabled={isPending}>
                      {isPending ? "Submitting..." : "Join Now"}
                    </Button>
                  </form>
                )}
                {!showThankYou && <p className="text-xs opacity-80">We respect your privacy. No spam, ever.</p>}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Beta Users Say</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-between gap-4 rounded-lg border p-6">
                <div>
                  <p className="text-muted-foreground">
                    "Slicktunnel has transformed how I approach fixed income investments. The platform is intuitive and
                    provides all the information I need to make informed decisions."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted p-1">
                    <div className="h-8 w-8 rounded-full bg-gray-200" />
                  </div>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Financial Advisor</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-4 rounded-lg border p-6">
                <div>
                  <p className="text-muted-foreground">
                    "As someone new to bond investing, I found Slicktunnel incredibly accessible. The educational
                    resources and user-friendly interface made it easy to get started."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted p-1">
                    <div className="h-8 w-8 rounded-full bg-gray-200" />
                  </div>
                  <div>
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Retail Investor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-12">
              {faqItems.map((item, index) => (
                <div key={index} className="rounded-lg border bg-background p-6">
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between font-medium">
                      {item.question}
                      <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="mt-4 text-muted-foreground">{item.answer}</p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Slicktunnel</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Contact
            </Link>
          </nav>
          <div className="flex items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Slicktunnel. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const faqItems = [
  {
    question: "What types of bonds can I invest in through Slicktunnel?",
    answer:
      "Slicktunnel offers access to a wide range of bonds including government bonds, corporate bonds, municipal bonds, and treasury securities. Our platform is designed to provide options for different risk appetites and investment goals.",
  },
  {
    question: "What are the minimum investment requirements?",
    answer:
      "Our platform is designed to make bond investing accessible with lower minimum investments than traditional channels. You can start investing with as little as $100 for certain bond offerings.",
  },
  {
    question: "How does Slicktunnel ensure the security of my investments?",
    answer:
      "We implement bank-level security protocols, including 256-bit encryption, two-factor authentication, and regular security audits. All investments are held in segregated accounts and are SIPC insured up to applicable limits.",
  },
  {
    question: "When will Slicktunnel officially launch?",
    answer:
      "We're currently in the final stages of development and regulatory approval. We expect to launch in Q3 2023. Join our waitlist to be notified when we go live and to receive early access.",
  },
  {
    question: "What fees does Slicktunnel charge?",
    answer:
      "We believe in transparent pricing. Slicktunnel charges a small commission on bond transactions (typically 0.1-0.3% depending on bond type) and no management fees for holding bonds in your portfolio.",
  },
]
