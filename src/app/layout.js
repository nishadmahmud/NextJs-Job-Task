import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '../../components/Providers';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ThemeToggle from '../../components/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ShopVault - Your Trusted E-commerce Platform',
  description: 'Discover, shop, and manage your inventory with ease on ShopVault.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-50 dark:bg-gray-900`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
          
          {/* Theme Toggle Floating Button */}
          <div className="fixed bottom-4 left-4 z-40">
            <ThemeToggle />
          </div>
        </Providers>
      </body>
    </html>
  );
}
