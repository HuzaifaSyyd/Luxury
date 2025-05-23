"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0b0b0b]">
        <section className="relative flex h-[50vh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/50"></div>
          <img
            src="https://images.unsplash.com/photo-1627823569857-4d8581dc62b2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contact LuxVerse"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-4xl font-bold tracking-wider md:text-5xl"
            >
              CONTACT US
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-xl text-lg text-white/80"
            >
              We're here to assist you with any inquiries
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-16 grid gap-12 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="mb-6 text-3xl font-bold">Get in Touch</h2>
                  <p className="mb-8 text-white/80">
                    Our dedicated customer service team is available to assist you with any questions about our
                    products, orders, or services.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#bfa77f]/30 bg-[#bfa77f]/10">
                        <Phone className="h-5 w-5 text-[#bfa77f]" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-medium">Phone</h3>
                        <p className="text-white/70">+1 (800) 123-4567</p>
                        <p className="text-sm text-white/50">Monday to Friday, 9am - 6pm EST</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#bfa77f]/30 bg-[#bfa77f]/10">
                        <Mail className="h-5 w-5 text-[#bfa77f]" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-medium">Email</h3>
                        <p className="text-white/70">clientservices@whozaifa.com</p>
                        <p className="text-sm text-white/50">We aim to respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#bfa77f]/30 bg-[#bfa77f]/10">
                        <MapPin className="h-5 w-5 text-[#bfa77f]" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-medium">Flagship Store</h3>
                        <p className="text-white/70">123 Fifth Avenue</p>
                        <p className="text-white/70">New York, NY 10010</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#bfa77f]/30 bg-[#bfa77f]/10">
                        <Clock className="h-5 w-5 text-[#bfa77f]" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-medium">Store Hours</h3>
                        <p className="text-white/70">Monday - Saturday: 10am - 8pm</p>
                        <p className="text-white/70">Sunday: 12pm - 6pm</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src="https://i.pinimg.com/736x/dc/46/ac/dc46ac2c6caa657eba8f2fa6acfdb6d1.jpg"
                      alt="LuxVerse Flagship Store"
                      className="h-auto w-full"
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-lg border border-white/10 bg-black/20 p-8"
              >
                <h3 className="mb-4 text-center text-2xl font-bold">VIP Appointments</h3>
                <p className="mb-6 text-center text-white/80">
                  For a personalized shopping experience, schedule a private appointment with one of our luxury
                  consultants. Enjoy exclusive access to our latest collections and receive tailored recommendations.
                </p>
                <div className="text-center">
                  <a
                    href="tel:+18001234567"
                    className="inline-block rounded-full border border-[#bfa77f] bg-[#bfa77f]/10 px-8 py-3 text-sm uppercase tracking-wider text-[#bfa77f] transition-all hover:bg-[#bfa77f]/20"
                  >
                    Call to Schedule
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
