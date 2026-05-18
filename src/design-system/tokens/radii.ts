export const radii = {
  scale: {
    // ─── 4-point grid ─────────────────────────────────────────────────────────
    // Removidos xs (2px) e o DEFAULT ambíguo.
    // md corrigido de 6px → 8px.
    // 'full' mantido como exceção semântica (pill/circle).
    // ──────────────────────────────────────────────────────────────────────────
    none:    "0px",       //  0px
    sm:      "0.25rem",   //  4px
    md:      "0.5rem",    //  8px
    lg:      "0.75rem",   // 12px  ← = var(--radius)
    xl:      "1rem",      // 16px
    "2xl":   "1.5rem",    // 24px
    "3xl":   "2rem",      // 32px
    full:    "9999px",    // pill / circle
  },
} as const;
