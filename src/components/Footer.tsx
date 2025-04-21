import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Интерторг</h3>
            <p className="text-gray-400">
              Реализуем полный цикл поставки импортного промышленного оборудования, 
              запчастей и сырья из США, Европы и Китая на ваш склад с гарантией и постподдержкой.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <address className="text-gray-400 not-italic">
              <p>г. Ростов-на-Дону,</p>
              <p>Чехова 71/187</p>
              <p className="mt-2">
                <a href="tel:+78632291709" className="hover:text-white">
                  8 (863) 229-17-09
                </a>
              </p>
            </address>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <nav className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white">
                О компании
              </Link>
              <Link href="/equipment" className="block text-gray-400 hover:text-white">
                Оборудование
              </Link>
              <Link href="/materials" className="block text-gray-400 hover:text-white">
                Материалы
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-white">
                Услуги
              </Link>
              <Link href="/contacts" className="block text-gray-400 hover:text-white">
                Контакты
              </Link>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Интерторг. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
} 