'use client';

import { useState } from 'react';

interface ContactFormProps {
  type: 'quick' | 'full';
}

export default function ContactForm({ type }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    manufacturer: '',
    model: '',
    quantity: '',
    notes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (type === 'quick') {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Номер телефона"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#2d1457] text-white py-2 rounded-lg hover:bg-[#2d1457]/90 transition-colors"
        >
          Обсудить поставку
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
          required
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Как с вами связаться?"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="manufacturer"
          placeholder="Производитель"
          value={formData.manufacturer}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
        />
      </div>
      <div>
        <input
          type="text"
          name="model"
          placeholder="Артикул/модель"
          value={formData.model}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
        />
      </div>
      <div>
        <input
          type="text"
          name="quantity"
          placeholder="Количество"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
        />
      </div>
      <div>
        <textarea
          name="notes"
          placeholder="Дополнительные пожелания"
          value={formData.notes}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
          rows={4}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#2d1457] text-white py-2 rounded-lg hover:bg-[#2d1457]/90 transition-colors"
      >
        Отправить запрос
      </button>
    </form>
  );
} 