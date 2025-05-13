'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// This would normally come from an API or database
const productDetails = {
  'cnc-mill': {
    title: 'Фрезерный станок с ЧПУ',
    imageUrl: '/images/cnc-mill.jpg',
    category: 'Станки с ЧПУ',
    description: 'Профессиональный фрезерный станок с ЧПУ для обработки металла и дерева. Оснащен современной системой управления и высокоточными линейными направляющими.',
    specifications: [
      { name: 'Рабочая зона', value: '1000 x 800 x 500 мм' },
      { name: 'Максимальная скорость шпинделя', value: '24000 об/мин' },
      { name: 'Точность позиционирования', value: '±0.01 мм' },
      { name: 'Мощность шпинделя', value: '7.5 кВт' },
      { name: 'Система управления', value: 'Siemens 828D' }
    ],
    features: [
      'Автоматическая смена инструмента',
      'Система охлаждения',
      'Защитные кожухи',
      'Цифровой дисплей',
      'USB-интерфейс'
    ]
  },
  'lathe': {
    title: 'Токарный станок',
    imageUrl: '/images/lathe.jpg',
    category: 'Станки с ЧПУ',
    description: 'Токарный станок с ЧПУ для обработки металлических деталей. Идеально подходит для серийного производства.',
    specifications: [
      { name: 'Диаметр обработки', value: '500 мм' },
      { name: 'Длина обработки', value: '1000 мм' },
      { name: 'Максимальная скорость шпинделя', value: '3000 об/мин' },
      { name: 'Мощность главного привода', value: '11 кВт' },
      { name: 'Система управления', value: 'Fanuc 0i-TF' }
    ],
    features: [
      'Автоматическая подача заготовок',
      'Система охлаждения',
      'Цифровой дисплей',
      'Чиллер',
      'Система удаления стружки'
    ]
  }
};

interface Brand {
  id: string;
  name: string;
  logoUrl: string;
  categoryId: string;
}

const mockBrands: Brand[] = [
  {
    id: '1',
    name: 'GESAC',
    logoUrl: '/images/not-image.png',
    categoryId: '2-1'
  },
  {
    id: '2',
    name: 'Sandvik Coromant',
    logoUrl: '/images/not-image.png',
    categoryId: '2-2'
  },
  {
    id: '3',
    name: 'Schunk',
    logoUrl: '/images/not-image.png',
    categoryId: '2-3'
  },
  {
    id: '4',
    name: 'DMG MORI',
    logoUrl: '/images/not-image.png',
    categoryId: '1-1'
  },
  {
    id: '5',
    name: 'HAAS',
    logoUrl: '/images/not-image.png',
    categoryId: '1-2'
  },
  {
    id: '6',
    name: 'Mazak',
    logoUrl: '/images/not-image.png',
    categoryId: '1-3'
  },
  {
    id: '7',
    name: 'LEMO',
    logoUrl: '/images/not-image.png',
    categoryId: '3-1'
  },
  {
    id: '8',
    name: 'Siemens',
    logoUrl: '/images/not-image.png',
    categoryId: '3-2'
  }
];

const categories = [
  {
    id: '1',
    name: 'Станки с ЧПУ',
    subcategories: [
      { id: '1-1', name: 'Фрезерные станки' },
      { id: '1-2', name: 'Токарные станки' },
      { id: '1-3', name: 'Обрабатывающие центры' }
    ]
  },
  {
    id: '2',
    name: 'Станки'
  },
  {
    id: '3',
    name: 'Электрика и соединители',
    subcategories: [
      { id: '3-1', name: 'Коннекторы LEMO' },
      { id: '3-2', name: 'Шаговые двигатели' },
      { id: '3-3', name: 'Системы управления' }
    ]
  }
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = productDetails[params.id as keyof typeof productDetails];

  if (!product) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
          <Link href="/catalog" className="text-blue-600 hover:underline">
            Вернуться в каталог
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Link href="/catalog" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Вернуться в каталог
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Характеристики</h2>
            <div className="space-y-2">
              {product.specifications.map((spec, index) => (
                <div key={index} className="flex justify-between border-b py-2">
                  <span className="text-gray-600">{spec.name}</span>
                  <span className="font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Особенности</h2>
            <ul className="list-disc pl-5 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
} 