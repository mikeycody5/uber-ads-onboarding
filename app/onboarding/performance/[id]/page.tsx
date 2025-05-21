import { ModalWrapper } from "@/components/modal-wrapper"
import { MetricCard } from "@/components/ui/metric-card"
import { Chart } from "@/components/ui/chart"
import { Tag } from "@/components/ui/tag"
import { MoneyIcon, ClockIcon, CarIcon } from "@/components/icons"
import Image from "next/image"
import { notFound } from "next/navigation"

interface PerformancePageProps {
  params: {
    id: string
  }
}

export default function PerformancePage({ params }: PerformancePageProps) {
  const campaignId = Number.parseInt(params.id)

  // Sample campaign data
  const campaigns = [
    {
      id: 1,
      name: "Microsoft",
      logo: "/microsoft-logo.png",
      startDate: "May 20, 2025",
      endDate: "August 20, 2025",
      daysRemaining: 61, // Calculated from June 20 to August 20
      impressions: 12400,
      milesDriven: 428,
      hoursDriven: 32,
      earnings: {
        base: 400,
        bonus: 100,
        total: 500,
      },
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

  // Enhanced chart data with higher quality settings
  const weeklyData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Hours",
        data: [4, 6, 5, 7, 4, 3, 3],
        color: "#276EF1",
        borderWidth: 2,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  }

  const impressionsData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Impressions",
        data: [2800, 3200, 3100, 3300],
        color: "#2FB157",
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        fill: true,
        backgroundColor: "rgba(47, 177, 87, 0.1)",
      },
    ],
  }

  const campaign = campaigns.find((c) => c.id === campaignId)

  if (!campaign) {
    notFound()
  }

  // Define breadcrumbs for this page
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/onboarding/dashboard" },
    { label: "Performance", href: `/onboarding/performance/${campaign.id}` },
  ]

  return (
    <ModalWrapper
      title="Campaign Performance"
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
              <Tag color="green" className="mt-1">
                Active
              </Tag>
            </div>
          </div>

          {/* Campaign overview */}
          <div className="bg-white border border-uber-gray-200 rounded-lg p-4 mb-6">
            <h3 className="uber-heading-5 mb-3">Campaign Overview</h3>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="uber-paragraph-3 text-uber-gray-700">Start Date</span>
                <span className="uber-paragraph-3 font-medium">{campaign.startDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="uber-paragraph-3 text-uber-gray-700">End Date</span>
                <span className="uber-paragraph-3 font-medium">{campaign.endDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="uber-paragraph-3 text-uber-gray-700">Days Remaining</span>
                <span className="uber-paragraph-3 font-medium">{campaign.daysRemaining} days</span>
              </div>
              <div className="flex justify-between">
                <span className="uber-paragraph-3 text-uber-gray-700">Status</span>
                <span className="uber-paragraph-3 font-medium text-uber-green">Active</span>
              </div>
            </div>
          </div>

          {/* Performance metrics */}
          <h3 className="uber-heading-4 mb-3">Performance Metrics</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <MetricCard
              title="Hours Driven"
              value={`${campaign.hoursDriven} hrs`}
              icon={<ClockIcon size={16} />}
              trend={{ value: "8%", positive: true }}
            />
            <MetricCard
              title="Miles Driven"
              value={`${campaign.milesDriven} mi`}
              icon={<CarIcon size={16} />}
              trend={{ value: "12%", positive: true }}
            />
            <MetricCard
              title="Impressions"
              value={`${(campaign.impressions / 1000).toFixed(1)}k`}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                    fill="currentColor"
                  />
                </svg>
              }
              trend={{ value: "15%", positive: true }}
            />
            <MetricCard
              title="Earnings"
              value={`$${campaign.earnings.total}`}
              icon={<MoneyIcon size={16} />}
              trend={{ value: "+$100", positive: true, label: "Bonuses" }}
            />
          </div>

          {/* Weekly hours chart */}
          <div className="bg-white border border-uber-gray-200 rounded-lg p-4 mb-6">
            <h3 className="uber-heading-5 mb-3">Weekly Hours</h3>
            <div className="h-[250px]">
              <Chart data={weeklyData} type="bar" height={250} />
            </div>
          </div>

          {/* Impressions chart */}
          <div className="bg-white border border-uber-gray-200 rounded-lg p-4 mb-6">
            <h3 className="uber-heading-5 mb-3">Impressions</h3>
            <div className="h-[250px]">
              <Chart data={impressionsData} type="line" height={250} />
            </div>
          </div>

          {/* Payment history */}
          <div className="bg-white border border-uber-gray-200 rounded-lg p-4">
            <h3 className="uber-heading-5 mb-3">Payment History</h3>

            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-uber-gray-100">
                <div>
                  <p className="uber-paragraph-3 font-medium">June 15, 2025</p>
                  <p className="uber-paragraph-3 text-uber-gray-500">Weekly payment + Bronze Tier Bonus</p>
                </div>
                <div className="flex items-center">
                  <MoneyIcon size={16} className="text-uber-green mr-2" />
                  <span className="uber-paragraph-3 font-medium text-uber-green">$125</span>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-uber-gray-100">
                <div>
                  <p className="uber-paragraph-3 font-medium">June 8, 2025</p>
                  <p className="uber-paragraph-3 text-uber-gray-500">Weekly payment + Silver Tier Bonus</p>
                </div>
                <div className="flex items-center">
                  <MoneyIcon size={16} className="text-uber-green mr-2" />
                  <span className="uber-paragraph-3 font-medium text-uber-green">$150</span>
                </div>
              </div>
              <div className="flex justify-between items-center py-2">
                <div>
                  <p className="uber-paragraph-3 font-medium">June 1, 2025</p>
                  <p className="uber-paragraph-3 text-uber-gray-500">Weekly payment + Bronze Tier Bonus</p>
                </div>
                <div className="flex items-center">
                  <MoneyIcon size={16} className="text-uber-green mr-2" />
                  <span className="uber-paragraph-3 font-medium text-uber-green">$125</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  )
}
