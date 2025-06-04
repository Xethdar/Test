"use client"

import Link from "next/link"
import { TrendingUp, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function SurveyPage() {

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
          <Button variant="outline" asChild>
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
          <iframe
          data-tally-src="https://tally.so/embed/3X1x8j?hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="fit-content"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="SlickTunnel Alpha Feedback"
          style={{ border: 'none', maxHeight: "2500px", scrollBehavior: "smooth", pointerEvents: "auto", maxWidth: "750px"}}
        ></iframe>

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
