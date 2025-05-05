import { useState } from 'react';

interface FilterOption {
  id: string;
  name: string;
  subcategories?: FilterOption[];
}

interface CatalogFilterProps {
  categories: FilterOption[];
  selectedCategory: string | null;
  onCategoryChange: (categoryId: string) => void;
}

export default function CatalogFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CatalogFilterProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  return (
    <div className="w-64 bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4">Категории</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category.id} className="space-y-1">
            <button
              onClick={() => toggleCategory(category.id)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-50 text-blue-600 font-medium'
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{category.name}</span>
                {category.subcategories && (
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      expandedCategories.has(category.id) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </div>
            </button>
            {category.subcategories && expandedCategories.has(category.id) && (
              <div className="pl-4 space-y-1">
                {category.subcategories.map((subcategory) => (
                  <button
                    key={subcategory.id}
                    onClick={() => onCategoryChange(subcategory.id)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      selectedCategory === subcategory.id
                        ? 'bg-blue-50 text-blue-600 font-medium'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    {subcategory.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 