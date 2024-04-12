"use client"

import { ReactNode } from "react"
import { OverlayCopy } from "./overlay-copy"
import { StickyImg } from "./sticky-img"

interface TextParallaxContentProps {
  imgUrl: string
  heading: string
  subHeading: string
  children: ReactNode
}

export const IMG_PADDING = 12

export function TextParallaxContent({
  imgUrl,
  heading,
  subHeading,
  children,
}: TextParallaxContentProps) {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImg imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subHeading={subHeading} />
      </div>
      {children}
    </div>
  )
}
