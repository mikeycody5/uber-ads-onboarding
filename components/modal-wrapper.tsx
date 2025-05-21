"use client"

import React, { useEffect, useState } from "react"
import type { ReactNode } from "react"
import { X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface ModalWrapperProps {
  children: ReactNode
  title: string
  dismissHref: string
  actionLabel: string
  actionHref: string
  stepIndicator?: ReactNode
  breadcrumbs?: Array<{ label: string; href: string }>
  onActionClick?: () => void
  actionDisabled?: boolean
}

export function ModalWrapper({
  children,
  title,
  dismissHref,
  actionLabel,
  actionHref,
  stepIndicator,
  breadcrumbs,
  onActionClick,
  actionDisabled,
}: ModalWrapperProps) {
  const [isIOS, setIsIOS] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase()
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent)
    setIsIOS(isIOSDevice)

    if (isIOSDevice) {
      document.body.classList.add("ios-device")
    }

    setTimeout(() => {
      setIsVisible(true)
    }, 50)

    return () => {
      document.body.classList.remove("ios-device")
    }
  }, [])

  return (
    <div className="fixed inset-0 flex flex-col h-full w-full fixed-container" style={{ maxWidth: "365px" }}>
      {/* Global styles */}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          overflow: hidden;
          height: 100%;
          width: 100%;
        }
        
        html {
          height: 100%;
          width: 100%;
        }
        
        /* iOS safe area handling */
        .safe-area-bottom {
          padding-bottom: env(safe-area-inset-bottom, 20px);
        }
        
        .safe-area-top {
          padding-top: env(safe-area-inset-top, 20px);
        }
        
        /* iOS-specific button container */
        .ios-button-container {
          position: relative;
          z-index: 50;
          background-color: rgba(255, 255, 255, 0.98);
          padding: 16px 16px calc(16px + env(safe-area-inset-bottom, 20px));
          margin-bottom: -1px;
          border-top: 1px solid #E2E2E2;
        }
        
        /* Add extra padding to content area on iOS */
        .ios-device .content-area {
          padding-bottom: 100px;
        }
        
        /* Fixed button container for iOS */
        .fixed-button-container {
          position: sticky;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 40;
          background-color: white;
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
        }

        .scrollable-content {
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      `}</style>

      {/* Full-screen map background */}
      <div className="absolute inset-0 z-0 w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HTq7WQHKFmyMFLuxb6ylXuyB94YLkt.png"
          alt="Uber map interface"
          fill
          className="object-cover"
          priority
          unoptimized={true}
        />
      </div>

      {/* Status bar spacer - for iOS devices */}
      <div className="w-full safe-area-top bg-transparent z-10" />

      {/* Modal sheet */}
      <AnimatePresence>
        <motion.div
          className="relative mt-auto z-20 bg-white rounded-t-xl flex flex-col"
          style={{ height: "calc(100% - 60px)" }}
          initial={{ y: 20, opacity: 0.9 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="flex items-center justify-center h-14 border-b border-uber-gray-200 relative">
            <Link href={dismissHref} className="absolute left-4">
              <X className="h-6 w-6" />
            </Link>
            <h1 className="text-lg font-medium font-['Uber_Move_Text']">{title}</h1>
          </div>

          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="px-4 py-2 border-b border-uber-gray-100">
              <nav className="flex flex-wrap items-center">
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && (
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SiznqOPVVSmmARELAIV7Me47rLPLul.png"
                        alt="chevron"
                        className="mx-2 w-3 h-3 flex-shrink-0"
                      />
                    )}
                    <Link
                      href={crumb.href}
                      className={`text-sm text-uber-black font-medium font-['Uber_Move_Text'] ${
                        index === breadcrumbs.length - 1 ? "" : "relative"
                      }`}
                      style={
                        index === breadcrumbs.length - 1
                          ? {}
                          : {
                              display: "inline-block",
                              lineHeight: "1",
                            }
                      }
                    >
                      {crumb.label}
                      {index !== breadcrumbs.length - 1 && (
                        <span
                          className="absolute left-0 right-0 border-b-2 border-uber-black"
                          style={{ bottom: "-2px" }}
                        ></span>
                      )}
                    </Link>
                  </React.Fragment>
                ))}
              </nav>
            </div>
          )}

          {/* Content */}
          <motion.div
            className="flex-1 overflow-auto content-area scrollable-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 0.1, duration: 0.2 }}
          >
            {children}
          </motion.div>

          {/* Action button */}
          {actionLabel && (
            <div className={isIOS ? "fixed-button-container" : "border-t border-uber-gray-200"}>
              <div className={isIOS ? "ios-button-container" : "px-4 pb-8 md:pb-4 pt-4 safe-area-bottom"}>
                {stepIndicator}
                {onActionClick ? (
                  <button
                    onClick={onActionClick}
                    disabled={actionDisabled}
                    className={`w-full bg-uber-black text-white font-medium py-4 flex items-center justify-center rounded-lg mx-auto ${
                      actionDisabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    style={{ maxWidth: "calc(100% - 16px)", borderRadius: "8px" }}
                  >
                    <span className="text-base font-medium font-['Uber_Move_Text']">{actionLabel}</span>
                  </button>
                ) : (
                  <Link
                    href={actionHref}
                    className={`w-full bg-uber-black text-white font-medium py-4 flex items-center justify-center rounded-lg mx-auto ${
                      actionDisabled ? "opacity-50 pointer-events-none" : ""
                    }`}
                    style={{ maxWidth: "calc(100% - 16px)", borderRadius: "8px" }}
                  >
                    <span className="text-base font-medium font-['Uber_Move_Text']">{actionLabel}</span>
                  </Link>
                )}

                {/* Bottom handle - only show if not on iOS */}
                {!isIOS && (
                  <div className="flex justify-center pt-2">
                    <div className="w-10 h-1 bg-uber-gray-300 rounded-full"></div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Bottom handle for iOS */}
          {isIOS && (
            <div className="flex justify-center pb-2 pt-2 safe-area-bottom">
              <div className="w-10 h-1 bg-uber-gray-300 rounded-full"></div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
