import Image from "next/image"
import { ModalWrapper } from "@/components/modal-wrapper"

export default function IntroPage() {
  return (
    <ModalWrapper title="Uber Ads" dismissHref="/" actionLabel="Get started" actionHref="/onboarding/qualification">
      <div className="w-full mx-auto px-5 py-8 pb-24">
        {/* Hero image - full width of modal */}
        <div className="w-full relative h-[30vh] -mx-5 -mt-5" style={{ width: "calc(100% + 2.5rem)" }}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-faoBXZu4P5nTmVfYVqKVhnsifzy2Vm.png"
            alt="Car with Microsoft advertisement wrap"
            fill
            className="object-cover"
            priority
            unoptimized={true}
          />
        </div>

        <div className="space-y-6 mt-6">
          {/* Heading */}
          <h1 className="text-3xl font-bold leading-tight tracking-tight">Make consistent income with Uber Ads</h1>

          {/* Paragraph text */}
          <p className="text-base text-gray-700">
            Uber Ads provides drivers with an opportunity to supplement their income by enabling brands to advertise
            through vehicle wraps displayed on Uber driver vehicles.
          </p>
        </div>
      </div>
    </ModalWrapper>
  )
}
