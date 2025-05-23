"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="/placeholder.svg?height=1080&width=1920"
      >
        <source
          src="/main.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-transparent"></div>

      <div className="container relative mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-5xl font-bold tracking-widest sm:text-5xl md:text-6xl lg:text-7xl"
        >
          WHOZAIFA<br className="hidden sm:block" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 max-w-xl text-sm font-light text-white/80"
        >
          Experience the pinnacle of craftsmanship and exclusivity in our digital showroom
        </motion.p>

      
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <div className="flex flex-col items-center">
          <span className="mb-2 text-xs uppercase tracking-widest text-white/60">Scroll to discover</span>
          <div className="h-16 w-[1px] bg-gradient-to-b from-white/60 to-transparent">
            <motion.div
              animate={{
                y: [0, 30, 0],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="h-4 w-full bg-white/60"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
