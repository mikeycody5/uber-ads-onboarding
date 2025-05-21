import { ModalWrapper } from "@/components/modal-wrapper"
import { MetricCard } from "@/components/ui/metric-card"
import { Progress } from "@/components/ui/progress"
import { Tag } from "@/components/ui/tag"
import { MoneyIcon, ClockIcon, CarIcon } from "@/components/icons"
import { BonusGraphic } from "@/components/bonus-graphic"
import Image from "next/image"
import Link from "next/link"

export default function DashboardPage() {
  // Define breadcrumbs for this page
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/onboarding/dashboard" },
  ]

  return (
    <ModalWrapper title="Campaign Dashboard" dismissHref="/" breadcrumbs={breadcrumbs}>
      <div className="flex-1 flex flex-col">
        <div className="w-full mx-auto px-4 py-6">
          {/* Personal greeting */}
          <h2 className="uber-heading-3 mb-6">Hey Michael,</h2>

          {/* Bonus graphic */}
          <BonusGraphic />

          {/* Active campaign card */}
          <div className="bg-white border border-uber-gray-200 rounded-lg overflow-hidden mb-6">
            <div className="p-4 border-b border-uber-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-uber-gray-50 rounded-full overflow-hidden flex items-center justify-center mr-3">
                    <Image src="/microsoft-logo.png" alt="Microsoft" width={20} height={20} />
                  </div>
                  <div>
                    <h3 className="uber-heading-5">Microsoft Campaign</h3>
                    <p className="uber-paragraph-3 text-uber-gray-500">Active Campaign</p>
                  </div>
                </div>
                <Tag color="green">Active</Tag>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="uber-paragraph-3 text-uber-gray-700">Campaign Progress</span>
                  <span className="uber-paragraph-3 text-uber-gray-700">1 of 3 months</span>
                </div>
                <Progress value={33} color="blue" size="medium" />
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-uber-gray-50 p-3 rounded-lg">
                  <div className="flex items-center mb-1">
                    <MoneyIcon size={16} className="text-uber-gray-700 mr-2" />
                    <span className="uber-paragraph-3 text-uber-gray-700">Earnings</span>
                  </div>
                  <p className="uber-heading-5">$400/month</p>
                </div>
                <div className="bg-uber-gray-50 p-3 rounded-lg">
                  <div className="flex items-center mb-1">
                    <ClockIcon size={16} className="text-uber-gray-700 mr-2" />
                    <span className="uber-paragraph-3 text-uber-gray-700">Next Payment</span>
                  </div>
                  <p className="uber-heading-5">July 15, 2025</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Link
                  href="/onboarding/performance/1"
                  className="flex-1 bg-uber-gray-50 hover:bg-uber-gray-100 text-uber-black font-medium py-2 flex items-center justify-center rounded-lg"
                >
                  <span className="text-sm font-medium">View Details</span>
                </Link>
                <Link
                  href="/onboarding/bonus/1"
                  className="flex-1 bg-uber-black text-white font-medium py-2 flex items-center justify-center rounded-lg"
                >
                  <span className="text-sm font-medium">Bonus Tracker</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Performance metrics */}
          <h3 className="uber-heading-4 mb-3">Performance Metrics</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <MetricCard
              title="Hours Driven"
              value="32 hrs"
              icon={<ClockIcon size={16} />}
              trend={{ value: "8%", positive: true }}
            />
            <MetricCard
              title="Miles Driven"
              value="428 mi"
              icon={<CarIcon size={16} />}
              trend={{ value: "12%", positive: true }}
            />
            <MetricCard
              title="Impressions"
              value="12.4k"
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
              value="$500"
              icon={<MoneyIcon size={16} />}
              trend={{ value: "+$100", positive: true, label: "Bonuses" }}
            />
          </div>

          {/* Quick actions */}
          <h3 className="uber-heading-4 mb-3">Quick Actions</h3>
          <div className="space-y-3 mb-6">
            <Link
              href="/onboarding/support"
              className="flex items-center justify-between p-3 bg-white border border-uber-gray-200 rounded-lg"
            >
              <div className="flex items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-uber-gray-700 mr-3"
                >
                  <path
                    d="M11.5 2C6.81 2 3 5.81 3 10.5c0 2.47 1.07 4.69 2.76 6.24l-.71 3.54 3.54-.71C9.31 19.93 10.39 20 11.5 20c4.69 0 8.5-3.81 8.5-8.5S16.19 2 11.5 2zm1 14h-2v-2h2v2zm0-3h-2V7h2v6z"
                    fill="currentColor"
                  />
                </svg>
                <span className="uber-paragraph-2 font-medium">Get Support</span>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-uber-gray-500"
              >
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor" />
              </svg>
            </Link>
            <Link
              href="/onboarding/brand-match"
              className="flex items-center justify-between p-3 bg-white border border-uber-gray-200 rounded-lg"
            >
              <div className="flex items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-uber-gray-700 mr-3"
                >
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />
                </svg>
                <span className="uber-paragraph-2 font-medium">Add New Campaign</span>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-uber-gray-500"
              >
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor" />
              </svg>
            </Link>
            <Link
              href="#"
              className="flex items-center justify-between p-3 bg-white border border-uber-gray-200 rounded-lg"
            >
              <div className="flex items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-uber-gray-700 mr-3"
                >
                  <path
                    d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
                    fill="currentColor"
                  />
                </svg>
                <span className="uber-paragraph-2 font-medium">Settings</span>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-uber-gray-500"
              >
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </ModalWrapper>
  )
}
