"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string
}

export function ImageWithFallback({ src, alt, fallbackSrc = "/placeholder.svg", ...rest }: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
  }

  // Generate a placeholder if using the fallback
  const getFallbackWithParams = () => {
    if (hasError && fallbackSrc === "/placeholder.svg") {
      return `/placeholder.svg?height=${rest.height || 300}&width=${rest.width || 300}&query=${encodeURIComponent(alt)}`
    }
    return imgSrc
  }

  return (
    <Image
      {...rest}
      src={getFallbackWithParams() || "/placeholder.svg"}
      alt={alt}
      onError={handleError}
      className={`${rest.className || ""} ${hasError ? "fallback" : ""}`}
    />
  )
}
