"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

export default function Newsletter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send this to your API
    console.log("Submitted email:", email)
    setIsSubmitted(true)
    setEmail("")

    // Reset the submitted state after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section
      ref={ref}
      className="py-24 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-lg border border-white/10 bg-black/60 p-8 backdrop-blur-md md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="mb-4 text-3xl font-light uppercase tracking-widest">Join Our World</h2>
            <p className="mb-8 text-white/70">
              Subscribe to receive exclusive updates on new collections, limited editions, and private events.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="mx-auto max-w-md"
          >
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full border-b border-white/30 bg-transparent py-3 pr-36 text-white outline-none transition-all focus:border-[#bfa77f] placeholder:text-white/40"
              />

              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-[#bfa77f] bg-transparent px-6 py-2 text-sm uppercase tracking-wider text-[#bfa77f] transition-all hover:bg-[#bfa77f]/10"
              >
                {isSubmitted ? "Thank You" : "Subscribe"}
              </button>
            </div>

            <p className="mt-4 text-center text-xs text-white/50">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from Whozaifa.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
