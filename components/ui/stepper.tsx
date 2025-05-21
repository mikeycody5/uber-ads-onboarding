interface StepperProps {
  steps: {
    label: string
    description?: string
    completed: boolean
    current?: boolean
  }[]
  className?: string
}

export function Stepper({ steps, className = "" }: StepperProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {steps.map((step, index) => (
        <div key={index} className="relative">
          {/* Connector line */}
          {index < steps.length - 1 && (
            <div
              className={`absolute left-3.5 top-6 w-0.5 h-full -z-10 ${
                step.completed ? "bg-uber-black" : "bg-uber-gray-300"
              }`}
            />
          )}

          <div className="flex items-start">
            {/* Step indicator */}
            <div
              className={`
                flex-shrink-0 h-7 w-7 rounded-full flex items-center justify-center
                ${step.completed ? "bg-uber-black" : step.current ? "border-2 border-uber-black" : "bg-uber-gray-300"}
              `}
            >
              {step.completed ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="white" />
                </svg>
              ) : (
                <span className={`text-xs ${step.current ? "text-uber-black" : "text-white"}`}>{index + 1}</span>
              )}
            </div>

            {/* Step content */}
            <div className="ml-3 pb-6">
              <p className={`uber-paragraph-2 font-medium ${step.current ? "text-uber-black" : ""}`}>{step.label}</p>
              {step.description && <p className="uber-paragraph-3 text-uber-gray-500 mt-1">{step.description}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
