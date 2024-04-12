"use client"

import { AirbnbSpotlightButton } from "@/components/buttons/airbnb-spotlight-button"
import { SpotlightButton } from "@/components/buttons/spotlight-button"

export default function SpotlightButtonPage() {
  return (
    <main className="flex h-screen flex-col gap-12 items-center justify-center bg-slate-800 px-4">
      <SpotlightButton />
      <AirbnbSpotlightButton />
    </main>
  )
}
