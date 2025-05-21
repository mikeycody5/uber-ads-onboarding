import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"
import type { ReactNode } from "react"

interface WalkthroughLayoutProps {
  imageSrc: string
  imageAlt: string
  heading: string
  subheading: string
  nextHref: string
  currentStep: number
  totalSteps: number
  children?: ReactNode
}

export function WalkthroughLayout({
  imageSrc,
  imageAlt,
  heading,
  subheading,
  nextHref,
  currentStep,
  totalSteps,
  children,
}: WalkthroughLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Header with back button - follows Uber's header pattern */}
      <div className="px-4 h-14 flex items-center border-b border-uber-gray-200">
        <Link href="/onboarding/qualification" className="inline-flex items-center justify-center w-10 h-10">
          <ChevronLeft className="h-5 w-5" />
        </Link>
      </div>

      {/* Full width image at the top */}
      <div className="w-full relative h-[40vh] sm:h-[45vh]">
        {imageSrc ? (
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt || "Illustration"}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-uber-gray-100"></div>
        )}
      </div>

      <div className="flex-1 flex flex-col">
        <div className="w-full max-w-4xl mx-auto px-5 py-8 flex flex-col items-center">
          {/* Content */}
          <div className="text-center space-y-6 w-full max-w-3xl">
            <h1 className="uber-heading-2 text-black">{heading}</h1>
            <div className="flex justify-center gap-6">{children}</div>
          </div>

          {/* Step indicator - updated to match Uber's design with black active dot */}
          <div className="flex space-x-2 mt-8">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${index + 1 === currentStep ? "bg-uber-black" : "bg-uber-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Button follows Uber's button pattern with rounded corners */}
      <div className="p-4 border-t border-uber-gray-200 mt-auto">
        <Link
          href={nextHref}
          className="w-full bg-uber-black text-white font-medium py-3 flex items-center justify-center rounded-lg"
        >
          <span className="text-base font-medium font-['Uber_Move_Text']">Next</span>
        </Link>
      </div>
    </main>
  )
}
