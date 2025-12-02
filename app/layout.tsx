import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Everything is Music",
  description: "Making the inner workings of music understandable, accessible, and engaging for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
