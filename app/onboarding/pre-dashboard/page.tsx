import { ModalWrapper } from "@/components/modal-wrapper"
import { Progress } from "@/components/ui/progress"
import { Tag } from "@/components/ui/tag"
import Image from "next/image"
import Link from "next/link"
import { VehicleWrapPreview } from "@/components/vehicle-wrap-preview"

export default function PreDashboardPage() {
  // Define breadcrumbs for this page
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/onboarding/pre-dashboard" },
  ]

  // Calculate days until installation
  const installationDate = new Date("2025-05-20")
  const currentDate = new Date("2025-05-12") // Using the current date from the system
  const timeDifference = installationDate.getTime() - currentDate.getTime()
  const daysUntilInstallation = Math.ceil(timeDifference / (1000 * 3600 * 24))

  return (
    <ModalWrapper title="Campaign Dashboard" dismissHref="/" breadcrumbs={breadcrumbs}>
      <div className="flex-1 flex flex-col">
        <div className="w-full mx-auto px-4 py-6">
          {/* Personal greeting */}
          <h2 className="uber-heading-3 mb-6">Hey Michael,</h2>

          {/* Vehicle Wrap Preview */}
          <VehicleWrapPreview />

          {/* Campaign Status Card */}
          <div className="bg-white border border-uber-gray-200 rounded-lg overflow-hidden mb-6">
            <div className="p-4 border-b border-uber-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-uber-gray-50 rounded-full overflow-hidden flex items-center justify-center mr-3">
                    <Image src="/microsoft-logo.png" alt="Microsoft" width={20} height={20} />
                  </div>
                  <div>
                    <h3 className="uber-heading-5">Microsoft Campaign</h3>
                    <p className="uber-paragraph-3 text-uber-gray-500">Preparation Phase</p>
                  </div>
                </div>
                <Tag color="yellow">Scheduled</Tag>
              </div>
            </div>

            <div className="p-4">
              {/* Campaign Progress */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="uber-paragraph-3 text-uber-gray-700">Onboarding Progress</span>
                  <span className="uber-paragraph-3 text-uber-gray-700">2 of 3 steps complete</span>
                </div>
                <Progress value={66} color="blue" size="medium" />
              </div>

              {/* Steps completed */}
              <div className="bg-uber-gray-50 p-3 rounded-lg mb-4">
                <h4 className="uber-heading-6 mb-2">Steps Completed</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-uber-green flex items-center justify-center mr-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="white" />
                      </svg>
                    </div>
                    <span className="uber-paragraph-3">Contract Signed</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-uber-green flex items-center justify-center mr-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="white" />
                      </svg>
                    </div>
                    <span className="uber-paragraph-3">Installation Scheduled</span>
                  </div>
                  <div className="flex items-center text-uber-gray-500">
                    <div className="w-5 h-5 rounded-full bg-uber-gray-400 flex items-center justify-center mr-2">
                      <span className="text-white text-xs">3</span>
                    </div>
                    <span className="uber-paragraph-3">Installation Complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Installation Details Card */}
          <div className="bg-white border border-uber-gray-200 rounded-lg overflow-hidden mb-6">
            <div className="p-4 border-b border-uber-gray-200">
              <h3 className="uber-heading-5">Upcoming Installation</h3>
            </div>

            <div className="p-4">
              {/* Countdown */}
              <div className="bg-uber-gray-50 p-4 rounded-lg mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-uber-blue rounded-lg flex items-center justify-center mr-3">
                    <span className="text-black text-xl font-bold">{daysUntilInstallation}</span>
                  </div>
                  <div>
                    <p className="uber-paragraph-3 text-uber-gray-700">days</p>
                    <p className="uber-paragraph-3 font-medium">until your scheduled installation</p>
                  </div>
                </div>
              </div>

              {/* Installation Details */}
              <div className="space-y-4 mb-4">
                <div className="flex items-start">
                  <div className="bg-uber-gray-100 p-2 rounded-md mr-3 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="uber-paragraph-3 text-uber-gray-600">Date & Time</p>
                    <p className="uber-paragraph-2 font-medium">May 20, 2025 at 10:00 AM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-uber-gray-100 p-2 rounded-md mr-3 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="uber-paragraph-3 text-uber-gray-600">Location</p>
                    <p className="uber-paragraph-2 font-medium">San Francisco Installation Center</p>
                    <p className="uber-paragraph-3 text-uber-gray-600">123 Market St, San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>

              <Link
                href="/onboarding/installation/confirmation/1"
                className="w-full bg-uber-gray-50 hover:bg-uber-gray-100 text-uber-black font-medium py-3 flex items-center justify-center rounded-lg"
              >
                <span className="text-sm font-medium">View Appointment Details</span>
              </Link>
            </div>
          </div>

          {/* Campaign Information Card */}
          <div className="bg-white border border-uber-gray-200 rounded-lg overflow-hidden mb-6">
            <div className="p-4 border-b border-uber-gray-200">
              <h3 className="uber-heading-5">Campaign Information</h3>
            </div>

            <div className="p-4">
              {/* Campaign Details */}
              <div className="space-y-4 mb-4">
                <div className="flex items-start">
                  <div className="bg-uber-gray-100 p-2 rounded-md mr-3 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="uber-paragraph-3 text-uber-gray-600">Earnings Status</p>
                    <p className="uber-paragraph-2 font-medium">Not Yet Earning</p>
                    <p className="uber-paragraph-3 text-uber-gray-600">Earnings will begin after installation</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-uber-gray-100 p-2 rounded-md mr-3 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="uber-paragraph-3 text-uber-gray-600">Campaign Duration</p>
                    <p className="uber-paragraph-2 font-medium">3 Months</p>
                    <p className="uber-paragraph-3 text-uber-gray-600">May 21 - August 21, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps Card */}
          <div className="bg-white border border-uber-gray-200 rounded-lg overflow-hidden mb-6">
            <div className="p-4 border-b border-uber-gray-200">
              <h3 className="uber-heading-5">Next Steps</h3>
            </div>

            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-uber-black flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <p className="uber-paragraph-2 font-medium">Prepare Your Vehicle</p>
                    <p className="uber-paragraph-3 text-uber-gray-600">Clean your vehicle before installation</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-uber-black flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <p className="uber-paragraph-2 font-medium">Attend Installation Appointment</p>
                    <p className="uber-paragraph-3 text-uber-gray-600">Arrive 15 minutes early</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-uber-black flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <p className="uber-paragraph-2 font-medium">Begin Earning</p>
                    <p className="uber-paragraph-3 text-uber-gray-600">Start driving with your new wrap</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
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
              href="/onboarding/installation/1"
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
                    d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z"
                    fill="currentColor"
                  />
                </svg>
                <span className="uber-paragraph-2 font-medium">Reschedule Installation</span>
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

          {/* Fast Forward Button */}
          <Link
            href="/onboarding/dashboard"
            className="w-full bg-uber-black text-white font-medium py-3 flex items-center justify-center rounded-lg"
          >
            <span className="text-sm font-medium">Fast Forward to Active Dashboard</span>
          </Link>
        </div>
      </div>
    </ModalWrapper>
  )
}
