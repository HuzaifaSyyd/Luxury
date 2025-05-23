"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, Plus, X } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AddProductPage() {
  const [images, setImages] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    gender: "",
    price: "",
    description: "",
    features: [""],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.features]
    newFeatures[index] = value
    setFormData((prev) => ({ ...prev, features: newFeatures }))
  }

  const addFeature = () => {
    setFormData((prev) => ({ ...prev, features: [...prev.features, ""] }))
  }

  const removeFeature = (index: number) => {
    const newFeatures = formData.features.filter((_, i) => i !== index)
    setFormData((prev) => ({ ...prev, features: newFeatures }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      setImages((prev) => [...prev, ...newImages])
    }
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send this data to your API
    console.log("Form submitted:", { ...formData, images })
    alert("Product added successfully!")
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0b0b0b] pt-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="mb-4 text-3xl font-bold">Add New Product</h1>
            <p className="text-white/70">Create a new product listing for your luxury collection</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="mx-auto max-w-4xl">
            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-white/20 bg-black/20 px-4 py-3 text-white outline-none transition-colors focus:border-[#bfa77f]"
                  placeholder="Enter product name"
                />
              </div>

              <div>
                <label htmlFor="price" className="mb-2 block text-sm font-medium">
                  Price (USD)
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.01"
                  className="w-full rounded-md border border-white/20 bg-black/20 px-4 py-3 text-white outline-none transition-colors focus:border-[#bfa77f]"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label htmlFor="category" className="mb-2 block text-sm font-medium">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-white/20 bg-black/20 px-4 py-3 text-white outline-none transition-colors focus:border-[#bfa77f]"
                >
                  <option value="">Select a category</option>
                  <option value="leather">Leather Jackets</option>
                  <option value="perfumes">Perfumes</option>
                  <option value="experiences">Experiences</option>
                </select>
              </div>

              <div>
                <label htmlFor="gender" className="mb-2 block text-sm font-medium">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-white/20 bg-black/20 px-4 py-3 text-white outline-none transition-colors focus:border-[#bfa77f]"
                >
                  <option value="">Select gender</option>
                  <option value="mens">Men's</option>
                  <option value="womens">Women's</option>
                  <option value="unisex">Unisex</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="description" className="mb-2 block text-sm font-medium">
                Product Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded-md border border-white/20 bg-black/20 px-4 py-3 text-white outline-none transition-colors focus:border-[#bfa77f]"
                placeholder="Describe your product in detail"
              ></textarea>
            </div>

            <div className="mb-8">
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-medium">Product Features</label>
                <button
                  type="button"
                  onClick={addFeature}
                  className="flex items-center gap-1 text-sm text-[#bfa77f] hover:text-[#bfa77f]/80"
                >
                  <Plus className="h-4 w-4" /> Add Feature
                </button>
              </div>

              {formData.features.map((feature, index) => (
                <div key={index} className="mb-2 flex items-center gap-2">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    className="w-full rounded-md border border-white/20 bg-black/20 px-4 py-2 text-white outline-none transition-colors focus:border-[#bfa77f]"
                    placeholder={`Feature ${index + 1}`}
                  />
                  {formData.features.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="flex h-10 w-10 items-center justify-center rounded-full text-white/60 hover:bg-white/10 hover:text-white"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="mb-8">
              <label className="mb-2 block text-sm font-medium">Product Images</label>
              <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {images.map((image, index) => (
                  <div key={index} className="relative aspect-square overflow-hidden rounded-md bg-black/20">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Product image ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}

                <label className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-white/20 bg-black/10 transition-colors hover:border-white/40">
                  <Upload className="mb-2 h-6 w-6 text-white/60" />
                  <span className="text-sm text-white/60">Upload Image</span>
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" multiple />
                </label>
              </div>
              <p className="text-xs text-white/50">Upload up to 5 high-quality images of your product.</p>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-full border border-[#bfa77f] bg-[#bfa77f]/10 px-8 py-3 text-sm uppercase tracking-wider text-[#bfa77f] transition-all hover:bg-[#bfa77f]/20"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
