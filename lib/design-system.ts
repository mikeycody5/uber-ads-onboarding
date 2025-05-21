/**
 * Uber Base Design System Reference
 *
 * This file serves as a reference for the Uber Base Design System guidelines.
 * It includes documentation on typography, colors, spacing, and component patterns.
 */

/**
 * Typography
 *
 * Uber uses two main font families:
 * 1. Uber Move - For headings and display text
 * 2. Uber Move Text - For body text and UI elements
 *
 * Typography Classes:
 * - Display: uber-display-1, uber-display-2, uber-display-3
 * - Headings: uber-heading-1, uber-heading-2, uber-heading-3, uber-heading-4, uber-heading-5, uber-heading-6
 * - Paragraphs: uber-paragraph-1, uber-paragraph-2, uber-paragraph-3
 * - Utility: uber-caption, uber-legal
 */
export const typography = {
  display: {
    display1: "uber-display-1", // 76px/84px, Uber Move Bold, -1.5px letter spacing
    display2: "uber-display-2", // 56px/64px, Uber Move Bold, -1px letter spacing
    display3: "uber-display-3", // 36px/44px, Uber Move Bold, -0.5px letter spacing
  },
  heading: {
    h1: "uber-heading-1", // 28px/36px, Uber Move Bold, -0.25px letter spacing
    h2: "uber-heading-2", // 24px/32px, Uber Move Bold
    h3: "uber-heading-3", // 20px/28px, Uber Move Bold
    h4: "uber-heading-4", // 18px/24px, Uber Move Bold
    h5: "uber-heading-5", // 16px/24px, Uber Move Bold
    h6: "uber-heading-6", // 14px/20px, Uber Move Bold
  },
  paragraph: {
    p1: "uber-paragraph-1", // 18px/28px, Uber Move Text Regular
    p2: "uber-paragraph-2", // 16px/24px, Uber Move Text Regular
    p3: "uber-paragraph-3", // 14px/20px, Uber Move Text Regular
  },
  utility: {
    caption: "uber-caption", // 12px/16px, Uber Move Text Regular
    legal: "uber-legal", // 10px/16px, Uber Move Text Regular
  },
}

/**
 * Colors
 *
 * Uber's color palette consists of:
 * - Primary: Black and White
 * - Grayscale: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
 * - Semantic: Green, Yellow, Red
 */
export const colors = {
  primary: {
    black: "bg-uber-black", // #000000
    white: "bg-uber-white", // #FFFFFF
  },
  gray: {
    50: "bg-uber-gray-50", // #F6F6F6
    100: "bg-uber-gray-100", // #EEEEEE
    200: "bg-uber-gray-200", // #E2E2E2
    300: "bg-uber-gray-300", // #CBCBCB
    400: "bg-uber-gray-400", // #AFAFAF
    500: "bg-uber-gray-500", // #757575
    600: "bg-uber-gray-600", // #545454
    700: "bg-uber-gray-700", // #333333
    800: "bg-uber-gray-800", // #1F1F1F
    900: "bg-uber-gray-900", // #141414
  },
  semantic: {
    green: "bg-uber-green", // #2FB157
    yellow: "bg-uber-yellow", // #F6B100
    red: "bg-uber-red", // #E60000
  },
}

/**
 * Spacing
 *
 * Uber uses a consistent spacing scale:
 * - xs: 4px (p-1)
 * - sm: 8px (p-2)
 * - md: 16px (p-4)
 * - lg: 24px (p-6)
 * - xl: 32px (p-8)
 */
export const spacing = {
  xs: "p-1", // 4px
  sm: "p-2", // 8px
  md: "p-4", // 16px
  lg: "p-6", // 24px
  xl: "p-8", // 32px
}

/**
 * Component Patterns
 *
 * Common Uber Base component patterns and their class names
 */
export const components = {
  buttons: {
    primary: "uber-button-primary",
    secondary: "uber-button-secondary",
    mobile: "uber-button-mobile",
  },
  inputs: {
    standard: "uber-input",
  },
  navigation: {
    link: "uber-link",
    tab: "uber-tab",
    tabActive: "uber-tab-active",
  },
  containers: {
    tile: "uber-tile",
    tileInteractive: "uber-tile-interactive",
    card: "uber-card",
  },
  lists: {
    item: "uber-list-item",
    itemContent: "uber-list-item-content",
    itemTitle: "uber-list-item-title",
    itemSubtitle: "uber-list-item-subtitle",
  },
  avatars: {
    base: "uber-avatar",
    small: "uber-avatar-sm",
    medium: "uber-avatar-md",
    large: "uber-avatar-lg",
  },
  layout: {
    header: "uber-header",
    footer: "uber-footer",
    section: "uber-section",
    divider: "uber-divider",
  },
  feedback: {
    badge: "uber-badge",
    badgeGray: "uber-badge-gray",
    badgeGreen: "uber-badge-green",
    scoreGood: "uber-score-good",
    scoreWarning: "uber-score-warning",
    scoreBad: "uber-score-bad",
  },
  progress: {
    container: "uber-progress-container",
    bar: "uber-progress-bar",
  },
}

/**
 * Layout Patterns
 *
 * Common layout patterns used in Uber Base Design System
 */
export const layoutPatterns = {
  // Standard page layout with header, content, and footer
  standardPage: `
    <main className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <div className="px-4 h-14 flex items-center border-b border-uber-gray-200">
        <Link href="/" className="inline-flex items-center justify-center w-10 h-10">
          <ChevronLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-lg font-medium ml-2 font-['Uber_Move']">Screen Title</h1>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <div className="w-full mx-auto">
          {/* Page content goes here */}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-uber-gray-200 mt-auto">
        <Link
          href="/next-page"
          className="w-full bg-uber-black text-white font-medium py-3 flex items-center justify-center rounded-lg"
        >
          <span className="text-base font-medium font-['Uber_Move_Text']">Continue</span>
        </Link>
      </div>
    </main>
  `,

  // Accordion section pattern
  accordionSection: `
    <Accordion
      title="Section Title"
      subtitle="Optional subtitle"
      icon={<IconComponent size={28} color="#000000" />}
    >
      <div className="mt-2">
        <p className="uber-paragraph-3 text-uber-gray-500">
          Content goes here
        </p>
      </div>
    </Accordion>
  `,
}

/**
 * Icon Guidelines
 *
 * Guidelines for using icons in the Uber Base Design System
 */
export const iconGuidelines = {
  sizes: {
    small: 16,
    medium: 24, // Default
    large: 28,
    extraLarge: 32,
  },
  colors: {
    primary: "#000000", // Black
    secondary: "#757575", // Gray
    success: "#2FB157", // Green
    warning: "#F6B100", // Yellow
    error: "#E60000", // Red
  },
}
