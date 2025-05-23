"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/header"
import Hero from "@/components/hero"
import FeaturedCategories from "@/components/featured-categories"
import FragranceStory from "@/components/fragrance-story"
import Testimonials from "@/components/testimonials"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import CartProvider from "@/components/cart-provider"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <CartProvider>
      <CustomCursor />
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b0b0b]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h1 className="text-4xl font-light tracking-[0.3em] text-white/90">Whozaifa</h1>
              <div className="mt-4 h-[1px] w-40 bg-gradient-to-r from-transparent via-[#bfa77f] to-transparent">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="h-full bg-[#bfa77f]/50"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative min-h-screen"
          >
            <Header />
            <Hero />
            <FeaturedCategories />
            <FragranceStory />
            <Testimonials />
            <Newsletter />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </CartProvider>
  )
}
