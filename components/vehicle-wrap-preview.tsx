import Image from "next/image"
import Link from "next/link"

export function VehicleWrapPreview() {
  return (
    <div className="relative w-full rounded-lg overflow-hidden mb-6">
      <div className="aspect-[16/9] relative w-full">
        <Image
          src="/microsoft-vehicle-wrap.jpeg"
          alt="Microsoft Vehicle Wrap Design"
          fill
          className="object-cover"
          priority
        />
      </div>
      <Link
        href="/onboarding/design-preview"
        className="absolute bottom-3 right-3 bg-uber-gray-50 hover:bg-uber-gray-100 text-uber-black text-xs font-medium px-3 py-1.5 rounded-full shadow-sm transition-colors"
      >
        View Design
      </Link>
    </div>
  )
}
