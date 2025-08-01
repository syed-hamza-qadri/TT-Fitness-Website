"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, CheckCircle, Star, Phone, Mail, MessageSquare } from "lucide-react"

interface ProductDetailDialogProps {
  isOpen: boolean
  onClose: () => void
  product: {
    name: string
    image: string
    category: string
    description: string
    features: string[]
    benefits: string[]
    specifications: {
      dimensions: string
      weight: string
      maxLoad: string
      warranty: string
      certification: string
      price: string
    }
  }
}

export function ProductDetailDialog({ isOpen, onClose, product }: ProductDetailDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-3xl font-black text-gray-900 mb-2">{product.name}</DialogTitle>
              <Badge className="bg-red-600 text-white">{product.category}</Badge>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </DialogHeader>

        <div className="px-6 pb-6">
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Product Image */}
            <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="max-w-full max-h-80 object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Features</h3>
                <div className="space-y-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Benefits</h3>
                <div className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">DIMENSIONS</div>
                <div className="text-lg font-bold text-gray-900">{product.specifications.dimensions}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">WEIGHT</div>
                <div className="text-lg font-bold text-gray-900">{product.specifications.weight}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">MAX LOAD</div>
                <div className="text-lg font-bold text-gray-900">{product.specifications.maxLoad}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">WARRANTY</div>
                <div className="text-lg font-bold text-gray-900">{product.specifications.warranty}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">CERTIFICATION</div>
                <div className="text-lg font-bold text-gray-900">{product.specifications.certification}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">PRICE</div>
                <div className="text-lg font-bold text-red-600">{product.specifications.price}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid md:grid-cols-3 gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3">
                <MessageSquare className="w-4 h-4 mr-2" />
                Request Quote
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 font-bold py-3 bg-transparent"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call for Details
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 font-bold py-3 bg-transparent"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Inquiry
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
