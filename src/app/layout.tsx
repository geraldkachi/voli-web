import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: {
    default: "Vollie Website",
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="preload" href={inter.className} as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href={plusJakartaSans.className} as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head> */}
      <link rel="icon" href="next.svg" sizes="any" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
