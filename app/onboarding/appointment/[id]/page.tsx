import { ModalWrapper } from "@/components/modal-wrapper"
import { CheckIcon, LocationIcon, ClockIcon } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface AppointmentPageProps {
  params: {
    id: string
  }
}

export default function AppointmentPage({ params }: AppointmentPageProps) {
  const campaignId = Number.parseInt(params.id)

  // Sample campaign data
  const campaigns = [
    {
      id: 1,
      name: "Microsoft",
      logo: "/microsoft-logo.png",
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

  // Sample appointment data
  const appointment = {
    location: {
      name: "Downtown Installation Center",
      address: "123 Market St, San Francisco, CA",
      phone: "(415) 555-1234",
    },
    date: "Monday, May 10, 2023",
    time: "10:00 AM",
    duration: "4-6 hours",
    instructions: "Please arrive 15 minutes early. Bring your driver's license and vehicle registration.",
  }

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
    { label: "Installation", href: `/onboarding/installation/${campaign.id}` },
    { label: "Appointment", href: `/onboarding/appointment/${campaign.id}` },
  ]

  return (
    <ModalWrapper
      title="Appointment Confirmation"
      dismissHref={`/onboarding/installation/${campaignId}`}
      actionLabel="Go to Dashboard"
      actionHref="/onboarding/dashboard"
      breadcrumbs={breadcrumbs}
    >
      <div className="flex-1 flex flex-col">
        <div className="w-full mx-auto px-4 py-6">
          {/* Success message */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-uber-green bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <CheckIcon size={32} color="#2FB157" />
            </div>
            <h2 className="uber-heading-3 mb-1 text-center">Installation Scheduled!</h2>
            <p className="uber-paragraph-2 text-uber-gray-600 text-center">
              Your vehicle wrap installation has been confirmed.
            </p>
          </div>

          {/* Appointment details card */}
          <div className="bg-white border border-uber-gray-200 rounded-lg overflow-hidden mb-6">
            <div className="p-4 border-b border-uber-gray-200">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-uber-gray-50 rounded-full overflow-hidden flex items-center justify-center mr-3">
                  <Image src={campaign.logo || "/placeholder.svg"} alt={campaign.name} width={20} height={20} />
                </div>
                <div>
                  <h3 className="uber-heading-5">{campaign.name} Campaign</h3>
                  <p className="uber-paragraph-3 text-uber-gray-500">Vehicle Wrap Installation</p>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="space-y-4">
                <div className="flex items-start">
                  <ClockIcon size={20} className="text-uber-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="uber-paragraph-3 font-medium">{appointment.date}</p>
                    <p className="uber-paragraph-3 text-uber-gray-500">
                      {appointment.time} ({appointment.duration})
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <LocationIcon size={20} className="text-uber-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="uber-paragraph-3 font-medium">{appointment.location.name}</p>
                    <p className="uber-paragraph-3 text-uber-gray-500">{appointment.location.address}</p>
                    <p className="uber-paragraph-3 text-uber-gray-500">{appointment.location.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mb-6">
            <h3 className="uber-heading-5 mb-3">Instructions</h3>
            <p className="uber-paragraph-3 text-uber-gray-700 mb-4">{appointment.instructions}</p>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckIcon size={16} className="text-uber-green mt-0.5 mr-2" />
                <span className="uber-paragraph-3">Bring your driver's license and vehicle registration</span>
              </div>
              <div className="flex items-start">
                <CheckIcon size={16} className="text-uber-green mt-0.5 mr-2" />
                <span className="uber-paragraph-3">Make sure your vehicle is clean before installation</span>
              </div>
              <div className="flex items-start">
                <CheckIcon size={16} className="text-uber-green mt-0.5 mr-2" />
                <span className="uber-paragraph-3">Plan for 4-6 hours for the installation process</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <Link
              href={`/onboarding/installation/${campaignId}`}
              className="flex-1 bg-white border border-uber-gray-200 text-uber-black font-medium py-3 flex items-center justify-center rounded-lg"
            >
              <span className="text-sm font-medium">Reschedule</span>
            </Link>
            <Link
              href="#"
              className="flex-1 bg-uber-black text-white font-medium py-3 flex items-center justify-center rounded-lg"
            >
              <span className="text-sm font-medium">Get Directions</span>
            </Link>
          </div>
        </div>
      </div>
    </ModalWrapper>
  )
}
