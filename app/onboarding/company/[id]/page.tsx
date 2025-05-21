import { ModalWrapper } from "@/components/modal-wrapper"
import { Accordion } from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import { Menu } from "@/components/ui/menu"
import { CheckIcon, MoneyIcon, ClockIcon, LocationIcon, CarIcon } from "@/components/icons"
import Image from "next/image"
import { notFound } from "next/navigation"

interface CompanyDetailPageProps {
  params: {
    id: string
  }
}

export default function CompanyDetailPage({ params }: CompanyDetailPageProps) {
  const companyId = Number.parseInt(params.id)

  // Sample company data - in a real app, this would come from an API or database
  const companies = [
    {
      id: 1,
      name: "Microsoft",
      logo: "/microsoft-logo.png",
      description:
        "Microsoft is looking for Uber drivers to promote their new Surface products across the San Francisco Bay Area.",
      contract: "$400/month",
      duration: "3 months",
      hourlyDemand: "30+ hours/week",
      location: "San Francisco Bay Area",
      matchScore: 92,
      wrapDesign: "/car-wrap-transparent.png",
      requirements: [
        "Drive at least 30 hours per week",
        "Cover downtown San Francisco at least 15 hours weekly",
        "Maintain vehicle cleanliness",
        "Take weekly photos of vehicle condition",
      ],
      paymentDetails: {
        base: "$400/month",
        bonus: "Up to $100/month",
        schedule: "Bi-weekly",
        duration: "3 months",
      },
    },
    {
      id: 2,
      name: "Starbucks",
      logo: "/coffee-cup-silhouette.png",
      description:
        "Starbucks is promoting their seasonal drinks with car wraps on Uber vehicles throughout the Bay Area.",
      contract: "$350/month",
      duration: "6 months",
      hourlyDemand: "25+ hours/week",
      location: "San Francisco Bay Area",
      matchScore: 85,
      wrapDesign: "/car-wrap-transparent.png",
      requirements: [
        "Drive at least 25 hours per week",
        "Cover suburban areas at least 10 hours weekly",
        "Maintain vehicle cleanliness",
        "Take bi-weekly photos of vehicle condition",
      ],
      paymentDetails: {
        base: "$350/month",
        bonus: "Up to $75/month",
        schedule: "Monthly",
        duration: "6 months",
      },
    },
    {
      id: 3,
      name: "Nike",
      logo: "/swoosh-on-white.png",
      description: "Nike is promoting their new running shoe line with eye-catching car wraps on Uber vehicles.",
      contract: "$450/month",
      duration: "4 months",
      hourlyDemand: "35+ hours/week",
      location: "San Francisco Bay Area",
      matchScore: 78,
      wrapDesign: "/car-wrap-transparent.png",
      requirements: [
        "Drive at least 35 hours per week",
        "Cover shopping districts at least 20 hours weekly",
        "Maintain vehicle cleanliness",
        "Take weekly photos of vehicle condition",
      ],
      paymentDetails: {
        base: "$450/month",
        bonus: "Up to $150/month",
        schedule: "Bi-weekly",
        duration: "4 months",
      },
    },
  ]

  const company = companies.find((c) => c.id === companyId)

  if (!company) {
    notFound()
  }

  // Define breadcrumbs for this page
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Onboarding", href: "/onboarding/qualification" },
    { label: "Available Campaigns", href: "/onboarding/driver-info" },
    { label: company.name, href: `/onboarding/company/${company.id}` },
  ]

  return (
    <ModalWrapper
      title={company.name}
      dismissHref="/onboarding/driver-info"
      actionLabel={`Apply for ${company.name}`}
      actionHref="/onboarding/application"
      breadcrumbs={breadcrumbs}
    >
      <div className="flex-1 flex flex-col">
        <div className="w-full mx-auto">
          {/* Company header */}
          <div className="px-4 py-6 mb-2">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-uber-gray-50 rounded-full overflow-hidden flex items-center justify-center mr-4">
                <Image src={company.logo || "/placeholder.svg"} alt={company.name} width={40} height={40} />
              </div>
              <div>
                <h2 className="uber-heading-3">{company.name}</h2>
                <div className="flex items-center">
                  <span className="text-sm text-uber-gray-500 mr-2">Match Score:</span>
                  <span
                    className={`text-sm font-medium ${company.matchScore >= 85 ? "text-uber-green" : "text-uber-yellow"}`}
                  >
                    {company.matchScore}%
                  </span>
                </div>
              </div>
              <div className="ml-auto">
                <Menu
                  trigger={
                    <button className="p-2 hover:bg-uber-gray-100 rounded-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                          fill="currentColor"
                        />
                        <path
                          d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                          fill="currentColor"
                        />
                        <path
                          d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  }
                  items={[
                    { label: "Share Campaign", value: "share" },
                    { label: "Save for Later", value: "save" },
                    { label: "Report Issue", value: "report" },
                  ]}
                  align="right"
                />
              </div>
            </div>

            <p className="uber-paragraph-2 text-uber-gray-700 mb-4">{company.description}</p>

            {/* Campaign details summary */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-uber-gray-50 p-3 rounded-lg">
                <div className="flex items-center mb-1">
                  <MoneyIcon size={16} className="text-uber-gray-700 mr-2" />
                  <span className="uber-paragraph-3 text-uber-gray-700">Contract</span>
                </div>
                <p className="uber-heading-5">{company.contract}</p>
              </div>
              <div className="bg-uber-gray-50 p-3 rounded-lg">
                <div className="flex items-center mb-1">
                  <ClockIcon size={16} className="text-uber-gray-700 mr-2" />
                  <span className="uber-paragraph-3 text-uber-gray-700">Duration</span>
                </div>
                <p className="uber-heading-5">{company.duration}</p>
              </div>
              <div className="bg-uber-gray-50 p-3 rounded-lg">
                <div className="flex items-center mb-1">
                  <CarIcon size={16} className="text-uber-gray-700 mr-2" />
                  <span className="uber-paragraph-3 text-uber-gray-700">Driving</span>
                </div>
                <p className="uber-heading-5">{company.hourlyDemand}</p>
              </div>
              <div className="bg-uber-gray-50 p-3 rounded-lg">
                <div className="flex items-center mb-1">
                  <LocationIcon size={16} className="text-uber-gray-700 mr-2" />
                  <span className="uber-paragraph-3 text-uber-gray-700">Location</span>
                </div>
                <p className="uber-heading-5">{company.location}</p>
              </div>
            </div>
          </div>

          {/* Wrap design preview */}
          <div className="px-4 mb-6">
            <h3 className="uber-heading-4 mb-3">Wrap Design</h3>
            <div className="relative h-48 bg-uber-gray-50 rounded-lg overflow-hidden">
              <Image
                src={company.wrapDesign || "/placeholder.svg"}
                alt="Vehicle wrap design"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Detailed requirements */}
          <div className="px-4 py-4">
            <Accordion
              title="Campaign Requirements"
              subtitle="Driving and location requirements"
              icon={<CarIcon size={24} color="#000000" />}
              defaultOpen={true}
            >
              <div className="space-y-3">
                {company.requirements.map((req, index) => (
                  <div key={index} className="flex items-start">
                    <CheckIcon size={16} className="text-uber-green mt-0.5 mr-2" />
                    <span className="uber-paragraph-3">{req}</span>
                  </div>
                ))}
                <div>
                  <div className="flex justify-between mb-1 mt-4">
                    <span className="uber-paragraph-3 text-uber-gray-700">Your Match</span>
                    <span className="uber-paragraph-3 text-uber-gray-700">{company.matchScore}%</span>
                  </div>
                  <Progress
                    value={company.matchScore}
                    max={100}
                    color={company.matchScore >= 85 ? "green" : "yellow"}
                    size="small"
                  />
                </div>
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
                  <span className="uber-paragraph-3 font-medium">{company.paymentDetails.base}</span>
                </div>
                <div className="flex justify-between">
                  <span className="uber-paragraph-3 text-uber-gray-700">Performance Bonus</span>
                  <span className="uber-paragraph-3 font-medium">{company.paymentDetails.bonus}</span>
                </div>
                <div className="flex justify-between">
                  <span className="uber-paragraph-3 text-uber-gray-700">Payment Schedule</span>
                  <span className="uber-paragraph-3 font-medium">{company.paymentDetails.schedule}</span>
                </div>
                <div className="flex justify-between">
                  <span className="uber-paragraph-3 text-uber-gray-700">Contract Duration</span>
                  <span className="uber-paragraph-3 font-medium">{company.paymentDetails.duration}</span>
                </div>
                <p className="uber-paragraph-3 text-uber-gray-500 mt-2">
                  Payments are processed automatically through your Uber driver account.
                </p>
              </div>
            </Accordion>

            <Accordion
              title="Installation Process"
              subtitle="Vehicle wrap application"
              icon={<CheckIcon size={24} color="#000000" />}
            >
              <div className="space-y-3">
                <p className="uber-paragraph-3 text-uber-gray-700">
                  After approval, you'll schedule an appointment at an authorized installation center. The wrap
                  installation takes approximately 4-6 hours.
                </p>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-uber-gray-200 rounded-full flex items-center justify-center mr-2">
                    <span className="text-xs font-medium">1</span>
                  </div>
                  <p className="uber-paragraph-3">Application approved</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-uber-gray-200 rounded-full flex items-center justify-center mr-2">
                    <span className="text-xs font-medium">2</span>
                  </div>
                  <p className="uber-paragraph-3">Schedule installation appointment</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-uber-gray-200 rounded-full flex items-center justify-center mr-2">
                    <span className="text-xs font-medium">3</span>
                  </div>
                  <p className="uber-paragraph-3">Vehicle wrap installation (4-6 hours)</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-uber-gray-200 rounded-full flex items-center justify-center mr-2">
                    <span className="text-xs font-medium">4</span>
                  </div>
                  <p className="uber-paragraph-3">Begin earning with your wrapped vehicle</p>
                </div>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </ModalWrapper>
  )
}
