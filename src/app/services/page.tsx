import ContactForm from '@/components/ContactForm';

export default function ServicesPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Услуги</h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg mb-12">
            <p className="text-xl text-gray-700 mb-8">
              Мы предлагаем полный спектр услуг по поиску и поставке промышленного 
              оборудования, запчастей и сырья из США, Европы и Китая. Наша команда 
              экспертов поможет вам найти именно то, что нужно вашему производству.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">Что мы делаем</h2>
            <ul className="list-disc pl-6 mb-8">
              <li>Поиск поставщиков необходимого оборудования</li>
              <li>Проверка качества и соответствия техническим требованиям</li>
              <li>Организация логистики и таможенного оформления</li>
              <li>Доставка на ваш склад</li>
              <li>Техническая поддержка после ввода в эксплуатацию</li>
              <li>Участие в тендерах</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-8">
              Заполните форму и мы найдем для вас любой* товар на нужных условиях!
            </h2>
            <p className="text-center text-gray-600 mb-8">*практически</p>
            <ContactForm type="full" />
          </div>
        </div>
      </div>
    </main>
  );
} 