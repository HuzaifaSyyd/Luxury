"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const testimonials = [
  {
    id: 1,
    quote: "Whozaifa's attention to detail is unparalleled. Their leather jacket has become my signature piece.",
    author: "Alexandra Chen",
    title: "Fashion Editor",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    quote: "The fragrance collection from Whozaifa evokes memories of my travels through the Mediterranean.",
    author: "James Harrington",
    title: "Luxury Travel Blogger",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    quote: "Their yacht experience was beyond anything I could have imagined. Truly a once-in-a-lifetime memory.",
    author: "Sophia Mendez",
    title: "CEO, Altura Ventures",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 bg-[#0b0b0b]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center text-3xl font-light uppercase tracking-widest md:text-4xl"
        >
          Client Testimonials
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col rounded-lg border border-white/10 bg-black/30 p-6 backdrop-blur-sm"
            >
              <div className="mb-6 text-xl font-light italic text-white/80">"{testimonial.quote}"</div>

              <div className="mt-auto flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-white/60">{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
