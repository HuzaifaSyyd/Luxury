"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useCart } from "@/components/cart-provider"

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart()
  const [promoCode, setPromoCode] = useState("")
  const [promoApplied, setPromoApplied] = useState(false)

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  // Calculate discount (10% if promo applied)
  const discount = promoApplied ? subtotal * 0.1 : 0

  // Calculate shipping (free over $100)
  const shipping = subtotal > 100 ? 0 : 15

  // Calculate total
  const total = subtotal - discount + shipping

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === "luxverse10") {
      setPromoApplied(true)
    } else {
      alert("Invalid promo code")
    }
  }

  const handleIncrement = (id: number) => {
    const item = cartItems.find((item) => item.id === id)
    if (item) {
      updateQuantity(id, item.quantity + 1)
    }
  }

  const handleDecrement = (id: number) => {
    const item = cartItems.find((item) => item.id === id)
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0b0b0b] pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="mb-2 text-3xl font-bold">Shopping Cart</h1>
            <p className="text-white/70">Review your items before checkout</p>
          </motion.div>

          {cartItems.length > 0 ? (
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="mb-4 rounded-lg border border-white/10 bg-black/20 p-6">
                  <div className="mb-4 flex justify-between border-b border-white/10 pb-4">
                    <h2 className="text-xl font-medium">Cart Items ({cartItems.length})</h2>
                    <button onClick={clearCart} className="text-sm text-white/60 hover:text-white">
                      Clear Cart
                    </button>
                  </div>

                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 border-b border-white/10 pb-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-black/30">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        <div className="flex flex-1 flex-col">
                          <div className="flex justify-between">
                            <Link href={`/products/${item.id}`} className="text-lg font-medium hover:text-[#bfa77f]">
                              {item.title}
                            </Link>
                            <p className="text-[#bfa77f]">${item.price.toLocaleString()}</p>
                          </div>

                          <div className="mt-auto flex items-center justify-between">
                            <div className="flex items-center">
                              <button
                                onClick={() => handleDecrement(item.id)}
                                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white/40"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="mx-3 min-w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => handleIncrement(item.id)}
                                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white/40"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>

                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="flex items-center text-sm text-white/60 hover:text-white"
                            >
                              <Trash2 className="mr-1 h-4 w-4" />
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-black/20 p-6">
                  <h2 className="mb-4 text-xl font-medium">Have a Promo Code?</h2>
                  <div className="flex">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter promo code"
                      className="flex-1 rounded-l-md border border-white/20 bg-black/30 px-4 py-2 text-white outline-none transition-colors focus:border-[#bfa77f]"
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="rounded-r-md border border-[#bfa77f] bg-[#bfa77f]/10 px-4 py-2 text-sm uppercase tracking-wider text-[#bfa77f] transition-all hover:bg-[#bfa77f]/20"
                    >
                      Apply
                    </button>
                  </div>
                  {promoApplied && <p className="mt-2 text-sm text-green-400">Promo code applied successfully!</p>}
                  <p className="mt-2 text-xs text-white/50">Try "LUXVERSE10" for 10% off your order</p>
                </div>
              </div>

              <div>
                <div className="sticky top-24 rounded-lg border border-white/10 bg-black/20 p-6">
                  <h2 className="mb-4 text-xl font-medium">Order Summary</h2>

                  <div className="space-y-3 border-b border-white/10 pb-4">
                    <div className="flex justify-between">
                      <span className="text-white/70">Subtotal</span>
                      <span>${subtotal.toLocaleString()}</span>
                    </div>

                    {promoApplied && (
                      <div className="flex justify-between">
                        <span className="text-white/70">Discount (10%)</span>
                        <span className="text-green-400">-${discount.toLocaleString()}</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span className="text-white/70">Shipping</span>
                      <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
                    </div>
                  </div>

                  <div className="my-4 flex justify-between text-lg font-medium">
                    <span>Total</span>
                    <span>${total.toLocaleString()}</span>
                  </div>

                  <button className="mt-4 w-full rounded-full border border-[#bfa77f] bg-[#bfa77f]/10 py-3 text-sm uppercase tracking-wider text-[#bfa77f] transition-all hover:bg-[#bfa77f]/20">
                    Proceed to Checkout
                  </button>

                  <Link
                    href="/products"
                    className="mt-4 flex items-center justify-center text-sm text-white/70 hover:text-white"
                  >
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg border border-white/10 bg-black/20 py-16">
              <ShoppingBag className="mb-4 h-16 w-16 text-white/30" />
              <h2 className="mb-2 text-2xl font-medium">Your cart is empty</h2>
              <p className="mb-6 text-white/60">Looks like you haven't added any items to your cart yet.</p>
              <Link
                href="/products"
                className="rounded-full border border-[#bfa77f] bg-[#bfa77f]/10 px-8 py-3 text-sm uppercase tracking-wider text-[#bfa77f] transition-all hover:bg-[#bfa77f]/20"
              >
                Start Shopping
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
