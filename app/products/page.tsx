"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Filter, ChevronDown } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Sample product data
const products = [
  {
    id: 1,
    name: "Classic Leather Jacket",
    category: "leather",
    gender: "mens",
    price: 2495,
    image: "https://i.pinimg.com/736x/f6/83/da/f683da410794920cf015b3b6f2290a33.jpg",
  },
  {
    id: 2,
    name: "Vintage Biker Jacket",
    category: "leather",
    gender: "mens",
    price: 1995,
    image: "https://i.pinimg.com/736x/86/ae/ab/86aeab46ec1569cabbbf7be049d3263a.jpg",
  },
  {
    id: 3,
    name: "Midnight Oud Perfume",
    category: "perfumes",
    gender: "mens",
    price: 395,
    image: "https://i.pinimg.com/736x/5c/be/5f/5cbe5fcd6dcdf79d76fae2dfb4daebfe.jpg",
  },
  {
    id: 4,
    name: "Amber Elixir Perfume",
    category: "perfumes",
    gender: "mens",
    price: 295,
    image: "https://i.pinimg.com/736x/2f/82/25/2f82252747441ea99559e8343cd9c7c1.jpg",
  },
  {
    id: 5,
    name: "Women's Leather Jacket",
    category: "leather",
    gender: "womens",
    price: 2295,
    image: "https://i.pinimg.com/736x/59/bd/6e/59bd6e8f8aa8aff46665a4f92312084f.jpg",
  },
  {
    id: 6,
    name: "Cropped Leather Jacket",
    category: "leather",
    gender: "womens",
    price: 1895,
    image: "https://i.pinimg.com/736x/d2/39/84/d239846f938f614b4f2999fab647428c.jpg",
  },
  {
    id: 7,
    name: "Velvet Rose Perfume",
    category: "perfumes",
    gender: "womens",
    price: 345,
    image: "https://i.pinimg.com/736x/b0/80/ee/b080ee9c50cacdac63a5f436d7afb573.jpg",
  },
  {
    id: 8,
    name: "Jasmine Dreams Perfume",
    category: "perfumes",
    gender: "womens",
    price: 325,
    image: "https://i.pinimg.com/736x/d7/8f/08/d78f08d8d6092045a61919c300d266fa.jpg",
  },
  {
    id: 9,
    name: "Aviator Leather Jacket",
    category: "leather",
    gender: "mens",
    price: 2295,
    image: "https://i.pinimg.com/736x/8d/51/d8/8d51d848ba4b242f17125a718af448fe.jpg",
  },
  {
    id: 10,
    name: "Modern Racer Jacket",
    category: "leather",
    gender: "mens",
    price: 1895,
    image: "https://i.pinimg.com/736x/52/c7/6e/52c76edd81fe1f16678849559c54f2a9.jpg",
  },
]

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")
  const genderParam = searchParams.get("gender")

  const [sortBy, setSortBy] = useState("featured")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all")
  const [selectedGender, setSelectedGender] = useState(genderParam || "all")

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesGender = selectedGender === "all" || product.gender === selectedGender
    return matchesCategory && matchesGender
  })

  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price
    if (sortBy === "price-high") return b.price - a.price
    return 0 // Default: featured
  })

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0b0b0b] pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="mb-4 text-3xl font-bold">Our Collection</h1>
            <p className="text-white/70">Discover our exclusive range of luxury products</p>
          </div>

          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm transition-colors hover:border-white/40 md:hidden"
            >
              <Filter className="h-4 w-4" />
              Filters
            </button>

            <div className={`space-y-6 md:flex md:gap-6 md:space-y-0 ${showFilters ? "block" : "hidden md:flex"}`}>
              <div>
                <h3 className="mb-2 text-sm font-medium text-white/60">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {["all", "leather", "perfumes"].map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`rounded-full px-4 py-1.5 text-sm capitalize transition-colors ${
                        selectedCategory === category
                          ? "bg-[#bfa77f] text-black"
                          : "border border-white/20 text-white/70 hover:border-white/40"
                      }`}
                    >
                      {category === "all" ? "All Categories" : category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium text-white/60">Gender</h3>
                <div className="flex flex-wrap gap-2">
                  {["all", "mens", "womens"].map((gender) => (
                    <button
                      key={gender}
                      onClick={() => setSelectedGender(gender)}
                      className={`rounded-full px-4 py-1.5 text-sm capitalize transition-colors ${
                        selectedGender === gender
                          ? "bg-[#bfa77f] text-black"
                          : "border border-white/20 text-white/70 hover:border-white/40"
                      }`}
                    >
                      {gender === "all" ? "All" : gender === "mens" ? "Men's" : "Women's"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-white/60">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none rounded-md border border-white/20 bg-transparent px-4 py-2 pr-8 text-sm text-white outline-none transition-colors hover:border-white/40"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
              </div>
            </div>
          </div>

          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {sortedProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
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
          ) : (
            <div className="flex h-40 items-center justify-center rounded-lg border border-white/10 bg-black/20">
              <p className="text-white/60">No products found matching your filters.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
