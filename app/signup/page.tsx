"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreeTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would handle registration here
    console.log("Signup attempt with:", formData)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0b0b0b] pt-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-center"
            >
              <h1 className="mb-2 text-3xl font-bold">Create an Account</h1>
              <p className="text-white/70">Join LuxVerse for an exclusive luxury experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-lg border border-white/10 bg-black/20 p-8"
            >
              <form onSubmit={handleSubmit}>
                <div className="mb-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-2 block text-sm font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-white/20 bg-black/20 px-4 py-3 text-white outline-none transition-colors focus:border-[#bfa77f]"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="mb-2 block text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-white/20 bg-black/20 px-4 py-3 text-white outline-none transition-colors focus:border-[#bfa77f]"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-white/20 bg-black/20 px-4 py-3 text-white outline-none transition-colors focus:border-[#bfa77f]"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="password" className="mb-2 block text-sm font-medium">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-white/20 bg-black/20 px-4 py-3 text-white outline-none transition-colors focus:border-[#bfa77f]"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-white/50">
                    Password must be at least 8 characters and include a number and special character
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      required
                      className="mt-1 h-4 w-4 rounded border-white/20 bg-black/20 text-[#bfa77f] focus:ring-[#bfa77f]"
                    />
                    <label htmlFor="agreeTerms" className="ml-2 text-sm text-white/70">
                      I agree to the{" "}
                      <a href="#" className="text-[#bfa77f] hover:text-[#bfa77f]/80">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-[#bfa77f] hover:text-[#bfa77f]/80">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full border border-[#bfa77f] bg-[#bfa77f]/10 py-3 text-sm uppercase tracking-wider text-[#bfa77f] transition-all hover:bg-[#bfa77f]/20"
                >
                  Create Account
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-white/60">
                Already have an account?{" "}
                <Link href="/login" className="text-[#bfa77f] hover:text-[#bfa77f]/80">
                  Sign in
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
