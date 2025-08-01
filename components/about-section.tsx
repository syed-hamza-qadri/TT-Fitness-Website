import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Trophy } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            LEADERSHIP <span className="text-red-600">EXCELLENCE</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">Meet the champions behind T-Fitness</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-white border-gray-200 overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 text-white">
              <h3 className="text-3xl font-black mb-2">CEO</h3>
              <h4 className="text-2xl font-bold mb-2">Mr. Tariq Zafar</h4>
              <p className="text-red-100">National Champion & Gold Medalist</p>
              <Badge className="bg-red-800 text-white mt-4">CM Balochistan Award Holder</Badge>
            </div>
            <CardContent className="p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Secretary General Pakistan Bodybuilding Federation, President Sindh Bodybuilding Association. CEO with 8
                Mr Pakistan Titles and international recognition.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-black text-red-600">4</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Gold Medals</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-red-600">8</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Mr Pakistan Titles</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-red-600">13+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Years Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-8 text-white">
              <h3 className="text-3xl font-black mb-2">MD</h3>
              <h4 className="text-2xl font-bold mb-2">Mr. Aamirullah Khan</h4>
              <p className="text-gray-200">Managing Director & International Coach</p>
              <Badge className="bg-gray-600 text-white mt-4">IFBB Certified</Badge>
            </div>
            <CardContent className="p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                International fitness coach and IFBB Chairman, owner of Body Matters Gym. Instrumental in guiding
                countless individuals towards healthier lifestyles.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700">IFBB International Judge</span>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700">Fitness Industry Leader</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
