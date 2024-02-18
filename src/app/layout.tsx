import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import "@mantine/core/styles.css";
import localFont from "next/font/local";

import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
  display: "swap",
});

const robertFont = localFont({
  src: "./font/RobertSans-Medium.ttf",
  weight: "100",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ghosted AI",
  description: "Completing the interview feedback loop",
  keywords: [
    "AI interview assistant",
    "interview assistant",
    "interview feedback loop",
    "career development tools",
    "job interview preparation",
    "AI for career growth",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/logos/ghosted.ico" sizes="any" />
      <head>
        <ColorSchemeScript />
      </head>
      <body className={robertFont.className}>
        <MantineProvider theme={{ fontFamily: robertFont.style.fontFamily }}>
          <div className="max-w-6xl mx-auto px-6">
            <Header />
            {children}
          </div>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
