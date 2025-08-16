"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { BarChart3, Shield, TrendingUp, ChevronDown, CheckCircle } from "lucide-react"
import { useActionState } from "react"
import { addToWaitlist } from "./actions"
import { Mail, ArrowLeft } from "lucide-react"
import * as motion from "motion/react-client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { useIsMobile } from "@/hooks/useIsMobile"

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

// Generate a simple token
const generateToken = () => {
  return "st_" + Math.random().toString(36).substr(2, 9) + Date.now().toString(36)
}

export default function LandingPage() {
  const [email, setEmail] = useState("")
  const [state, formAction, isPending] = useActionState(addToWaitlist, null)
  const [showThankYou, setShowThankYou] = useState(false)
  const [animateCheckmark, setAnimateCheckmark] = useState(false)
  const [hasToken, setHasToken] = useState(false)
  const [focus, setFocus] = useState<null | "founder1" | "founder2">(null)
  const isMobile = useIsMobile() // Fixed: removed array destructuring

  // Check for existing token on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("slicktunnel_token")
      if (token) {
        setHasToken(true)
      }
    }
  }, [])

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

        // Generate and store token
        if (typeof window !== "undefined") {
          const token = generateToken()
          localStorage.setItem("slicktunnel_token", token)
          setHasToken(true)
        }
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
    <>
      <div className="flex min-h-[100dvh] flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">SlickTunnel</span>
            </div>
            <nav className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection("features")} className="text-sm font-medium hover:text-primary">
                Features
              </button>

              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-sm font-medium hover:text-primary"
              >
                How It Works
              </button>

              <button onClick={() => scrollToSection("faq")} className="text-sm font-medium hover:text-primary">
                FAQ
              </button>

              <button onClick={() => scrollToSection("about-us")} className="text-sm font-medium hover:text-primary">
                About Us
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary">
                Contact Us
              </button>
            </nav>
            <div>
              <Button asChild>
                <button
                  onClick={() => ScrollToSectionCenter("waitlist")}
                  className="text-sm font-medium hover:text-primary"
                >
                  Get Started
                </button>
              </Button>
            </div>
          </div>
        </header>
        <main className="flex-1">
          <section className="w-full py-4 md:py-8 lg:py-12 xl:py-16">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Buying Bonds is Hard, We Want to Make it Easy
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      SlickTunnel wants to simplify and guide everyday people through buying one of the safest and
                      largest asset classes in the world— Bonds.
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
                  src="/CaptainBond.png?height=550&width=550"
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
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Choose SlickTunnel?</h2>
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
                        Most platforms use jargon and language meant to confuse everyday people. SlickTunnel explains
                        and displays data in an easy-to-understand interface.
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
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How SlickTunnel Works</h2>
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
                      We'll guide you through the process to buy your desired bonds, giving step by step instructions
                      throughout the journey. Monitor your portfolio performance with our intuitive dashboard.
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
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Add your Email</h2>
                  <p className="mx-auto max-w-[700px] md:text-xl/relaxed opacity-90">
                    Be among the first to access our platform when we launch. Early members will have a say in how our
                    platform develops
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  {showThankYou || hasToken ? (
                    <div className="flex flex-col items-center justify-center space-y-6 py-0">
                      {showThankYou && (
                        <div
                          className={`transition-all duration-1000 ${animateCheckmark ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
                          style={{ display: "flex" }}
                        >
                          <CheckCircle className="h-24 w-24 text-green-300" />
                        </div>
                      )}
                      <h3 className="text-2xl font-bold">
                        {showThankYou ? "Thank you for joining!" : "Welcome back!"}
                      </h3>
                      <div className="pt-4 space-y-3">
                        <Button
                          asChild
                          variant="outline"
                          size="lg"
                          className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary border-white"
                        >
                          <Link href="/news">Get Started</Link>
                        </Button>
                        {hasToken && !showThankYou && (
                          <div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setShowThankYou(false)
                                setHasToken(false)
                              }}
                              className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                            >
                              Add a new Email
                            </Button>
                          </div>
                        )}
                      </div>
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
                  {!showThankYou && !hasToken && (
                    <p className="text-xs opacity-80">We respect your privacy. No spam, ever.</p>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section id="about-us" className="w-full py-12 md:py-22 lg:py-32">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left: Mission Statement */}
              <div>
                <h3 className="text-sm text-green-400 font-semibold uppercase mb-2">Our mission</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-green-300 leading-tight">
                  Liberating the Bond Market & Bringing Bonds back to the people
                </h2>
              </div>

              {/* Right: About Content */}
              <div className="space-y-6 text-sm md:text-base text-gray-300">
                <div>
                  <h4 className="text-green-400 font-semibold text-sm uppercase mb-2">About us</h4>
                  <p>SlickTunnel is a guidance platform built to democratize access to fixed-income investing.</p>
                </div>

                <p>
                  Bonds offer a stable, low-risk way to grow your money, with predictable returns and regular interest payments. They’re part of a larger, safer market than stocks and help diversify your portfolio. Whether you're saving for a goal or seeking passive income, bonds are a smart, long-term investment often overlooked in today’s high-risk market.
                </p>
              </div>
            </div>
            <section className="w-full py-16 pl-0 md:pl-24 bg-black text-white flex flex-col md:flex-row">
              {/* LEFT SIDE (founders) */}
              <div className="w-full md:w-1/2 px-4 md:pl-20 md:pr-0 space-y-12 mx-auto">
  <div
    className={`flex flex-col md:flex-row gap-10 items-center md:items-start`}
  >
    {/* Founder 1 */}
    <div className="flex flex-col items-center md:items-start">
      <motion.div
        onMouseEnter={() => !isMobile && setFocus("founder1")}
        onMouseLeave={() => !isMobile && setFocus(null)}
        animate={{
          x: isMobile ? 0 : focus === "founder2" ? 0 : 0,
        }}
        transition={{ type: "tween", duration: 0.4 }}
        className="relative w-[180px] h-[260px] md:w-[200px] md:h-[300px] border-4 border-green-400 rounded-md z-10"
      >
        <img
          src="/MacauleySlicktunnelPic.png"
          alt="Founder 1"
          className="w-full h-full object-cover"
        />

        {/* Desktop hover card */}
        {!isMobile && (
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: focus === "founder1" ? 210 : 0 }}
            transition={{ type: "tween", duration: 0.4 }}
            className="absolute top-0 left-0 h-full"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: focus === "founder1" ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="w-[300px] h-full bg-zinc-900 border border-green-500 rounded-md px-6 py-8 text-left text-sm text-white shadow-xl"
            >
              <h4 className="text-green-300 font-bold text-lg mb-2">
                Macauley Barnhardt
              </h4>
              <p>
                Founder & CTO. Violinist, 3D Graphic Designer, and Web Designer.
                Deeply passionate about technology and creativity. Built
                websites as a kid, created an AI chatbot, and developed
                impressive Blender projects.
              </p>
            </motion.div>
          </motion.div>
        )}
      </motion.div>

      {/* Mobile static text */}
      {isMobile && (
        <div className="mt-4 w-full max-w-xs bg-zinc-900 border border-green-500 rounded-md px-4 py-4 text-left text-sm text-white shadow-md">
          <h4 className="text-green-300 font-bold text-lg mb-2">Macauley</h4>
          <p>
            Founder & CTO. Violinist, 3D Graphic Designer, and Web Designer.
            Passionate about tech and design. Built an AI chatbot, websites,
            and numerous Blender projects.
          </p>
        </div>
      )}
    </div>

    {/* Founder 2 */}
    <div className="flex flex-col items-center md:items-start">
      <motion.div
        onMouseEnter={() => !isMobile && setFocus("founder2")}
        onMouseLeave={() => !isMobile && setFocus(null)}
        animate={{
          x: isMobile
            ? 0
            : focus === "founder1"
            ? 290
            : focus === "founder2"
            ? 0
            : 0,
        }}
        transition={{ type: "tween", duration: 0.4 }}
        className="relative w-[180px] h-[260px] md:w-[200px] md:h-[300px] border-4 border-green-400 rounded-md z-10"
      >
        <img
          src="/PremSlicktunnelPic.png"
          alt="Founder 2"
          className="w-full h-full object-cover"
        />

        {/* Desktop hover card */}
        {!isMobile && (
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: focus === "founder2" ? 210 : 0 }}
            transition={{ type: "tween", duration: 0.4 }}
            className="absolute top-0 left-0 h-full"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: focus === "founder2" ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="w-[300px] h-full bg-zinc-900 border border-green-500 rounded-md px-6 py-8 text-left text-sm text-white shadow-xl"
            >
              <h4 className="text-green-300 font-bold text-lg mb-2">Prem Jain</h4>
              <p>
                Founder & CEO. Dedicated to solving fundamental problems facing
                humanity. Conceived the SlickTunnel idea after seeing flaws in
                the bond market firsthand. Known for never compromising on
                principles.
              </p>
            </motion.div>
          </motion.div>
        )}
      </motion.div>

      {/* Mobile static text */}
      {isMobile && (
        <div className="mt-4 w-full max-w-xs bg-zinc-900 border border-green-500 rounded-md px-4 py-4 text-left text-sm text-white shadow-md">
          <h4 className="text-green-300 font-bold text-lg mb-2">Prem Jain</h4>
          <p>
            Co-founder of SlickTunnel. Backend and operations expert, keeping
            everything running smoothly even under pressure.
          </p>
        </div>
      )}
    </div>
  </div>
</div>

              {/* RIGHT SIDE headline (desktop only) */}
              {!isMobile && (
                <div className="w-1/2 hidden md:flex flex-col justify-center items-start pr-6 pl-4">
                  <div className="ml-0">
                    <p className="text-green-400 text-sm font-semibold tracking-widest mb-2 uppercase">Our Team</p>
                    <h3 className="text-5xl font-bold text-green-400 whitespace-nowrap">We Are Locked In</h3>
                  </div>
                </div>
              )}
            </section>
          </section>

          <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    FAQ
                  </div>
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
      </div>
      <section
  id="contact"
  className="w-full scroll-mt-24 py-12 md:py-24 lg:py-32 bg-black">
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
        <div className="relative h-[200px] w-[200px] rounded-lg border-4 border-green-400">
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
        <div className="relative h-[200px] w-[200px] rounded-lg border-4 border-green-400">
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

    <div className="mx-auto max-w-3xl space-y-12 text-center">
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
        <div className="flex justify-center space-x-4">{/* Social media icons */}</div>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary border-white"
        >
          <button
            onClick={() => {
              if (hasToken) {
                window.location.href = "/survey"
              } else {
                document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Share your Feedback and Ideas
          </button>
        </Button>
      </div>
    </div>
  </div>
</section>
      <footer className="w-full border-t bg-background">
  <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-center md:py-12">
    {/* Left logo */}
    <div className="flex items-center gap-2 md:absolute md:left-8">
      <TrendingUp className="h-6 w-6 text-primary" />
      <span className="text-xl font-bold">SlickTunnel</span>
    </div>

    {/* Center nav */}
    <nav className="flex gap-4 sm:gap-6 justify-center">
      <button onClick={() => scrollToSection("features")} className="text-sm font-medium hover:text-primary">
        Features
      </button>
      <button onClick={() => scrollToSection("how-it-works")} className="text-sm font-medium hover:text-primary">
        How It Works
      </button>
      <button onClick={() => scrollToSection("faq")} className="text-sm font-medium hover:text-primary">
        FAQ
      </button>
      <button onClick={() => scrollToSection("about-us")} className="text-sm font-medium hover:text-primary">
        About Us
      </button>
      <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary">
        Contact Us
      </button>
    </nav>

    {/* Right copyright */}
    <div className="flex items-center md:absolute md:right-8">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} SlickTunnel. All rights reserved.
      </p>
    </div>
  </div>
</footer>

    </>
  )
}

const faqItems = [
  {
    question: "What types of bonds can I invest in through SlickTunnel?",
    answer:
      "SlickTunnel offers data on a wide range of bonds including government bonds, corporate bonds, municipal bonds, and treasury securities. Our platform is built to offer investments to a variety of risk apetities and investment goals. SlickTunnel is not a bank, broker, or issuer of bonds; We simply collect and host data regarding bonds, display it in a digestible and understandable fashion, and guide users through the process up until purchase.",
  },
  {
    question: "What are the minimum investment requirements?",
    answer:
      "SlickTunnel does not have any investment requirements. This may vary based on the broker, issuer, or entity selling the bond. ",
  },
  {
    question: "How does SlickTunnel ensure the security of my investments?",
    answer:
      "SlickTunnel only works with trusted and credible brokers and institutions, We do not conduct transactions but work with partners with strong user security on their platforms. To keep you informed , we also  ",
  },
  {
    question: "When will SlickTunnel officially launch?",
    answer: "Very Soon. We'll email you. ",
  },
  {
    question: "What fees does SlickTunnel charge?",
    answer:
      "We plan to make our income by gaining a small commission from brokerages if a sale happens through us. This will be at zero cost to the user.",
  },
]
