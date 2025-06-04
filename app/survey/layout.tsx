import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Survey - SlickTunnel",
  description: "Help us build better features for SlickTunnel by sharing your feedback and preferences.",
}

export default function SurveyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
