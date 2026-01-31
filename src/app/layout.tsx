import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BloomHive — Where AI video creators thrive",
  description:
    "The community where AI video creators showcase their work, share their process, and connect with collaborators and clients. Join the waitlist.",
  openGraph: {
    title: "BloomHive — Where AI video creators thrive",
    description:
      "The community where AI video creators showcase their work, share their process, and connect.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BloomHive — Where AI video creators thrive",
    description:
      "The community where AI video creators showcase their work, share their process, and connect.",
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
