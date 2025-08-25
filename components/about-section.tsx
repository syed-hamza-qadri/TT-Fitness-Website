import { memo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Clock, MapPin } from "lucide-react"

const stats = [
  { icon: Award, value: "13+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Clock, value: "24/7", label: "Support Available" },
  { icon: MapPin, value: "50+", label: "Cities Served" },
]

export const AboutSection = memo(function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="bg-red-100 text-red-600 mb-6">About T-FITNESS</Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
              BUILDING <span className="text-red-600">STRONGER</span> PAKISTAN
            </h2>
            <div className="w-24 h-1 bg-red-600 mb-6"></div>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Since 2011, T-FITNESS has been Pakistan's leading provider of professional fitness equipment and complete
              facility solutions. We've equipped the nation's elite institutions with world-class fitness facilities.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-gray-700">ISO 9001 Certified Quality Management</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-gray-700">Nationwide Service Network</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-gray-700">Professional Installation & Training</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-gray-700">Comprehensive Warranty & Support</span>
              </div>
            </div>

            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold">
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-red-50 to-white border-red-100 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-black text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
})
