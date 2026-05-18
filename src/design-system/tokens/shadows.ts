export const shadows = {
  scale: {
    // ─── 4-point grid ─────────────────────────────────────────────────────────
    // blur e spread são múltiplos de 4px.
    // Offset-y mantido em valores pequenos (0–4px) para naturalidade visual.
    // ──────────────────────────────────────────────────────────────────────────
    xs:      "0 0px 4px 0px rgb(0 0 0 / 0.06)",
    //        ↑ blur:4 ✓

    sm:      "0 4px 8px -4px rgb(0 0 0 / 0.08)",
    //        ↑ y:4 ✓  blur:8 ✓  spread:-4 ✓

    DEFAULT: "0 4px 8px -4px rgb(0 0 0 / 0.08)",

    md:      "0 4px 16px -4px rgb(0 0 0 / 0.10), 0 4px 8px -4px rgb(0 0 0 / 0.06)",
    //        ↑ y:4 ✓  blur:16 ✓  spread:-4 ✓

    lg:      "0 8px 24px -4px rgb(0 0 0 / 0.10), 0 4px 8px -4px rgb(0 0 0 / 0.06)",
    //        ↑ y:8 ✓  blur:24 ✓  spread:-4 ✓

    xl:      "0 16px 32px -4px rgb(0 0 0 / 0.10), 0 8px 16px -4px rgb(0 0 0 / 0.06)",
    //        ↑ y:16 ✓  blur:32 ✓  spread:-4 ✓

    "2xl":   "0 24px 48px -12px rgb(0 0 0 / 0.25)",
    //        ↑ y:24 ✓  blur:48 ✓  spread:-12 ✓

    inner:   "inset 0 4px 4px 0px rgb(0 0 0 / 0.05)",
    //              ↑ y:4 ✓  blur:4 ✓

    none:    "none",
  },
} as const;
