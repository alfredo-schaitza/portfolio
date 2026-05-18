export const colors = {
  palette: {
    // Neutrals — warm grey
    neutral: {
      50: "#FAFAF8",
      100: "#F5F5F0",
      200: "#EBEBЕ4",
      300: "#D8D8CE",
      400: "#B4B4A8",
      500: "#8C8C80",
      600: "#6B6B60",
      700: "#4F4F46",
      800: "#333330",
      900: "#1A1A18",
      950: "#0D0D0C",
    },

    // Primary — Bright Yellow (brand color from design)
    yellow: {
      50: "#FEFDE8",
      100: "#FDF9C2",
      200: "#FBF07A",
      300: "#F8E03C",
      400: "#F4D010",
      500: "#ECC000",
      600: "#C99D00",
      700: "#9E7900",
      800: "#745700",
      900: "#4A3800",
      950: "#2A1F00",
    },

    // Sage / Olive — "Connecting Hearts" card
    sage: {
      50: "#F4F6F1",
      100: "#E7EBE0",
      200: "#CDD5C0",
      300: "#AEBB9A",
      400: "#8FA07A",
      500: "#758663",
      600: "#5D6B4D",
      700: "#46523A",
      800: "#303929",
      900: "#1C2118",
    },

    // Cyan — top bar accent
    cyan: {
      50: "#ECFCFF",
      100: "#CFF7FC",
      200: "#A4EDF8",
      300: "#5DDCF0",
      400: "#20C6E4",
      500: "#06AACC",
      600: "#0A87A8",
      700: "#106B87",
      800: "#16556D",
      900: "#17455B",
    },

    // Purple — "Short Chat Wisdom" card
    purple: {
      50: "#F6F2FD",
      100: "#EDE5FA",
      200: "#D8CBF6",
      300: "#BBA4EE",
      400: "#9970E3",
      500: "#7B4DD3",
      600: "#6435B8",
      700: "#4E2896",
      800: "#3D2174",
      900: "#2E1A5A",
    },

    // Lavender — "Quick Idea Talks" card
    lavender: {
      50: "#F5F3FD",
      100: "#ECE8FB",
      200: "#DAD3F7",
      300: "#C0B4F0",
      400: "#A490E6",
      500: "#886DD8",
      600: "#6E50BF",
      700: "#573E9E",
      800: "#43307D",
      900: "#31255E",
    },

    // Green-yellow — "Short Wisdom" card
    "lime": {
      50: "#F7FDE8",
      100: "#EDFAC2",
      200: "#D8F48A",
      300: "#BCE948",
      400: "#A0D820",
      500: "#80BE10",
      600: "#64980B",
      700: "#4C730D",
      800: "#3C5A12",
      900: "#2D4514",
    },

    // Pink — "Swift Chat Zone" card
    pink: {
      50: "#FDF2F8",
      100: "#FAE6F2",
      200: "#F5CEE7",
      300: "#EEA8D4",
      400: "#E478BC",
      500: "#D452A0",
      600: "#B23882",
      700: "#8E2C68",
      800: "#6F234F",
      900: "#551E40",
    },

    // Destructive — red
    red: {
      50: "#FEF2F2",
      100: "#FEE2E2",
      200: "#FECACA",
      300: "#FCA5A5",
      400: "#F87171",
      500: "#EF4444",
      600: "#DC2626",
      700: "#B91C1C",
      800: "#991B1B",
      900: "#7F1D1D",
    },

    // Success — green
    green: {
      50: "#F0FDF4",
      100: "#DCFCE7",
      200: "#BBF7D0",
      300: "#86EFAC",
      400: "#4ADE80",
      500: "#22C55E",
      600: "#16A34A",
      700: "#15803D",
      800: "#166534",
      900: "#14532D",
    },

    // Warning — amber
    amber: {
      50: "#FFFBEB",
      100: "#FEF3C7",
      200: "#FDE68A",
      300: "#FCD34D",
      400: "#FBBF24",
      500: "#F59E0B",
      600: "#D97706",
      700: "#B45309",
      800: "#92400E",
      900: "#78350F",
    },
  },

  // Interaction tokens — complete CSS color values (NOT HSL triplets)
  // Use directly via var(), not wrapped in hsl()
  interaction: {
    light: {
      "hover":       "rgb(0 0 0 / 0.16)",
      "pressed":     "rgb(0 0 0 / 0.24)",
      "disabled":    "rgb(255 255 255 / 0.60)",
      "focus-inner": "hsl(0 0% 100%)",
    },
    dark: {
      "hover":       "rgb(255 255 255 / 0.08)",
      "pressed":     "rgb(255 255 255 / 0.12)",
      "disabled":    "rgb(255 255 255 / 0.30)",
      "focus-inner": "hsl(0 0% 9%)",
    },
  },
} as const;
