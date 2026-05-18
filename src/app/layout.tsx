import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: "Alfredo Schaitza — Product Designer",
  description:
    "Product Designer working end-to-end, from discovery to delivery, with expertise in visual craft, design systems, design ops, and product metrics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ibmPlexSans.variable}>
      <body className="bg-d-bg font-sans antialiased">{children}</body>
    </html>
  );
}
