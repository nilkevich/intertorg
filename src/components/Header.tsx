'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-900">
            Интерторг
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-blue-900">
              О компании
            </Link>
            <Link href="/equipment" className="text-gray-700 hover:text-blue-900">
              Оборудование
            </Link>
            <Link href="/materials" className="text-gray-700 hover:text-blue-900">
              Материалы
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-900">
              Услуги
            </Link>
            <Link href="/contacts" className="text-gray-700 hover:text-blue-900">
              Контакты
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="/about" className="block text-gray-700 hover:text-blue-900">
              О компании
            </Link>
            <Link href="/equipment" className="block text-gray-700 hover:text-blue-900">
              Оборудование
            </Link>
            <Link href="/materials" className="block text-gray-700 hover:text-blue-900">
              Материалы
            </Link>
            <Link href="/services" className="block text-gray-700 hover:text-blue-900">
              Услуги
            </Link>
            <Link href="/contacts" className="block text-gray-700 hover:text-blue-900">
              Контакты
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
} 