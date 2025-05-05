import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

interface ProductCardProps {
  product: Product;
  categories: FilterOption[];
}

const getCategoryName = (categoryId: string, categories: FilterOption[]): string => {
  const [mainId, subId] = categoryId.split('-');
  const mainCategory = categories.find(c => c.id === mainId);
  if (!mainCategory) return '';
  
  if (!subId) return mainCategory.name;
  
  const subCategory = mainCategory.subcategories?.find(s => s.id === categoryId);
  return subCategory ? subCategory.name : mainCategory.name;
};

export default function ProductCard({ product, categories }: ProductCardProps) {
  return (
    <Link href={`/catalog/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full flex flex-col">
        <div className="relative h-48 w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <span className="text-sm text-gray-500">
            {getCategoryName(product.categoryId, categories)}
          </span>
          <h3 className="text-lg font-semibold mt-1 line-clamp-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mt-2 line-clamp-3 flex-grow">
            {product.description}
          </p>
        </div>
      </div>
    </Link>
  );
} 