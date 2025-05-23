"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#2d1457] logo">
            <Image src="/images/logo.png" alt="Логотип Интерторг" fill />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-[#ff6b00]">
              О компании
            </Link>
            <Link
              href="/catalog"
              className="text-gray-700 hover:text-[#ff6b00]"
            >
              Каталог
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-[#ff6b00]"
            >
              Услуги
            </Link>
            <Link
              href="/contacts"
              className="text-gray-700 hover:text-[#ff6b00]"
            >
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
            <Link
              href="/about"
              className="block text-gray-700 hover:text-[#ff6b00]"
            >
              О компании
            </Link>
            <Link
              href="/catalog"
              className="block text-gray-700 hover:text-[#ff6b00]"
            >
              Каталог
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-[#ff6b00]"
            >
              Услуги
            </Link>
            <Link
              href="/contacts"
              className="block text-gray-700 hover:text-[#ff6b00]"
            >
              Контакты
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
