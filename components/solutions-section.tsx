import { memo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle } from "lucide-react"

const solutions = [
  {
    title: "Complete Gym Setup",
    description: "End-to-end fitness facility design and installation services",
    image: "/images/gym-complete-facility.jpg",
    features: ["Space Planning", "Equipment Selection", "Installation", "Training"],
    badge: "Most Popular",
    badgeColor: "bg-green-500",
  },
  {
    title: "Equipment Maintenance",
    description: "Professional maintenance and repair services for all equipment",
    image: "/images/gym-strength-area.jpg",
    features: ["Regular Servicing", "Emergency Repairs", "Parts Replacement", "Warranty Support"],
    badge: "Essential",
    badgeColor: "bg-blue-500",
  },
  {
    title: "Facility Upgrade",
    description: "Modernize existing facilities with latest equipment and technology",
    image: "/images/gym-cardio-section.jpg",
    features: ["Assessment", "Upgrade Planning", "Modern Equipment", "Technology Integration"],
    badge: "Premium",
    badgeColor: "bg-purple-500",
  },
]

export const SolutionsSection = memo(function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            COMPLETE <span className="text-red-600">SOLUTIONS</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we provide comprehensive fitness facility solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="bg-white border-gray-200 overflow-hidden group hover:shadow-2xl transition-all duration-300 relative"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={solution.image || "/placeholder.svg"}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className={`${solution.badgeColor} text-white font-bold`}>{solution.badge}</Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>

                <div className="space-y-3 mb-8">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 group-hover:scale-105 transition-transform duration-200">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
})
