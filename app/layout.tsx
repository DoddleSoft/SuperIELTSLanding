import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SuperIELTS - Premium Mock Test Platform | Join the Waitlist",
  description: "The most advanced IELTS mock test platform for training centres. Everything your centre needs to run IELTS mocks better. Join our exclusive founding centre program.",
  keywords: "IELTS, mock test, training centre, British Council, IELTS preparation, premium platform",
  authors: [{ name: "SuperIELTS" }],
  creator: "SuperIELTS",
  publisher: "SuperIELTS",
  openGraph: {
    title: "SuperIELTS - Premium Mock Test Platform",
    description: "Everything your centre needs to run IELTS mocks better.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperIELTS - Premium Mock Test Platform",
    description: "Everything your centre needs to run IELTS mocks better.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <CustomCursor />
        <div className="screen-border">
          {children}
        </div>
      </body>
    </html>
  );
}
