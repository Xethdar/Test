"use client"

import Link from "next/link"
import { TrendingUp, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

const generateToken = () => {
  return "st_" + Math.random().toString(36).substr(2, 9) + Date.now().toString(36)
}

export default function SurveyPage() {
  const [isVisible, setisVisible] = useState(false)

  const handleToken = () => {
    const token = generateToken()
    localStorage.setItem("slicktunnel_token", token)
    setHasToken(true)
  }

  useEffect(() => {
    // Load Tally embed script once on mount
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.onload = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Fixed/Sticky Header with Logo */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SlickTunnel</span>
          </Link>
          <Button variant="outline" asChild onClick={handleToken}>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="w-full max-w-4xl mx-auto pt-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tighter mb-4">Help Us Build Better Features</h1>
            <p className="text-muted-foreground text-lg mb-6">
              Your feedback is invaluable in shaping SlickTunnel. Please take a few minutes to share your thoughts and
              preferences.
            </p>
          </div>

          {/* Tally Form Container */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", minHeight: "620px", gap: "48px", paddingTop: "60px" }}>
            {/* Left Green Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <div style={{
                backgroundColor: "#00ff7f",
                height: "250px",
                width: "1px",
                position: "fixed",
                marginTop: "1.5rem"
              }} />
            </motion.div>

            {/* Center Form */}
            <iframe
              data-tally-src="https://tally.so/embed/mZKpjv?alignLeft=1&hideTitle=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="fit-content"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="SlickTunnel Alpha Feedback"
              style={{
                border: 'none',
                maxHeight: "2500px",
                scrollBehavior: "smooth",
                pointerEvents: "auto",
                maxWidth: "750px",
                borderRadius: "15px"
              }}
              onMouseEnter={() => setisVisible(true)}
              onMouseLeave={() => setisVisible(false)}
            ></iframe>

            {/* Right Green Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <div style={{
                backgroundColor: "#00ff7f",
                height: "250px",
                width: "1px",
                position: "fixed",
                marginTop: "1.5rem"
              }} />
            </motion.div>
          </div>

          {/* Additional Information */}
          <div className="text-center mt-8 mb-16">
            <p className="text-sm text-muted-foreground">
              This survey should take approximately 3-5 minutes to complete.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">SlickTunnel</span>
          </div>
          <div className="flex items-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} SlickTunnel. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
