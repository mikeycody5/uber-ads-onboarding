"use client"

import { useState } from "react"
import Image from "next/image"

interface MapLocation {
  id: string
  name: string
  address: string
  distance: string
  lat: number
  lng: number
  availability: string[]
}

interface MapProps {
  locations: MapLocation[]
  onSelectLocation?: (location: MapLocation) => void
  selectedLocationId?: string
  className?: string
}

export function Map({ locations, onSelectLocation, selectedLocationId, className = "" }: MapProps) {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(
    locations.find((loc) => loc.id === selectedLocationId) || null,
  )

  const handleLocationSelect = (location: MapLocation) => {
    setSelectedLocation(location)
    if (onSelectLocation) {
      onSelectLocation(location)
    }
  }

  return (
    <div className={`relative w-full h-[500px] ${className}`}>
      {/* Map background */}
      <Image src="/uber-sf-map.png" alt="San Francisco Map" fill className="object-cover" priority />

      {/* Location pins */}
      {locations.map((location) => (
        <button
          key={location.id}
          className="absolute z-10"
          style={{
            left: `${location.lng}%`,
            top: `${location.lat}%`,
            transform: "translate(-50%, -50%)",
          }}
          onClick={() => handleLocationSelect(location)}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              selectedLocation?.id === location.id ? "bg-black" : "bg-green-500"
            }`}
          >
            <div className="w-3 h-3 rounded-full bg-white" />
          </div>
        </button>
      ))}

      {/* Selected location card */}
      {selectedLocation && (
        <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg p-4 z-20">
          <h3 className="text-lg font-semibold">{selectedLocation.name}</h3>
          <p className="text-sm text-gray-500">{selectedLocation.address}</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm">{selectedLocation.distance}</span>
            <span className="text-sm text-green-600">{selectedLocation.availability.length} slots available</span>
          </div>
        </div>
      )}
    </div>
  )
}
