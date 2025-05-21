"use client"

import { useState } from "react"
import { ModalWrapper } from "@/components/modal-wrapper"
import Image from "next/image"
import { CheckIcon } from "@/components/icons"
import { notFound } from "next/navigation"

interface ContractPageProps {
  params: {
    id: string
  }
}

export default function ContractPage({ params }: ContractPageProps) {
  const campaignId = Number.parseInt(params.id)
  const [agreed, setAgreed] = useState(false)
  const [signature, setSignature] = useState("")
  const [showPreview, setShowPreview] = useState(false)

  // Sample campaign data
  const campaigns = [
    {
      id: 1,
      name: "Microsoft",
      logo: "/microsoft-logo.png",
      contractImage: "/digital-contract-signing.png",
    },
    {
      id: 2,
      name: "Starbucks",
      logo: "/coffee-cup-silhouette.png",
      contractImage: "/digital-contract-signing.png",
    },
    {
      id: 3,
      name: "Nike",
      logo: "/swoosh-on-white.png",
      contractImage: "/digital-contract-signing.png",
    },
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
  ]

  return (
    <ModalWrapper
      title="Contract Review & Signing"
      dismissHref={`/onboarding/campaign/${campaignId}`}
      actionLabel={agreed && signature ? "Sign & Continue" : "Review Contract"}
      actionHref={agreed && signature ? `/onboarding/installation/${campaignId}` : "#"}
      onActionClick={agreed && signature ? undefined : () => setShowPreview(true)}
      breadcrumbs={breadcrumbs}
    >
      <div className="flex-1 flex flex-col">
        <div className="w-full mx-auto px-4 py-6">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-uber-gray-50 rounded-full overflow-hidden flex items-center justify-center mr-3">
              <Image src="/logos/microsoft-logo.png" alt={campaign.name} width={24} height={24} />
            </div>
            <div>
              <h2 className="uber-heading-3">{campaign.name} Campaign Contract</h2>
              <p className="uber-paragraph-3 text-uber-gray-500">Please review and sign</p>
            </div>
          </div>

          {/* Contract preview */}
          <div className="mb-6">
            <div
              className="relative h-64 bg-uber-gray-50 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setShowPreview(true)}
            >
              <Image
                src={campaign.contractImage || "/placeholder.svg"}
                alt="Contract preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="bg-white bg-opacity-90 rounded-lg px-4 py-2">
                  <span className="uber-paragraph-3 font-medium">Tap to preview</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contract key points */}
          <div className="mb-6">
            <h3 className="uber-heading-5 mb-3">Key Contract Points</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckIcon size={16} className="text-uber-green mt-0.5 mr-2" />
                <span className="uber-paragraph-3">3-month campaign duration with {campaign.name}</span>
              </div>
              <div className="flex items-start">
                <CheckIcon size={16} className="text-uber-green mt-0.5 mr-2" />
                <span className="uber-paragraph-3">$400 monthly base payment, paid weekly</span>
              </div>
              <div className="flex items-start">
                <CheckIcon size={16} className="text-uber-green mt-0.5 mr-2" />
                <span className="uber-paragraph-3">Performance bonus of up to $100/month</span>
              </div>
              <div className="flex items-start">
                <CheckIcon size={16} className="text-uber-green mt-0.5 mr-2" />
                <span className="uber-paragraph-3">Minimum 30 hours of driving per week required</span>
              </div>
              <div className="flex items-start">
                <CheckIcon size={16} className="text-uber-green mt-0.5 mr-2" />
                <span className="uber-paragraph-3">Professional installation and removal included</span>
              </div>
            </div>
          </div>

          {/* Signature section */}
          <div className="mb-6">
            <h3 className="uber-heading-5 mb-3">Signature</h3>
            <div className="border border-uber-gray-200 rounded-lg p-4">
              <input
                type="text"
                placeholder="Type your full legal name"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
                className="w-full bg-uber-gray-50 border-0 rounded-lg py-3 px-3 text-base uber-input"
              />
              <p className="uber-paragraph-3 text-uber-gray-500 mt-2">
                By typing your name above, you agree this represents your electronic signature.
              </p>
            </div>
          </div>

          {/* Agreement checkbox */}
          <div className="flex items-start">
            <div className="flex items-center h-5 mt-1">
              <input
                id="agreement"
                name="agreement"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="h-4 w-4 text-uber-black border-uber-gray-300 rounded"
              />
            </div>
            <div className="ml-3">
              <label htmlFor="agreement" className="uber-paragraph-3 text-uber-gray-700">
                I have read and agree to the terms of this contract, including the payment schedule, campaign
                requirements, and vehicle wrap specifications.
              </label>
            </div>
          </div>
        </div>

        {/* Contract preview modal */}
        {showPreview && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-[340px] max-h-[80vh] overflow-hidden flex flex-col">
              <div className="p-4 border-b border-uber-gray-200 flex justify-between items-center">
                <h3 className="uber-heading-4">{campaign.name} Contract</h3>
                <button onClick={() => setShowPreview(false)} className="p-1 rounded-full hover:bg-uber-gray-100">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 overflow-auto p-4">
                <div className="space-y-4 text-sm">
                  <h4 className="uber-heading-5">ADVERTISING DISPLAY AGREEMENT</h4>
                  <p className="uber-paragraph-3 break-words">
                    This Advertising Display Agreement (the "Agreement") is entered into between Uber Technologies, Inc.
                    ("Uber"), {campaign.name} ("Advertiser"), and you, the independent contractor driver ("Driver").
                  </p>
                  <h4 className="uber-heading-5">1. TERM</h4>
                  <p className="uber-paragraph-3 break-words">
                    The term of this Agreement shall be for three (3) months, commencing on the date of installation of
                    the advertising display on Driver's vehicle.
                  </p>
                  <h4 className="uber-heading-5">2. COMPENSATION</h4>
                  <p className="uber-paragraph-3 break-words">
                    Driver shall receive a base payment of $400 per month, paid on a weekly basis. Driver may also be
                    eligible for performance bonuses of up to $100 per month based on hours driven and areas covered.
                  </p>
                  <h4 className="uber-heading-5">3. DRIVER OBLIGATIONS</h4>
                  <p className="uber-paragraph-3 break-words">Driver agrees to:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="uber-paragraph-3">Drive a minimum of 30 hours per week</li>
                    <li className="uber-paragraph-3">Maintain the vehicle in clean condition</li>
                    <li className="uber-paragraph-3">Not modify or alter the advertising display</li>
                    <li className="uber-paragraph-3">Report any damage to the advertising display immediately</li>
                    <li className="uber-paragraph-3">
                      Allow for professional installation and removal of the advertising display
                    </li>
                  </ul>
                  <h4 className="uber-heading-5">4. TERMINATION</h4>
                  <p className="uber-paragraph-3 break-words">
                    Either party may terminate this Agreement with 30 days' written notice. Early termination by Driver
                    without cause may result in forfeiture of final payment and/or costs associated with early removal.
                  </p>
                  <h4 className="uber-heading-5">5. ENTIRE AGREEMENT</h4>
                  <p className="uber-paragraph-3 break-words">
                    This Agreement constitutes the entire understanding between the parties concerning the subject
                    matter hereof and supersedes all prior agreements.
                  </p>
                </div>
              </div>
              <div className="p-4 border-t border-uber-gray-200">
                <button
                  onClick={() => setShowPreview(false)}
                  className="w-full bg-uber-black text-white font-medium py-3 flex items-center justify-center rounded-lg"
                >
                  <span className="text-base font-medium">Close Preview</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </ModalWrapper>
  )
}
