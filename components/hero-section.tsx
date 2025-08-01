"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, ChevronDown } from "lucide-react"

const slides = [
  {
    title: "FUEL YOUR",
    titleHighlight: "STRENGTH",
    description: "Professional-grade equipment trusted by Pakistan's elite institutions",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0009.jpg-AsDCCVWYMd6MkeHg037lH9MXdkpFWv.jpeg",
    alt: "FUEL YOUR STRENGTH",
  },
  {
    title: "POWER YOUR",
    titleHighlight: "PROGRESS",
    description: "Complete facility solutions from design to installation",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0005.jpg-2bCoXRzGfxyp9qCurHbSczI2EbxqwU.jpeg",
    alt: "POWER YOUR PROGRESS",
  },
  {
    title: "IGNITE YOUR",
    titleHighlight: "POTENTIAL",
    description: "Transforming fitness spaces across Pakistan since 2011",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0007.jpg-nqPs5fLg2kTDrzWOXunsPoqZLBOktO.jpeg",
    alt: "IGNITE YOUR POTENTIAL",
  },
  {
    title: "ACHIEVE",
    titleHighlight: "EXCELLENCE",
    description: "Building stronger communities through superior fitness solutions",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250719-WA0003.jpg-pQAxeEF77TeF5l6mp7NLqYwrgzso5l.jpeg",
    alt: "ACHIEVE EXCELLENCE",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Preload images for better performance
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = slides.map((slide) => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.crossOrigin = "anonymous"
          img.onload = resolve
          img.onerror = reject
          img.src = slide.image
        })
      })

      try {
        await Promise.all(imagePromises)
        setIsLoaded(true)
      } catch (error) {
        console.error("Error preloading images:", error)
        setIsLoaded(true)
      }
    }

    preloadImages()
  }, [])

  // Smooth slide change with transition state
  const nextSlide = useCallback(() => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setIsTransitioning(false)
    }, 300)
  }, [])

  // Auto-advance slides with longer duration
  useEffect(() => {
    if (!isLoaded) return

    const timer = setInterval(nextSlide, 6000) // Increased from 5000 to 6000ms
    return () => clearInterval(timer)
  }, [isLoaded, nextSlide])

  // Memoize current slide data
  const currentSlideData = useMemo(() => slides[currentSlide], [currentSlide])

  // Handle manual slide selection
  const handleSlideSelect = useCallback(
    (index: number) => {
      if (index !== currentSlide) {
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentSlide(index)
          setIsTransitioning(false)
        }, 300)
      }
    },
    [currentSlide],
  )

  if (!isLoaded) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-pulse">
          <div className="h-16 bg-gray-300 rounded w-96 mb-4"></div>
          <div className="h-8 bg-gray-300 rounded w-80"></div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <img
              alt={slide.alt}
              className="object-cover object-center w-full h-full transition-transform duration-1000 ease-in-out"
              src={slide.image || "/placeholder.svg"}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/60"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-none mb-4">
              <span
                className={`text-gray-900 block transition-all duration-700 ease-in-out transform ${
                  isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                {currentSlideData.title}
              </span>
              <span
                className={`text-red-600 block transition-all duration-700 ease-in-out transform delay-100 ${
                  isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                {currentSlideData.titleHighlight}
              </span>
            </h1>
            <div className="w-24 h-1 bg-red-600 mb-6 transition-all duration-500"></div>
          </div>

          <p
            className={`text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl font-light leading-relaxed transition-all duration-700 ease-in-out transform delay-200 ${
              isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            {currentSlideData.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start mb-12">
            <Select>
              <SelectTrigger className="w-full sm:w-80 bg-white/90 backdrop-blur-sm border-gray-300 text-gray-900 h-14">
                <SelectValue placeholder="Select Your Market" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="military">Military & Defense</SelectItem>
                <SelectItem value="education">Educational Institutions</SelectItem>
                <SelectItem value="corporate">Corporate Facilities</SelectItem>
                <SelectItem value="government">Government Organizations</SelectItem>
                <SelectItem value="sports">Sports Complexes</SelectItem>
                <SelectItem value="private">Private Gyms</SelectItem>
              </SelectContent>
            </Select>

            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold uppercase tracking-wide h-14 transition-all duration-300 hover:scale-105">
              Explore Equipment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideSelect(index)}
                className={`h-1 transition-all duration-500 ease-in-out ${
                  index === currentSlide ? "w-12 bg-red-600" : "w-8 bg-gray-400 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-900" />
      </div>
    </section>
  )
}
