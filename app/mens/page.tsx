"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const categories = [
  {
    name: "Leather Jackets",
    description: "Handcrafted with the finest Italian leather",
    image: "https://i.pinimg.com/736x/c1/e5/84/c1e58447e563c2ccfa05d991bba8228e.jpg",
    link: "/mens/leather",
  },
  {
    name: "Perfumes",
    description: "Exclusive fragrances for the discerning gentleman",
    image: "https://i.pinimg.com/736x/24/10/c2/2410c2b382a8b86971460971cb4a9e05.jpg",
    link: "/mens/perfumes",
  },
]

const featuredProducts = [
  {
    id: 1,
    name: "Classic Leather Jacket",
    price: 2495,
    image: "/Leather/leather1.jpeg",
  },
  {
    id: 3,
    name: "Midnight Oud Perfume",
    price: 395,
    image: "/perfumes/perfume1.jpeg",
  },
  {
    id: 2,
    name: "Vintage Biker Jacket",
    price: 1995,
    image: "/Leather/leather5.jpeg",
  },
  {
    id: 4,
    name: "Amber Elixir Perfume",
    price: 295,
    image: "/perfumes/perfume3.jpeg",
  },
  {
    id: 9,
    name: "Aviator Leather Jacket",
    price: 2295,
    image: "/Leather/leather3.jpeg",
  },
]

export default function MensPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0b0b0b]">
        <section className="relative flex h-[60vh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/50"></div>
          <img
            src="https://i.pinimg.com/736x/ac/0d/12/ac0d120834db9231be8cab513d1e9130.jpg"
            alt="Men's Collection"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-4xl font-bold tracking-wider md:text-5xl"
            >
              MEN'S COLLECTION
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-xl text-lg text-white/80"
            >
              Refined luxury for the modern gentleman
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">Categories</h2>

            <div className="grid gap-8 md:grid-cols-2">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group overflow-hidden rounded-lg bg-white/5"
                >
                  <Link href={category.link} className="block">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="mb-2 text-2xl font-bold">{category.name}</h3>
                        <p className="text-white/70">{category.description}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0f0f0f]">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold">Featured Products</h2>
            <p className="mb-12 text-center text-white/70">Our most sought-after men's luxury items</p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {featuredProducts.map((product, index) => (
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

            <div className="mt-12 text-center">
              <Link
                href="/products?gender=mens"
                className="inline-block rounded-full border border-[#bfa77f] bg-[#bfa77f]/10 px-8 py-3 text-sm uppercase tracking-wider text-[#bfa77f] transition-all hover:bg-[#bfa77f]/20"
              >
                View All Men's Products
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
