"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Sample product data
const products = [
  {
    id: 5,
    name: "Women's Leather Jacket",
    price: 2295,
    image: "https://i.pinimg.com/736x/75/0b/d4/750bd4d57398f2c0d6e1d67eb6781a88.jpg",
  },
  {
    id: 6,
    name: "Cropped Leather Jacket",
    price: 1895,
    image: "https://i.pinimg.com/736x/e5/d2/27/e5d2276851c0b578ac0aad8126238524.jpg",
  },
  {
    id: 17,
    name: "Fitted Leather Blazer",
    price: 2495,
    image: "https://i.pinimg.com/736x/fa/d2/43/fad2433a0fda15803b5328df50fc953f.jpg",
  },
  {
    id: 18,
    name: "Leather Biker Jacket",
    price: 2195,
    image: "https://i.pinimg.com/736x/11/9e/91/119e91037e495355f133360ecb0e16a3.jpg",
  },
  {
    id: 19,
    name: "Leather Trench Coat",
    price: 2695,
    image: "https://i.pinimg.com/736x/0d/37/e0/0d37e0f68360db89f13fb6b02b177a09.jpg",
  },
  {
    id: 20,
    name: "Suede Leather Jacket",
    price: 2395,
    image: "https://i.pinimg.com/736x/73/57/7a/73577a61ebc0723bbadb20ecdc05b376.jpg",
  },
]

export default function WomensLeatherPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0b0b0b]">
        <section className="relative flex h-[50vh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/50"></div>
          <img
            src="https://i.pinimg.com/736x/7b/8e/dc/7b8edc6712ff7a0117f91f453807cc00.jpg"
            alt="Women's Leather Collection"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-4xl font-bold tracking-wider md:text-5xl"
            >
              WOMEN'S LEATHER JACKETS
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-xl text-lg text-white/80"
            >
              Elegant designs crafted with premium leather for the modern woman
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
              <div>
                <h2 className="text-3xl font-bold">Our Collection</h2>
                <p className="text-white/70">Discover our exclusive range of women's leather jackets</p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/womens"
                  className="rounded-full border border-white/30 px-6 py-2 text-sm uppercase tracking-wider text-white transition-all hover:border-white/50"
                >
                  All Women's
                </Link>
                <Link
                  href="/womens/perfumes"
                  className="rounded-full border border-white/30 px-6 py-2 text-sm uppercase tracking-wider text-white transition-all hover:border-white/50"
                >
                  Women's Perfumes
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
