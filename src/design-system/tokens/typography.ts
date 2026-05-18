export const typography = {
  fontFamily: {
    sans: ["var(--font-ibm-plex-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
    mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
  },

  /* ── Semantic type scale ──────────────────────────────────────────────────
   * Format: [fontSize, { lineHeight, fontWeight }]
   * Responsive (desktop + mobile): display, h1, h2
   * Fixed (device-agnostic):       h3, h4, body-lg, body-md, body-sm, caption
   * strong = base weight + 1 level  (400→500 · 500→700 · 600→700)
   * h4 is uppercase — always pair with `uppercase` class
   * ──────────────────────────────────────────────────────────────────────── */
  fontSize: {

    // ── Display — responsive ───────────────────────────────────────────────

    "display-desktop":              ["7.5rem",   { lineHeight: "8rem",    fontWeight: "400" }],
    "display-desktop-strong":       ["7.5rem",   { lineHeight: "8rem",    fontWeight: "700" }],
    "display-mobile":               ["4rem",     { lineHeight: "4.5rem",  fontWeight: "400" }],
    "display-mobile-strong":        ["4rem",     { lineHeight: "4.5rem",  fontWeight: "700" }],

    // ── Headings — responsive ──────────────────────────────────────────────

    "h1-desktop":                   ["4rem",     { lineHeight: "5rem",    fontWeight: "500" }],
    "h1-desktop-strong":            ["4rem",     { lineHeight: "5rem",    fontWeight: "700" }],
    "h1-mobile":                    ["2.5rem",   { lineHeight: "3.5rem",  fontWeight: "500" }],
    "h1-mobile-strong":             ["2.5rem",   { lineHeight: "3.5rem",  fontWeight: "700" }],

    "h2-desktop":                   ["2.5rem",   { lineHeight: "3rem",    fontWeight: "500" }],
    "h2-desktop-strong":            ["2.5rem",   { lineHeight: "3rem",    fontWeight: "700" }],
    "h2-mobile":                    ["2rem",     { lineHeight: "2.5rem",  fontWeight: "500" }],
    "h2-mobile-strong":             ["2rem",     { lineHeight: "2.5rem",  fontWeight: "700" }],

    // ── Headings — fixed (no responsive variant) ───────────────────────────

    "h3":                           ["1.5rem",   { lineHeight: "2rem",    fontWeight: "500" }],
    "h3-strong":                    ["1.5rem",   { lineHeight: "2rem",    fontWeight: "700" }],

    // h4: UPPERCASE — pair with `uppercase` Tailwind class
    "h4":                           ["0.875rem", { lineHeight: "1.5rem",  fontWeight: "500", letterSpacing: "0.08em" }],
    "h4-strong":                    ["0.875rem", { lineHeight: "1.5rem",  fontWeight: "700", letterSpacing: "0.08em" }],

    // ── Body & Caption — fixed, device-agnostic ────────────────────────────

    "body-lg":                      ["1.25rem",  { lineHeight: "1.75rem", fontWeight: "400" }],
    "body-lg-strong":               ["1.25rem",  { lineHeight: "1.75rem", fontWeight: "600" }],

    "body-md":                      ["0.875rem", { lineHeight: "1.5rem",  fontWeight: "400" }],
    "body-md-strong":               ["0.875rem", { lineHeight: "1.5rem",  fontWeight: "600" }],

    "body-sm":                      ["0.75rem",  { lineHeight: "1rem",    fontWeight: "400" }],
    "body-sm-strong":               ["0.75rem",  { lineHeight: "1rem",    fontWeight: "600" }],

    "caption":                      ["0.625rem", { lineHeight: "1rem",    fontWeight: "400" }],
    "caption-strong":               ["0.625rem", { lineHeight: "1rem",    fontWeight: "600" }],
  },

  fontWeight: {
    normal:    "400",
    medium:    "500",
    semibold:  "600",
    bold:      "700",
    extrabold: "800",
  },

  lineHeight: {
    // Fixed values (multiples of 4px) for predictable vertical grid.
    tight:    "1rem",     // 16px
    snug:     "1.25rem",  // 20px
    normal:   "1.5rem",   // 24px
    relaxed:  "1.75rem",  // 28px
    loose:    "2rem",     // 32px
    spacious: "2.5rem",   // 40px
  },

  letterSpacing: {
    tighter: "-0.05em",
    tight:   "-0.025em",
    normal:  "0em",
    wide:    "0.025em",
    wider:   "0.05em",
    label:   "0.08em",   // h4 / uppercase labels
    widest:  "0.1em",
  },
} as const;
