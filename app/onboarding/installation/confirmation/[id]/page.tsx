import { ModalWrapper } from "@/components/modal-wrapper"
import { notFound } from "next/navigation"
import { VehicleWrapPreview } from "@/components/vehicle-wrap-preview"

interface ConfirmationPageProps {
  params: {
    id: string
  }
}

export default function ConfirmationPage({ params }: ConfirmationPageProps) {
  const locationId = Number.parseInt(params.id)

  // Sample location data
  const locations = [
    {
      id: 1,
      name: "San Francisco Installation Center",
      address: "123 Market St, San Francisco, CA 94105",
      date: "May 20, 2025",
      time: "10:00 AM",
    },
    {
      id: 2,
      name: "Oakland Installation Center",
      address: "456 Broadway, Oakland, CA 94607",
      date: "May 21, 2025",
      time: "2:00 PM",
    },
    {
      id: 3,
      name: "San Jose Installation Center",
      address: "789 First St, San Jose, CA 95113",
      date: "May 22, 2025",
      time: "11:30 AM",
    },
  ]

  const location = locations.find((l) => l.id === locationId)

  if (!location) {
    notFound()
  }

  // Define breadcrumbs for this page
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Installation", href: `/onboarding/installation/${locationId}` },
    { label: "Confirmation", href: `/onboarding/installation/confirmation/${locationId}` },
  ]

  return (
    <ModalWrapper
      title="Installation Confirmed"
      dismissHref="/"
      actionLabel="Continue"
      actionHref="/onboarding/pre-dashboard"
      breadcrumbs={breadcrumbs}
    >
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-16 h-16 bg-uber-green rounded-full flex items-center justify-center mb-6">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
          </svg>
        </div>

        <h2 className="uber-heading-3 text-center mb-2">Installation Appointment Confirmed</h2>
        <p className="uber-paragraph-2 text-uber-gray-600 text-center mb-8">
          Your vehicle wrap installation has been scheduled.
        </p>

        <VehicleWrapPreview />

        <div className="bg-white border border-uber-gray-200 rounded-lg p-6 w-full max-w-md mb-8">
          <h3 className="uber-heading-5 mb-4">Appointment Details</h3>

          <div className="space-y-4">
            <div>
              <p className="uber-paragraph-3 text-uber-gray-600">Location</p>
              <p className="uber-paragraph-2 font-medium">{location.name}</p>
              <p className="uber-paragraph-3">{location.address}</p>
            </div>

            <div className="flex gap-6">
              <div>
                <p className="uber-paragraph-3 text-uber-gray-600">Date</p>
                <p className="uber-paragraph-2 font-medium">{location.date}</p>
              </div>
              <div>
                <p className="uber-paragraph-3 text-uber-gray-600">Time</p>
                <p className="uber-paragraph-2 font-medium">{location.time}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-uber-gray-50 border border-uber-gray-200 rounded-lg p-6 w-full max-w-md mb-6">
          <h3 className="uber-heading-5 mb-4">Preparation Instructions</h3>

          <ul className="space-y-2">
            <li className="flex items-start">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-uber-gray-700 mr-2 mt-0.5 shrink-0"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  fill="currentColor"
                />
              </svg>
              <span className="uber-paragraph-3">Wash your vehicle 24-48 hours before installation</span>
            </li>
            <li className="flex items-start">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-uber-gray-700 mr-2 mt-0.5 shrink-0"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  fill="currentColor"
                />
              </svg>
              <span className="uber-paragraph-3">Remove all personal items from your vehicle</span>
            </li>
            <li className="flex items-start">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-uber-gray-700 mr-2 mt-0.5 shrink-0"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  fill="currentColor"
                />
              </svg>
              <span className="uber-paragraph-3">Bring your driver's license and vehicle registration</span>
            </li>
            <li className="flex items-start">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-uber-gray-700 mr-2 mt-0.5 shrink-0"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  fill="currentColor"
                />
              </svg>
              <span className="uber-paragraph-3">Plan for the installation to take 3-4 hours</span>
            </li>
          </ul>
        </div>

        <button className="bg-uber-gray-50 hover:bg-uber-gray-100 text-uber-black font-medium py-2 px-4 rounded-lg flex items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z"
              fill="currentColor"
            />
          </svg>
          <span>Add to Calendar</span>
        </button>
      </div>
    </ModalWrapper>
  )
}
