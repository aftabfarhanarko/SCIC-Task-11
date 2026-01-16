import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import Navbar from "@/componets/Navbar";
import Footer from "@/componets/Footer";
import AuthProvider from "@/providers/AuthProvider";
import { Toaster } from "sonner";

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  weight: ["500"],
});

export const metadata = {
  metadataBase: new URL("https://hotel-booking.example.com"),
  title: {
    default: "Hotel Booking",
    template: "%s | Hotel Booking",
  },
  description:
    "Book modern city hotels with curated rooms, seasonal offers, and tailored experiences.",
  applicationName: "Hotel Booking",
  openGraph: {
    type: "website",
    url: "/",
    title: "Hotel Booking",
    description:
      "Discover thoughtfully designed rooms, curated experiences, and flexible hotel offers.",
    siteName: "Hotel Booking",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&auto=format&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Hotel lobby with modern seating and warm lighting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Booking",
    description:
      "Book modern hotel stays with curated rooms, offers, and experiences.",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&auto=format&fit=crop&q=80",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#0f172a",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f172a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${baiJamjuree.variable} antialiased bg-slate-50 text-slate-900`}
      >
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />

          {/* ✅ Global Toast */}
          <Toaster position="top-right" />
        </AuthProvider>
      </body>
    </html>
  );
}
