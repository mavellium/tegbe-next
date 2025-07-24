import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Tegbe",
  description: "Transformamos negócios com estratégia e tecnologia.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased ${montserrat.className}}`}>{children}</body>
    </html>
  );
}
