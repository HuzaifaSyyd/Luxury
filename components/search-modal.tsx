"use client"

import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X } from "lucide-react"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }

    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="mt-20 w-full max-w-2xl rounded-lg p-1"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="glassmorphism flex items-center rounded-md border border-white/10 px-4 py-3">
              <Search className="mr-2 h-5 w-5 text-white/60" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search for luxury items..."
                className="flex-1 bg-transparent text-white outline-none placeholder:text-white/40"
              />
              <button onClick={onClose} className="ml-2 rounded-full p-1 hover:bg-white/10">
                <X className="h-5 w-5 text-white/60" />
              </button>
            </div>

            <div className="mt-6 rounded-md border border-white/10 bg-black/40 p-6 backdrop-blur-md">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-white/60">Popular Searches</h3>
              <div className="flex flex-wrap gap-2">
                {["Leather Jacket", "Signature Perfume", "Yacht Experience", "Limited Edition", "Gift Collection"].map(
                  (term) => (
                    <button
                      key={term}
                      className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/70 transition-all hover:border-[#bfa77f] hover:text-[#bfa77f]"
                    >
                      {term}
                    </button>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
