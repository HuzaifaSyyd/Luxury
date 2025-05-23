"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useCart } from "@/components/cart-provider"

const categories = [
  {
    id: 1,
    title: "Leather Jackets",
    description: "Handcrafted with the finest Italian leather",
    image: "/Leather/leather6.jpeg",
    price: 2495,
  },
  {
    id: 2,
    title: "Signature Perfumes",
    description: "Exclusive fragrances for the discerning individual",
    image: "/perfumes/Perfume2.jpeg",
    price: 395,
  },
  {
    id: 3,
    title: "Luxury Experiences",
    description: "Curated moments that transcend the ordinary",
    image: "/perfumes/Perfume3.jpeg",
    price: 5000,
  },
  {
    id: 4,
    title: "Yacht Collection",
    description: "Maritime elegance for the connoisseur of freedom",
    image: "https://i.pinimg.com/736x/bd/e6/62/bde6624e5e211ad52119aa373ae3d11f.jpg",
    price: 250000,
  },
]

export default function FeaturedCategories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { addToCart } = useCart()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center text-3xl font-light uppercase tracking-widest md:text-4xl"
        >
          Featured Categories
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg bg-black/20 transition-all duration-500 hover:bg-black/40"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <h3 className="mb-2 text-xl font-medium">{category.title}</h3>
                <p className="mb-4 text-sm text-white/70">{category.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-light text-[#bfa77f]">${category.price.toLocaleString()}</span>
                  <button
                    onClick={() => addToCart({ ...category, quantity: 1 })}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs uppercase tracking-wider backdrop-blur-sm transition-all hover:border-[#bfa77f] hover:bg-[#bfa77f]/10 hover:text-[#bfa77f]"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
