"use client"

import { useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export function FullViewParallax() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const isInView = useInView(videoRef, {
    amount: "all",
  })
  const elVideo = videoRef.current

  useEffect(() => {
    if (isInView) {
      elVideo?.play()
    } else {
      elVideo?.pause()
    }
  }, [elVideo, isInView])

  return (
    <div className="w-full h-[200vh]">
      <video ref={videoRef} muted controls preload="auto" playsInline>
        <source
          src="https://media.graphassets.com/Gbe1sMPdSKiEm1NG8TSP"
          type="video/mp4"
        />
        <track
          label="Português"
          kind="subtitles"
          src="/legendas.vtt"
          srcLang="pt-BR"
          default
        />
      </video>
    </div>
  )
}
