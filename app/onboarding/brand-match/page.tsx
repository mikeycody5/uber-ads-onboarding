"use client"

import { ModalWrapper } from "@/components/modal-wrapper"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import { MatchCards } from "@/components/match-cards"

// Use dynamic import for Recharts to avoid SSR issues
const BrandMatchChart = dynamic(() => import("@/components/brand-match-chart"), { ssr: false })
const SimpleBrandChart = dynamic(() => import("@/components/simple-brand-chart"), { ssr: false })

export default function BrandMatchPage() {
  // Use a flag to determine which chart to use
  const useSimpleChart = true

  // Hardcode the logo paths for testing
  const brands = [
    {
      id: 1,
      name: "Microsoft",
      // Use absolute paths for testing
      logo: "/logos/microsoft-logo.png",
      logoImage: "/logos/microsoft-logo.png",
      compensation: "$400/month",
      duration: "3 months",
      location: "San Francisco Bay Area",
      hourlyDemand: "30+ hours/week",
      description:
        "Microsoft is looking for Uber drivers to promote their new Surface products across the San Francisco Bay Area.",
      matchScore: 92,
      payFactor: 35,
      hoursFactor: 30,
      locationFactor: 27,
    },
    {
      id: 2,
      name: "Starbucks",
      logo: "/logos/starbucks-logo.png",
      logoImage: "/logos/starbucks-logo.png",
      compensation: "$350/month",
      duration: "6 months",
      location: "San Francisco Bay Area",
      hourlyDemand: "25+ hours/week",
      description:
        "Starbucks is promoting their seasonal drinks with car wraps on Uber vehicles throughout the Bay Area.",
      matchScore: 85,
      payFactor: 30,
      hoursFactor: 32,
      locationFactor: 23,
    },
    {
      id: 3,
      name: "Nike",
      logo: "/logos/nike-logo.png",
      logoImage: "/logos/nike-logo.png",
      compensation: "$450/month",
      duration: "4 months",
      location: "San Francisco Bay Area",
      hourlyDemand: "35+ hours/week",
      description: "Nike is promoting their new running shoe line with eye-catching car wraps on Uber vehicles.",
      matchScore: 78,
      payFactor: 38,
      hoursFactor: 25,
      locationFactor: 15,
    },
  ]

  // Create chart data with the same logo paths
  const chartData = brands.map((brand) => ({
    name: brand.name,
    Pay: brand.payFactor,
    Hours: brand.hoursFactor,
    Location: brand.locationFactor,
    total: brand.matchScore,
    logo: brand.logo,
  }))

  // Create match data for the MatchCards component
  const matchData = brands.map((brand) => ({
    name: brand.name,
    logo: brand.logo,
    matchScore: brand.matchScore,
  }))

  // Define breadcrumbs for this page
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Onboarding", href: "/onboarding/qualification" },
    { label: "Brand Match", href: "/onboarding/brand-match" },
  ]

  return (
    <ModalWrapper title="Brand Match Center" dismissHref="/onboarding/walkthrough/earning" breadcrumbs={breadcrumbs}>
      <div className="flex-1 flex flex-col">
        <div className="w-full mx-auto">
          {/* Match Cards Component */}
          <div className="px-4 py-6 mb-2">
            <MatchCards matches={matchData} />
          </div>

          {/* Stacked Bar Chart section */}
          <div className="px-4 py-6 mb-4">
            <h2 className="uber-heading-3 mb-4">Match Score Comparison</h2>
            <div className="h-[300px] w-full bg-white p-4 rounded-lg border border-uber-gray-200 shadow-sm">
              <div className="mb-2">
                <div className="flex flex-wrap gap-4 justify-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#4285F4] mr-2"></div>
                    <span className="text-xs text-uber-gray-700">Pay</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#34A853] mr-2"></div>
                    <span className="text-xs text-uber-gray-700">Hours</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#FBBC05] mr-2"></div>
                    <span className="text-xs text-uber-gray-700">Location</span>
                  </div>
                </div>
              </div>
              {useSimpleChart ? <SimpleBrandChart data={chartData} /> : <BrandMatchChart data={chartData} />}
            </div>
            <p className="uber-paragraph-3 text-uber-gray-500 text-center mt-2">
              Match scores are calculated based on pay, hours required, and location factors
            </p>
          </div>

          {/* Available campaigns */}
          <div className="px-4 mb-4">
            <h3 className="uber-heading-4 mb-3">Available Campaigns</h3>
          </div>

          {brands.map((brand) => (
            <div key={brand.id} className="px-4 mb-4">
              <div className="bg-white border border-uber-gray-200 rounded-lg overflow-hidden flex">
                {/* Content container */}
                <div className="flex-1 p-4">
                  <h3 className="text-[18px] font-bold leading-tight mb-2 font-['Uber_Move']">{brand.name}</h3>
                  <p className="text-[14px] leading-[20px] text-uber-gray-700 mb-4 font-['Uber_Move_Text']">
                    {brand.description}
                  </p>
                  <Link
                    href={`/onboarding/campaign/${brand.id}`}
                    className="inline-block bg-uber-gray-100 text-uber-black font-medium py-2 px-4 rounded-full text-sm"
                  >
                    View Campaign
                  </Link>
                </div>

                {/* Logo container - updated to be larger and consistent */}
                <div className="w-[120px] relative flex items-center justify-center bg-uber-gray-50">
                  <div className="p-4 flex items-center justify-center h-full w-full">
                    <Image
                      src={brand.logoImage || "/placeholder.svg"}
                      alt={brand.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
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
