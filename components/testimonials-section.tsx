import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "T-Fitness equipment has transformed our training facilities. The quality and durability are exceptional.",
    author: "Colonel Ahmed Hassan",
    position: "Pakistan Army",
  },
  {
    quote: "Outstanding equipment and professional installation. Our students love the new gym facilities.",
    author: "Dr. Sarah Khan",
    position: "IOBM Fitness Center",
  },
  {
    quote: "Reliable, robust, and perfectly suited for intensive military training requirements.",
    author: "Captain Ali Raza",
    position: "Pakistan Navy",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            CLIENT <span className="text-red-600">TESTIMONIALS</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-gray-200 p-8 shadow-lg">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-red-600 text-sm">{testimonial.position}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
