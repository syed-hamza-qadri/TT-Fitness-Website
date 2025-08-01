import { Badge } from "@/components/ui/badge"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-3xl font-bold text-red-600 italic transform -skew-x-12">T-FITNESS</div>
              <Badge className="bg-red-600 text-white">Since 2011</Badge>
            </div>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              Pakistan's premier gym equipment manufacturer, trusted by military, educational, and corporate
              institutions nationwide.
            </p>
            <div className="text-sm text-gray-500">© 2024 T-Fitness. All rights reserved.</div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-900 uppercase tracking-wide">Markets</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Military & Defense</li>
              <li>Educational Institutions</li>
              <li>Government Organizations</li>
              <li>Corporate Facilities</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-900 uppercase tracking-wide">Equipment</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Strength Training</li>
              <li>Cardio Equipment</li>
              <li>Functional Training</li>
              <li>Complete Solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
