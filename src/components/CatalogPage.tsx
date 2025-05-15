"use client";

import React, { useState, useEffect } from "react";
import CatalogFilter from "@/components/CatalogFilter";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface FilterOption {
  id: string;
  name: string;
  subcategories?: FilterOption[];
}

interface Brand {
  id: string;
  name: string;
  categoryId: string;
}

interface CatalogClientPageProps {
  initialCategory: string | null;
}

const mockBrands: Brand[] = [
  { id: "1", name: "GESAC", categoryId: "2" },
  { id: "2", name: "Sandvik Coromant", categoryId: "2" },
  { id: "3", name: "Schunk", categoryId: "2" },
  { id: "4", name: "DMG MORI", categoryId: "1" },
  { id: "5", name: "HAAS", categoryId: "1" },
  { id: "6", name: "Mazak", categoryId: "1" },
  { id: "7", name: "LEMO", categoryId: "3" },
  { id: "8", name: "Siemens", categoryId: "3" },
];

const categories = [
  {
    id: "1",
    name: "Станки с ЧПУ",
    subcategories: [
      { id: "1-1", name: "Фрезерные станки" },
      { id: "1-2", name: "Токарные станки" },
      { id: "1-3", name: "Обрабатывающие центры" },
    ],
  },
  {
    id: "2",
    name: "Станки",
    subcategories: [],
  },
  {
    id: "3",
    name: "Электрика и соединители",
    subcategories: [
      { id: "3-1", name: "Коннекторы LEMO" },
      { id: "3-2", name: "Шаговые двигатели" },
      { id: "3-3", name: "Системы управления" },
    ],
  },
];

export default function CatalogClientPage({
  initialCategory,
}: CatalogClientPageProps) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    initialCategory
  );
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    router.push(`/catalog?category=${categoryId}`, { scroll: false });
  };

  const filteredBrands = mockBrands.filter((brand) => {
    if (!selectedCategory) {
      return true;
    }

    if (!selectedCategory.includes("-")) {
      return brand.categoryId === selectedCategory;
    }

    const parentCategoryId = selectedCategory.split("-")[0];
    return brand.categoryId === parentCategoryId;
  });

  const selectedCategoryData = categories.find(
    (c) => c.id === selectedCategory
  );
  const subcategories = selectedCategoryData?.subcategories || [];
  const isSubcategory = selectedCategory?.includes("-");
  const hasSubcategories = subcategories.length > 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <CatalogFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryClick}
        />
        <div className="flex-1">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Поиск брендов..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
            />
          </div>

          {selectedCategory && (
            <h2 className="text-2xl font-semibold mb-6">
              {selectedCategoryData?.name}
            </h2>
          )}

          {selectedCategory && !isSubcategory && hasSubcategories && (
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Подкатегории:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {subcategories.map((subcategory) => (
                  <button
                    key={subcategory.id}
                    onClick={() => handleCategoryClick(subcategory.id)}
                    className={`p-4 rounded-lg border ${
                      selectedCategory === subcategory.id
                        ? "border-[#ff6b00] bg-[#ff6b00]/10"
                        : "border-gray-200 hover:border-[#ff6b00]"
                    }`}
                  >
                    {subcategory.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {(!selectedCategory || isSubcategory || !hasSubcategories) && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {filteredBrands
                .filter((brand) =>
                  brand.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((brand) => (
                  <div
                    key={brand.id}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-w-16 aspect-h-9 relative mb-4">
                      <Image
                        src="/images/not-image.png"
                        alt={brand.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-center font-medium">{brand.name}</h3>
                  </div>
                ))}
            </div>
          )}

          {/* SEO Block */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-semibold mb-4">
              {selectedCategory
                ? `О категории "${selectedCategoryData?.name}"`
                : "О нашем каталоге"}
            </h3>
            <p className="text-gray-600 mb-4">
              Мы являемся официальными дистрибьюторами ведущих производителей
              промышленного оборудования и инструмента.{" "}
              {filteredBrands.length > 0 && (
                <>
                  В данном разделе представлены такие известные бренды как{" "}
                  {filteredBrands.map((b) => b.name).join(", ")}.
                </>
              )}
            </p>
            <p className="text-gray-600 mb-4">
              Мы готовы организовать поставку любого оборудования и инструмента
              от этих производителей. Наши специалисты помогут подобрать
              оптимальное решение под ваши задачи и бюджет.
            </p>
            <p className="text-gray-600">
              {selectedCategory
                ? "Выберите интересующий вас бренд или оставьте заявку для получения дополнительной информации."
                : "Выберите интересующую вас категорию или подкатегорию для просмотра доступных брендов."}
            </p>
          </div>

          {/* Request Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Оставить заявку</h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ff6b00] focus:border-[#ff6b00]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ff6b00] focus:border-[#ff6b00]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ff6b00] focus:border-[#ff6b00]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ff6b00] focus:border-[#ff6b00]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#2d1457] hover:bg-[#2d1457]/90 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6b00] focus:ring-offset-2"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
