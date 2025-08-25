"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, MessageCircle, ArrowLeft, Filter } from "lucide-react"
import { ProductDetailDialog } from "@/components/product-detail-dialog"
import Link from "next/link"

const allEquipment = [
  {
    id: 1,
    name: "Professional Leg Press Machine",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0017.jpg-3FenaKpFQneKJ9Pc3yO1DdnuDilaJk.jpeg",
    category: "Lower Body",
    type: "strength",
    description:
      "Heavy-duty leg press machine designed for intensive commercial use with adjustable weight system and safety features.",
    keyFeatures: ["Heavy-Duty Steel Construction", "Adjustable Weight System (up to 500kg)", "Safety Lock Mechanism"],
    features: ["Heavy-Duty Steel Construction", "Adjustable Weight System", "Safety Lock Mechanism"],
    benefits: ["Builds leg strength", "Improves power output", "Safe heavy loading", "Targets multiple leg muscles"],
    specifications: {
      dimensions: "200cm x 150cm x 180cm",
      weight: "350kg",
      maxLoad: "500kg",
      warranty: "2 Years",
      certification: "ISO 9001",
      price: "Contact for Quote",
    },
  },
  {
    id: 2,
    name: "Seated Row Machine",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0016.jpg-UvQBKzdOSla4e5oK9uMe42IwsLFOHy.jpeg",
    category: "Back Training",
    type: "strength",
    description:
      "Professional seated rowing machine for comprehensive back and arm muscle development with smooth cable system.",
    keyFeatures: ["Smooth Cable System", "Adjustable Chest Pad", "Multiple Grip Options"],
    features: ["Smooth Cable System", "Adjustable Chest Pad", "Multiple Grip Options"],
    benefits: ["Strengthens back muscles", "Improves posture", "Builds upper body strength", "Low impact exercise"],
    specifications: {
      dimensions: "180cm x 120cm x 160cm",
      weight: "280kg",
      maxLoad: "200kg",
      warranty: "2 Years",
      certification: "ISO 9001",
      price: "Contact for Quote",
    },
  },
  {
    id: 3,
    name: "Hack Squat Machine",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0011.jpg-vRknJDm0RFvYxX0z3tJuWhwjMLJyK7.jpeg",
    category: "Lower Body",
    type: "strength",
    description:
      "Professional hack squat machine for safe and effective lower body training with angled platform design.",
    keyFeatures: ["Angled Platform Design", "Safety Lock System", "Non-Slip Footplate"],
    features: ["Angled Platform Design", "Safety Lock System", "Non-Slip Footplate"],
    benefits: ["Strengthens calf muscles", "Improves ankle stability", "Builds lower leg power", "Low impact exercise"],
    specifications: {
      dimensions: "220cm x 140cm x 200cm",
      weight: "400kg",
      maxLoad: "300kg",
      warranty: "2 Years",
      certification: "ISO 9001",
      price: "Contact for Quote",
    },
  },
  {
    id: 4,
    name: "Cable Row System",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0005.jpg-2bCoXRzGfxyp9qCurHbSczI2EbxqwU.jpeg",
    category: "Functional Training",
    type: "functional",
    description:
      "Versatile cable rowing system for functional strength training and rehabilitation with multi-angle training capability.",
    keyFeatures: ["Multi-Angle Training", "Smooth Cable Operation", "Adjustable Height"],
    features: ["Multi-Angle Training", "Smooth Cable Operation", "Adjustable Height"],
    benefits: [
      "Functional movement training",
      "Multiple exercise angles",
      "Smooth cable operation",
      "Versatile attachments",
    ],
    specifications: {
      dimensions: "160cm x 100cm x 200cm",
      weight: "250kg",
      maxLoad: "100kg per side",
      warranty: "2 Years",
      certification: "ISO 9001",
      price: "Contact for Quote",
    },
  },
  {
    id: 5,
    name: "Lat Pulldown Machine",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0018.jpg-6tpQSPQXVJIVjKwS5yktmIfFAlVZHw.jpeg",
    category: "Upper Body",
    type: "strength",
    description:
      "Premium lat pulldown machine for comprehensive upper body and back development with adjustable thigh pads.",
    keyFeatures: ["Adjustable Thigh Pads", "Multiple Grip Positions", "Smooth Pulley System"],
    features: ["Adjustable Thigh Pads", "Multiple Grip Positions", "Smooth Pulley System"],
    benefits: [
      "Strengthens back muscles",
      "Improves posture",
      "Builds upper body strength",
      "Versatile exercise options",
    ],
    specifications: {
      dimensions: "170cm x 130cm x 220cm",
      weight: "320kg",
      maxLoad: "200kg",
      warranty: "2 Years",
      certification: "ISO 9001",
      price: "Contact for Quote",
    },
  },
  {
    id: 6,
    name: "Commercial Treadmill Pro",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0003.jpg-pQAxeEF77TeF5l6mp7NLqYwrgzso5l.jpeg",
    category: "Cardio Equipment",
    type: "cardio",
    description: "Professional-grade commercial treadmill with advanced features for high-traffic gym environments.",
    keyFeatures: ["Powerful AC Motor", "Large Running Surface", "Advanced Console"],
    features: ["Powerful AC Motor", "Large Running Surface", "Advanced Console"],
    benefits: [
      "Improves cardiovascular health",
      "Burns calories efficiently",
      "Multiple workout programs",
      "Low impact option",
    ],
    specifications: {
      dimensions: "200cm x 90cm x 160cm",
      weight: "180kg",
      maxLoad: "150kg",
      warranty: "2 Years",
      certification: "ISO 9001",
      price: "Contact for Quote",
    },
  },
  {
    id: 7,
    name: "Multi-Station Gym",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0009.jpg-AsDCCVWYMd6MkeHg037lH9MXdkpFWv.jpeg",
    category: "Multi-Station",
    type: "strength",
    description:
      "Complete multi-station gym system allowing multiple users to train simultaneously with various exercise options.",
    keyFeatures: ["Multiple Exercise Stations", "Independent Weight Stacks", "Space Efficient Design"],
    features: ["Multiple Exercise Stations", "Independent Weight Stacks", "Space Efficient Design"],
    benefits: ["Full body workout", "Multiple exercise options", "Smooth cable system", "Space efficient design"],
    specifications: {
      dimensions: "400cm x 300cm x 220cm",
      weight: "800kg",
      maxLoad: "150kg per station",
      warranty: "2 Years",
      certification: "ISO 9001",
      price: "Contact for Quote",
    },
  },
  {
    id: 8,
    name: "Olympic Bench Press",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0014.jpg-TIH2WD92m0Re8Yj3CCftLP6LFPzOj2.jpeg",
    category: "Chest Training",
    type: "strength",
    description:
      "Professional Olympic bench press with safety features and adjustable settings for serious strength training.",
    keyFeatures: ["Olympic Barbell Compatible", "Adjustable Safety Bars", "Heavy-Duty Construction"],
    features: ["Olympic Barbell Compatible", "Adjustable Safety Bars", "Heavy-Duty Construction"],
    benefits: [
      "Targets multiple muscle groups",
      "Improves upper body strength",
      "Enhances muscle definition",
      "Versatile training options",
    ],
    specifications: {
      dimensions: "180cm x 140cm x 130cm",
      weight: "120kg",
      maxLoad: "180kg",
      warranty: "2 Years",
      certification: "ISO 9001",
      price: "Contact for Quote",
    },
  },
]

export default function EquipmentCatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Equipment")
  const [filteredEquipment, setFilteredEquipment] = useState(allEquipment)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const categories = ["All Equipment", "Strength Training", "Cardio Equipment", "Functional Training"]

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    if (category === "All Equipment") {
      setFilteredEquipment(allEquipment)
    } else {
      const typeMap: { [key: string]: string } = {
        "Strength Training": "strength",
        "Cardio Equipment": "cardio",
        "Functional Training": "functional",
      }
      setFilteredEquipment(allEquipment.filter((item) => item.type === typeMap[category]))
    }
  }

  const handleViewDetails = (product: any) => {
    setSelectedProduct(product)
    setIsDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
    setSelectedProduct(null)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:text-gray-300 p-0 mr-4">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            COMPLETE <span className="text-red-500">EQUIPMENT CATALOG</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Professional-grade fitness equipment with detailed specifications
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-900">Filter by:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEquipment.map((equipment) => (
              <Card
                key={equipment.id}
                className="bg-white border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="aspect-square relative overflow-hidden bg-gray-50">
                  <img
                    src={equipment.image || "/placeholder.svg"}
                    alt={equipment.name}
                    className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-red-600 text-white">{equipment.category}</Badge>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{equipment.name}</h3>
                    <p className="text-red-600 font-semibold">Contact for Quote</p>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">{equipment.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {equipment.keyFeatures.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Specifications:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">Dimensions:</span>
                        <div className="font-medium">{equipment.specifications.dimensions}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Weight:</span>
                        <div className="font-medium">{equipment.specifications.weight}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Button
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => handleViewDetails(equipment)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Full Details
                    </Button>
                    <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Dialog */}
      {selectedProduct && (
        <ProductDetailDialog isOpen={isDialogOpen} onClose={handleCloseDialog} product={selectedProduct} />
      )}

      <Footer />
    </div>
  )
}
