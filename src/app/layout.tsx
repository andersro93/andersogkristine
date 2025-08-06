import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anders og Kristine",
  description: "Anders og Kristine gifter seg!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body>
        {children}
      </body>
    </html>
  );
}
