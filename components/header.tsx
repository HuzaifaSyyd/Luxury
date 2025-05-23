"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, ShoppingBag } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import SidebarMenu from "@/components/sidebar-menu"
import SearchModal from "@/components/search-modal"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { cartItems } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto"
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-[#0b0b0b]/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <div className="flex-1">
            <Link href="/" className="text-2xl font-light tracking-[0.2em] text-white/90 hover:text-white">
              WHOZAIFA
            </Link>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm uppercase tracking-wider text-white/80 hover:text-white">
              Home
            </Link>
            <Link href="/mens" className="text-sm uppercase tracking-wider text-white/80 hover:text-white">
              Men's
            </Link>
            <Link href="/womens" className="text-sm uppercase tracking-wider text-white/80 hover:text-white">
              Women's
            </Link>
            <Link href="/products" className="text-sm uppercase tracking-wider text-white/80 hover:text-white">
              Products
            </Link>
            <Link href="/about" className="text-sm uppercase tracking-wider text-white/80 hover:text-white">
              About
            </Link>
            <Link href="/contact" className="text-sm uppercase tracking-wider text-white/80 hover:text-white">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-3 md:flex px-4">
              <Link
                href="/login"
                className="rounded-full border border-white/30 px-4 py-1.5 text-xs uppercase tracking-wider text-white/80 transition-all hover:border-[#bfa77f] hover:text-[#bfa77f]"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="rounded-full border border-[#bfa77f] bg-[#bfa77f]/10 px-4 py-1.5 text-xs uppercase tracking-wider text-[#bfa77f] transition-all hover:bg-[#bfa77f]/20"
              >
                Sign Up
              </Link>
            </div>

            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center justify-center rounded-full p-2 transition-all hover:bg-white/5"
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-white/80" />
            </button>

            <Link
              href="/cart"
              className="relative flex items-center justify-center rounded-full p-2 transition-all hover:bg-white/5"
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5 text-white/80" />
              {cartItems.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#bfa77f] text-xs font-medium text-black">
                  {cartItems.length}
                </span>
              )}
            </Link>

            <button
              onClick={toggleMenu}
              className="flex items-center justify-center rounded-full p-2 transition-all hover:bg-white/5 md:hidden"
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>

            <button
              onClick={toggleMenu}
              className="hidden items-center justify-center rounded-full p-2 transition-all hover:bg-white/5 md:flex"
              aria-label="Menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </motion.header>

      <SidebarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
