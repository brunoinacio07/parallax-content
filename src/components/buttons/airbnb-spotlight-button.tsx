"use client"

import { useEffect, useRef } from "react"

export function AirbnbSpotlightButton() {
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const spanRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const { width } = (e.target as HTMLElement)?.getBoundingClientRect()
      const offset = e.offsetX

      const left = `${(offset / width) * 100}%`

      spanRef.current?.animate({ left }, { duration: 500, fill: "forwards" })
    }

    function handleMouseLeave(e: MouseEvent) {
      spanRef.current?.animate(
        { left: 0 },
        { duration: 1000, fill: "forwards" }
      )
    }

    buttonRef.current?.addEventListener("mousemove", handleMouseMove)

    buttonRef.current?.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      buttonRef.current?.removeEventListener("mousemove", handleMouseMove)
      buttonRef.current?.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <button
      ref={buttonRef}
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-airbnb backdrop-blur-xl px-4 py-3 text-lg font-medium text-white"
    >
      <span className="pointer-events-none relative z-10">Hover me</span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-0 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-gradient blur-lg"
      />
    </button>
  )
}
