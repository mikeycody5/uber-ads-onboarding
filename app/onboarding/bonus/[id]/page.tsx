import { ModalWrapper } from "@/components/modal-wrapper"
import { Progress } from "@/components/ui/progress"
import { Stepper } from "@/components/ui/stepper"
import { Tag } from "@/components/ui/tag"
import { MoneyIcon, ClockIcon } from "@/components/icons"
import Image from "next/image"
import { notFound } from "next/navigation"

interface BonusTrackerPageProps {
  params: {
    id: string
  }
}

export default function BonusTrackerPage({ params }: BonusTrackerPageProps) {
  const campaignId = Number.parseInt(params.id)

  // Sample campaign data
  const campaigns = [
    {
      id: 1,
      name: "Microsoft",
      logo: "/microsoft-logo.png",
      currentHours: 32,
      requiredHours: 30,
      currentMiles: 428,
      requiredMiles: 400,
      bonusTiers: [
        { level: "Bronze", amount: "$25", requirement: "30+ hours/week", completed: true },
        { level: "Silver", amount: "$50", requirement: "35+ hours/week", completed: false },
        { level: "Gold", amount: "$100", requirement: "40+ hours/week", completed: false },
      ],
    },
    {
      id: 2,
      name: "Starbucks",
      logo: "/coffee-cup-silhouette.png",
    },
    {
      id: 3,
      name: "Nike",
      logo: "/swoosh-on-white.png",
    },
  ]

  const campaign = campaigns.find((c) => c.id === campaignId)

  if (!campaign) {
    notFound()
  }

  // Define breadcrumbs for this page
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/onboarding/dashboard" },
    { label: "Bonus Tracker", href: `/onboarding/bonus/${campaign.id}` },
  ]

  // Calculate bonus eligibility
  const hoursPercentage = Math.min(100, Math.round((campaign.currentHours / campaign.requiredHours) * 100))
  const milesPercentage = Math.min(100, Math.round((campaign.currentMiles / campaign.requiredMiles) * 100))

  // Determine current bonus tier
  let currentTier = "Not Eligible"
  let tierColor = "default" as const

  if (campaign.currentHours >= 30) {
    currentTier = "Bronze Tier"
    tierColor = "yellow"
  }

  if (campaign.currentHours >= 35) {
    currentTier = "Silver Tier"
    tierColor = "default"
  }

  if (campaign.currentHours >= 40) {
    currentTier = "Gold Tier"
    tierColor = "green"
  }

  return (
    <ModalWrapper
      title="Bonus Tracker"
      dismissHref="/onboarding/dashboard"
      actionLabel="Back to Dashboard"
      actionHref="/onboarding/dashboard"
      breadcrumbs={breadcrumbs}
    >
      <div className="flex-1 flex flex-col">
        <div className="w-full mx-auto px-4 py-6">
          {/* Campaign header */}
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-uber-gray-50 rounded-full overflow-hidden flex items-center justify-center mr-3">
              <Image src={campaign.logo || "/placeholder.svg"} alt={campaign.name} width={24} height={24} />
            </div>
            <div>
              <h2 className="uber-heading-3">{campaign.name} Campaign</h2>
              <div className="flex items-center">
                <Tag color={tierColor} className="mt-1">
                  {currentTier}
                </Tag>
              </div>
            </div>
          </div>

          {/* Weekly progress */}
          <div className="bg-white border border-uber-gray-200 rounded-lg p-4 mb-6">
            <h3 className="uber-heading-5 mb-3">This Week's Progress</h3>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                  <ClockIcon size={16} className="text-uber-gray-700 mr-2" />
                  <span className="uber-paragraph-3 text-uber-gray-700">Hours Driven</span>
                </div>
                <span className="uber-paragraph-3 text-uber-gray-700">
                  {campaign.currentHours} / {campaign.requiredHours} hrs
                </span>
              </div>
              <Progress value={hoursPercentage} color="blue" size="medium" />
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-uber-gray-700 mr-2"
                  >
                    <path
                      d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.29 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5C5 13.67 5.67 13 6.5 13C7.33 13 8 13.67 8 14.5C8 15.33 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5C16 13.67 16.67 13 17.5 13C18.33 13 19 13.67 19 14.5C19 15.33 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="uber-paragraph-3 text-uber-gray-700">Miles Driven</span>
                </div>
                <span className="uber-paragraph-3 text-uber-gray-700">
                  {campaign.currentMiles} / {campaign.requiredMiles} mi
                </span>
              </div>
              <Progress value={milesPercentage} color="blue" size="medium" />
            </div>
          </div>

          {/* Bonus tiers */}
          <div className="bg-white border border-uber-gray-200 rounded-lg p-4 mb-6">
            <h3 className="uber-heading-5 mb-3">Bonus Tiers</h3>

            <Stepper
              steps={[
                {
                  label: "Bronze Tier: $25/week",
                  description: "Drive 30+ hours per week",
                  completed: campaign.currentHours >= 30,
                  current: campaign.currentHours >= 30 && campaign.currentHours < 35,
                },
                {
                  label: "Silver Tier: $50/week",
                  description: "Drive 35+ hours per week",
                  completed: campaign.currentHours >= 35,
                  current: campaign.currentHours >= 35 && campaign.currentHours < 40,
                },
                {
                  label: "Gold Tier: $100/week",
                  description: "Drive 40+ hours per week",
                  completed: campaign.currentHours >= 40,
                  current: campaign.currentHours >= 40,
                },
              ]}
            />
          </div>

          {/* Bonus history */}
          <div className="bg-white border border-uber-gray-200 rounded-lg p-4">
            <h3 className="uber-heading-5 mb-3">Bonus History</h3>

            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-uber-gray-100">
                <div>
                  <p className="uber-paragraph-3 font-medium">Week of June 13</p>
                  <p className="uber-paragraph-3 text-uber-gray-500">Bronze Tier</p>
                </div>
                <div className="flex items-center">
                  <MoneyIcon size={16} className="text-uber-green mr-2" />
                  <span className="uber-paragraph-3 font-medium text-uber-green">$25</span>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-uber-gray-100">
                <div>
                  <p className="uber-paragraph-3 font-medium">Week of June 6</p>
                  <p className="uber-paragraph-3 text-uber-gray-500">Silver Tier</p>
                </div>
                <div className="flex items-center">
                  <MoneyIcon size={16} className="text-uber-green mr-2" />
                  <span className="uber-paragraph-3 font-medium text-uber-green">$50</span>
                </div>
              </div>
              <div className="flex justify-between items-center py-2">
                <div>
                  <p className="uber-paragraph-3 font-medium">Week of May 30</p>
                  <p className="uber-paragraph-3 text-uber-gray-500">Bronze Tier</p>
                </div>
                <div className="flex items-center">
                  <MoneyIcon size={16} className="text-uber-green mr-2" />
                  <span className="uber-paragraph-3 font-medium text-uber-green">$25</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  )
}
