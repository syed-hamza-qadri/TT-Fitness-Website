"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { X, MessageCircle, Phone, Mail } from "lucide-react"

interface ProductDetailDialogProps {
  isOpen: boolean
  onClose: () => void
  product: any
}

export function ProductDetailDialog({ isOpen, onClose, product }: ProductDetailDialogProps) {
  if (!product) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-gray-900">{product.name}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-50">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-contain p-4"
            />
            <div className="absolute top-4 right-4">
              <Badge className="bg-red-600 text-white">{product.category}</Badge>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
              <div className="grid grid-cols-1 gap-2">
                {product.features?.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {product.benefits && (
              <>
                <Separator />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefits</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {product.benefits.map((benefit: string, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {product.specifications && (
              <>
                <Separator />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-sm font-medium text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                        <div className="text-gray-900">{value as string}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            <Separator />

            <div className="space-y-4">
              <div className="text-2xl font-bold text-red-600">
                {product.specifications?.price || "Contact for Quote"}
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Quote
                </Button>
              </div>

              <Button variant="outline" className="w-full bg-transparent">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat with Expert
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
