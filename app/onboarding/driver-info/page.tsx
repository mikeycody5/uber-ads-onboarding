import { ModalWrapper } from "@/components/modal-wrapper"
import { MoneyIcon, ClockIcon, LocationIcon, CarIcon } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function DriverInfoPage() {
  // Sample company data
  const companies = [
    {
      id: 1,
      name: "Microsoft",
      logo: "/microsoft-logo.png",
      contract: "$400/month",
      duration: "3 months",
      hourlyDemand: "30+ hours/week",
      location: "San Francisco Bay Area",
      matchScore: 92,
    },
    {
      id: 2,
      name: "Starbucks",
      logo: "/coffee-cup-silhouette.png",
      contract: "$350/month",
      duration: "6 months",
      hourlyDemand: "25+ hours/week",
      location: "San Francisco Bay Area",
      matchScore: 85,
    },
    {
      id: 3,
      name: "Nike",
      logo: "/swoosh-on-white.png",
      contract: "$450/month",
      duration: "4 months",
      hourlyDemand: "35+ hours/week",
      location: "San Francisco Bay Area",
      matchScore: 78,
    },
  ]

  // Define breadcrumbs for this page
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Onboarding", href: "/onboarding/qualification" },
    { label: "Available Campaigns", href: "/onboarding/driver-info" },
  ]

  return (
    <ModalWrapper
      title="Available Campaigns"
      dismissHref="/"
      actionLabel="Apply for Microsoft"
      actionHref="/onboarding/application"
      breadcrumbs={breadcrumbs}
    >
      <div className="flex-1 flex flex-col">
        <div className="w-full mx-auto">
          {/* Driver match score */}
          <div className="px-4 py-6 mb-2">
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 mb-4">
                <svg viewBox="0 0 120 120" className="w-full h-full">
                  <circle cx="60" cy="60" r="54" fill="none" stroke="#E2E2E2" strokeWidth="12" />
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="#2FB157"
                    strokeWidth="12"
                    strokeDasharray="339.3"
                    strokeDashoffset="27.1"
                    transform="rotate(-90 60 60)"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold">92%</span>
                  <span className="text-sm text-uber-gray-500">Match Score</span>
                </div>
              </div>
              <h2 className="uber-heading-3 mb-1">Great match potential!</h2>
              <p className="uber-paragraph-2 text-uber-gray-600 text-center max-w-md">
                Based on your driving patterns and vehicle, you're eligible for premium advertising campaigns.
              </p>
            </div>
          </div>

          {/* Suggestion card */}
          <div className="px-4 mb-6">
            <div className="bg-white border border-uber-gray-200 rounded-lg p-4">
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[#276EF1] mt-2 mr-2"></div>
                <div className="flex-1">
                  <h3 className="uber-heading-5 mb-1">Suggestion</h3>
                  <p className="uber-paragraph-3 text-uber-gray-700">
                    Drive during peak hours (weekdays 7-9am, 5-7pm) to maximize your earnings with ad campaigns.
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-uber-gray-500 flex-shrink-0 mt-1" />
              </div>
            </div>
          </div>

          {/* Company matches */}
          <div className="px-4 mb-4">
            <h3 className="uber-heading-4 mb-3">Top Matches</h3>
          </div>

          {companies.map((company) => (
            <div key={company.id} className="border-b border-uber-gray-200">
              <div className="px-4 py-4">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-uber-gray-50 rounded-full overflow-hidden flex items-center justify-center mr-3">
                    <Image src={company.logo || "/placeholder.svg"} alt={company.name} width={32} height={32} />
                  </div>
                  <div>
                    <h3 className="uber-heading-4">{company.name}</h3>
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
                    <Link href={`/onboarding/company/${company.id}`} className="text-[#276EF1] text-sm font-medium">
                      View Details
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <MoneyIcon size={16} className="text-uber-gray-500 mr-2" />
                    <span className="uber-paragraph-3">{company.contract}</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon size={16} className="text-uber-gray-500 mr-2" />
                    <span className="uber-paragraph-3">{company.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <CarIcon size={16} className="text-uber-gray-500 mr-2" />
                    <span className="uber-paragraph-3">{company.hourlyDemand}</span>
                  </div>
                  <div className="flex items-center">
                    <LocationIcon size={16} className="text-uber-gray-500 mr-2" />
                    <span className="uber-paragraph-3">{company.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ModalWrapper>
  )
}
