import { memo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight } from "lucide-react"
import Link from "next/link"

const featuredProducts = [
  {
    name: "Professional Seated Calf Raise",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0011.jpg-vRknJDm0RFvYxX0z3tJuWhwjMLJyK7.jpeg",
    category: "Lower Body Training",
    description:
      "Heavy-duty plate loading calf raise machine with ergonomic design for maximum comfort and effectiveness.",
    features: ["Plate Loading System", "Ergonomic Padding", "Heavy-Duty Frame"],
  },
  {
    name: "Lat Pulldown with Pull-Up Station",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0018.jpg-6tpQSPQXVJIVjKwS5yktmIfFAlVZHw.jpeg",
    category: "Back Training",
    description: "Dual-function machine combining lat pulldown and pull-up capabilities in one compact design.",
    features: ["Dual Function Design", "Pull-Up Station", "Diamond Plate Base"],
  },
  {
    name: "45° Leg Press Machine",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0017.jpg-3FenaKpFQneKJ9Pc3yO1DdnuDilaJk.jpeg",
    category: "Lower Body Training",
    description: "Professional-grade leg press with optimal 45-degree angle for maximum muscle engagement and safety.",
    features: ["45° Optimal Angle", "Safety Features", "Diamond Plate Platform"],
  },
]

export const FeaturedProductsSection = memo(function FeaturedProductsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            FEATURED <span className="text-red-600">PRODUCTS</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our signature yellow and black equipment line - engineered for excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <Card
              key={index}
              className="bg-white border-gray-200 overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-yellow-500 text-black font-bold">FEATURED</Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <Badge className="bg-red-100 text-red-600 mb-4">{product.category}</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 transition-colors duration-200">
                  Request Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/equipment">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 sm:px-8 py-4 text-base sm:text-lg font-bold uppercase tracking-wide transition-colors duration-200 w-full sm:w-auto">
              <span className="hidden sm:inline">View Complete Product Line</span>
              <span className="sm:hidden">View All Products</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
})
