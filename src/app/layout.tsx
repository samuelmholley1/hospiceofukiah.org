import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hospice of Ukiah - Community-Supported Hospice Care",
  description: "Providing compassionate hospice care to Mendocino County. Professional medical care, emotional support, and grief counseling services.",
  keywords: "hospice, palliative care, Ukiah, Mendocino County, end-of-life care, grief support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
