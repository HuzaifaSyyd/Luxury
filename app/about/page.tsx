"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0b0b0b]">
        <section className="relative flex h-[50vh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/50"></div>
          <img
            src="/aboutmain.jpg"
            alt="About LuxVerse"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-4xl font-bold tracking-wider md:text-5xl"
            >
              ABOUT US 
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-xl text-lg text-white/80"
            >
              Where luxury meets digital excellence
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
              >
                <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
                <p className="mb-6 text-lg leading-relaxed text-white/80">
                  Founded in 2015, LuxVerse was born from a passion for craftsmanship and a vision to bring the world of
                  luxury into the digital age. Our founder, Alexandra Dumont, sought to create a brand that would honor
                  traditional artisanal techniques while embracing modern innovation.
                </p>
                <p className="text-lg leading-relaxed text-white/80">
                  What began as a small atelier in Paris has grown into a global luxury house, renowned for our
                  exceptional leather goods, distinctive fragrances, and unparalleled experiences. Throughout our
                  journey, we have remained committed to our founding principles: impeccable quality, ethical sourcing,
                  and timeless design.
                </p>
              </motion.div>

              <div className="mb-20 grid gap-12 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img
                    src="https://i.pinimg.com/736x/0f/93/79/0f93798d7dbd239809f07f7b00e9891e.jpg"
                    alt="LuxVerse Atelier"
                    className="mb-6 h-auto w-full rounded-lg"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col justify-center"
                >
                  <h3 className="mb-4 text-2xl font-bold">Our Philosophy</h3>
                  <p className="mb-4 text-white/80">
                    At LuxVerse, we believe that true luxury lies in the perfect balance between heritage and
                    innovation. Each product we create is a testament to this philosophy, combining time-honored
                    craftsmanship with contemporary design.
                  </p>
                  <p className="text-white/80">
                    We are committed to sustainability and ethical practices throughout our supply chain. From sourcing
                    the finest materials to working with skilled artisans who are fairly compensated for their
                    expertise, we ensure that every aspect of our business reflects our values.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="mb-8 text-center text-3xl font-bold">Our Values</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="rounded-lg border border-white/10 bg-black/20 p-6">
                    <h3 className="mb-4 text-xl font-bold text-[#bfa77f]">Craftsmanship</h3>
                    <p className="text-white/70">
                      We honor traditional techniques and work with master artisans to create products of exceptional
                      quality that stand the test of time.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-black/20 p-6">
                    <h3 className="mb-4 text-xl font-bold text-[#bfa77f]">Innovation</h3>
                    <p className="text-white/70">
                      We embrace new technologies and ideas, constantly seeking ways to enhance our products and the
                      experiences we offer our clients.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-black/20 p-6">
                    <h3 className="mb-4 text-xl font-bold text-[#bfa77f]">Sustainability</h3>
                    <p className="text-white/70">
                      We are committed to responsible practices that minimize our environmental impact and contribute
                      positively to the communities we work with.
                    </p>
                  </div>
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
