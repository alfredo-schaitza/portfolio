import type { Config } from "tailwindcss";
import { typography } from "./src/design-system/tokens/typography";
import { spacing } from "./src/design-system/tokens/spacing";
import { radii } from "./src/design-system/tokens/radii";
import { shadows } from "./src/design-system/tokens/shadows";
import { motion } from "./src/design-system/tokens/motion";

const h = (v: string) => `var(${v})`;

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/design-system/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        d: {
          bg:                           h("--d_bg"),
          "sf-subtle":                  h("--d_sf-subtle"),
          "sf-default":                 h("--d_sf-default"),
          "action-on-bg":               h("--d_action-on-bg"),
          "action-on-sf-subtle":        h("--d_action-on-sf-subtle"),
          "action-on-sf-default":       h("--d_action-on-sf-default"),
          "fg-primary-on-bg":           h("--d_fg-primary-on-bg"),
          "fg-secondary-on-bg":         h("--d_fg-secondary-on-bg"),
          "border-on-bg":               h("--d_border-on-bg"),
          "fg-primary-on-sf-subtle":    h("--d_fg-primary-on-sf-subtle"),
          "fg-secondary-on-sf-subtle":  h("--d_fg-secondary-on-sf-subtle"),
          "border-on-sf-subtle":        h("--d_border-on-sf-subtle"),
          "fg-primary-on-sf-default":   h("--d_fg-primary-on-sf-default"),
          "fg-secondary-on-sf-default": h("--d_fg-secondary-on-sf-default"),
          "border-on-sf-default":       h("--d_border-on-sf-default"),
          "fg-primary-on-action":       h("--d_fg-primary-on-action"),
          "border-on-action":           h("--d_border-on-action"),
        },
        a: {
          bg:                           h("--a_bg"),
          "sf-subtle":                  h("--a_sf-subtle"),
          "sf-default":                 h("--a_sf-default"),
          "action-on-bg":               h("--a_action-on-bg"),
          "action-on-sf-subtle":        h("--a_action-on-sf-subtle"),
          "action-on-sf-default":       h("--a_action-on-sf-default"),
          "fg-primary-on-bg":           h("--a_fg-primary-on-bg"),
          "fg-secondary-on-bg":         h("--a_fg-secondary-on-bg"),
          "border-on-bg":               h("--a_border-on-bg"),
          "fg-primary-on-sf-subtle":    h("--a_fg-primary-on-sf-subtle"),
          "fg-secondary-on-sf-subtle":  h("--a_fg-secondary-on-sf-subtle"),
          "border-on-sf-subtle":        h("--a_border-on-sf-subtle"),
          "fg-primary-on-sf-default":   h("--a_fg-primary-on-sf-default"),
          "fg-secondary-on-sf-default": h("--a_fg-secondary-on-sf-default"),
          "border-on-sf-default":       h("--a_border-on-sf-default"),
          "fg-primary-on-action":       h("--a_fg-primary-on-action"),
          "border-on-action":           h("--a_border-on-action"),
        },
        ac: {
          bg:                           h("--ac_bg"),
          "sf-subtle":                  h("--ac_sf-subtle"),
          "sf-default":                 h("--ac_sf-default"),
          "action-on-bg":               h("--ac_action-on-bg"),
          "fg-primary-on-bg":           h("--ac_fg-primary-on-bg"),
          "fg-primary-on-action":       h("--ac_fg-primary-on-action"),
        },
        m: {
          bg:                           h("--m_bg"),
          "sf-subtle":                  h("--m_sf-subtle"),
          "sf-default":                 h("--m_sf-default"),
          "action-on-bg":               h("--m_action-on-bg"),
          "fg-primary-on-bg":           h("--m_fg-primary-on-bg"),
          "fg-secondary-on-bg":         h("--m_fg-secondary-on-bg"),
          "fg-primary-on-sf-subtle":    h("--m_fg-primary-on-sf-subtle"),
          "fg-secondary-on-sf-subtle":  h("--m_fg-secondary-on-sf-subtle"),
          "fg-primary-on-sf-default":   h("--m_fg-primary-on-sf-default"),
          "fg-primary-on-action":       h("--m_fg-primary-on-action"),
        },
        interaction: {
          hover:        "var(--interaction-hover)",
          pressed:      "var(--interaction-pressed)",
          disabled:     "var(--interaction-disabled)",
          "focus-ring": h("--interaction-focus-ring"),
        },
        background: h("--background"),
        foreground:  h("--foreground"),
        border:      { DEFAULT: h("--border") },
        ring:        h("--ring"),
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      fontFamily:     typography.fontFamily as any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      fontSize:       typography.fontSize as any,
      fontWeight:     { ...typography.fontWeight },
      lineHeight:     { ...typography.lineHeight },
      letterSpacing:  { ...typography.letterSpacing },
      spacing:        { ...spacing.scale },
      borderRadius: {
        ...radii.scale,
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      boxShadow:                shadows.scale,
      transitionDuration:       motion.duration,
      transitionTimingFunction: motion.easing,
    },
  },
  plugins: [],
};

export default config;
