"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface DatePickerProps {
  onDateSelect: (date: Date) => void
  selectedDate?: Date
  minDate?: Date
  maxDate?: Date
  className?: string
}

export function DatePicker({
  onDateSelect,
  selectedDate,
  minDate = new Date(),
  maxDate,
  className = "",
}: DatePickerProps) {
  const [currentMonth, setCurrentMonth] = useState(selectedDate || new Date())
  const [selected, setSelected] = useState<Date | undefined>(selectedDate)

  // Get the first day of the month
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)

  // Get the day of the week for the first day (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfWeek = firstDayOfMonth.getDay()

  // Get the number of days in the month
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate()

  // Get the previous month's days to fill in the first week
  const prevMonthDays = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0).getDate()

  // Generate days for the calendar
  const days = []

  // Add previous month's days
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    days.push({
      date: new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, prevMonthDays - i),
      isCurrentMonth: false,
    })
  }

  // Add current month's days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i),
      isCurrentMonth: true,
    })
  }

  // Add next month's days to fill the last week
  const remainingDays = 7 - (days.length % 7)
  if (remainingDays < 7) {
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, i),
        isCurrentMonth: false,
      })
    }
  }

  // Navigate to previous month
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  // Navigate to next month
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  // Check if a date is selectable
  const isSelectable = (date: Date) => {
    if (minDate && date < new Date(minDate.setHours(0, 0, 0, 0))) {
      return false
    }
    if (maxDate && date > new Date(maxDate.setHours(23, 59, 59, 999))) {
      return false
    }
    return true
  }

  // Handle date selection
  const handleDateSelect = (date: Date) => {
    if (isSelectable(date)) {
      setSelected(date)
      onDateSelect(date)
    }
  }

  // Format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" })
  }

  // Check if a date is the selected date
  const isSelectedDate = (date: Date) => {
    return (
      selected &&
      date.getDate() === selected.getDate() &&
      date.getMonth() === selected.getMonth() &&
      date.getFullYear() === selected.getFullYear()
    )
  }

  // Check if a date is today
  const isToday = (date: Date) => {
    const today = new Date()
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }

  return (
    <div className={`bg-white rounded-lg ${className}`}>
      {/* Calendar header */}
      <div className="flex items-center justify-between p-4 border-b border-uber-gray-200">
        <button onClick={prevMonth} className="p-1 rounded-full hover:bg-uber-gray-100" aria-label="Previous month">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h3 className="uber-heading-5">{formatDate(currentMonth)}</h3>
        <button onClick={nextMonth} className="p-1 rounded-full hover:bg-uber-gray-100" aria-label="Next month">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-1 p-4 pb-2">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <div key={index} className="text-center uber-caption text-uber-gray-500">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-1 p-4 pt-0">
        {days.map((day, index) => (
          <button
            key={index}
            onClick={() => handleDateSelect(day.date)}
            disabled={!isSelectable(day.date)}
            className={`
              h-10 w-10 flex items-center justify-center rounded-full text-sm
              ${!day.isCurrentMonth ? "text-uber-gray-400" : ""}
              ${isToday(day.date) && !isSelectedDate(day.date) ? "border border-uber-black" : ""}
              ${isSelectedDate(day.date) ? "bg-uber-black text-white" : "hover:bg-uber-gray-100"}
              ${!isSelectable(day.date) ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            `}
            aria-label={day.date.toLocaleDateString()}
            aria-selected={isSelectedDate(day.date)}
          >
            {day.date.getDate()}
          </button>
        ))}
      </div>
    </div>
  )
}
