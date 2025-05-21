import Image from "next/image"

interface MatchCardsProps {
  matches: Array<{
    name: string
    logo: string
    matchScore: number
  }>
}

export function MatchCards({ matches }: MatchCardsProps) {
  // Function to determine the color based on match score
  const getMatchColor = (score: number) => {
    if (score >= 90) return "#2FB157" // Green for 90+
    if (score >= 80) return "#4CD174" // Lighter green for 80-89
    return "#A4D911" // Green-yellow for below 80
  }

  return (
    <div className="w-full">
      <h3 className="uber-heading-4 mb-3">Companies that you matched with</h3>

      {/* Use overflow-x-auto to allow horizontal scrolling if needed */}
      <div className="overflow-x-auto pb-2">
        {/* Force nowrap to keep all cards in a single row */}
        <div className="flex flex-nowrap gap-3 justify-center min-w-min">
          {matches.map((match) => (
            <div
              key={match.name}
              className="bg-white border border-uber-gray-200 rounded-lg p-3 flex flex-col items-center w-[90px] flex-shrink-0"
            >
              {/* Logo */}
              <div className="w-12 h-12 bg-uber-gray-50 rounded-full overflow-hidden flex items-center justify-center mb-2">
                <Image
                  src={match.logo || "/placeholder.svg"}
                  alt={match.name}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>

              {/* Match Score Circle */}
              <div className="relative w-14 h-14 mb-1">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  {/* Background circle */}
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#E2E2E2" strokeWidth="4" />

                  {/* Progress circle - calculate stroke-dasharray and stroke-dashoffset */}
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke={getMatchColor(match.matchScore)}
                    strokeWidth="4"
                    strokeDasharray="100.53"
                    strokeDashoffset={100.53 - (match.matchScore / 100) * 100.53}
                    transform="rotate(-90 18 18)"
                  />

                  {/* Percentage text */}
                  <text
                    x="18"
                    y="18"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="bold"
                    fill="#000000"
                  >
                    {match.matchScore}%
                  </text>
                </svg>
              </div>

              {/* Company Name */}
              <span className="text-xs font-medium text-center">{match.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
