import type { Metadata } from "next";
import "./globals.css";


export const metadata = {
  title: "Shaik Gouse Basha | Aspiring Data Engineer",
  description:
    "Personal portfolio of Shaik Gouse Basha, showcasing fintech experience, data engineering projects, analytics, business intelligence and creative work.",
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
