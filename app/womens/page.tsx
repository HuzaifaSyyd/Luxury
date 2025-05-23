"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const categories = [
  {
    name: "Leather Jackets",
    description: "Elegant designs crafted with premium leather",
    image: "https://i.pinimg.com/736x/95/c3/79/95c37902187bb8d8d9589a79bcbb8695.jpg",
    link: "/womens/leather",
  },
  {
    name: "Perfumes",
    description: "Exquisite fragrances for the sophisticated woman",
    image: "https://i.pinimg.com/736x/d4/f5/ac/d4f5ac02d94531e7be0ca4fae72736aa.jpg",
    link: "/womens/perfumes",
  },
]

const featuredProducts = [
  {
    id: 5,
    name: "Women's Leather Jacket",
    price: 2295,
    image: "https://i.pinimg.com/736x/75/0b/d4/750bd4d57398f2c0d6e1d67eb6781a88.jpg",
  },
  {
    id: 7,
    name: "Velvet Rose Perfume",
    price: 345,
    image: "https://i.pinimg.com/736x/af/0b/51/af0b515d013ebc08fa3e5e5e19bc0814.jpg",
  },
  {
    id: 6,
    name: "Cropped Leather Jacket",
    price: 1895,
    image: "https://i.pinimg.com/736x/11/9e/91/119e91037e495355f133360ecb0e16a3.jpg",
  },
  {
    id: 8,
    name: "Jasmine Dreams Perfume",
    price: 325,
    image: "https://i.pinimg.com/736x/8d/5f/cf/8d5fcf802b8c9fc9d63af8e1e1ead60a.jpg",
  },
  {
    id: 20,
    name: "Suede Leather Jacket",
    price: 2395,
    image: "https://i.pinimg.com/736x/73/57/7a/73577a61ebc0723bbadb20ecdc05b376.jpg",
  },
]

export default function WomensPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0b0b0b]">
        <section className="relative flex h-[60vh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/50"></div>
          <img
            src="https://i.pinimg.com/736x/a3/1e/18/a31e18d63538ae988bd4c595f0bc4979.jpg"
            alt="Women's Collection"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-4xl font-bold tracking-wider md:text-5xl"
            >
              WOMEN'S COLLECTION
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-xl text-lg text-white/80"
            >
              Timeless elegance for the modern woman
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
            <p className="mb-12 text-center text-white/70">Our most sought-after women's luxury items</p>

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
                href="/products?gender=womens"
                className="inline-block rounded-full border border-[#bfa77f] bg-[#bfa77f]/10 px-8 py-3 text-sm uppercase tracking-wider text-[#bfa77f] transition-all hover:bg-[#bfa77f]/20"
              >
                View All Women's Products
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
