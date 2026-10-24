import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ajira Connect",
  description:
    "Discover job opportunities across Kenya and submit your applications online through Ajira Connect.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
