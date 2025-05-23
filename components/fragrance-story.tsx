"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const fragrances = [
  {
    id: 1,
    name: "Midnight Oud",
    description: "A captivating blend of rare oud, amber, and sandalwood",
    notes: ["Oud", "Amber", "Sandalwood", "Vanilla", "Musk"],
    image: "/perfumes/Perfume1.jpeg",
  },
  {
    id: 2,
    name: "Velvet Rose",
    description: "Luxurious Bulgarian roses with hints of jasmine and patchouli",
    notes: ["Rose", "Jasmine", "Patchouli", "Bergamot", "Cedar"],
    image: "https://i.pinimg.com/736x/75/25/63/752563cc6edf0c650f2fb4bb5016bbf5.jpg",
  },
  {
    id: 3,
    name: "Amber Elixir",
    description: "Warm amber infused with vanilla and exotic spices",
    notes: ["Amber", "Vanilla", "Cinnamon", "Cardamom", "Tonka Bean"],
    image: "https://i.pinimg.com/736x/2f/82/25/2f82252747441ea99559e8343cd9c7c1.jpg",
  },
]

export default function FragranceStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 bg-[#0b0b0b]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-light uppercase tracking-widest md:text-4xl">Fragrance Story</h2>
          <p className="mx-auto max-w-2xl text-white/70">
            Each scent tells a story of rare ingredients sourced from around the world, crafted by master perfumers.
          </p>
        </motion.div>

        <div className="horizontal-scroll-container overflow-x-auto pb-8">
          <div className="flex w-max gap-8">
            {fragrances.map((fragrance, index) => (
              <motion.div
                key={fragrance.id}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="horizontal-scroll-item w-[300px] flex-shrink-0 overflow-hidden rounded-lg border border-white/10 bg-black/30 sm:w-[400px]"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={fragrance.image || "/placeholder.svg"}
                    alt={fragrance.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="mb-2 text-2xl font-medium">{fragrance.name}</h3>
                    <p className="text-sm text-white/70">{fragrance.description}</p>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-[#bfa77f]">Scent Notes</h4>
                  <div className="flex flex-wrap gap-2">
                    {fragrance.notes.map((note) => (
                      <span key={note} className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/70">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
