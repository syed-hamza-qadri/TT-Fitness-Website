import { memo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, MapPin, Award } from "lucide-react"

const stats = [
  {
    icon: Trophy,
    value: "500+",
    label: "Projects Completed",
    description: "Successful installations nationwide",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Happy Users",
    description: "People using our equipment daily",
  },
  {
    icon: MapPin,
    value: "50+",
    label: "Cities Served",
    description: "Across Pakistan and beyond",
  },
  {
    icon: Award,
    value: "13+",
    label: "Years Experience",
    description: "Leading the fitness industry",
  },
]

export const StatsSection = memo(function StatsSection() {
  return (
    <section className="py-20 bg-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-6 text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-black mb-2">{stat.value}</div>
                  <div className="text-xl font-bold mb-2">{stat.label}</div>
                  <div className="text-white/80 text-sm">{stat.description}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
})
