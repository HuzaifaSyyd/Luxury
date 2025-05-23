"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Sample product data
const products = [
  {
    id: 3,
    name: "Midnight Oud Perfume",
    price: 395,
    image: "/perfumes/perfume1.jpeg",
  },
  {
    id: 4,
    name: "Amber Elixir Perfume",
    price: 295,
    image: "/perfumes/perfume2.jpeg",
  },
  {
    id: 13,
    name: "Cedar & Vetiver Cologne",
    price: 245,
    image: "/perfumes/perfume3.jpeg",
  },
  {
    id: 14,
    name: "Spiced Tobacco Perfume",
    price: 325,
    image: "/perfumes/perfume4.jpeg",
  },
  {
    id: 15,
    name: "Leather & Musk Fragrance",
    price: 375,
    image: "/perfumes/perfume5.jpeg",
  },
  {
    id: 16,
    name: "Citrus Noir Cologne",
    price: 285,
    image: "/perfumes/perfume6.jpeg",
  },
]

export default function MensPerfumesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0b0b0b]">
        <section className="relative flex h-[50vh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/50"></div>
          <img
            src="https://i.pinimg.com/736x/a0/08/c6/a008c6b4b1099fef08e3047d463d61fc.jpg"
            alt="Men's Perfume Collection"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-4xl font-bold tracking-wider md:text-5xl"
            >
              MEN'S FRAGRANCES
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-xl text-lg text-white/80"
            >
              Exclusive scents crafted by master perfumers for the modern gentleman
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
              <div>
                <h2 className="text-3xl font-bold">Our Collection</h2>
                <p className="text-white/70">Discover our exclusive range of men's fragrances</p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/mens"
                  className="rounded-full border border-white/30 px-6 py-2 text-sm uppercase tracking-wider text-white transition-all hover:border-white/50"
                >
                  All Men's
                </Link>
                <Link
                  href="/mens/leather"
                  className="rounded-full border border-white/30 px-6 py-2 text-sm uppercase tracking-wider text-white transition-all hover:border-white/50"
                >
                  Men's Leather
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group overflow-hidden rounded-lg bg-white/5 transition-all duration-300 hover:bg-white/10"
                >
                  <Link href={`/products/${product.id}`} className="block">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="mb-1 text-sm font-medium line-clamp-1">{product.name}</h3>
                      <p className="text-sm text-[#bfa77f]">${product.price.toLocaleString()}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
