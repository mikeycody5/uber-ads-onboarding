import { ModalWrapper } from "@/components/modal-wrapper"
import { Accordion } from "@/components/ui/accordion"
import { Tag } from "@/components/ui/tag"
import { CheckIcon, MoneyIcon, ClockIcon, LocationIcon, CarIcon } from "@/components/icons"
import Image from "next/image"
import { notFound } from "next/navigation"

interface CampaignDetailPageProps {
  params: {
    id: string
  }
}

export default function CampaignDetailPage({ params }: CampaignDetailPageProps) {
  const campaignId = Number.parseInt(params.id)

  // Sample campaign data - in a real app, this would come from an API or database
  const campaigns = [
    {
      id: 1,
      name: "Microsoft",
      logo: "/logos/microsoft-logo.png",
      description:
        "Microsoft is looking for Uber drivers to promote their new Surface products across the San Francisco Bay Area.",
      compensation: "$400/month",
      duration: "3 months",
      hourlyDemand: "30+ hours/week",
      location: "San Francisco Bay Area",
      matchScore: 92,
      wrapDesign: "/microsoft-vehicle-wrap.jpeg",
      payFrequency: "Weekly Pay",
      requirements: [
        "Drive at least 30 hours per week",
        "Cover downtown San Francisco at least 15 hours weekly",
        "Maintain vehicle cleanliness",
        "Take weekly photos of vehicle condition",
      ],
      paymentDetails: {
        base: "$400/month",
        bonus: "Up to $100/month",
        schedule: "Weekly",
        duration: "3 months",
      },
      eligibility: {
        driverRating: "4.8+",
        vehicleYear: "2015 or newer",
        vehicleColor: "White, Silver, Black",
        hoursRequired: "30+ hours/week",
      },
    },
    {
      id: 2,
      name: "Starbucks",
      logo: "/coffee-cup-silhouette.png",
      description:
        "Starbucks is promoting their seasonal drinks with car wraps on Uber vehicles throughout the Bay Area.",
      compensation: "$350/month",
      duration: "6 months",
      hourlyDemand: "25+ hours/week",
      location: "San Francisco Bay Area",
      matchScore: 85,
      wrapDesign: "/car-wrap-transparent.png",
      payFrequency: "Bi-Weekly Pay",
      requirements: [
        "Drive at least 25 hours per week",
        "Cover suburban areas at least 10 hours weekly",
        "Maintain vehicle cleanliness",
        "Take bi-weekly photos of vehicle condition",
      ],
      paymentDetails: {
        base: "$350/month",
        bonus: "Up to $75/month",
        schedule: "Bi-Weekly",
        duration: "6 months",
      },
      eligibility: {
        driverRating: "4.7+",
        vehicleYear: "2015 or newer",
        vehicleColor: "Any light color",
        hoursRequired: "25+ hours/week",
      },
    },
    {
      id: 3,
      name: "Nike",
      logo: "/swoosh-on-white.png",
      description: "Nike is promoting their new running shoe line with eye-catching car wraps on Uber vehicles.",
      compensation: "$450/month",
      duration: "4 months",
      hourlyDemand: "35+ hours/week",
      location: "San Francisco Bay Area",
      matchScore: 78,
      wrapDesign: "/car-wrap-transparent.png",
      payFrequency: "Weekly Pay",
      requirements: [
        "Drive at least 35 hours per week",
        "Cover shopping districts at least 20 hours weekly",
        "Maintain vehicle cleanliness",
        "Take weekly photos of vehicle condition",
      ],
      paymentDetails: {
        base: "$450/month",
        bonus: "Up to $150/month",
        schedule: "Weekly",
        duration: "4 months",
      },
      eligibility: {
        driverRating: "4.8+",
        vehicleYear: "2017 or newer",
        vehicleColor: "White, Silver, Black",
        hoursRequired: "35+ hours/week",
      },
    },
  ]

  const campaign = campaigns.find((c) => c.id === campaignId)

  if (!campaign) {
    notFound()
  }

  // Define breadcrumbs for this page
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Onboarding", href: "/onboarding/qualification" },
    { label: "Brand Match", href: "/onboarding/brand-match" },
    { label: campaign.name, href: `/onboarding/campaign/${campaign.id}` },
  ]

  return (
    <ModalWrapper
      title={campaign.name}
      dismissHref="/onboarding/brand-match"
      actionLabel="Sign Contract"
      actionHref={`/onboarding/contract/${campaign.id}`}
      breadcrumbs={breadcrumbs}
    >
      <div className="flex-1 flex flex-col">
        <div className="w-full mx-auto">
          {/* Campaign header */}
          <div className="px-4 py-6 mb-2">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-uber-gray-50 rounded-full overflow-hidden flex items-center justify-center mr-4">
                <Image src={campaign.logo || "/placeholder.svg"} alt={campaign.name} width={40} height={40} />
              </div>
              <div>
                <h2 className="uber-heading-3">{campaign.name}</h2>
                <Tag color="blue" className="mt-1">
                  {campaign.payFrequency}
                </Tag>
              </div>
            </div>

            <p className="uber-paragraph-2 text-uber-gray-700 mb-4">{campaign.description}</p>

            {/* Campaign details summary */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-uber-gray-50 p-3 rounded-lg">
                <div className="flex items-center mb-1">
                  <MoneyIcon size={16} className="text-uber-gray-700 mr-2" />
                  <span className="uber-paragraph-3 text-uber-gray-700">Compensation</span>
                </div>
                <p className="uber-heading-5">{campaign.compensation}</p>
              </div>
              <div className="bg-uber-gray-50 p-3 rounded-lg">
                <div className="flex items-center mb-1">
                  <ClockIcon size={16} className="text-uber-gray-700 mr-2" />
                  <span className="uber-paragraph-3 text-uber-gray-700">Duration</span>
                </div>
                <p className="uber-heading-5">{campaign.duration}</p>
              </div>
              <div className="bg-uber-gray-50 p-3 rounded-lg">
                <div className="flex items-center mb-1">
                  <CarIcon size={16} className="text-uber-gray-700 mr-2" />
                  <span className="uber-paragraph-3 text-uber-gray-700">Driving</span>
                </div>
                <p className="uber-heading-5">{campaign.hourlyDemand}</p>
              </div>
              <div className="bg-uber-gray-50 p-3 rounded-lg">
                <div className="flex items-center mb-1">
                  <LocationIcon size={16} className="text-uber-gray-700 mr-2" />
                  <span className="uber-paragraph-3 text-uber-gray-700">Location</span>
                </div>
                <p className="uber-heading-5">{campaign.location}</p>
              </div>
            </div>
          </div>

          {/* Wrap design preview */}
          <div className="px-4 mb-6">
            <h3 className="uber-heading-4 mb-3">Wrap Design</h3>
            <div className="relative h-48 bg-uber-gray-50 rounded-lg overflow-hidden">
              <Image src="/microsoft-vehicle-wrap.jpeg" alt="Vehicle wrap design" fill className="object-cover" />
            </div>
          </div>

          {/* Detailed requirements */}
          <div className="px-4 py-4">
            <Accordion
              title="Eligibility"
              subtitle="Requirements to qualify"
              icon={<CheckIcon size={24} color="#000000" />}
              defaultOpen={true}
            >
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="uber-paragraph-3 text-uber-gray-700">Driver Rating</span>
                  <span className="uber-paragraph-3 font-medium">{campaign.eligibility.driverRating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="uber-paragraph-3 text-uber-gray-700">Vehicle Year</span>
                  <span className="uber-paragraph-3 font-medium">{campaign.eligibility.vehicleYear}</span>
                </div>
                <div className="flex justify-between">
                  <span className="uber-paragraph-3 text-uber-gray-700">Vehicle Color</span>
                  <span className="uber-paragraph-3 font-medium">{campaign.eligibility.vehicleColor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="uber-paragraph-3 text-uber-gray-700">Hours Required</span>
                  <span className="uber-paragraph-3 font-medium">{campaign.eligibility.hoursRequired}</span>
                </div>
              </div>
            </Accordion>

            <Accordion
              title="Campaign Requirements"
              subtitle="Driving and location requirements"
              icon={<CarIcon size={24} color="#000000" />}
            >
              <div className="space-y-3">
                {campaign.requirements.map((req, index) => (
                  <div key={index} className="flex items-start">
                    <CheckIcon size={16} className="text-uber-green mt-0.5 mr-2" />
                    <span className="uber-paragraph-3">{req}</span>
                  </div>
                ))}
              </div>
            </Accordion>

            <Accordion
              title="Payment Details"
              subtitle="Earnings and schedule"
              icon={<MoneyIcon size={24} color="#000000" />}
            >
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="uber-paragraph-3 text-uber-gray-700">Base Payment</span>
                  <span className="uber-paragraph-3 font-medium">{campaign.paymentDetails.base}</span>
                </div>
                <div className="flex justify-between">
                  <span className="uber-paragraph-3 text-uber-gray-700">Performance Bonus</span>
                  <span className="uber-paragraph-3 font-medium">{campaign.paymentDetails.bonus}</span>
                </div>
                <div className="flex justify-between">
                  <span className="uber-paragraph-3 text-uber-gray-700">Payment Schedule</span>
                  <span className="uber-paragraph-3 font-medium">{campaign.paymentDetails.schedule}</span>
                </div>
                <div className="flex justify-between">
                  <span className="uber-paragraph-3 text-uber-gray-700">Contract Duration</span>
                  <span className="uber-paragraph-3 font-medium">{campaign.paymentDetails.duration}</span>
                </div>
                <p className="uber-paragraph-3 text-uber-gray-500 mt-2">
                  Payments are processed automatically through your Uber driver account.
                </p>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </ModalWrapper>
  )
}
