import { ModalWrapper } from "@/components/modal-wrapper"
import Image from "next/image"
import { Accordion } from "@/components/ui/accordion"
import { MoneyIcon, ClockIcon } from "@/components/icons"

export default function EarningPage() {
  // Define breadcrumbs for this page
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Onboarding", href: "/onboarding/qualification" },
    { label: "Match", href: "/onboarding/walkthrough/match" },
    { label: "Contract", href: "/onboarding/walkthrough/contract" },
    { label: "Installation", href: "/onboarding/walkthrough/installation" },
    { label: "Earning", href: "/onboarding/walkthrough/earning" },
  ]

  return (
    <ModalWrapper
      title="Start earning"
      dismissHref="/onboarding/qualification"
      actionLabel="Get Started"
      actionHref="/onboarding/brand-match"
      stepIndicator={
        <div className="flex justify-center space-x-2 mb-4">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className={`h-2 w-2 rounded-full ${step === 4 ? "bg-uber-black" : "bg-uber-gray-300"}`} />
          ))}
        </div>
      }
      breadcrumbs={breadcrumbs}
    >
      <div className="flex flex-col items-center">
        {/* Image at the top */}
        <div className="w-4/5 mx-auto py-6">
          <Image
            src="/earnings-tracking-illustration.png"
            alt="Start earning illustration"
            width={800}
            height={600}
            className="object-contain w-full h-auto"
            priority
          />
        </div>

        <div className="w-full max-w-4xl mx-auto px-5 py-4 flex flex-col">
          {/* Content */}
          <div className="w-full max-w-3xl mx-auto">
            <Accordion title="Consistent Income" icon={<MoneyIcon size={24} color="#000000" />} defaultOpen={true}>
              <div className="mt-2">
                <p className="uber-paragraph-3 text-uber-gray-700">
                  Start earning immediately after installation. Base payments are guaranteed with additional performance
                  bonuses available.
                </p>
              </div>
            </Accordion>

            <Accordion title="Performance Tracking" icon={<ClockIcon size={24} color="#000000" />}>
              <div className="mt-2">
                <p className="uber-paragraph-3 text-uber-gray-700">
                  Track earnings through your Uber driver dashboard with detailed reports on hours driven and bonus
                  eligibility.
                </p>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </ModalWrapper>
  )
}
