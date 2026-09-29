import type { Metadata } from "next";
import {
  Geist_Mono,
  Instrument_Sans,
  Sansita,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sansita = Sansita({
  variable: "--font-sansita",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

// The Figma brand face: the name in the header and the About headline.
// Self-hosted because Google retired Sansita One from the catalogue that
// next/font/google ships, though the foundry still serves the file.
const sansitaOne = localFont({
  src: "./fonts/sansita-one-latin-400.woff2",
  variable: "--font-sansita-one",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rebecca Wang",
  description: "Rebecca Wang's portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${geistMono.variable} ${sansita.variable} ${sansitaOne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
