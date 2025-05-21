import { ModalWrapper } from "@/components/modal-wrapper"
import Image from "next/image"

export default function DesignPreviewPage() {
  // Define breadcrumbs for this page
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/onboarding/pre-dashboard" },
    { label: "Design Preview", href: "/onboarding/design-preview" },
  ]

  return (
    <ModalWrapper title="Vehicle Wrap Design" dismissHref="/onboarding/pre-dashboard" breadcrumbs={breadcrumbs}>
      <div className="flex-1 flex flex-col p-6">
        <div className="bg-white border border-uber-gray-200 rounded-lg overflow-hidden mb-6">
          <div className="p-4 border-b border-uber-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-uber-gray-50 rounded-full overflow-hidden flex items-center justify-center mr-3">
                <Image src="/logos/microsoft-logo.png" alt="Microsoft" width={16} height={16} />
              </div>
              <h3 className="uber-heading-5">Microsoft Campaign Design</h3>
            </div>
          </div>

          <div className="p-4">
            <div className="space-y-4">
              <div className="aspect-[16/9] relative w-full rounded-lg overflow-hidden">
                <Image
                  src="/microsoft-vehicle-wrap.jpeg"
                  alt="Microsoft Vehicle Wrap Design"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/3] relative w-full rounded-lg overflow-hidden">
                  <Image
                    src="/microsoft-vehicle-wrap.jpeg"
                    alt="Microsoft Vehicle Wrap - Side View"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/3] relative w-full rounded-lg overflow-hidden">
                  <Image
                    src="/microsoft-vehicle-wrap.jpeg"
                    alt="Microsoft Vehicle Wrap - Rear View"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-uber-gray-200 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-uber-gray-200">
            <h3 className="uber-heading-5">Design Specifications</h3>
          </div>

          <div className="p-4">
            <div className="space-y-4">
              <div>
                <p className="uber-paragraph-3 text-uber-gray-600">Brand</p>
                <p className="uber-paragraph-2 font-medium">Microsoft</p>
              </div>

              <div>
                <p className="uber-paragraph-3 text-uber-gray-600">Coverage</p>
                <p className="uber-paragraph-2 font-medium">Partial Wrap (Sides and Rear)</p>
              </div>

              <div>
                <p className="uber-paragraph-3 text-uber-gray-600">Material</p>
                <p className="uber-paragraph-2 font-medium">Premium Vinyl with UV Protection</p>
              </div>

              <div>
                <p className="uber-paragraph-3 text-uber-gray-600">Estimated Installation Time</p>
                <p className="uber-paragraph-2 font-medium">3-4 Hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  )
}
