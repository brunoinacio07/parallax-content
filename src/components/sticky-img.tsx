"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { IMG_PADDING } from "./text-parallax-content"

interface StickyImgProps {
  imgUrl: string
}

export function StickyImg({ imgUrl }: StickyImgProps) {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        style={{
          opacity,
        }}
        className="absolute inset-0 bg-neutral-950/60"
      />
    </motion.div>
  )
}
