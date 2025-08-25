import { memo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, GraduationCap, Building2, Landmark, Trophy, Dumbbell } from "lucide-react"

const markets = [
  {
    icon: Shield,
    title: "Military & Defense",
    description: "Specialized fitness solutions for armed forces and defense installations",
    features: ["Combat-ready equipment", "Durability tested", "Field-proven designs"],
    badge: "Trusted Partner",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Complete gym setups for schools, colleges, and universities",
    features: ["Student-safe designs", "Educational programs", "Bulk pricing"],
    badge: "Education Focus",
  },
  {
    icon: Building2,
    title: "Corporate Facilities",
    description: "Executive fitness centers and employee wellness programs",
    features: ["Space optimization", "Professional aesthetics", "Maintenance support"],
    badge: "Corporate Grade",
  },
  {
    icon: Landmark,
    title: "Government Organizations",
    description: "Fitness facilities for government offices and public institutions",
    features: ["Compliance standards", "Procurement support", "Long-term warranties"],
    badge: "Government Approved",
  },
  {
    icon: Trophy,
    title: "Sports Complexes",
    description: "Professional-grade equipment for sports facilities and training centers",
    features: ["Competition standards", "Athlete-focused", "Performance tracking"],
    badge: "Pro Level",
  },
  {
    icon: Dumbbell,
    title: "Private Gyms",
    description: "Custom solutions for commercial gyms and fitness centers",
    features: ["Revenue optimization", "Member retention", "Brand customization"],
    badge: "Commercial Ready",
  },
]

export const MarketsSection = memo(function MarketsSection() {
  return (
    <section id="markets" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            OUR <span className="text-red-600">MARKETS</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving diverse sectors with specialized fitness solutions tailored to unique requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {markets.map((market, index) => {
            const IconComponent = market.icon
            return (
              <Card
                key={index}
                className="bg-white border-gray-200 hover:border-red-500 hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">{market.badge}</Badge>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{market.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{market.description}</p>

                  <div className="space-y-3">
                    {market.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
})
