import { memo } from "react"
import { Card, CardContent } from "@/components/ui/card"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0011.jpg-vRknJDm0RFvYxX0z3tJuWhwjMLJyK7.jpeg",
    alt: "Seated Calf Raise Machine",
    title: "Calf Training Equipment",
    type: "product",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0018.jpg-6tpQSPQXVJIVjKwS5yktmIfFAlVZHw.jpeg",
    alt: "Lat Pulldown Machine",
    title: "Back Training Systems",
    type: "product",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0016.jpg-UvQBKzdOSla4e5oK9uMe42IwsLFOHy.jpeg",
    alt: "Seated Row Machine",
    title: "Rowing Equipment",
    type: "product",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0017.jpg-3FenaKpFQneKJ9Pc3yO1DdnuDilaJk.jpeg",
    alt: "Leg Press Machine",
    title: "Lower Body Equipment",
    type: "product",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0009.jpg-AsDCCVWYMd6MkeHg037lH9MXdkpFWv.jpeg",
    alt: "Multi-Station Cable Machine",
    title: "Advanced Cable Systems",
    type: "facility",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0005.jpg-2bCoXRzGfxyp9qCurHbSczI2EbxqwU.jpeg",
    alt: "Functional Trainer",
    title: "Functional Training",
    type: "facility",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0006.jpg-qhD1SW1YHVbNc6ddX5D9YC7KRdVFzq.jpeg",
    alt: "Leg Press Machine",
    title: "Lower Body Equipment",
    type: "facility",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0003.jpg-pQAxeEF77TeF5l6mp7NLqYwrgzso5l.jpeg",
    alt: "Cardio Section",
    title: "Cardio Equipment",
    type: "facility",
  },
]

export const GallerySection = memo(function GallerySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            EQUIPMENT <span className="text-red-600">GALLERY</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of professional fitness equipment
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className={`w-full h-full group-hover:scale-110 transition-transform duration-500 ${
                      image.type === "product" ? "object-contain bg-gray-50 p-4" : "object-cover"
                    }`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.title}
                    </h3>
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
