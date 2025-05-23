"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Link from "next/link"

const menuCategories = [
  {
    title: "Shop",
    items: [
      { name: "All Products", path: "/products" },
      { name: "Men's Collection", path: "/mens" },
      { name: "Women's Collection", path: "/womens" },
    ],
  },
  {
    title: "Categories",
    items: [
      { name: "Leather Jackets", path: "/products?category=leather" },
      { name: "Perfumes", path: "/products?category=perfumes" },
      { name: "Experiences", path: "/products?category=experiences" },
    ],
  },
  {
    title: "Information",
    items: [
      { name: "About Us", path: "/about" },
      { name: "Contact", path: "/contact" },
    ],
  },
]

interface SidebarMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function SidebarMenu({ isOpen, onClose }: SidebarMenuProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", handleEsc)
    return () => {
      window.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md overflow-y-auto bg-[#0b0b0b] shadow-lg md:w-96"
          >
            <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
              <h2 className="text-xl font-medium">Menu</h2>
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6">
              {menuCategories.map((category) => (
                <div key={category.title} className="mb-8">
                  <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-[#bfa77f]">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.path}
                          className="block py-2 text-lg font-light text-white/80 transition-colors hover:text-[#bfa77f]"
                          onClick={onClose}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="mt-auto border-t border-white/10 pt-6">
                <div className="flex flex-col gap-4">
                  <Link
                    href="/login"
                    className="block w-full rounded-full border border-white/30 py-3 text-center text-sm uppercase tracking-wider text-white transition-all hover:border-[#bfa77f] hover:text-[#bfa77f]"
                    onClick={onClose}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="block w-full rounded-full border border-[#bfa77f] bg-[#bfa77f]/10 py-3 text-center text-sm uppercase tracking-wider text-[#bfa77f] transition-all hover:bg-[#bfa77f]/20"
                    onClick={onClose}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
