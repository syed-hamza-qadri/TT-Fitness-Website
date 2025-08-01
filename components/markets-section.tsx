import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, GraduationCap, Briefcase, Building, Trophy, Heart, ArrowRight } from "lucide-react"

const markets = [
  {
    icon: Shield,
    title: "Military & Defense",
    description: "Professional fitness solutions tailored for military & defense",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Professional fitness solutions tailored for educational institutions",
  },
  {
    icon: Briefcase,
    title: "Corporate Facilities",
    description: "Professional fitness solutions tailored for corporate facilities",
  },
  {
    icon: Building,
    title: "Government Organizations",
    description: "Professional fitness solutions tailored for government organizations",
  },
  {
    icon: Trophy,
    title: "Sports Complexes",
    description: "Professional fitness solutions tailored for sports complexes",
  },
  {
    icon: Heart,
    title: "Private Gyms",
    description: "Professional fitness solutions tailored for private gyms",
  },
]

export function MarketsSection() {
  return (
    <section id="markets" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            OUR <span className="text-red-600">MARKETS</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by Pakistan's most prestigious institutions since 2011
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {markets.map((market, index) => (
            <Card
              key={index}
              className="bg-white border-gray-200 overflow-hidden group hover:border-red-500 hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <market.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{market.title}</h3>
                <p className="text-gray-600 mb-6">{market.description}</p>
                <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
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
}
