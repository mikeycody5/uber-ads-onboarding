import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import { AnalyticsIcon, ClockIcon, CarIcon, LocationIcon } from "@/components/icons"
import { Accordion } from "@/components/ui/accordion"
import { ConfettiAnimation } from "@/components/confetti-animation"
import { ModalWrapper } from "@/components/modal-wrapper"

export default function QualificationPage() {
  // Define breadcrumbs for this page
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Qualification", href: "/onboarding/qualification" },
  ]

  return (
    <ModalWrapper
      title="Qualification"
      dismissHref="/"
      actionLabel="Continue"
      actionHref="/onboarding/walkthrough/match"
      breadcrumbs={breadcrumbs}
    >
      <div className="flex-1 flex flex-col">
        <div className="w-full mx-auto">
          {/* Congratulations message with driver avatar */}
          <div className="px-4 py-6 mb-2 relative">
            {/* Confetti animation */}
            <ConfettiAnimation />

            {/* Driver avatar - moved above, made bigger and centered */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Image
                  src="/images/driver-profile.png"
                  alt="Driver profile"
                  width={220}
                  height={220}
                  className="rounded-full"
                />
              </div>
            </div>

            {/* Congratulations text - centered */}
            <div className="text-center">
              <h1 className="uber-heading-2 mb-2">Congratulations Michael!</h1>
              <p className="uber-paragraph-2 text-uber-gray-600">You qualify for Uber Ads</p>
            </div>
          </div>

          {/* Qualification metrics - using Uber's accordion pattern */}
          <div className="bg-white">
            <Accordion
              title="Driver Score"
              subtitle="92 - Excellent"
              icon={<AnalyticsIcon size={28} color="#000000" />}
              defaultOpen={true}
            >
              <div className="mt-2">
                <div className="relative">
                  <Progress value={92} color="blue" size="medium" />
                  {/* Thicker and longer threshold indicator */}
                  <div
                    className="absolute w-1 bg-uber-black"
                    style={{ left: "90%", height: "150%", top: "-25%" }}
                  ></div>
                </div>
                <p className="uber-paragraph-3 text-uber-gray-500 mt-3">
                  Your excellent driver rating makes you eligible for premium ad campaigns
                </p>
              </div>
            </Accordion>

            <Accordion title="Weekly Hours" subtitle="38 hrs/week" icon={<ClockIcon size={28} color="#000000" />}>
              <div className="mt-2">
                <div className="relative">
                  {/* Updated progress bar with 84 as max */}
                  <Progress value={38} max={84} color="blue" size="medium" />
                  {/* Thicker and longer threshold indicator */}
                  <div
                    className="absolute w-1 bg-uber-black"
                    style={{ left: "35.7%", height: "150%", top: "-25%" }}
                  ></div>
                </div>
                <p className="uber-paragraph-3 text-uber-gray-500 mt-3">
                  You drive enough hours to maximize ad exposure and earnings potential
                </p>
              </div>
            </Accordion>

            <Accordion title="Vehicle Type" subtitle="White Honda Civic" icon={<CarIcon size={28} color="#000000" />}>
              <div className="mt-2">
                <div className="flex items-center">
                  <p className="uber-paragraph-3 text-uber-gray-700 font-medium">License Plate:</p>
                  <div className="ml-2 px-2 py-0.5 bg-uber-gray-100 rounded-full">
                    <span className="uber-caption">3M53AF2</span>
                  </div>
                </div>
                <p className="uber-paragraph-3 text-uber-gray-500 mt-3">
                  Your vehicle meets all requirements for ad wrapping installation
                </p>
              </div>
            </Accordion>

            <Accordion
              title="Market"
              subtitle="San Francisco Bay Area"
              icon={<LocationIcon size={28} color="#000000" />}
            >
              <div className="mt-2">
                <div className="flex items-center">
                  <span className="uber-paragraph-3 text-uber-green font-medium">High demand area</span>
                </div>
                <p className="uber-paragraph-3 text-uber-gray-500 mt-3">
                  Your driving area has high advertiser demand and visibility
                </p>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </ModalWrapper>
  )
}
