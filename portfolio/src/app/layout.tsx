import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jordan Walker | Full-Stack Developer",
  description:
    "Portfolio of Jordan Walker, a full-stack developer crafting resilient web experiences focused on performance, accessibility, and thoughtful product design.",
  openGraph: {
    title: "Jordan Walker | Full-Stack Developer",
    description:
      "Explore selected work, experience, and capabilities from Jordan Walker - a developer focused on resilient, human-centered web experiences.",
    url: "https://agentic-0cc0051a.vercel.app",
    siteName: "Jordan Walker Portfolio",
  },
  metadataBase: new URL("https://agentic-0cc0051a.vercel.app"),
  twitter: {
    card: "summary_large_image",
    title: "Jordan Walker | Full-Stack Developer",
    description:
      "Selected work, experience, and capabilities from Jordan Walker - building thoughtful, resilient web experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
