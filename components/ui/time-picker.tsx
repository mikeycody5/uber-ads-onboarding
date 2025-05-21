"use client"

import { useState } from "react"

interface TimeSlot {
  id: string
  time: string
  available: boolean
}

interface TimePickerProps {
  timeSlots: TimeSlot[]
  onTimeSelect: (timeSlot: TimeSlot) => void
  selectedTimeId?: string
  className?: string
}

export function TimePicker({ timeSlots, onTimeSelect, selectedTimeId, className = "" }: TimePickerProps) {
  const [selectedTime, setSelectedTime] = useState<string | undefined>(selectedTimeId)

  const handleTimeSelect = (timeSlot: TimeSlot) => {
    if (timeSlot.available) {
      setSelectedTime(timeSlot.id)
      onTimeSelect(timeSlot)
    }
  }

  // Group time slots into morning, afternoon, and evening
  const morningSlots = timeSlots.filter((slot) => {
    const hour = Number.parseInt(slot.time.split(":")[0])
    return hour >= 8 && hour < 12
  })

  const afternoonSlots = timeSlots.filter((slot) => {
    const hour = Number.parseInt(slot.time.split(":")[0])
    return hour >= 12 && hour < 17
  })

  const eveningSlots = timeSlots.filter((slot) => {
    const hour = Number.parseInt(slot.time.split(":")[0])
    return hour >= 17 && hour <= 20
  })

  const renderTimeGroup = (title: string, slots: TimeSlot[]) => {
    if (slots.length === 0) return null

    return (
      <div className="mb-4">
        <h4 className="uber-paragraph-3 text-uber-gray-500 mb-2">{title}</h4>
        <div className="grid grid-cols-3 gap-2">
          {slots.map((slot) => (
            <button
              key={slot.id}
              onClick={() => handleTimeSelect(slot)}
              disabled={!slot.available}
              className={`
                py-2 px-3 rounded-lg text-center uber-paragraph-3
                ${selectedTime === slot.id ? "bg-uber-black text-white" : "bg-uber-gray-50"}
                ${!slot.available ? "opacity-50 cursor-not-allowed" : "hover:bg-uber-gray-100"}
              `}
            >
              {slot.time}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-lg p-4 ${className}`}>
      {renderTimeGroup("Morning", morningSlots)}
      {renderTimeGroup("Afternoon", afternoonSlots)}
      {renderTimeGroup("Evening", eveningSlots)}
    </div>
  )
}
