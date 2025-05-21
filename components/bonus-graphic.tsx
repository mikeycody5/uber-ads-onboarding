export function BonusGraphic() {
  return (
    <div className="bg-gradient-to-r from-[#276EF1] to-[#9747FF] rounded-lg p-4 mb-6 text-white shadow-lg overflow-hidden relative">
      <div className="flex items-center justify-between relative z-10">
        <div>
          <h3 className="text-xl font-bold mb-1">Bonuses to date</h3>
          <p className="text-white/80 text-sm">Keep driving to unlock more!</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold">+$100</div>
          <div className="text-white/80 text-sm">over 3 weeks</div>
        </div>
      </div>

      {/* Visual elements */}
      <div className="absolute top-0 right-0 h-full w-1/2 overflow-hidden opacity-20">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -right-20 -top-20"
        >
          <circle cx="100" cy="100" r="100" fill="white" />
        </svg>
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-10 bottom-0"
        >
          <circle cx="60" cy="60" r="60" fill="white" />
        </svg>
      </div>
    </div>
  )
}
