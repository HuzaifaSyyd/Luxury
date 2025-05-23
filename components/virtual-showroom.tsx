"use client"

import { Suspense, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei"

function PerfumeBottle() {
  // Using a placeholder model - in a real implementation, you would use a custom perfume bottle model
  const { scene } = useGLTF("/assets/3d/duck.glb")

  return <primitive object={scene} scale={2} position={[0, -1, 0]} rotation={[0, Math.PI / 4, 0]} />
}

export default function VirtualShowroom() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-[#0b0b0b] to-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-light uppercase tracking-widest md:text-4xl">Virtual Showroom</h2>
          <p className="mx-auto max-w-2xl text-white/70">
            Experience our signature collection in immersive 3D. Rotate and explore every detail of our craftsmanship.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto aspect-video max-w-4xl overflow-hidden rounded-lg border border-white/10 bg-black/30 backdrop-blur-sm"
        >
          <Canvas shadows dpr={[1, 2]}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <Suspense fallback={null}>
              <PerfumeBottle />
              <Environment preset="studio" />
            </Suspense>
            <OrbitControls enablePan={false} enableZoom={false} rotateSpeed={0.5} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <button className="shimmer-button rounded-full border border-[#bfa77f] bg-transparent px-6 py-3 text-sm uppercase tracking-widest text-[#bfa77f] transition-all duration-300 hover:bg-[#bfa77f]/10">
            View Collection
          </button>
        </motion.div>
      </div>
    </section>
  )
}
