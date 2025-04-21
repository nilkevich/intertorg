'use client';

import { useState, useEffect } from 'react';

interface Delivery {
  id: number;
  name: string;
  price: string;
  date: string;
}

// This would typically come from your backend
const mockDeliveries: Delivery[] = [
  {
    id: 1,
    name: 'Промышленный насос XJ-2000',
    price: '450 000 ₽',
    date: '2024-04-20',
  },
  {
    id: 2,
    name: 'Комплект запчастей для станка',
    price: '280 000 ₽',
    date: '2024-04-19',
  },
  {
    id: 3,
    name: 'Сырье для производства',
    price: '1 200 000 ₽',
    date: '2024-04-18',
  },
  // Add more mock data as needed
];

export default function RecentDeliveries() {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Simulate fetching data from backend
    setDeliveries(mockDeliveries);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % deliveries.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [deliveries.length]);

  if (deliveries.length === 0) return null;

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Последние поставки</h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{deliveries[currentIndex].name}</h3>
                <p className="text-gray-600">
                  {new Date(deliveries[currentIndex].date).toLocaleDateString('ru-RU')}
                </p>
              </div>
              <div className="text-xl font-bold text-blue-900">
                {deliveries[currentIndex].price}
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-3 flex justify-center space-x-2">
            {deliveries.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-blue-900' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 