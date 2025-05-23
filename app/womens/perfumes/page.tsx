"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Sample product data
const products = [
  {
    id: 7,
    name: "Velvet Rose Perfume",
    price: 345,
    image: "https://i.pinimg.com/736x/be/7b/fb/be7bfbbeb57fb399f8f2251d71166d44.jpg",
  },
  {
    id: 8,
    name: "Jasmine Dreams Perfume",
    price: 325,
    image: "https://i.pinimg.com/736x/f8/b5/f8/f8b5f8d26afc467f7270e8501e8691e7.jpg",
  },
  {
    id: 21,
    name: "Floral Musk Perfume",
    price: 295,
    image: "https://i.pinimg.com/736x/c0/1f/e1/c01fe13d36047147e15b905b0b761fef.jpg",
  },
  {
    id: 22,
    name: "Vanilla Orchid Fragrance",
    price: 315,
    image: "https://i.pinimg.com/736x/af/0b/51/af0b515d013ebc08fa3e5e5e19bc0814.jpg",
  },
  {
    id: 23,
    name: "Amber & Peony Perfume",
    price: 365,
    image: "https://i.pinimg.com/736x/8d/5f/cf/8d5fcf802b8c9fc9d63af8e1e1ead60a.jpg",
  },
  {
    id: 24,
    name: "Midnight Gardenia Scent",
    price: 335,
    image: "https://i.pinimg.com/736x/a2/9e/d4/a29ed40b687544a338365003e0f18a77.jpg",
  },
]

export default function WomensPerfumesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0b0b0b]">
        <section className="relative flex h-[50vh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/50"></div>
          <img
            src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Women's Perfume Collection"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-4xl font-bold tracking-wider md:text-5xl"
            >
              WOMEN'S FRAGRANCES
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-xl text-lg text-white/80"
            >
              Exquisite scents crafted by master perfumers for the sophisticated woman
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
              <div>
                <h2 className="text-3xl font-bold">Our Collection</h2>
                <p className="text-white/70">Discover our exclusive range of women's fragrances</p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/womens"
                  className="rounded-full border border-white/30 px-6 py-2 text-sm uppercase tracking-wider text-white transition-all hover:border-white/50"
                >
                  All Women's
                </Link>
                <Link
                  href="/womens/leather"
                  className="rounded-full border border-white/30 px-6 py-2 text-sm uppercase tracking-wider text-white transition-all hover:border-white/50"
                >
                  Women's Leather
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
