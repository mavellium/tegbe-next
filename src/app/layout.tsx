import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import GoogleTagManager from "@/components/GoogleTagManager";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body
        className={`
          ${montserrat.className}
          antialiased
        `}
      >
        <GoogleTagManager gtmId="GTM-WWMK7H35" />
        {children}
      </body>
    </html>
  );
}
