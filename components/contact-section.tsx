"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            GET IN <span className="text-red-600">TOUCH</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">Ready to transform your fitness facility?</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-gray-900">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Phone</p>
                  <p className="text-gray-600">+92 XXX XXXXXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Email</p>
                  <p className="text-gray-600">info@t-fitness.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Location</p>
                  <p className="text-gray-600">Karachi, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8 text-gray-900">Request a Quote</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 h-12"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 h-12"
                />
              </div>
              <Select>
                <SelectTrigger className="bg-white border-gray-300 text-gray-900 h-12">
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
              <Textarea
                rows={4}
                placeholder="Tell us about your project requirements"
                className="w-full p-4 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-bold uppercase tracking-wide">
                REQUEST QUOTE
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
