'use client';

import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import CatalogFilter from '@/components/CatalogFilter';

interface FilterOption {
  id: string;
  name: string;
  subcategories?: FilterOption[];
}

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  categoryId: string;
  description: string;
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Фрезерный станок с ЧПУ',
    imageUrl: '/images/not-image.png',
    categoryId: '1-1',
    description: 'Высокоточный фрезерный станок с ЧПУ для обработки металлов и сплавов'
  },
  {
    id: '2',
    name: 'Токарный станок с ЧПУ',
    imageUrl: '/images/not-image.png',
    categoryId: '1-2',
    description: 'Современный токарный станок с ЧПУ для обработки деталей'
  },
  {
    id: '3',
    name: 'Коннектор LEMO',
    imageUrl: '/images/not-image.png',
    categoryId: '3-1',
    description: 'Высококачественный коннектор для промышленного применения'
  },
  {
    id: '4',
    name: 'Шаговый двигатель',
    imageUrl: '/images/not-image.png',
    categoryId: '3-2',
    description: 'Точный шаговый двигатель для систем позиционирования'
  },
  {
    id: '5',
    name: 'Трапецеидальный винт',
    imageUrl: '/images/not-image.png',
    categoryId: '5-1',
    description: 'Высококачественный трапецеидальный винт для передачи движения'
  },
  {
    id: '6',
    name: 'Фреза концевая',
    imageUrl: '/images/not-image.png',
    categoryId: '10-1',
    description: 'Твердосплавная концевая фреза для обработки металлов'
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
    name: 'Станки',
    subcategories: [
      { id: '2-1', name: 'GESAC' },
      { id: '2-2', name: 'Sandvik Coromant' },
      { id: '2-3', name: 'Schunk' }
    ]
  },
  {
    id: '3',
    name: 'Электрика и соединители',
    subcategories: [
      { id: '3-1', name: 'Коннекторы LEMO' },
      { id: '3-2', name: 'Шаговые двигатели' },
      { id: '3-3', name: 'Системы управления' }
    ]
  },
  {
    id: '4',
    name: 'Автоматика и управление',
    subcategories: [
      { id: '4-1', name: 'Блоки управления' },
      { id: '4-2', name: 'Датчики' },
      { id: '4-3', name: 'Системы измерения' }
    ]
  },
  {
    id: '5',
    name: 'Механика и привод',
    subcategories: [
      { id: '5-1', name: 'Трапецеидальные винты' },
      { id: '5-2', name: 'Зубчатые ремни' },
      { id: '5-3', name: 'Системы смазки' }
    ]
  },
  {
    id: '6',
    name: 'Станки по типу обработки',
    subcategories: [
      { id: '6-1', name: 'Фрезерные' },
      { id: '6-2', name: 'Токарные' },
      { id: '6-3', name: 'Шлифовальные' }
    ]
  },
  {
    id: '7',
    name: 'Ручной инструмент',
    subcategories: [
      { id: '7-1', name: 'Ручной инструмент' },
      { id: '7-2', name: 'Рабочие столы' },
      { id: '7-3', name: 'Верстаки' }
    ]
  },
  {
    id: '8',
    name: 'Измерительный инструмент',
    subcategories: [
      { id: '8-1', name: 'Калибры' },
      { id: '8-2', name: 'Микрометры' },
      { id: '8-3', name: 'Штангенциркули' }
    ]
  },
  {
    id: '9',
    name: 'Пневмошлифмашины',
    subcategories: [
      { id: '9-1', name: 'Прямые' },
      { id: '9-2', name: 'Угловые' },
      { id: '9-3', name: 'Орбитальные' }
    ]
  },
  {
    id: '10',
    name: 'Режущий инструмент',
    subcategories: [
      { id: '10-1', name: 'Фрезы' },
      { id: '10-2', name: 'Сверла' },
      { id: '10-3', name: 'Резцы' }
    ]
  },
  {
    id: '11',
    name: 'Смазочные материалы',
    subcategories: [
      { id: '11-1', name: 'Loctite' },
      { id: '11-2', name: 'Смазки' },
      { id: '11-3', name: 'Адгезивы' }
    ]
  }
];

const getCategoryName = (categoryId: string, categories: FilterOption[]): string => {
  const [mainId, subId] = categoryId.split('-');
  const mainCategory = categories.find(c => c.id === mainId);
  if (!mainCategory) return '';
  
  if (!subId) return mainCategory.name;
  
  const subCategory = mainCategory.subcategories?.find(s => s.id === categoryId);
  return subCategory ? subCategory.name : mainCategory.name;
};

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = mockProducts.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.categoryId === selectedCategory || product.categoryId.startsWith(selectedCategory.split('-')[0])
      : true;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <CatalogFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <div className="flex-1">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Поиск товаров..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {selectedCategory && (
            <h2 className="text-2xl font-semibold mb-6">
              {getCategoryName(selectedCategory, categories)}
            </h2>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} categories={categories} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              Товары не найдены
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 