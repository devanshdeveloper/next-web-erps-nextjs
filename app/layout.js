import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  title: "Next Web ERPs – Powerful ERP Solutions for Schools, Colleges & Institutes",
  description: "Next Web ERPs is a modular, scalable ERP platform designed for schools, colleges, coaching institutes and organizations in India. Manage admissions, fees, attendance, exams, and operations from a single unified system.",
  keywords: "School ERP, College ERP, Education ERP, Institute Management System, School Management Software India, Fee Management, Student Information System, Next Web ERPs",
  authors: [{ name: "Next Web Works" }],
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://erp.nextwebworks.in/",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // Replace with actual verification code
  },
  openGraph: {
    type: "website",
    url: "https://erp.nextwebworks.in/",
    title: "Next Web ERPs – Powerful ERP Solutions for Schools & Institutions",
    description: "Modular, scalable ERP ecosystem for schools, colleges, coaching institutes, and organizations. Manage operations, people, data, and growth from one platform.",
    siteName: "Next Web ERPs",
    locale: "en_IN",
    images: [
      {
        url: "https://erp.nextwebworks.in/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Next Web ERPs - ERP Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nextwebworks",
    title: "Next Web ERPs – Powerful ERP Solutions for Schools & Institutions",
    description: "Modular, scalable ERP ecosystem for schools, colleges, and organizations in India.",
    images: ["https://erp.nextwebworks.in/og-image.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-XXXXXXXX" /> {/* Replace with actual GTM ID */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" /> {/* Replace with actual GA ID */}
    </html>
  );
}
