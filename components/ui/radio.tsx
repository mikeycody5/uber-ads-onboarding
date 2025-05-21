"use client"

import type React from "react"
import { useState } from "react"

interface RadioOption {
  label: React.ReactNode
  value: string
  description?: React.ReactNode
  disabled?: boolean
}

interface RadioGroupProps {
  options: RadioOption[]
  name: string
  defaultValue?: string
  onChange?: (value: string) => void
  className?: string
}

export function RadioGroup({ options, name, defaultValue, onChange, className = "" }: RadioGroupProps) {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(defaultValue)

  const handleChange = (value: string) => {
    setSelectedValue(value)
    if (onChange) onChange(value)
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {options.map((option) => (
        <div
          key={option.value}
          className={`relative border-2 rounded-lg p-4 transition-all ${
            selectedValue === option.value ? "border-uber-black" : "border-uber-gray-200 hover:border-uber-gray-300"
          } ${option.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          onClick={() => !option.disabled && handleChange(option.value)}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="text-base font-medium text-uber-gray-900">{option.label}</div>
              {option.description && <div className="mt-1 text-sm text-uber-gray-500">{option.description}</div>}
            </div>
            <div className="flex-shrink-0 ml-4">
              <div
                className={`h-6 w-6 rounded-full border flex items-center justify-center ${
                  selectedValue === option.value ? "border-uber-black bg-uber-black" : "border-uber-gray-300"
                }`}
              >
                {selectedValue === option.value && <div className="h-1.5 w-1.5 rounded-full bg-white"></div>}
              </div>
            </div>
          </div>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => handleChange(option.value)}
            className="sr-only"
            disabled={option.disabled}
          />
        </div>
      ))}
    </div>
  )
}
