import ContactForm from '@/components/ContactForm';

export default function ContactsPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Контакты</h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Наш адрес</h2>
              <address className="not-italic text-gray-700 mb-8">
                <p>г. Ростов-на-Дону,</p>
                <p>Чехова 71/187</p>
              </address>
              
              <h2 className="text-2xl font-bold mb-4">Телефон</h2>
              <p className="text-gray-700 mb-8">
                <a href="tel:+78632291709" className="hover:text-blue-900">
                  8 (863) 229-17-09
                </a>
              </p>
              
              <h2 className="text-2xl font-bold mb-4">Режим работы</h2>
              <p className="text-gray-700">
                Пн-Пт: 9:00 - 18:00<br />
                Сб-Вс: Выходной
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Быстрая обратная связь</h2>
              <ContactForm type="quick" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 