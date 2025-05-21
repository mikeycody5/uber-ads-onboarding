import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Full-screen Uber Driver app screenshot */}
      <Link href="/onboarding/intro" className="w-full h-full relative block">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Uber%20app%20menu%20ss-5eanvUvlPJb8gpwisbRW0un0Y5YTPj.png"
          alt="Uber Driver app interface"
          fill
          className="object-cover"
          priority
          unoptimized={true}
        />
      </Link>
    </div>
  )
}
