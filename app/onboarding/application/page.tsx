import { ModalWrapper } from "@/components/modal-wrapper"
import { FileUpload } from "@/components/ui/file-upload"
import { RadioGroup } from "@/components/ui/radio"
import Image from "next/image"

export default function ApplicationPage() {
  // Define breadcrumbs for this page
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Onboarding", href: "/onboarding/qualification" },
    { label: "Available Campaigns", href: "/onboarding/driver-info" },
    { label: "Application", href: "/onboarding/application" },
  ]

  return (
    <ModalWrapper
      title="Apply for Campaign"
      dismissHref="/onboarding/driver-info"
      actionLabel="Submit Application"
      actionHref="/onboarding/application/success"
      breadcrumbs={breadcrumbs}
    >
      <div className="flex-1 flex flex-col px-4 py-6">
        <div className="w-full max-w-md mx-auto">
          <h2 className="uber-heading-3 mb-4">Microsoft Campaign Application</h2>

          <div className="space-y-6">
            {/* Campaign selection */}
            <div>
              <label className="block text-sm font-medium text-uber-gray-700 mb-2">Select Campaign</label>
              <RadioGroup
                name="campaign"
                defaultValue="microsoft"
                options={[
                  {
                    label: "Microsoft",
                    value: "microsoft",
                    description: "$400/month for 3 months",
                  },
                  {
                    label: "Starbucks",
                    value: "starbucks",
                    description: "$350/month for 6 months",
                  },
                ]}
              />
            </div>

            {/* Vehicle information */}
            <div>
              <h3 className="uber-heading-5 mb-3">Vehicle Information</h3>
              <div className="bg-uber-gray-50 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image src="/images/driver-car.png" alt="Vehicle" width={60} height={60} className="rounded-md" />
                  </div>
                  <div className="ml-3">
                    <p className="uber-paragraph-2 font-medium">White Honda Civic</p>
                    <p className="uber-paragraph-3 text-uber-gray-500">License: 3M53AF2</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Driver's license upload */}
            <div>
              <h3 className="uber-heading-5 mb-3">Required Documents</h3>
              <FileUpload
                label="Driver's License"
                hint="Upload front and back of your license"
                maxFiles={2}
                accept="image/*"
              />
            </div>

            {/* Vehicle photos upload */}
            <div className="mt-6">
              <FileUpload
                label="Vehicle Photos"
                hint="Upload clear photos of your vehicle (front, back, both sides)"
                maxFiles={4}
                accept="image/*"
              />
            </div>

            {/* Availability */}
            <div>
              <h3 className="uber-heading-5 mb-3">Availability</h3>
              <p className="uber-paragraph-3 text-uber-gray-700 mb-3">
                This campaign requires at least 30 hours of driving per week. Please confirm your availability.
              </p>
              <RadioGroup
                name="availability"
                defaultValue="yes"
                options={[
                  {
                    label: "Yes, I can drive 30+ hours per week",
                    value: "yes",
                  },
                  {
                    label: "No, I cannot commit to 30+ hours per week",
                    value: "no",
                  },
                ]}
              />
            </div>

            {/* Terms and conditions */}
            <div className="mt-6">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 text-uber-black border-uber-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="uber-paragraph-3 text-uber-gray-700">
                    I agree to the{" "}
                    <a href="#" className="text-[#276EF1]">
                      terms and conditions
                    </a>{" "}
                    of the Uber Ads program
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  )
}
