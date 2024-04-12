"use client"

import { motion } from "framer-motion"
import { IconType } from "react-icons"

interface ServiceCardProps {
  title: string
  content: string
  icon: IconType
}

export function ServiceCard({ title, content, icon: Icon }: ServiceCardProps) {
  return (
    <motion.div
      whileHover="hover"
      className="bg-white min-h-40 border w-full shadow-md rounded-lg px-6 relative flex flex-col gap-4 justify-center"
    >
      <motion.div
        style={{
          left: 20,
        }}
        variants={{
          hover: {
            left: "calc(50% - 24px)",
          },
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="absolute -top-6 z-10 bg-gradient-to-b from-neutral-50 to-zinc-200 from-50% to-50% text-neutral-100 h-12 w-12 p-px rounded-full"
      >
        <div className="h-full w-full rounded-full border-4 border-neutral-50">
          <div className="flex items-center justify-center w-full h-full rounded-full bg-lime-500 p-2">
            <Icon className="size-10" />
          </div>
        </div>
      </motion.div>

      <p className="text-xl font-bold">{title}</p>
      <p className="text-pretty text-sm">{content}</p>
    </motion.div>
  )
}
