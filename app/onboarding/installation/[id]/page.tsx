"use client"

import { useState } from "react"
import { ModalWrapper } from "@/components/modal-wrapper"
import { Map } from "@/components/ui/map"
import { DatePicker } from "@/components/ui/date-picker"
import { TimePicker } from "@/components/ui/time-picker"
import { notFound } from "next/navigation"

interface InstallationPageProps {
  params: {
    id: string
  }
}

export default function InstallationPage({ params }: InstallationPageProps) {
  const campaignId = Number.parseInt(params.id)
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTimeId, setSelectedTimeId] = useState<string | null>(null)
  const [step, setStep] = useState<"location" | "date" | "time">("location")

  // Sample campaign data
  const campaigns = [
    {
      id: 1,
      name: "Microsoft",
    },
    {
      id: 2,
      name: "Starbucks",
    },
    {
      id: 3,
      name: "Nike",
    },
  ]

  // Installation locations scattered across the map
  const locations = [
    {
      id: "loc1",
      name: "Richmond Installation Center",
      address: "123 Clement St, San Francisco, CA",
      distance: "3.2 miles away",
      lat: 30,
      lng: 15,
      availability: ["2023-05-10", "2023-05-11", "2023-05-12"],
    },
    {
      id: "loc2",
      name: "Chinatown Wrap Center",
      address: "456 Grant Ave, San Francisco, CA",
      distance: "1.8 miles away",
      lat: 25,
      lng: 65,
      availability: ["2023-05-10", "2023-05-11", "2023-05-13"],
    },
    {
      id: "loc3",
      name: "Sunset District Hub",
      address: "789 Irving St, San Francisco, CA",
      distance: "4.5 miles away",
      lat: 45,
      lng: 10,
      availability: ["2023-05-11", "2023-05-12", "2023-05-13"],
    },
    {
      id: "loc4",
      name: "Potrero Hill Center",
      address: "567 Potrero Ave, San Francisco, CA",
      distance: "2.7 miles away",
      lat: 40,
      lng: 75,
      availability: ["2023-05-10", "2023-05-12", "2023-05-14"],
    },
    {
      id: "loc5",
      name: "Balboa Terrace Installation",
      address: "890 Junipero Serra Blvd, San Francisco, CA",
      distance: "5.3 miles away",
      lat: 70,
      lng: 25,
      availability: ["2023-05-11", "2023-05-13", "2023-05-15"],
    },
  ]

  // Sample time slots
  const timeSlots = [
    { id: "t1", time: "9:00 AM", available: true },
    { id: "t2", time: "10:00 AM", available: true },
    { id: "t3", time: "11:00 AM", available: false },
    { id: "t4", time: "12:00 PM", available: true },
    { id: "t5", time: "1:00 PM", available: true },
    { id: "t6", time: "2:00 PM", available: false },
    { id: "t7", time: "3:00 PM", available: true },
    { id: "t8", time: "4:00 PM", available: true },
    { id: "t9", time: "5:00 PM", available: true },
    { id: "t10", time: "6:00 PM", available: false },
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
    { label: "Contract", href: `/onboarding/contract/${campaign.id}` },
    { label: "Installation", href: `/onboarding/installation/${campaign.id}` },
  ]

  const handleLocationSelect = (location: any) => {
    setSelectedLocationId(location.id)
  }

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
  }

  const handleTimeSelect = (timeSlot: any) => {
    setSelectedTimeId(timeSlot.id)
  }

  const handleContinue = () => {
    if (step === "location" && selectedLocationId) {
      setStep("date")
    } else if (step === "date" && selectedDate) {
      setStep("time")
    }
  }

  const getActionLabel = () => {
    if (step === "location") return "Confirm Location"
    if (step === "date") return "Confirm Date"
    return "Confirm Time"
  }

  const getActionHref = () => {
    if (step === "time" && selectedTimeId) {
      return `/onboarding/installation/confirmation/${campaignId}`
    }
    return "#"
  }

  const isActionDisabled = () => {
    if (step === "location") return !selectedLocationId
    if (step === "date") return !selectedDate
    return !selectedTimeId
  }

  return (
    <ModalWrapper
      title="Schedule Installation"
      dismissHref={`/onboarding/contract/${campaignId}`}
      actionLabel={getActionLabel()}
      actionHref={getActionHref()}
      onActionClick={step !== "time" ? handleContinue : undefined}
      actionDisabled={isActionDisabled()}
      breadcrumbs={breadcrumbs}
    >
      <div className="flex-1 flex flex-col">
        {step === "location" && (
          <div className="w-full flex flex-col">
            <div className="px-4 py-4">
              <h2 className="text-xl font-bold mb-2">Select Installation Center</h2>
              <p className="text-sm text-gray-600 mb-4">
                Choose a convenient location for your vehicle wrap installation
              </p>
            </div>

            {/* Map container with explicit height */}
            <div className="px-4 pb-4">
              <Map
                locations={locations}
                onSelectLocation={handleLocationSelect}
                selectedLocationId={selectedLocationId || undefined}
              />
            </div>
          </div>
        )}

        {step === "date" && (
          <div className="w-full px-4 py-4">
            <h2 className="text-xl font-bold mb-2">Select Installation Date</h2>
            <p className="text-sm text-gray-600 mb-4">Choose a date for your installation appointment</p>
            <div className="bg-white rounded-lg border border-gray-200">
              <DatePicker
                onDateSelect={handleDateSelect}
                selectedDate={selectedDate || undefined}
                minDate={new Date()}
              />
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Installation typically takes 4-6 hours. Please plan accordingly.
            </p>
          </div>
        )}

        {step === "time" && (
          <div className="w-full px-4 py-4">
            <h2 className="text-xl font-bold mb-2">Select Installation Time</h2>
            <p className="text-sm text-gray-600 mb-4">Choose an available time slot for your installation</p>
            <div className="bg-white rounded-lg border border-gray-200">
              <TimePicker
                timeSlots={timeSlots}
                onTimeSelect={handleTimeSelect}
                selectedTimeId={selectedTimeId || undefined}
              />
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Please arrive 15 minutes before your scheduled time. The installation process takes approximately 4-6
              hours.
            </p>
          </div>
        )}
      </div>
    </ModalWrapper>
  )
}
