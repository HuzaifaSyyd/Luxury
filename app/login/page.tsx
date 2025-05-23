"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
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
    // In a real implementation, you would handle authentication here
    console.log("Login attempt with:", formData)
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
              <h1 className="mb-2 text-3xl font-bold">Welcome Back</h1>
              <p className="text-white/70">Sign in to your LuxVerse account</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-lg border border-white/10 bg-black/20 p-8"
            >
              <form onSubmit={handleSubmit}>
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
                </div>

                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-white/20 bg-black/20 text-[#bfa77f] focus:ring-[#bfa77f]"
                    />
                    <label htmlFor="rememberMe" className="ml-2 text-sm text-white/70">
                      Remember me
                    </label>
                  </div>

                  <a href="#" className="text-sm text-[#bfa77f] hover:text-[#bfa77f]/80">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full border border-[#bfa77f] bg-[#bfa77f]/10 py-3 text-sm uppercase tracking-wider text-[#bfa77f] transition-all hover:bg-[#bfa77f]/20"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-white/60">
                Don't have an account?{" "}
                <Link href="/signup" className="text-[#bfa77f] hover:text-[#bfa77f]/80">
                  Sign up
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
