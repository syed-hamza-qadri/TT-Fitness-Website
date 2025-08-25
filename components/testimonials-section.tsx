import { memo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Colonel Ahmed Hassan",
    position: "Fitness Director",
    organization: "Pakistan Army",
    image: "/placeholder-user.jpg",
    rating: 5,
    testimonial:
      "T-FITNESS has been our trusted partner for over 5 years. Their equipment quality and service excellence is unmatched. Our soldiers train on the best equipment available.",
  },
  {
    name: "Dr. Sarah Khan",
    position: "Sports Director",
    organization: "Lahore University",
    image: "/placeholder-user.jpg",
    rating: 5,
    testimonial:
      "The complete gym setup they provided for our university has transformed our sports program. Students love the modern equipment and the results speak for themselves.",
  },
  {
    name: "Muhammad Ali",
    position: "Gym Owner",
    organization: "Elite Fitness Center",
    image: "/placeholder-user.jpg",
    rating: 5,
    testimonial:
      "From equipment selection to installation and maintenance, T-FITNESS delivered everything perfectly. My members are extremely satisfied with the quality.",
  },
]

export const TestimonialsSection = memo(function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            CLIENT <span className="text-red-600">TESTIMONIALS</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied clients across Pakistan's leading institutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 relative">
              <CardContent className="p-8">
                <div className="absolute top-6 right-6">
                  <Quote className="w-8 h-8 text-red-200" />
                </div>

                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 italic">"{testimonial.testimonial}"</p>

                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-red-100 text-red-600 font-bold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-red-600 font-medium">{testimonial.organization}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
})
