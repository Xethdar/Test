"use client"

import { useState, useEffect } from "react"

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false) // prevents hydration mismatch

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Only run on client
    if (typeof window !== "undefined") {
      handleResize() // Initial check
      window.addEventListener("resize", handleResize)
      setMounted(true)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  return mounted ? isMobile : false
}
