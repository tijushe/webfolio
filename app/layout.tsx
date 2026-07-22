import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Senjuti Bala",
  description:
    "Data scientist working across agent-based modelling, simulation, FAIR data, and visualization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-[var(--bg)] text-[var(--ink)] antialiased font-[var(--font-sans)]">
        {children}
      </body>
    </html>
  );
}
