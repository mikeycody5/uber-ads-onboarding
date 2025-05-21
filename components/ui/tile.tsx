"use client"
import Image from "next/image"

interface TileProps {
  imageSrc: string
  imageAlt: string
  className?: string
  onClick?: () => void
}

export function Tile({ imageSrc, imageAlt, className = "", onClick }: TileProps) {
  return (
    <div
      className={`w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 flex-shrink-0 bg-uber-gray-50 rounded-xl overflow-hidden flex items-center justify-center p-4 ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="relative w-full h-full">
        {imageSrc ? (
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt || "Illustration"}
            fill
            className="object-contain"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-uber-gray-50">
            <span className="text-uber-gray-400">No image</span>
          </div>
        )}
      </div>
    </div>
  )
}
