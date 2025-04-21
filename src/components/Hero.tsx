'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  {
    title: 'Поставляем промышленное оборудование и запчасти из США, Европы и Китая под ключ',
    buttonText: 'Обсудить техническое задание',
    buttonLink: '/services',
    bgColor: 'bg-blue-900',
  },
  {
    title: '87% продукции закупаем напрямую у производителей',
    subtitle: '*статистика реализованных заказов',
    buttonText: 'Сделать заказ',
    buttonLink: '/contacts',
    bgColor: 'bg-blue-800',
  },
  {
    title: 'Участвуем в тендерах',
    buttonText: 'Получить лучшее предложение',
    buttonLink: '/services',
    bgColor: 'bg-blue-700',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          } ${slide.bgColor}`}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <p className="text-sm mb-6 opacity-80">{slide.subtitle}</p>
              )}
              <Link
                href={slide.buttonLink}
                className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
} 