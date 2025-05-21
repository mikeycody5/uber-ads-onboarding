import { ModalWrapper } from "@/components/modal-wrapper"
import Image from "next/image"
import { Accordion } from "@/components/ui/accordion"
import { CheckIcon, MoneyIcon } from "@/components/icons"

export default function ContractPage() {
  // Define breadcrumbs for this page
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Onboarding", href: "/onboarding/qualification" },
    { label: "Match", href: "/onboarding/walkthrough/match" },
    { label: "Contract", href: "/onboarding/walkthrough/contract" },
  ]

  return (
    <ModalWrapper
      title="Sign a contract"
      dismissHref="/onboarding/qualification"
      actionLabel="Next"
      actionHref="/onboarding/walkthrough/installation"
      stepIndicator={
        <div className="flex justify-center space-x-2 mb-4">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className={`h-2 w-2 rounded-full ${step === 2 ? "bg-uber-black" : "bg-uber-gray-300"}`} />
          ))}
        </div>
      }
      breadcrumbs={breadcrumbs}
    >
      <div className="flex flex-col items-center">
        {/* Image at the top */}
        <div className="w-4/5 mx-auto py-6">
          <Image
            src="/contract-signing-illustration.png"
            alt="Sign a contract illustration"
            width={800}
            height={600}
            className="object-contain w-full h-auto"
            priority
          />
        </div>

        <div className="w-full max-w-4xl mx-auto px-5 py-4 flex flex-col">
          {/* Content */}
          <div className="w-full max-w-3xl mx-auto">
            <Accordion title="Digital Contracts" icon={<CheckIcon size={24} color="#000000" />} defaultOpen={true}>
              <div className="mt-2">
                <p className="uber-paragraph-3 text-uber-gray-700">
                  Sign your contract electronically in minutes. All agreements include clear payment terms and campaign
                  duration.
                </p>
              </div>
            </Accordion>

            <Accordion title="Payment Terms" icon={<MoneyIcon size={24} color="#000000" />}>
              <div className="mt-2">
                <p className="uber-paragraph-3 text-uber-gray-700">
                  Payments are processed automatically through your Uber driver account on a bi-weekly or monthly
                  schedule.
                </p>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </ModalWrapper>
  )
}
