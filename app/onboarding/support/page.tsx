"use client"

import { ModalWrapper } from "@/components/modal-wrapper"
import { Accordion } from "@/components/ui/accordion"
import Link from "next/link"

export default function SupportPage() {
  // Define breadcrumbs for this page
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/onboarding/dashboard" },
    { label: "Support", href: "/onboarding/support" },
  ]

  // FAQ categories
  const faqCategories = [
    {
      title: "Getting Started",
      faqs: [
        {
          question: "How does Uber Ads work?",
          answer:
            "Uber Ads allows you to earn additional income by displaying advertisements on your vehicle. After qualifying, you'll be matched with brands, sign a contract, get your vehicle wrapped, and start earning.",
        },
        {
          question: "What are the requirements to join?",
          answer:
            "Requirements include a minimum driver rating of 4.7+, a vehicle that's 2015 or newer, driving at least 25-40 hours per week depending on the campaign, and operating in an eligible market.",
        },
        {
          question: "How much can I earn?",
          answer:
            "Earnings vary by campaign, but typically range from $350-$450 per month in base pay, with additional performance bonuses of up to $100 per month based on hours driven and areas covered.",
        },
      ],
    },
    {
      title: "Installation & Maintenance",
      faqs: [
        {
          question: "How is the advertisement installed?",
          answer:
            "Advertisements are installed as vinyl wraps by professional technicians at authorized installation centers. The process takes 4-6 hours and is included in your contract.",
        },
        {
          question: "Will the wrap damage my car?",
          answer:
            "No, the vinyl wraps are designed to be safely applied and removed without damaging your vehicle's paint. They're made of high-quality materials specifically designed for automotive use.",
        },
        {
          question: "How do I maintain the wrap?",
          answer:
            "You can wash your car normally, but avoid high-pressure washes directly on the edges of the wrap. Hand washing is recommended. If you notice any peeling or damage, contact support immediately.",
        },
      ],
    },
    {
      title: "Payments & Earnings",
      faqs: [
        {
          question: "When and how will I get paid?",
          answer:
            "Payments are processed automatically through your Uber driver account on a weekly or bi-weekly basis, depending on the campaign. You'll see Uber Ads earnings as a separate line item in your earnings statement.",
        },
        {
          question: "How do bonuses work?",
          answer:
            "Performance bonuses are based on meeting specific criteria like minimum hours driven per week or covering certain high-traffic areas. Bonus tiers typically include Bronze, Silver, and Gold levels with increasing rewards.",
        },
        {
          question: "What happens if I drive less than required?",
          answer:
            "If you consistently drive less than the minimum required hours, you may receive reduced payments or potentially have your contract reviewed. We understand occasional fluctuations in driving hours.",
        },
      ],
    },
  ]

  return (
    <ModalWrapper
      title="Help & Support"
      dismissHref="/onboarding/dashboard"
      actionLabel="Contact Support"
      actionHref="#"
      onActionClick={() => window.open("mailto:support@uberads.com")}
      breadcrumbs={breadcrumbs}
    >
      <div className="flex-1 flex flex-col">
        <div className="w-full mx-auto px-4 py-6">
          {/* Support options */}
          <div className="space-y-4 mb-6">
            <Link
              href="#"
              className="flex items-center justify-between p-4 bg-white border border-uber-gray-200 rounded-lg"
            >
              <div className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-uber-gray-700 mr-3"
                >
                  <path
                    d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z"
                    fill="currentColor"
                  />
                  <path d="M12 15H14V13H12V15ZM12 5H14V11H12V5Z" fill="currentColor" />
                </svg>
                <span className="uber-paragraph-2 font-medium">Live Chat Support</span>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-uber-gray-500"
              >
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor" />
              </svg>
            </Link>
            <Link
              href="mailto:support@uberads.com"
              className="flex items-center justify-between p-4 bg-white border border-uber-gray-200 rounded-lg"
            >
              <div className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-uber-gray-700 mr-3"
                >
                  <path
                    d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="uber-paragraph-2 font-medium">Email Support</span>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-uber-gray-500"
              >
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor" />
              </svg>
            </Link>
            <Link
              href="tel:+18005551234"
              className="flex items-center justify-between p-4 bg-white border border-uber-gray-200 rounded-lg"
            >
              <div className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-uber-gray-700 mr-3"
                >
                  <path
                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                    fill="currentColor"
                  />
                </svg>
                <span className="uber-paragraph-2 font-medium">Call Support</span>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-uber-gray-500"
              >
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor" />
              </svg>
            </Link>
          </div>

          {/* FAQ sections */}
          <h3 className="uber-heading-4 mb-3">Frequently Asked Questions</h3>

          {faqCategories.map((category, index) => (
            <div key={index} className="mb-6">
              <h4 className="uber-heading-5 mb-3">{category.title}</h4>
              <div className="bg-white border border-uber-gray-200 rounded-lg overflow-hidden">
                {category.faqs.map((faq, faqIndex) => (
                  <Accordion key={faqIndex} title={faq.question} defaultOpen={faqIndex === 0 && index === 0}>
                    <p className="uber-paragraph-3 text-uber-gray-700">{faq.answer}</p>
                  </Accordion>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ModalWrapper>
  )
}
