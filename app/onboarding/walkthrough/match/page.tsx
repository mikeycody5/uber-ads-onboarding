import { ModalWrapper } from "@/components/modal-wrapper"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { Accordion } from "@/components/ui/accordion"
import { MoneyIcon, LocationIcon } from "@/components/icons"

export default function MatchPage() {
  // Define breadcrumbs for this page
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Onboarding", href: "/onboarding/qualification" },
    { label: "Match", href: "/onboarding/walkthrough/match" },
  ]

  return (
    <ModalWrapper
      title="Match with a company"
      dismissHref="/onboarding/qualification"
      actionLabel="Next"
      actionHref="/onboarding/walkthrough/contract"
      stepIndicator={
        <div className="flex justify-center space-x-2 mb-4">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className={`h-2 w-2 rounded-full ${step === 1 ? "bg-uber-black" : "bg-uber-gray-300"}`} />
          ))}
        </div>
      }
      breadcrumbs={breadcrumbs}
    >
      <div className="flex flex-col items-center">
        {/* Image at the top */}
        <div className="w-4/5 mx-auto py-6">
          <ImageWithFallback
            src="/match-meeting-illustration.png"
            alt="Match with a company illustration"
            width={800}
            height={600}
            className="object-contain w-full h-auto"
            priority
          />
        </div>

        <div className="w-full max-w-4xl mx-auto px-5 py-4 flex flex-col">
          {/* Content */}
          <div className="w-full max-w-3xl mx-auto">
            <Accordion
              title="Find Your Perfect Match"
              icon={<MoneyIcon size={24} color="#000000" />}
              defaultOpen={true}
            >
              <div className="mt-2">
                <p className="uber-paragraph-3 text-uber-gray-700">
                  We'll match you with companies based on your driving patterns and vehicle type. You'll see your match
                  score for each campaign.
                </p>
              </div>
            </Accordion>

            <Accordion title="Premium Partnerships" icon={<LocationIcon size={24} color="#000000" />}>
              <div className="mt-2">
                <p className="uber-paragraph-3 text-uber-gray-700">
                  Partner with top brands like Microsoft and Starbucks for reliable income and professional wrap
                  installations.
                </p>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </ModalWrapper>
  )
}
