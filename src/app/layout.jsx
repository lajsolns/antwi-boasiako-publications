import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from '@/context/CartContext';
import CartDrawer from '@/components/ui/cart-drawer';
import BookLaunchClient from '@/components/BookLaunch/BookLaunchClient';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dr. Albert Antwi-Boasiako",
  description: "Official website of Dr. Albert Antwi-Boasiako",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <BookLaunchClient />
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
} 