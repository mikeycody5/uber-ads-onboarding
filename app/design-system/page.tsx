"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { useState } from "react"
import { AnalyticsIcon, ClockIcon, MoneyIcon, LocationIcon, CarIcon, CheckIcon, GaugeIcon } from "@/components/icons"
import { Progress } from "@/components/ui/progress"
import { Accordion } from "@/components/ui/accordion"
import { Tile } from "@/components/ui/tile"
import { FileUpload } from "@/components/ui/file-upload"
import { Menu, MenuTrigger } from "@/components/ui/menu"
import { RadioGroup } from "@/components/ui/radio"
import { ConfettiAnimation } from "@/components/confetti-animation"
import { MatchCards } from "@/components/match-cards"
import { Tag } from "@/components/ui/tag"
import { MetricCard } from "@/components/ui/metric-card"
import { Stepper } from "@/components/ui/stepper"
import dynamic from "next/dynamic"

// Dynamic imports for charts
const SimpleBrandChart = dynamic(() => import("@/components/simple-brand-chart"), { ssr: false })

// Sample data for components
const matchData = [
  {
    name: "Microsoft",
    logo: "/logos/microsoft-logo.png",
    matchScore: 92,
  },
  {
    name: "Starbucks",
    logo: "/logos/starbucks-logo.png",
    matchScore: 85,
  },
  {
    name: "Nike",
    logo: "/logos/nike-logo.png",
    matchScore: 78,
  },
]

const chartData = [
  {
    name: "Microsoft",
    Pay: 35,
    Hours: 30,
    Location: 27,
    total: 92,
    logo: "/logos/microsoft-logo.png",
  },
  {
    name: "Starbucks",
    Pay: 30,
    Hours: 32,
    Location: 23,
    total: 85,
    logo: "/logos/starbucks-logo.png",
  },
  {
    name: "Nike",
    Pay: 38,
    Hours: 25,
    Location: 15,
    total: 78,
    logo: "/logos/nike-logo.png",
  },
]

export default function DesignSystemPage() {
  const [activeTab, setActiveTab] = useState("components")

  return (
    <main className="flex flex-col bg-white w-full">
      {/* Header with back button - follows Uber's header pattern */}
      <div className="px-4 h-14 flex items-center border-b border-uber-gray-200">
        <Link href="/" className="inline-flex items-center justify-center w-10 h-10">
          <ChevronLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-lg font-medium ml-2 font-['Uber_Move']">Uber Base Design System</h1>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-uber-gray-200 overflow-x-auto">
        {["Typography", "Colors", "Icons", "Components", "Layout", "Patterns"].map((tab) => (
          <button
            key={tab}
            className={`uber-tab px-4 py-3 ${activeTab === tab.toLowerCase() ? "uber-tab-active" : ""}`}
            onClick={() => setActiveTab(tab.toLowerCase())}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-6">
        {/* Typography Section */}
        {activeTab === "typography" && (
          <div className="space-y-8">
            <div>
              <h2 className="uber-heading-3 mb-4">Display Typography</h2>
              <div className="space-y-6 border border-uber-gray-200 rounded-lg p-4">
                <div>
                  <p className="text-xs text-uber-gray-500 mb-1">uber-display-1</p>
                  <p className="uber-display-1">Display 1</p>
                  <p className="text-xs text-uber-gray-500 mt-1">76px / 84px, Uber Move Bold, -1.5px letter spacing</p>
                </div>
                <div>
                  <p className="text-xs text-uber-gray-500 mb-1">uber-display-2</p>
                  <p className="uber-display-2">Display 2</p>
                  <p className="text-xs text-uber-gray-500 mt-1">56px / 64px, Uber Move Bold, -1px letter spacing</p>
                </div>
                <div>
                  <p className="text-xs text-uber-gray-500 mb-1">uber-display-3</p>
                  <p className="uber-display-3">Display 3</p>
                  <p className="text-xs text-uber-gray-500 mt-1">36px / 44px, Uber Move Bold, -0.5px letter spacing</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Heading Typography</h2>
              <div className="space-y-6 border border-uber-gray-200 rounded-lg p-4">
                <div>
                  <p className="text-xs text-uber-gray-500 mb-1">uber-heading-1</p>
                  <p className="uber-heading-1">Heading 1</p>
                  <p className="text-xs text-uber-gray-500 mt-1">28px / 36px, Uber Move Bold, -0.25px letter spacing</p>
                </div>
                <div>
                  <p className="text-xs text-uber-gray-500 mb-1">uber-heading-2</p>
                  <p className="uber-heading-2">Heading 2</p>
                  <p className="text-xs text-uber-gray-500 mt-1">24px / 32px, Uber Move Bold</p>
                </div>
                <div>
                  <p className="text-xs text-uber-gray-500 mb-1">uber-heading-3</p>
                  <p className="uber-heading-3">Heading 3</p>
                  <p className="text-xs text-uber-gray-500 mt-1">20px / 28px, Uber Move Bold</p>
                </div>
                <div>
                  <p className="text-xs text-uber-gray-500 mb-1">uber-heading-4</p>
                  <p className="uber-heading-4">Heading 4</p>
                  <p className="text-xs text-uber-gray-500 mt-1">18px / 24px, Uber Move Bold</p>
                </div>
                <div>
                  <p className="text-xs text-uber-gray-500 mb-1">uber-heading-5</p>
                  <p className="uber-heading-5">Heading 5</p>
                  <p className="text-xs text-uber-gray-500 mt-1">16px / 24px, Uber Move Bold</p>
                </div>
                <div>
                  <p className="text-xs text-uber-gray-500 mb-1">uber-heading-6</p>
                  <p className="uber-heading-6">Heading 6</p>
                  <p className="text-xs text-uber-gray-500 mt-1">14px / 20px, Uber Move Bold</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Paragraph Typography</h2>
              <div className="space-y-6 border border-uber-gray-200 rounded-lg p-4">
                <div>
                  <p className="text-xs text-uber-gray-500 mb-1">uber-paragraph-1</p>
                  <p className="uber-paragraph-1">
                    Paragraph 1: The quick brown fox jumps over the lazy dog. This is a sample paragraph to demonstrate
                    the typography style.
                  </p>
                  <p className="text-xs text-uber-gray-500 mt-1">18px / 28px, Uber Move Text Regular</p>
                </div>
                <div>
                  <p className="text-xs text-uber-gray-500 mb-1">uber-paragraph-2</p>
                  <p className="uber-paragraph-2">
                    Paragraph 2: The quick brown fox jumps over the lazy dog. This is a sample paragraph to demonstrate
                    the typography style.
                  </p>
                  <p className="text-xs text-uber-gray-500 mt-1">16px / 24px, Uber Move Text Regular</p>
                </div>
                <div>
                  <p className="text-xs text-uber-gray-500 mb-1">uber-paragraph-3</p>
                  <p className="uber-paragraph-3">
                    Paragraph 3: The quick brown fox jumps over the lazy dog. This is a sample paragraph to demonstrate
                    the typography style.
                  </p>
                  <p className="text-xs text-uber-gray-500 mt-1">14px / 20px, Uber Move Text Regular</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Utility Typography</h2>
              <div className="space-y-6 border border-uber-gray-200 rounded-lg p-4">
                <div>
                  <p className="text-xs text-uber-gray-500 mb-1">uber-caption</p>
                  <p className="uber-caption">Caption text for smaller elements and labels</p>
                  <p className="text-xs text-uber-gray-500 mt-1">12px / 16px, Uber Move Text Regular</p>
                </div>
                <div>
                  <p className="text-xs text-uber-gray-500 mb-1">uber-legal</p>
                  <p className="uber-legal">Legal text for terms, conditions, and fine print</p>
                  <p className="text-xs text-uber-gray-500 mt-1">10px / 16px, Uber Move Text Regular</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Mobile Typography</h2>
              <div className="space-y-6 border border-uber-gray-200 rounded-lg p-4">
                <div>
                  <p className="text-xs text-uber-gray-500 mb-1">uber-display-mobile</p>
                  <p className="uber-display-mobile">Mobile Display</p>
                  <p className="text-xs text-uber-gray-500 mt-1">32px / 38px, Uber Move Bold, -0.5px letter spacing</p>
                </div>
                <div>
                  <p className="text-xs text-uber-gray-500 mb-1">uber-paragraph-mobile</p>
                  <p className="uber-paragraph-mobile">
                    Mobile paragraph text optimized for smaller screens and better readability on mobile devices.
                  </p>
                  <p className="text-xs text-uber-gray-500 mt-1">16px / 22px, Uber Move Text Regular</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Colors Section */}
        {activeTab === "colors" && (
          <div className="space-y-8">
            <div>
              <h2 className="uber-heading-3 mb-4">Primary Colors</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-20 bg-uber-black rounded-lg"></div>
                  <p className="uber-paragraph-3 font-medium">Black</p>
                  <p className="uber-caption text-uber-gray-500">#000000</p>
                  <p className="uber-caption text-uber-gray-500">bg-uber-black</p>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-uber-white border border-uber-gray-200 rounded-lg"></div>
                  <p className="uber-paragraph-3 font-medium">White</p>
                  <p className="uber-caption text-uber-gray-500">#FFFFFF</p>
                  <p className="uber-caption text-uber-gray-500">bg-uber-white</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Grayscale</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="space-y-2">
                  <div className="h-20 bg-uber-gray-50 rounded-lg"></div>
                  <p className="uber-paragraph-3 font-medium">Gray 50</p>
                  <p className="uber-caption text-uber-gray-500">#F6F6F6</p>
                  <p className="uber-caption text-uber-gray-500">bg-uber-gray-50</p>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-uber-gray-100 rounded-lg"></div>
                  <p className="uber-paragraph-3 font-medium">Gray 100</p>
                  <p className="uber-caption text-uber-gray-500">#EEEEEE</p>
                  <p className="uber-caption text-uber-gray-500">bg-uber-gray-100</p>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-uber-gray-200 rounded-lg"></div>
                  <p className="uber-paragraph-3 font-medium">Gray 200</p>
                  <p className="uber-caption text-uber-gray-500">#E2E2E2</p>
                  <p className="uber-caption text-uber-gray-500">bg-uber-gray-200</p>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-uber-gray-300 rounded-lg"></div>
                  <p className="uber-paragraph-3 font-medium">Gray 300</p>
                  <p className="uber-caption text-uber-gray-500">#CBCBCB</p>
                  <p className="uber-caption text-uber-gray-500">bg-uber-gray-300</p>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-uber-gray-400 rounded-lg"></div>
                  <p className="uber-paragraph-3 font-medium">Gray 400</p>
                  <p className="uber-caption text-uber-gray-500">#AFAFAF</p>
                  <p className="uber-caption text-uber-gray-500">bg-uber-gray-400</p>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-uber-gray-500 rounded-lg"></div>
                  <p className="uber-paragraph-3 font-medium">Gray 500</p>
                  <p className="uber-caption text-uber-gray-500">#757575</p>
                  <p className="uber-caption text-uber-gray-500">bg-uber-gray-500</p>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-uber-gray-600 rounded-lg"></div>
                  <p className="uber-paragraph-3 font-medium">Gray 600</p>
                  <p className="uber-caption text-uber-gray-500">#545454</p>
                  <p className="uber-caption text-uber-gray-500">bg-uber-gray-600</p>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-uber-gray-700 rounded-lg"></div>
                  <p className="uber-paragraph-3 font-medium text-white">Gray 700</p>
                  <p className="uber-caption text-uber-gray-300">#333333</p>
                  <p className="uber-caption text-uber-gray-300">bg-uber-gray-700</p>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-uber-gray-800 rounded-lg"></div>
                  <p className="uber-paragraph-3 font-medium text-white">Gray 800</p>
                  <p className="uber-caption text-uber-gray-300">#1F1F1F</p>
                  <p className="uber-caption text-uber-gray-300">bg-uber-gray-800</p>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-uber-gray-900 rounded-lg"></div>
                  <p className="uber-paragraph-3 font-medium text-white">Gray 900</p>
                  <p className="uber-caption text-uber-gray-300">#141414</p>
                  <p className="uber-caption text-uber-gray-300">bg-uber-gray-900</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Semantic Colors</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-20 bg-uber-green rounded-lg"></div>
                  <p className="uber-paragraph-3 font-medium">Green</p>
                  <p className="uber-caption text-uber-gray-500">#2FB157</p>
                  <p className="uber-caption text-uber-gray-500">bg-uber-green</p>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-uber-yellow rounded-lg"></div>
                  <p className="uber-paragraph-3 font-medium">Yellow</p>
                  <p className="uber-caption text-uber-gray-500">#F6B100</p>
                  <p className="uber-caption text-uber-gray-500">bg-uber-yellow</p>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-uber-red rounded-lg"></div>
                  <p className="uber-paragraph-3 font-medium">Red</p>
                  <p className="uber-caption text-uber-gray-500">#E60000</p>
                  <p className="uber-caption text-uber-gray-500">bg-uber-red</p>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-[#276EF1] rounded-lg"></div>
                  <p className="uber-paragraph-3 font-medium">Blue</p>
                  <p className="uber-caption text-uber-gray-500">#276EF1</p>
                  <p className="uber-caption text-uber-gray-500">bg-[#276EF1]</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Opacity Variants</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-20 bg-uber-green bg-opacity-10 rounded-lg"></div>
                  <p className="uber-paragraph-3 font-medium">Green 10%</p>
                  <p className="uber-caption text-uber-gray-500">bg-uber-green bg-opacity-10</p>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-uber-yellow bg-opacity-10 rounded-lg"></div>
                  <p className="uber-paragraph-3 font-medium">Yellow 10%</p>
                  <p className="uber-caption text-uber-gray-500">bg-uber-yellow bg-opacity-10</p>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-uber-red bg-opacity-10 rounded-lg"></div>
                  <p className="uber-paragraph-3 font-medium">Red 10%</p>
                  <p className="uber-caption text-uber-gray-500">bg-uber-red bg-opacity-10</p>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-[#276EF1] bg-opacity-10 rounded-lg"></div>
                  <p className="uber-paragraph-3 font-medium">Blue 10%</p>
                  <p className="uber-caption text-uber-gray-500">bg-[#276EF1] bg-opacity-10</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Icons Section */}
        {activeTab === "icons" && (
          <div className="space-y-8">
            <div>
              <h2 className="uber-heading-3 mb-4">Icon Guidelines</h2>
              <div className="space-y-4 border border-uber-gray-200 rounded-lg p-4">
                <p className="uber-paragraph-3">
                  Uber Base uses a consistent set of icons throughout the interface. Icons are available in multiple
                  sizes and can be colored to match the design requirements.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="uber-heading-5 mb-2">Icon Sizes</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li className="uber-paragraph-3">Small: 16px</li>
                      <li className="uber-paragraph-3">Medium: 24px (Default)</li>
                      <li className="uber-paragraph-3">Large: 28px</li>
                      <li className="uber-paragraph-3">Extra Large: 32px</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="uber-heading-5 mb-2">Icon Colors</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li className="uber-paragraph-3">Primary: #000000 (Black)</li>
                      <li className="uber-paragraph-3">Secondary: #757575 (Gray)</li>
                      <li className="uber-paragraph-3">Success: #2FB157 (Green)</li>
                      <li className="uber-paragraph-3">Warning: #F6B100 (Yellow)</li>
                      <li className="uber-paragraph-3">Error: #E60000 (Red)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">App Icons</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border border-uber-gray-200 rounded-lg p-4">
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-uber-gray-50 rounded-lg mb-2">
                    <GaugeIcon size={24} />
                  </div>
                  <p className="uber-caption text-center">GaugeIcon</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-uber-gray-50 rounded-lg mb-2">
                    <AnalyticsIcon size={24} />
                  </div>
                  <p className="uber-caption text-center">AnalyticsIcon</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-uber-gray-50 rounded-lg mb-2">
                    <ClockIcon size={24} />
                  </div>
                  <p className="uber-caption text-center">ClockIcon</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-uber-gray-50 rounded-lg mb-2">
                    <CarIcon size={24} />
                  </div>
                  <p className="uber-caption text-center">CarIcon</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-uber-gray-50 rounded-lg mb-2">
                    <LocationIcon size={24} />
                  </div>
                  <p className="uber-caption text-center">LocationIcon</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-uber-gray-50 rounded-lg mb-2">
                    <MoneyIcon size={24} />
                  </div>
                  <p className="uber-caption text-center">MoneyIcon</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-uber-gray-50 rounded-lg mb-2">
                    <CheckIcon size={24} />
                  </div>
                  <p className="uber-caption text-center">CheckIcon</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-uber-gray-50 rounded-lg mb-2">
                    <ChevronLeft size={24} />
                  </div>
                  <p className="uber-caption text-center">ChevronLeft</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Icon Sizes</h2>
              <div className="space-y-6 border border-uber-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-8">
                  <div className="flex flex-col items-center">
                    <div className="p-4 bg-uber-gray-50 rounded-lg mb-2">
                      <CarIcon size={16} />
                    </div>
                    <p className="uber-caption text-center">Small (16px)</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="p-4 bg-uber-gray-50 rounded-lg mb-2">
                      <CarIcon size={24} />
                    </div>
                    <p className="uber-caption text-center">Medium (24px)</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="p-4 bg-uber-gray-50 rounded-lg mb-2">
                      <CarIcon size={28} />
                    </div>
                    <p className="uber-caption text-center">Large (28px)</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="p-4 bg-uber-gray-50 rounded-lg mb-2">
                      <CarIcon size={32} />
                    </div>
                    <p className="uber-caption text-center">Extra Large (32px)</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Icon Colors</h2>
              <div className="space-y-6 border border-uber-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-8">
                  <div className="flex flex-col items-center">
                    <div className="p-4 bg-uber-gray-50 rounded-lg mb-2">
                      <CarIcon size={24} color="#000000" />
                    </div>
                    <p className="uber-caption text-center">Primary (Black)</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="p-4 bg-uber-gray-50 rounded-lg mb-2">
                      <CarIcon size={24} color="#757575" />
                    </div>
                    <p className="uber-caption text-center">Secondary (Gray)</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="p-4 bg-uber-gray-50 rounded-lg mb-2">
                      <CarIcon size={24} color="#2FB157" />
                    </div>
                    <p className="uber-caption text-center">Success (Green)</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="p-4 bg-uber-gray-50 rounded-lg mb-2">
                      <CarIcon size={24} color="#F6B100" />
                    </div>
                    <p className="uber-caption text-center">Warning (Yellow)</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="p-4 bg-uber-gray-50 rounded-lg mb-2">
                      <CarIcon size={24} color="#E60000" />
                    </div>
                    <p className="uber-caption text-center">Error (Red)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Components Section */}
        {activeTab === "components" && (
          <div className="space-y-8">
            <div>
              <h2 className="uber-heading-3 mb-4">Buttons</h2>
              <div className="space-y-4 border border-uber-gray-200 rounded-lg p-4">
                <div>
                  <p className="text-xs text-uber-gray-500 mb-2">Primary Button</p>
                  <button className="uber-button-primary">Primary Button</button>
                  <p className="text-xs text-uber-gray-500 mt-2">
                    bg-uber-black, text-white, font-medium, py-3, rounded-lg, Uber Move Text
                  </p>
                </div>
                <div>
                  <p className="text-xs text-uber-gray-500 mb-2">Secondary Button</p>
                  <button className="uber-button-secondary">Secondary Button</button>
                  <p className="text-xs text-uber-gray-500 mt-2">
                    bg-uber-white, text-uber-black, border-uber-gray-200, font-medium, py-3, rounded-lg, Uber Move Text
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Progress Bars</h2>
              <div className="space-y-6 border border-uber-gray-200 rounded-lg p-4">
                <div>
                  <p className="text-xs text-uber-gray-500 mb-2">Standard Progress</p>
                  <Progress value={75} color="black" size="medium" />
                </div>
                <div>
                  <p className="text-xs text-uber-gray-500 mb-2">Progress with Label</p>
                  <Progress value={75} color="black" size="medium" showLabel={true} />
                </div>
                <div>
                  <p className="text-xs text-uber-gray-500 mb-2">Progress with Custom Label</p>
                  <Progress value={75} color="black" size="medium" label="Completion" />
                </div>
                <div>
                  <p className="text-xs text-uber-gray-500 mb-2">Color Variants</p>
                  <div className="space-y-2">
                    <Progress value={75} color="black" size="small" />
                    <Progress value={75} color="green" size="small" />
                    <Progress value={75} color="yellow" size="small" />
                    <Progress value={75} color="red" size="small" />
                    <Progress value={75} color="blue" size="small" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Accordion</h2>
              <div className="border border-uber-gray-200 rounded-lg overflow-hidden">
                <Accordion
                  title="Accordion Title"
                  subtitle="Optional subtitle"
                  icon={<AnalyticsIcon size={28} color="#000000" />}
                  defaultOpen={true}
                >
                  <p className="uber-paragraph-3 text-uber-gray-500">
                    This is the content of the accordion. It can contain any elements including paragraphs, lists, or
                    other components.
                  </p>
                </Accordion>
                <Accordion
                  title="Another Section"
                  subtitle="With details"
                  icon={<ClockIcon size={28} color="#000000" />}
                >
                  <p className="uber-paragraph-3 text-uber-gray-500">
                    Accordion sections can be opened and closed by clicking on the header.
                  </p>
                </Accordion>
              </div>
              <p className="text-xs text-uber-gray-500 mt-2">
                Accordion uses Uber Move Text for titles, with checkmark indicators and chevron toggles
              </p>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Tiles</h2>
              <div className="space-y-4 border border-uber-gray-200 rounded-lg p-4">
                <p className="text-xs text-uber-gray-500 mb-2">Standard Tile</p>
                <div className="flex flex-wrap gap-4">
                  <Tile imageSrc="/microsoft-logo.png" imageAlt="Microsoft logo" />
                  <Tile imageSrc="/coffee-cup-silhouette.png" imageAlt="Starbucks logo" />
                </div>
                <p className="text-xs text-uber-gray-500 mt-2">
                  Tiles are used to display images or icons in a consistent container. They are sized at 144px (36rem)
                  on mobile and scale up on larger screens. They use a light gray background (bg-uber-gray-50) and
                  rounded corners (rounded-xl).
                </p>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Progress Indicators</h2>
              <div className="space-y-4 border border-uber-gray-200 rounded-lg p-4">
                <p className="text-xs text-uber-gray-500 mb-2">Step Indicator</p>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4].map((step) => (
                    <div
                      key={step}
                      className={`h-2 w-2 rounded-full ${step === 2 ? "bg-uber-black" : "bg-uber-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-xs text-uber-gray-500 mt-2">
                  Step indicators use small circular dots to show progress through a multi-step flow. The active step is
                  shown in black, while inactive steps are shown in light gray.
                </p>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Confetti Animation</h2>
              <div
                className="space-y-4 border border-uber-gray-200 rounded-lg p-4 relative overflow-hidden"
                style={{ height: "200px" }}
              >
                <ConfettiAnimation />
                <div className="relative z-10 flex items-center justify-center h-full">
                  <p className="uber-heading-2 text-center">Congratulations!</p>
                </div>
                <p className="text-xs text-uber-gray-500 mt-2 relative z-10">
                  The confetti animation is used to celebrate achievements or milestones. It creates a festive
                  atmosphere with colorful particles that fall from the top of the screen.
                </p>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">File Upload</h2>
              <div className="space-y-4 border border-uber-gray-200 rounded-lg p-4">
                <p className="text-xs text-uber-gray-500 mb-2">Standard File Upload</p>
                <FileUpload label="Upload Document" hint="Supported formats: JPG, PNG, PDF (max 5MB)" />
                <p className="text-xs text-uber-gray-500 mt-2">
                  File upload component with label, hint, and upload actions. Supports multiple file uploads, progress
                  tracking, and error handling.
                </p>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Menu</h2>
              <div className="space-y-4 border border-uber-gray-200 rounded-lg p-4">
                <p className="text-xs text-uber-gray-500 mb-2">Standard Menu</p>
                <div className="flex justify-center">
                  <Menu
                    trigger={
                      <MenuTrigger className="bg-uber-gray-50 hover:bg-uber-gray-100 px-4 py-2 rounded-lg">
                        Open Menu
                      </MenuTrigger>
                    }
                    items={[
                      { type: "header", label: "Header" },
                      { label: "Option 1", value: "option1" },
                      { label: "Option 2", value: "option2" },
                      { type: "header", label: "Header" },
                      { label: "Option 3", value: "option3" },
                      { label: "Option 4", value: "option4", disabled: true },
                    ]}
                    onSelect={(value) => console.log(`Selected: ${value}`)}
                  />
                </div>
                <p className="text-xs text-uber-gray-500 mt-2">
                  Menu component with headers, options, and support for disabled items. Can be triggered by any element.
                </p>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Radio Group</h2>
              <div className="space-y-4 border border-uber-gray-200 rounded-lg p-4">
                <p className="text-xs text-uber-gray-500 mb-2">Standard Radio Group</p>
                <RadioGroup
                  name="subscription"
                  defaultValue="monthly"
                  options={[
                    {
                      label: "Monthly",
                      value: "monthly",
                      description: (
                        <span>
                          <span className="text-[#B68D40]">1 month free</span> then $9.99/mo
                        </span>
                      ),
                    },
                    {
                      label: "Annual",
                      value: "annual",
                      description: (
                        <span>
                          <span className="text-[#B68D40]">1 month free</span> then $99.99/yr
                        </span>
                      ),
                    },
                  ]}
                  onChange={(value) => console.log(`Selected: ${value}`)}
                />
                <p className="text-xs text-uber-gray-500 mt-2">
                  Radio group component with support for descriptions and disabled options. Uses Uber's styling for
                  selected state.
                </p>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Tags</h2>
              <div className="space-y-4 border border-uber-gray-200 rounded-lg p-4">
                <p className="text-xs text-uber-gray-500 mb-2">Tag Variants</p>
                <div className="flex flex-wrap gap-2">
                  <Tag color="default">Default</Tag>
                  <Tag color="green">Success</Tag>
                  <Tag color="yellow">Warning</Tag>
                  <Tag color="red">Error</Tag>
                  <Tag color="blue">Info</Tag>
                </div>
                <p className="text-xs text-uber-gray-500 mt-2">
                  Tags are used to label, categorize, or organize items using keywords that describe them.
                </p>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Metric Cards</h2>
              <div className="space-y-4 border border-uber-gray-200 rounded-lg p-4">
                <p className="text-xs text-uber-gray-500 mb-2">Metric Card Examples</p>
                <div className="grid grid-cols-2 gap-4">
                  <MetricCard
                    title="Hours Driven"
                    value="32 hrs"
                    icon={<ClockIcon size={16} />}
                    trend={{ value: "8%", positive: true }}
                  />
                  <MetricCard
                    title="Miles Driven"
                    value="428 mi"
                    icon={<CarIcon size={16} />}
                    trend={{ value: "12%", positive: true }}
                  />
                </div>
                <p className="text-xs text-uber-gray-500 mt-2">
                  Metric cards display key performance indicators with optional trend indicators.
                </p>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Match Cards</h2>
              <div className="space-y-4 border border-uber-gray-200 rounded-lg p-4">
                <p className="text-xs text-uber-gray-500 mb-2">Company Match Cards</p>
                <MatchCards matches={matchData} />
                <p className="text-xs text-uber-gray-500 mt-2">
                  Match cards display company logos with circular progress indicators showing match percentage. Colors
                  indicate match quality: dark green (90%+), light green (80-89%), green-yellow (below 80%).
                </p>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Brand Match Chart</h2>
              <div className="space-y-4 border border-uber-gray-200 rounded-lg p-4">
                <p className="text-xs text-uber-gray-500 mb-2">Simple Brand Chart</p>
                <div className="h-[300px] w-full bg-white p-4 rounded-lg border border-uber-gray-200">
                  <div className="mb-2">
                    <div className="flex flex-wrap gap-4 justify-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#4285F4] mr-2"></div>
                        <span className="text-xs text-uber-gray-700">Pay</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#34A853] mr-2"></div>
                        <span className="text-xs text-uber-gray-700">Hours</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#FBBC05] mr-2"></div>
                        <span className="text-xs text-uber-gray-700">Location</span>
                      </div>
                    </div>
                  </div>
                  <SimpleBrandChart data={chartData} />
                </div>
                <p className="text-xs text-uber-gray-500 mt-2">
                  The brand match chart displays stacked bar charts comparing different factors (Pay, Hours, Location)
                  that contribute to the overall match score for each company.
                </p>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Stepper</h2>
              <div className="space-y-4 border border-uber-gray-200 rounded-lg p-4">
                <p className="text-xs text-uber-gray-500 mb-2">Vertical Stepper</p>
                <Stepper
                  steps={[
                    {
                      label: "Bronze Tier: $25/week",
                      description: "Drive 30+ hours per week",
                      completed: true,
                      current: false,
                    },
                    {
                      label: "Silver Tier: $50/week",
                      description: "Drive 35+ hours per week",
                      completed: false,
                      current: true,
                    },
                    {
                      label: "Gold Tier: $100/week",
                      description: "Drive 40+ hours per week",
                      completed: false,
                      current: false,
                    },
                  ]}
                />
                <p className="text-xs text-uber-gray-500 mt-2">
                  Steppers display progress through a sequence of logical and numbered steps. They may also be used for
                  navigation.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Layout Section */}
        {activeTab === "layout" && (
          <div className="space-y-8">
            <div>
              <h2 className="uber-heading-3 mb-4">Spacing Scale</h2>
              <div className="space-y-6 border border-uber-gray-200 rounded-lg p-4">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-16 h-4 bg-uber-gray-300 mr-4"></div>
                    <p className="uber-paragraph-3">xs: 4px (p-1)</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-8 bg-uber-gray-300 mr-4"></div>
                    <p className="uber-paragraph-3">sm: 8px (p-2)</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-uber-gray-300 mr-4"></div>
                    <p className="uber-paragraph-3">md: 16px (p-4)</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-24 bg-uber-gray-300 mr-4"></div>
                    <p className="uber-paragraph-3">lg: 24px (p-6)</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-32 bg-uber-gray-300 mr-4"></div>
                    <p className="uber-paragraph-3">xl: 32px (p-8)</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Grid System</h2>
              <div className="space-y-6 border border-uber-gray-200 rounded-lg p-4">
                <div className="grid grid-cols-12 gap-2">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="h-12 bg-uber-gray-200 flex items-center justify-center">
                      <span className="uber-caption">{i + 1}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-12 bg-uber-gray-200 flex items-center justify-center">
                      <span className="uber-caption">{i + 1}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="h-12 bg-uber-gray-200 flex items-center justify-center">
                      <span className="uber-caption">{i + 1}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <div key={i} className="h-12 bg-uber-gray-200 flex items-center justify-center">
                      <span className="uber-caption">{i + 1}</span>
                    </div>
                  ))}
                </div>
                <p className="uber-paragraph-3 text-uber-gray-500">
                  Uber Base uses a 12-column grid system that can be configured to different column counts based on the
                  design needs.
                </p>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Container Layouts</h2>
              <div className="space-y-6 border border-uber-gray-200 rounded-lg p-4">
                <div className="space-y-4">
                  <div className="p-4 border border-uber-gray-300 rounded-lg">
                    <p className="uber-paragraph-3 font-medium mb-2">Standard Page Layout</p>
                    <div className="h-12 bg-uber-gray-200 mb-2 flex items-center justify-center">
                      <span className="uber-caption">Header</span>
                    </div>
                    <div className="h-32 bg-uber-gray-100 mb-2 flex items-center justify-center">
                      <span className="uber-caption">Content</span>
                    </div>
                    <div className="h-12 bg-uber-gray-200 flex items-center justify-center">
                      <span className="uber-caption">Footer</span>
                    </div>
                  </div>
                  <div className="p-4 border border-uber-gray-300 rounded-lg">
                    <p className="uber-paragraph-3 font-medium mb-2">Modal Layout</p>
                    <div className="h-12 bg-uber-gray-200 mb-2 flex items-center justify-center">
                      <span className="uber-caption">Modal Header</span>
                    </div>
                    <div className="h-32 bg-uber-gray-100 mb-2 flex items-center justify-center">
                      <span className="uber-caption">Modal Content</span>
                    </div>
                    <div className="h-12 bg-uber-gray-200 flex items-center justify-center">
                      <span className="uber-caption">Modal Footer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Responsive Breakpoints</h2>
              <div className="space-y-4 border border-uber-gray-200 rounded-lg p-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-uber-gray-200">
                        <th className="py-2 px-4 uber-paragraph-3 font-medium">Breakpoint</th>
                        <th className="py-2 px-4 uber-paragraph-3 font-medium">Width</th>
                        <th className="py-2 px-4 uber-paragraph-3 font-medium">Tailwind Class</th>
                        <th className="py-2 px-4 uber-paragraph-3 font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-uber-gray-200">
                        <td className="py-2 px-4 uber-paragraph-3">Default</td>
                        <td className="py-2 px-4 uber-paragraph-3">0px+</td>
                        <td className="py-2 px-4 uber-paragraph-3">-</td>
                        <td className="py-2 px-4 uber-paragraph-3">Mobile-first base styles</td>
                      </tr>
                      <tr className="border-b border-uber-gray-200">
                        <td className="py-2 px-4 uber-paragraph-3">sm</td>
                        <td className="py-2 px-4 uber-paragraph-3">640px+</td>
                        <td className="py-2 px-4 uber-paragraph-3">sm:</td>
                        <td className="py-2 px-4 uber-paragraph-3">Small devices (mobile landscape)</td>
                      </tr>
                      <tr className="border-b border-uber-gray-200">
                        <td className="py-2 px-4 uber-paragraph-3">md</td>
                        <td className="py-2 px-4 uber-paragraph-3">768px+</td>
                        <td className="py-2 px-4 uber-paragraph-3">md:</td>
                        <td className="py-2 px-4 uber-paragraph-3">Medium devices (tablets)</td>
                      </tr>
                      <tr className="border-b border-uber-gray-200">
                        <td className="py-2 px-4 uber-paragraph-3">lg</td>
                        <td className="py-2 px-4 uber-paragraph-3">1024px+</td>
                        <td className="py-2 px-4 uber-paragraph-3">lg:</td>
                        <td className="py-2 px-4 uber-paragraph-3">Large devices (desktops)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 uber-paragraph-3">xl</td>
                        <td className="py-2 px-4 uber-paragraph-3">1280px+</td>
                        <td className="py-2 px-4 uber-paragraph-3">xl:</td>
                        <td className="py-2 px-4 uber-paragraph-3">Extra large devices (large desktops)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Patterns Section */}
        {activeTab === "patterns" && (
          <div className="space-y-8">
            <div>
              <h2 className="uber-heading-3 mb-4">Navigation Patterns</h2>
              <div className="space-y-6 border border-uber-gray-200 rounded-lg p-4">
                <div className="space-y-4">
                  <div className="p-4 border border-uber-gray-300 rounded-lg">
                    <p className="uber-paragraph-3 font-medium mb-2">Header with Back Button</p>
                    <div className="h-14 bg-white border border-uber-gray-200 flex items-center px-4">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <ChevronLeft className="h-5 w-5" />
                      </div>
                      <h1 className="text-lg font-medium ml-2 font-['Uber_Move']">Screen Title</h1>
                    </div>
                    <p className="uber-caption text-uber-gray-500 mt-2">
                      Standard header with back button for navigation
                    </p>
                  </div>
                  <div className="p-4 border border-uber-gray-300 rounded-lg">
                    <p className="uber-paragraph-3 font-medium mb-2">Tab Navigation</p>
                    <div className="flex border-b border-uber-gray-200">
                      <div className="px-4 py-3 border-b-2 border-uber-black">Tab 1</div>
                      <div className="px-4 py-3 border-b-2 border-transparent">Tab 2</div>
                      <div className="px-4 py-3 border-b-2 border-transparent">Tab 3</div>
                    </div>
                    <p className="uber-caption text-uber-gray-500 mt-2">
                      Tabs for switching between different views or sections
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">Form Patterns</h2>
              <div className="space-y-6 border border-uber-gray-200 rounded-lg p-4">
                <div className="space-y-4">
                  <div className="p-4 border border-uber-gray-300 rounded-lg">
                    <p className="uber-paragraph-3 font-medium mb-2">Input with Label</p>
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-uber-gray-700">Email</label>
                      <input
                        type="email"
                        className="w-full bg-uber-gray-50 border-0 rounded-lg py-3 px-3 text-base"
                        placeholder="Enter your email"
                      />
                    </div>
                    <p className="uber-caption text-uber-gray-500 mt-2">Standard input field with label</p>
                  </div>
                  <div className="p-4 border border-uber-gray-300 rounded-lg">
                    <p className="uber-paragraph-3 font-medium mb-2">Input with Label and Hint</p>
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-uber-gray-700">Email</label>
                      <input
                        type="email"
                        className="w-full bg-uber-gray-50 border-0 rounded-lg py-3 px-3 text-base"
                        placeholder="Enter your email"
                      />
                      <p className="text-sm text-uber-gray-500">We'll never share your email with anyone else.</p>
                    </div>
                    <p className="uber-caption text-uber-gray-500 mt-2">Input field with label and hint text</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="uber-heading-3 mb-4">List Patterns</h2>
              <div className="space-y-6 border border-uber-gray-200 rounded-lg p-4">
                <div className="space-y-4">
                  <div className="p-4 border border-uber-gray-300 rounded-lg">
                    <p className="uber-paragraph-3 font-medium mb-2">Standard List</p>
                    <div className="border border-uber-gray-200 rounded-lg overflow-hidden">
                      <div className="flex items-center justify-between py-4 px-4 border-b border-uber-gray-200">
                        <div>
                          <p className="uber-heading-5">List Item 1</p>
                          <p className="uber-paragraph-3 text-uber-gray-500 mt-1">Description for item 1</p>
                        </div>
                        <ChevronLeft className="h-5 w-5 transform rotate-180" />
                      </div>
                      <div className="flex items-center justify-between py-4 px-4 border-b border-uber-gray-200">
                        <div>
                          <p className="uber-heading-5">List Item 2</p>
                          <p className="uber-paragraph-3 text-uber-gray-500 mt-1">Description for item 2</p>
                        </div>
                        <ChevronLeft className="h-5 w-5 transform rotate-180" />
                      </div>
                      <div className="flex items-center justify-between py-4 px-4">
                        <div>
                          <p className="uber-heading-5">List Item 3</p>
                          <p className="uber-paragraph-3 text-uber-gray-500 mt-1">Description for item 3</p>
                        </div>
                        <ChevronLeft className="h-5 w-5 transform rotate-180" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
