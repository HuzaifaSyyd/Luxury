"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const menuItems = [
  { name: "COLLECTIONS", path: "/collections" },
  { name: "FRAGRANCES", path: "/fragrances" },
  { name: "LEATHER", path: "/leather" },
  { name: "EXPERIENCES", path: "/experiences" },
  { name: "ABOUT", path: "/about" },
]

const footerLinks = [
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Privacy", path: "/privacy" },
  { name: "Terms", path: "/terms" },
]

interface MenuOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [isOpen, onClose])

  const menuVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <div className={`menu-overlay fixed inset-0 z-40 ${isOpen ? "open" : ""}`}>
      <div className="absolute inset-0 bg-[#0b0b0b] bg-radial-gradient">
        <div className="flex h-full flex-col items-center justify-center">
          <AnimatePresence>
            {isOpen && (
              <nav className="flex flex-col items-center justify-center">
                <ul className="flex flex-col items-center gap-6 text-center">
                  {menuItems.map((item, i) => (
                    <motion.li
                      key={item.name}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                      variants={menuVariants}
                    >
                      <a
                        href={item.path}
                        className="text-3xl font-light tracking-widest text-white/80 transition-all duration-300 hover:text-[#bfa77f]"
                        onClick={(e) => {
                          e.preventDefault() // Prevent navigation in this demo
                          onClose()
                        }}
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.6 } }}
              exit={{ opacity: 0 }}
              className="absolute bottom-8 left-0 right-0 flex justify-center"
            >
              <div className="flex gap-6 text-xs text-white/50">
                {footerLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.path}
                    className="transition-colors hover:text-white/80"
                    onClick={(e) => e.preventDefault()} // Prevent navigation in this demo
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
