import { memo } from "react"
import { Dumbbell, Users, Clock, Wrench } from "lucide-react"

const stats = [
  {
    icon: Dumbbell,
    number: "500+",
    label: "Equipment Installed",
  },
  {
    icon: Users,
    number: "100+",
    label: "Satisfied Clients",
  },
  {
    icon: Clock,
    number: "13+",
    label: "Years Experience",
  },
  {
    icon: Wrench,
    number: "24/7",
    label: "Support Available",
  },
]

export const StatsSection = memo(function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 uppercase tracking-wide text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})
