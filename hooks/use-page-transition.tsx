"use client"

import { useRouter } from "next/navigation"
import { useState, useCallback, useTransition } from "react"

export function usePageTransition() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isNavigating, setIsNavigating] = useState(false)

  const navigate = useCallback(
    (href: string) => {
      setIsNavigating(true)

      // Small delay to allow exit animations to play
      setTimeout(() => {
        startTransition(() => {
          router.push(href)
        })
      }, 200)
    },
    [router],
  )

  return {
    navigate,
    isNavigating: isNavigating || isPending,
  }
}
