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
  title: "LobbyThis - The First Consumer Marketplace for Political Influence",
  description: "Support the issue you care about most. Join the waitlist for the first platform where citizens pool their resources to fund real political change.",
  keywords: ["lobbying", "civic engagement", "crowdfunding", "democracy", "politics", "political influence"],
  authors: [{ name: "LobbyThis" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://lobbythis.com'),
  openGraph: {
    title: "LobbyThis - The First Consumer Marketplace for Political Influence",
    description: "Support the issue you care about most. Join the waitlist for the first platform where citizens pool their resources to fund real political change.",
    type: "website",
    url: "https://lobbythis.com",
    siteName: "LobbyThis",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LobbyThis - The First Consumer Marketplace for Political Influence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LobbyThis - The First Consumer Marketplace for Political Influence",
    description: "Support the issue you care about most.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "tscf8bjxlb");
            `,
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
