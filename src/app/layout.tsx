import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Vollie Web",
    template: `%s - My Vollie web account`
  },
  description: "Vollie Website",
  twitter: {
    card: 'summary_large_image'
  },
  icons: {
    icon: "public/next.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
           <link rel="icon" href="next.svg" sizes="any" />
           <link rel="icon" href="/favicon.ico" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
