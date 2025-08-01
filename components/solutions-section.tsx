import { Button } from "@/components/ui/button"
import { Target, Dumbbell, Wrench, TrendingUp, Trophy, ArrowRight } from "lucide-react"

const solutions = [
  {
    icon: Target,
    title: "Design & Planning",
    description: "Custom facility design tailored to your space, requirements, and budget",
  },
  {
    icon: Dumbbell,
    title: "Equipment Supply",
    description: "Premium quality equipment manufactured to international standards",
  },
  {
    icon: Wrench,
    title: "Installation & Setup",
    description: "Professional installation by certified technicians with ongoing support",
  },
  {
    icon: TrendingUp,
    title: "Maintenance & Support",
    description: "Comprehensive maintenance programs to keep your equipment in peak condition",
  },
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            COMPLETE <span className="text-red-600">SOLUTIONS</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion - we deliver world-class fitness facilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                    <p className="text-gray-600 text-sm lg:text-base">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-bold uppercase tracking-wide w-full sm:w-auto">
                Start Your Project
                <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5 ml-2" />
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl relative">
              <img
                alt="Complete Gym Facility"
                className="object-cover w-full h-full"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0015.jpg-LKn1j4u6AFp9YcEvoDDWzsw9Mifq5z.jpeg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 lg:w-32 lg:h-32 bg-red-600 rounded-lg p-3 lg:p-4 flex items-center justify-center shadow-xl">
              <div className="text-center">
                <Trophy className="w-6 lg:w-8 h-6 lg:h-8 text-white mx-auto mb-1 lg:mb-2" />
                <div className="text-xs font-bold text-white uppercase leading-tight">Premium Quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
