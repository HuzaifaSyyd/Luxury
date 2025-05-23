"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ChevronRight, Minus, Plus, ShoppingBag } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useCart } from "@/components/cart-provider"

// Consolidated product data for all categories
const allProducts = [
  // Men's Leather
  {
    id: 1,
    slug: "classic-leather-jacket",
    name: "Classic Leather Jacket",
    category: "leather",
    gender: "mens",
    price: 2495,
    description:
      "Crafted from the finest Italian leather, this classic jacket features a timeless design with meticulous attention to detail. The butter-soft leather exterior is complemented by a luxurious silk lining, ensuring both comfort and durability.",
    features: [
      "Premium Italian leather",
      "Silk lining",
      "Handcrafted metal hardware",
      "Interior pockets",
      "Water-resistant treatment",
    ],
    images: [
      "https://i.pinimg.com/736x/f6/83/da/f683da410794920cf015b3b6f2290a33.jpg",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  {
    id: 2,
    slug: "vintage-biker-jacket",
    name: "Vintage Biker Jacket",
    category: "leather",
    gender: "mens",
    price: 1995,
    description:
      "Inspired by classic motorcycle culture, this vintage-style biker jacket combines rugged durability with sophisticated style. The distressed leather creates a lived-in look that only improves with age.",
    features: [
      "Distressed leather finish",
      "Asymmetrical zipper",
      "Quilted shoulder panels",
      "Adjustable side buckles",
      "Heavy-duty hardware",
    ],
    images: [
      "https://i.pinimg.com/736x/86/ae/ab/86aeab46ec1569cabbbf7be049d3263a.jpg",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  {
    id: 9,
    slug: "aviator-leather-jacket",
    name: "Aviator Leather Jacket",
    category: "leather",
    gender: "mens",
    price: 2295,
    description:
      "Inspired by military aviation, this aviator jacket combines heritage design with modern luxury. The shearling collar provides warmth and distinctive style, while the premium leather construction ensures lasting quality.",
    features: [
      "Premium cowhide leather",
      "Genuine shearling collar",
      "Insulated lining for warmth",
      "Multiple pockets",
      "Adjustable waist belt",
    ],
    images: [
      "https://i.pinimg.com/736x/8d/51/d8/8d51d848ba4b242f17125a718af448fe.jpg",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  {
    id: 10,
    slug: "modern-racer-jacket",
    name: "Modern Racer Jacket",
    category: "leather",
    gender: "mens",
    price: 1895,
    description:
      "A contemporary take on the classic racing jacket, featuring clean lines and a minimalist aesthetic. The streamlined silhouette offers a modern fit while maintaining the timeless appeal of leather outerwear.",
    features: [
      "Full-grain lambskin leather",
      "Streamlined racing design",
      "Perforated panels for ventilation",
      "YKK premium zippers",
      "Snap-button collar",
    ],
    images: [
      "https://i.pinimg.com/736x/52/c7/6e/52c76edd81fe1f16678849559c54f2a9.jpg",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  {
    id: 11,
    slug: "distressed-leather-bomber",
    name: "Distressed Leather Bomber",
    category: "leather",
    gender: "mens",
    price: 2195,
    description:
      "This bomber jacket features carefully distressed leather for a vintage, lived-in appearance. The ribbed cuffs and hem provide a comfortable fit, while the rugged exterior exudes effortless cool.",
    features: [
      "Hand-distressed leather",
      "Ribbed collar, cuffs, and hem",
      "Quilted satin lining",
      "Dual entry pockets",
      "Antique brass hardware",
    ],
    images: [
      "/Leather/leather5.jpeg",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  {
    id: 12,
    slug: "suede-leather-jacket-mens",
    name: "Suede Leather Jacket",
    category: "leather",
    gender: "mens",
    price: 2395,
    description:
      "Luxuriously soft suede elevates this jacket to a new level of sophistication. The buttery texture and rich color depth create a statement piece that's both versatile and distinctive.",
    features: [
      "Premium Italian suede",
      "Soft viscose lining",
      "Horn buttons",
      "Hand-finished edges",
      "Natural water-repellent treatment",
    ],
    images: [
      "/Leather/leather6.jpeg",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },

  // Men's Perfumes
  {
    id: 3,
    slug: "midnight-oud-perfume",
    name: "Midnight Oud Perfume",
    category: "perfumes",
    gender: "mens",
    price: 395,
    description:
      "A captivating blend of rare oud, amber, and sandalwood creates a sophisticated fragrance that lingers with mystery. The deep, woody base notes are complemented by subtle spices for a truly unforgettable scent.",
    features: [
      "100ml luxury glass bottle",
      "Rare oud extract",
      "12+ hour longevity",
      "Handcrafted in France",
      "Refillable",
    ],
    images: [
      "/perfumes/perfume1.jpeg",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  {
    id: 4,
    slug: "amber-elixir-perfume",
    name: "Amber Elixir Perfume",
    category: "perfumes",
    gender: "mens",
    price: 295,
    description:
      "Warm amber infused with vanilla and exotic spices creates a rich, inviting scent. This elegant fragrance evolves throughout the day, revealing complex layers of depth and character.",
    features: [
      "75ml artisanal bottle",
      "Natural amber extract",
      "Medium-strong sillage",
      "8-10 hour longevity",
      "Sustainable ingredients",
    ],
    images: [
      "/perfumes/perfume2.jpeg",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  {
    id: 13,
    slug: "cedar-vetiver-cologne",
    name: "Cedar & Vetiver Cologne",
    category: "perfumes",
    gender: "mens",
    price: 245,
    description:
      "A refreshing yet sophisticated cologne that balances the earthy depth of vetiver with the warm, woody notes of cedar. Citrus top notes add a bright opening that settles into a distinguished, long-lasting scent.",
    features: [
      "100ml cologne spray",
      "Haitian vetiver",
      "Atlas cedar wood",
      "Sicilian bergamot",
      "Alcohol-free formula",
    ],
    images: [
      "/perfumes/perfume3.jpeg",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  {
    id: 14,
    slug: "spiced-tobacco-perfume",
    name: "Spiced Tobacco Perfume",
    category: "perfumes",
    gender: "mens",
    price: 325,
    description:
      "Rich tobacco leaves blended with warm spices create a bold, distinctive fragrance with remarkable depth. Notes of vanilla and dried fruits add complexity to this sophisticated scent.",
    features: [
      "50ml concentrated perfume",
      "Aged tobacco absolute",
      "Cardamom and cinnamon",
      "Vanilla bourbon",
      "Artisanal small-batch production",
    ],
    images: [
      "/perfumes/perfume4.jpeg",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  {
    id: 15,
    slug: "leather-musk-fragrance",
    name: "Leather & Musk Fragrance",
    category: "perfumes",
    gender: "mens",
    price: 375,
    description:
      "A powerful combination of refined leather accord and sensual musk creates a distinctly masculine fragrance. Subtle hints of black pepper and vetiver add complexity and intrigue to this sophisticated scent.",
    features: ["100ml signature bottle", "Leather accord", "White musk", "Black pepper extract", "Haitian vetiver"],
    images: [
      "/perfumes/perfume5.jpeg",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  {
    id: 16,
    slug: "citrus-noir-cologne",
    name: "Citrus Noir Cologne",
    category: "perfumes",
    gender: "mens",
    price: 285,
    description:
      "Bright citrus notes meet dark, mysterious undertones in this unique cologne. The initial burst of bergamot and lemon gives way to a heart of black tea and a base of smoky vetiver and amber.",
    features: ["75ml cologne spray", "Italian bergamot", "Sicilian lemon", "Black tea extract", "Smoky vetiver"],
    images: [
      "/perfumes/perfume6.jpeg",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },

  // Women's Leather
  {
    id: 5,
    slug: "womens-leather-jacket",
    name: "Women's Leather Jacket",
    category: "leather",
    gender: "womens",
    price: 2295,
    description:
      "Tailored specifically for the modern woman, this leather jacket combines elegant design with exceptional craftsmanship. The fitted silhouette flatters the feminine form while providing comfort and versatility.",
    features: [
      "Soft lambskin leather",
      "Tailored feminine fit",
      "Silk-blend lining",
      "Polished silver hardware",
      "Hidden interior pockets",
    ],
    images: [
      "https://i.pinimg.com/736x/75/0b/d4/750bd4d57398f2c0d6e1d67eb6781a88.jpg",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  {
    id: 6,
    slug: "cropped-leather-jacket",
    name: "Cropped Leather Jacket",
    category: "leather",
    gender: "womens",
    price: 1895,
    description:
      "This cropped leather jacket offers a contemporary silhouette with timeless appeal. The shortened length pairs perfectly with high-waisted styles, while maintaining all the edge and attitude of a classic leather jacket.",
    features: [
      "Cropped design",
      "Butter-soft calfskin",
      "Quilted shoulder details",
      "Asymmetrical front zipper",
      "Adjustable side tabs",
    ],
    images: [
      "https://i.pinimg.com/736x/e5/d2/27/e5d2276851c0b578ac0aad8126238524.jpg",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  {
    id: 17,
    slug: "fitted-leather-blazer",
    name: "Fitted Leather Blazer",
    category: "leather",
    gender: "womens",
    price: 2495,
    description:
      "Combining the sophistication of a tailored blazer with the edge of leather, this piece transitions effortlessly from office to evening. The structured silhouette creates a polished, professional look with a touch of rebellion.",
    features: [
      "Tailored blazer cut",
      "Nappa leather",
      "Single-button closure",
      "Notched lapels",
      "Fully lined with interior pockets",
    ],
    images: [
      "https://i.pinimg.com/736x/fa/d2/43/fad2433a0fda15803b5328df50fc953f.jpg",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  {
    id: 18,
    slug: "leather-biker-jacket-womens",
    name: "Leather Biker Jacket",
    category: "leather",
    gender: "womens",
    price: 2195,
    description:
      "A feminine interpretation of the classic biker jacket, featuring a slightly nipped waist and softer leather for comfort without sacrificing style. The timeless design ensures this piece will remain a wardrobe staple for years to come.",
    features: [
      "Soft, supple leather",
      "Feminine biker silhouette",
      "Antique brass hardware",
      "Multiple zipper pockets",
      "Belted hem detail",
    ],
    images: [
      "https://i.pinimg.com/736x/11/9e/91/119e91037e495355f133360ecb0e16a3.jpg",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  {
    id: 19,
    slug: "leather-trench-coat",
    name: "Leather Trench Coat",
    category: "leather",
    gender: "womens",
    price: 2695,
    description:
      "This leather trench coat reimagines a classic silhouette in luxurious leather. The longer length provides sophistication and drama, while the belted waist creates a flattering, feminine shape.",
    features: [
      "Full-length design",
      "Lightweight lambskin leather",
      "Double-breasted front",
      "Belted waist",
      "Storm flaps and epaulettes",
    ],
    images: [
      "https://i.pinimg.com/736x/0d/37/e0/0d37e0f68360db89f13fb6b02b177a09.jpg",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  {
    id: 20,
    slug: "suede-leather-jacket-womens",
    name: "Suede Leather Jacket",
    category: "leather",
    gender: "womens",
    price: 2395,
    description:
      "Crafted from the finest suede, this jacket offers a softer alternative to traditional leather while maintaining a luxurious feel. The velvety texture adds dimension and sophistication to any outfit.",
    features: [
      "Premium Italian suede",
      "Collarless design",
      "Hidden snap closures",
      "Scalloped hem detail",
      "Silk-blend lining",
    ],
    images: [
      "https://i.pinimg.com/736x/73/57/7a/73577a61ebc0723bbadb20ecdc05b376.jpg",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },

  // Women's Perfumes
  {
    id: 7,
    slug: "velvet-rose-perfume",
    name: "Velvet Rose Perfume",
    category: "perfumes",
    gender: "womens",
    price: 345,
    description:
      "Luxurious Bulgarian roses with hints of jasmine and patchouli create an opulent floral fragrance. The velvety texture of this scent envelops the wearer in an aura of timeless femininity and grace.",
    features: [
      "50ml perfume extract",
      "Bulgarian rose absolute",
      "Jasmine sambac",
      "Aged patchouli",
      "Handcrafted crystal bottle",
    ],
    images: [
      "https://i.pinimg.com/736x/be/7b/fb/be7bfbbeb57fb399f8f2251d71166d44.jpg",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  {
    id: 8,
    slug: "jasmine-dreams-perfume",
    name: "Jasmine Dreams Perfume",
    category: "perfumes",
    gender: "womens",
    price: 325,
    description:
      "An intoxicating blend of jasmine flowers harvested at night when their scent is most potent. This enchanting fragrance captures the essence of moonlit gardens with subtle hints of vanilla and sandalwood.",
    features: [
      "75ml eau de parfum",
      "Night-blooming jasmine",
      "Madagascar vanilla",
      "Mysore sandalwood",
      "Artisanal glass bottle",
    ],
    images: [
      "https://i.pinimg.com/736x/d7/8f/08/d78f08d8d6092045a61919c300d266fa.jpg",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  {
    id: 21,
    slug: "floral-musk-perfume",
    name: "Floral Musk Perfume",
    category: "perfumes",
    gender: "womens",
    price: 295,
    description:
      "A delicate balance of fresh florals and warm musk creates a versatile fragrance suitable for both day and evening wear. The initial burst of peony and lily of the valley evolves into a sensual base of white musk.",
    features: ["100ml eau de parfum", "Peony extract", "Lily of the valley", "White musk", "Sustainable ingredients"],
    images: [
      "https://i.pinimg.com/736x/c0/1f/e1/c01fe13d36047147e15b905b0b761fef.jpg",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  {
    id: 22,
    slug: "vanilla-orchid-fragrance",
    name: "Vanilla Orchid Fragrance",
    category: "perfumes",
    gender: "womens",
    price: 315,
    description:
      "The exotic allure of vanilla orchid blends with creamy tonka bean and warm amber to create a sensual, long-lasting fragrance. This sophisticated scent offers depth and complexity beyond traditional vanilla perfumes.",
    features: [
      "50ml parfum",
      "Tahitian vanilla orchid",
      "Tonka bean absolute",
      "Amber resin",
      "Handcrafted in small batches",
    ],
    images: [
      "https://i.pinimg.com/736x/af/0b/51/af0b515d013ebc08fa3e5e5e19bc0814.jpg",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  {
    id: 23,
    slug: "amber-peony-perfume",
    name: "Amber & Peony Perfume",
    category: "perfumes",
    gender: "womens",
    price: 365,
    description:
      "The fresh, romantic notes of peony are grounded by rich amber in this elegant fragrance. A touch of bergamot adds brightness, while the amber base provides lasting warmth and sophistication.",
    features: [
      "75ml eau de parfum",
      "Chinese peony extract",
      "Baltic amber",
      "Italian bergamot",
      "Artisanal glass flacon",
    ],
    images: [
      "https://i.pinimg.com/736x/8d/5f/cf/8d5fcf802b8c9fc9d63af8e1e1ead60a.jpg",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  {
    id: 24,
    slug: "midnight-gardenia-scent",
    name: "Midnight Gardenia Scent",
    category: "perfumes",
    gender: "womens",
    price: 335,
    description:
      "The intoxicating scent of gardenia flowers blooming at night is captured in this mysterious and elegant fragrance. Notes of black vanilla and tuberose add depth and sensuality to this captivating perfume.",
    features: ["50ml parfum", "Gardenia absolute", "Tuberose", "Black vanilla", "Signature black glass bottle"],
    images: [
      "https://i.pinimg.com/736x/a2/9e/d4/a29ed40b687544a338365003e0f18a77.jpg",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
]

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Find the product based on the ID or slug from the URL
    const productId = params.id
    let foundProduct

    // Try to find by ID (number)
    if (!isNaN(Number(productId))) {
      foundProduct = allProducts.find((p) => p.id === Number(productId))
    }
    // Try to find by slug (string)
    else {
      foundProduct = allProducts.find((p) => p.slug === productId)
    }

    if (foundProduct) {
      setProduct(foundProduct)
    }

    setLoading(false)
  }, [params.id])

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-[#0b0b0b] pt-32">
          <div className="container mx-auto px-4 text-center">
            <div className="flex h-40 items-center justify-center">
              <p className="text-white/70">Loading product details...</p>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  if (!product) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-[#0b0b0b] pt-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-3xl font-bold">Product Not Found</h1>
            <p className="mb-8 text-white/70">The product you are looking for does not exist.</p>
            <Link
              href="/products"
              className="inline-block rounded-full border border-[#bfa77f] bg-[#bfa77f]/10 px-6 py-3 text-sm uppercase tracking-wider text-[#bfa77f] transition-all hover:bg-[#bfa77f]/20"
            >
              Back to Products
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
    })
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0b0b0b] pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-white/80">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-white/80">
              Products
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white/80">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 overflow-hidden rounded-lg bg-white/5">
                <img
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex gap-4">
                {product.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`overflow-hidden rounded-md border-2 ${
                      selectedImage === index ? "border-[#bfa77f]" : "border-transparent"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} view ${index + 1}`}
                      className="h-20 w-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="mb-2 text-3xl font-bold">{product.name}</h1>
                <p className="mb-6 text-2xl font-light text-[#bfa77f]">${product.price.toLocaleString()}</p>

                <div className="mb-8">
                  <p className="mb-4 text-white/80">{product.description}</p>

                  <h3 className="mb-2 text-lg font-medium">Features:</h3>
                  <ul className="space-y-1 text-white/70">
                    {product.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-[#bfa77f]">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 text-sm font-medium uppercase tracking-wider">Quantity</h3>
                  <div className="flex items-center">
                    <button
                      onClick={decrementQuantity}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white/40"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="mx-4 min-w-10 text-center text-lg">{quantity}</span>
                    <button
                      onClick={incrementQuantity}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white/40"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    onClick={handleAddToCart}
                    className="flex items-center justify-center gap-2 rounded-full border border-[#bfa77f] bg-[#bfa77f]/10 px-8 py-3 text-sm uppercase tracking-wider text-[#bfa77f] transition-all hover:bg-[#bfa77f]/20"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Add to Cart
                  </button>
                  <button className="rounded-full border border-white/30 px-8 py-3 text-sm uppercase tracking-wider text-white transition-all hover:border-white/50">
                    Add to Wishlist
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
