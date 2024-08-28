import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ActorLink",
  description: "Movie guessing game",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
