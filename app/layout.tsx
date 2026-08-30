import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BUDDY — Emotionally Intelligent Robot Dog",
  description: "Explore BUDDY, Final Year Research Project R26-SE-040: an affordable AI-powered robotic dog combining offline voice interaction, facial emotion observation, autonomous navigation, security assistance and ROS 2 robotics.",
  keywords: ["BUDDY robot dog", "emotionally intelligent robot", "ROS 2", "SLIIT research", "affordable robotics"],
  openGraph: {
    title: "BUDDY — Intelligence that cares",
    description: "An affordable, emotionally intelligent AI-powered robot dog.",
    type: "website",
  },
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
