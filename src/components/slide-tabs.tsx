"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"

type Position = {
  left: number
  width: number
  opacity: number
}

export function SlideTabs() {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  })

  return (
    <ul
      onMouseLeave={() => {
        setPosition((prev) => ({
          ...prev,
          opacity: 0,
        }))
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Pricing</Tab>
      <Tab setPosition={setPosition}>Features</Tab>
      <Tab setPosition={setPosition}>Docs</Tab>
      <Tab setPosition={setPosition}>Blog</Tab>

      <Cursor position={position} />
    </ul>
  )
}

interface TabProps {
  children: string
  setPosition: (position: Position) => void
}

function Tab({ setPosition, children }: TabProps) {
  const ref = useRef<HTMLLIElement | null>(null)
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()

        setPosition({
          width: rect.width,
          left: ref.current.offsetLeft,
          opacity: 1,
        })
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  )
}

interface CursorProps {
  position: Position
}

function Cursor({ position }: CursorProps) {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  )
}
