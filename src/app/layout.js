import localFont from "next/font/local";
import "./globals.css";
import "aos/dist/aos.css";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Dr Albert Antwi-Boasiako | Official Website",
  description: "https://antwi-boasiako.com",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Merriweather:wght@300;400;700;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-T4K3JZP59T"
        />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-T4K3JZP59T');
        `}
        </Script>
      </body>
    </html>
  );
}
