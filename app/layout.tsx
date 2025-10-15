import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LobbyThis - Crowdfund Democracy",
  description: "A civic crowdfunding platform where citizens write, fund, and transparently execute their own lobbying campaigns—turning collective wallets into real political power.",
  keywords: ["lobbying", "civic engagement", "crowdfunding", "democracy", "politics"],
  authors: [{ name: "LobbyThis" }],
  openGraph: {
    title: "LobbyThis - Crowdfund Democracy",
    description: "Citizens funding real influence — organized, transparent, unstoppable.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
