import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name | Aspiring Data Engineer",
  description:
    "Personal portfolio showcasing data engineering, analytics, business intelligence and selected creative work.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
