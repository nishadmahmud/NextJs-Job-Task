'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                ShopVault
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/products" 
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Products
            </Link>
            
            {session ? (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/dashboard/add-product" 
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Add Product
                </Link>
                <div className="flex items-center space-x-2">
                  <Image 
                    src={session.user.image || '/default-avatar.png'} 
                    alt="Profile" 
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">
                    {session.user.name}
                  </span>
                </div>
                <button
                  onClick={() => signOut()}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link 
                href="/login" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                href="/products" 
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              
              {session ? (
                <>
                  <Link 
                    href="/dashboard/add-product" 
                    className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Add Product
                  </Link>
                  <div className="px-3 py-2">
                    <div className="flex items-center space-x-2">
                      <Image 
                        src={session.user.image || '/default-avatar.png'} 
                        alt="Profile" 
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {session.user.name}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      signOut();
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-base font-medium"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link 
                  href="/login" 
                  className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
