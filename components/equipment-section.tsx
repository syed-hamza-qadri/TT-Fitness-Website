"use client"
import { useState, memo } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dumbbell, Heart, Target, Eye, MessageCircle, CircleCheckBig, ArrowRight } from "lucide-react"
import { ProductDetailDialog } from "./product-detail-dialog"
import Link from "next/link"

const equipmentData = {
  strength: [
    {
      name: "Professional Seated Calf Raise",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0011.jpg-vRknJDm0RFvYxX0z3tJuWhwjMLJyK7.jpeg",
      category: "Lower Body",
      features: ["Plate Loading System", "Ergonomic Design", "Heavy-Duty Construction"],
      description:
        "Professional seated calf raise machine designed for maximum calf muscle development with plate loading system for progressive overload training.",
      benefits: [
        "Strengthens calf muscles",
        "Improves ankle stability",
        "Builds lower leg power",
        "Low impact exercise",
      ],
      specifications: {
        dimensions: "150cm x 100cm x 140cm",
        weight: "180kg",
        maxLoad: "300kg",
        warranty: "2 Years",
        certification: "ISO 9001",
        price: "Contact for Quote",
      },
    },
    {
      name: "Lat Pulldown with Pull-Up Station",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0018.jpg-6tpQSPQXVJIVjKwS5yktmIfFAlVZHw.jpeg",
      category: "Back Training",
      features: ["Dual Function Design", "Pull-Up Capability", "Diamond Plate Footrest"],
      description:
        "Dual-function machine combining lat pulldown and pull-up capabilities in one compact design for comprehensive back training.",
      benefits: [
        "Strengthens back muscles",
        "Improves posture",
        "Builds upper body strength",
        "Versatile exercise options",
      ],
      specifications: {
        dimensions: "160cm x 120cm x 220cm",
        weight: "220kg",
        maxLoad: "200kg",
        warranty: "2 Years",
        certification: "ISO 9001",
        price: "Contact for Quote",
      },
    },
    {
      name: "Seated Row Machine",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0016.jpg-UvQBKzdOSla4e5oK9uMe42IwsLFOHy.jpeg",
      category: "Back Training",
      features: ["Plate Loading System", "Comfortable Seating", "Smooth Operation"],
      description:
        "Professional seated rowing machine for comprehensive back and arm muscle development with smooth cable system.",
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
      name: "Multi-Function Lat Pulldown",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0014.jpg-TIH2WD92m0Re8Yj3CCftLP6LFPzOj2.jpeg",
      category: "Upper Body",
      features: ["Multiple Exercise Options", "Adjustable Components", "Professional Grade"],
      description:
        "Multi-function lat pulldown machine with adjustable components for various upper body exercises and training variations.",
      benefits: [
        "Targets multiple muscle groups",
        "Improves upper body strength",
        "Enhances muscle definition",
        "Versatile training options",
      ],
      specifications: {
        dimensions: "170cm x 130cm x 200cm",
        weight: "250kg",
        maxLoad: "180kg",
        warranty: "2 Years",
        certification: "ISO 9001",
        price: "Contact for Quote",
      },
    },
    {
      name: "45° Leg Press Machine",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0017.jpg-3FenaKpFQneKJ9Pc3yO1DdnuDilaJk.jpeg",
      category: "Lower Body",
      features: ["Angled Design", "Safety Features", "Diamond Plate Platform"],
      description:
        "Professional-grade leg press with optimal 45-degree angle for maximum muscle engagement and safety during heavy lifting.",
      benefits: ["Builds leg strength", "Improves power output", "Safe heavy loading", "Targets multiple leg muscles"],
      specifications: {
        dimensions: "200cm x 150cm x 180cm",
        weight: "320kg",
        maxLoad: "500kg",
        warranty: "2 Years",
        certification: "ISO 9001",
        price: "Contact for Quote",
      },
    },
    {
      name: "Multi-Station Cable Machine",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0009.jpg-AsDCCVWYMd6MkeHg037lH9MXdkpFWv.jpeg",
      category: "Strength Training",
      features: ["Multi-Exercise Capability", "Adjustable Weight Stack", "Professional Grade Construction"],
      description:
        "Comprehensive multi-station cable machine offering numerous exercise possibilities for full-body strength training.",
      benefits: ["Full body workout", "Multiple exercise options", "Smooth cable system", "Space efficient design"],
      specifications: {
        dimensions: "300cm x 200cm x 220cm",
        weight: "450kg",
        maxLoad: "150kg per station",
        warranty: "2 Years",
        certification: "ISO 9001",
        price: "Contact for Quote",
      },
    },
  ],
  cardio: [
    {
      name: "Professional Treadmill Series",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0003.jpg-pQAxeEF77TeF5l6mp7NLqYwrgzso5l.jpeg",
      category: "Cardio Equipment",
      features: ["Digital Display", "Multiple Programs", "Commercial Grade"],
      description:
        "Professional-grade treadmill with advanced digital display and multiple training programs for comprehensive cardio workouts.",
      benefits: [
        "Improves cardiovascular health",
        "Burns calories efficiently",
        "Multiple workout programs",
        "Low impact option",
      ],
      specifications: {
        dimensions: "200cm x 90cm x 150cm",
        weight: "180kg",
        maxLoad: "150kg",
        warranty: "2 Years",
        certification: "ISO 9001",
        price: "Contact for Quote",
      },
    },
    {
      name: "Complete Cardio Section",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0004.jpg-XrKrTSEGkFWecfiyrkuibcQ15QofBK.jpeg",
      category: "Cardio Zone",
      features: ["Variety of Equipment", "Entertainment Systems", "Climate Controlled"],
      description:
        "Complete cardio section setup with variety of equipment including treadmills, bikes, and entertainment systems.",
      benefits: [
        "Comprehensive cardio training",
        "Entertainment integration",
        "Climate controlled environment",
        "Multiple equipment options",
      ],
      specifications: {
        dimensions: "Custom Layout",
        weight: "Varies",
        maxLoad: "Multiple Users",
        warranty: "2 Years",
        certification: "ISO 9001",
        price: "Contact for Quote",
      },
    },
  ],
  functional: [
    {
      name: "Power Rack System",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0007.jpg-nqPs5fLg2kTDrzWOXunsPoqZLBOktO.jpeg",
      category: "Functional Training",
      features: ["Multi-Exercise Capability", "Safety Bars", "Pull-up Station"],
      description:
        "Professional power rack system with safety features and pull-up station for comprehensive functional training.",
      benefits: ["Safe heavy lifting", "Multiple exercise options", "Functional movement patterns", "Space efficient"],
      specifications: {
        dimensions: "150cm x 150cm x 230cm",
        weight: "200kg",
        maxLoad: "400kg",
        warranty: "2 Years",
        certification: "ISO 9001",
        price: "Contact for Quote",
      },
    },
    {
      name: "Cable Crossover Station",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0005.jpg-2bCoXRzGfxyp9qCurHbSczI2EbxqwU.jpeg",
      category: "Functional Training",
      features: ["Adjustable Height", "Multiple Attachments", "Smooth Operation"],
      description:
        "Professional cable crossover station with adjustable height settings and multiple attachment options for functional training.",
      benefits: [
        "Functional movement training",
        "Multiple exercise angles",
        "Smooth cable operation",
        "Versatile attachments",
      ],
      specifications: {
        dimensions: "250cm x 200cm x 220cm",
        weight: "300kg",
        maxLoad: "100kg per side",
        warranty: "2 Years",
        certification: "ISO 9001",
        price: "Contact for Quote",
      },
    },
  ],
}

const EquipmentCard = memo(function EquipmentCard({
  item,
  onViewDetails,
}: {
  item: any
  onViewDetails: (item: any) => void
}) {
  return (
    <Card className="bg-white border-gray-200 overflow-hidden group hover:border-red-500 hover:shadow-xl transition-all duration-300">
      <div className="aspect-square relative overflow-hidden bg-gray-50">
        <img
          alt={item.name}
          className="object-contain group-hover:scale-110 transition-transform duration-500 w-full h-full p-4"
          src={item.image || "/placeholder.svg"}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-red-600 text-white">{item.category}</Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
        <div className="text-red-600 font-semibold mb-4">Contact for Quote</div>
        <div className="space-y-2 mb-4">
          {item.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center gap-2">
              <CircleCheckBig className="w-4 h-4 text-red-600" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white" onClick={() => onViewDetails(item)}>
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </Button>
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
            <MessageCircle className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
})

export const EquipmentSection = memo(function EquipmentSection() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleViewDetails = (product: any) => {
    setSelectedProduct(product)
    setIsDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
    setSelectedProduct(null)
  }

  return (
    <section id="equipment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            PREMIUM <span className="text-red-600">EQUIPMENT</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional-grade fitness equipment engineered for performance and built to last
          </p>
        </div>

        <Tabs defaultValue="strength" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 bg-gray-100 mb-12 h-auto">
            <TabsTrigger
              value="strength"
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-600 font-semibold uppercase tracking-wide py-3 px-2 text-xs md:text-sm"
            >
              <Dumbbell className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Strength Training</span>
              <span className="sm:hidden">Strength</span>
            </TabsTrigger>
            <TabsTrigger
              value="cardio"
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-600 font-semibold uppercase tracking-wide py-3 px-2 text-xs md:text-sm"
            >
              <Heart className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Cardio Equipment</span>
              <span className="sm:hidden">Cardio</span>
            </TabsTrigger>
            <TabsTrigger
              value="functional"
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-600 font-semibold uppercase tracking-wide py-3 px-2 text-xs md:text-sm"
            >
              <Target className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Functional Training</span>
              <span className="sm:hidden">Functional</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="strength">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {equipmentData.strength.map((item, index) => (
                <EquipmentCard key={index} item={item} onViewDetails={handleViewDetails} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cardio">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {equipmentData.cardio.map((item, index) => (
                <Card
                  key={index}
                  className="bg-white border-gray-200 overflow-hidden group hover:border-red-500 hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      alt={item.name}
                      className="object-cover group-hover:scale-110 transition-transform duration-500 w-full h-full"
                      src={item.image || "/placeholder.svg"}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-600 text-white">{item.category}</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                      <div className="text-red-400 font-semibold">Contact for Quote</div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-2 mb-4">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CircleCheckBig className="w-4 h-4 text-red-600" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => handleViewDetails(item)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="functional">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {equipmentData.functional.map((item, index) => (
                <Card
                  key={index}
                  className="bg-white border-gray-200 overflow-hidden group hover:border-red-500 hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      alt={item.name}
                      className="object-cover group-hover:scale-110 transition-transform duration-500 w-full h-full"
                      src={item.image || "/placeholder.svg"}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-600 text-white">{item.category}</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                      <div className="text-red-400 font-semibold">Contact for Quote</div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-2 mb-4">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CircleCheckBig className="w-4 h-4 text-red-600" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => handleViewDetails(item)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Link href="/equipment">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold uppercase tracking-wide">
              View All Equipment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Product Detail Dialog */}
      {selectedProduct && (
        <ProductDetailDialog isOpen={isDialogOpen} onClose={handleCloseDialog} product={selectedProduct} />
      )}
    </section>
  )
})
