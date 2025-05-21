import { ModalWrapper } from "@/components/modal-wrapper"
import { CheckIcon } from "@/components/icons"
import Image from "next/image"

export default function ApplicationSuccessPage() {
  // Define breadcrumbs for this page
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Onboarding", href: "/onboarding/qualification" },
    { label: "Available Campaigns", href: "/onboarding/driver-info" },
    { label: "Application", href: "/onboarding/application" },
    { label: "Success", href: "/onboarding/application/success" },
  ]

  return (
    <ModalWrapper
      title="Application Submitted"
      dismissHref="/"
      actionLabel="Return to Dashboard"
      actionHref="/onboarding/driver-info"
      breadcrumbs={breadcrumbs}
    >
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {/* Success animation/icon */}
        <div className="w-20 h-20 bg-uber-green bg-opacity-10 rounded-full flex items-center justify-center mb-6">
          <CheckIcon size={40} color="#2FB157" />
        </div>

        <h2 className="uber-heading-2 mb-2 text-center">Application Submitted!</h2>
        <p className="uber-paragraph-2 text-uber-gray-600 text-center mb-8 max-w-md">
          Your application for the Microsoft campaign has been submitted. We'll review your details and get back to you
          within 2 business days.
        </p>

        {/* Next steps */}
        <div className="w-full max-w-md bg-uber-gray-50 rounded-lg p-4 mb-6">
          <h3 className="uber-heading-5 mb-3">Next Steps</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-uber-gray-200 rounded-full flex items-center justify-center mr-3">
                <span className="text-xs font-medium">1</span>
              </div>
              <div>
                <p className="uber-paragraph-3 font-medium">Application Review</p>
                <p className="uber-paragraph-3 text-uber-gray-500">
                  We'll review your application within 2 business days
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-uber-gray-200 rounded-full flex items-center justify-center mr-3">
                <span className="text-xs font-medium">2</span>
              </div>
              <div>
                <p className="uber-paragraph-3 font-medium">Approval Notification</p>
                <p className="uber-paragraph-3 text-uber-gray-500">You'll receive an in-app notification and email</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-uber-gray-200 rounded-full flex items-center justify-center mr-3">
                <span className="text-xs font-medium">3</span>
              </div>
              <div>
                <p className="uber-paragraph-3 font-medium">Schedule Installation</p>
                <p className="uber-paragraph-3 text-uber-gray-500">
                  Choose a convenient time for your vehicle wrap installation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Campaign summary */}
        <div className="w-full max-w-md">
          <h3 className="uber-heading-5 mb-3">Campaign Summary</h3>
          <div className="bg-white border border-uber-gray-200 rounded-lg overflow-hidden">
            <div className="p-4 flex items-center border-b border-uber-gray-200">
              <div className="w-12 h-12 bg-uber-gray-50 rounded-full overflow-hidden flex items-center justify-center mr-3">
                <Image src="/microsoft-logo.png" alt="Microsoft" width={24} height={24} />
              </div>
              <div>
                <h4 className="uber-heading-5">Microsoft</h4>
                <p className="uber-paragraph-3 text-uber-gray-500">3 month campaign</p>
              </div>
              <div className="ml-auto">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-uber-green bg-opacity-10 text-uber-green">
                  Pending
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between mb-2">
                <span className="uber-paragraph-3 text-uber-gray-500">Monthly payment</span>
                <span className="uber-paragraph-3 font-medium">$400</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="uber-paragraph-3 text-uber-gray-500">Potential bonus</span>
                <span className="uber-paragraph-3 font-medium">Up to $100</span>
              </div>
              <div className="flex justify-between">
                <span className="uber-paragraph-3 text-uber-gray-500">Application date</span>
                <span className="uber-paragraph-3 font-medium">Apr 22, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  )
}
