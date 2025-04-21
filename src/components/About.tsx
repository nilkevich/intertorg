export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">О компании</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-blue-900 mb-2">2021</div>
            <p className="text-gray-600">Работаем с 2021 года</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-blue-900 mb-2">87%</div>
            <p className="text-gray-600">Продукции закупаем напрямую у производителей</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-blue-900 mb-2">24/7</div>
            <p className="text-gray-600">Всегда на связи: даем гарантию и оказываем тех. поддержку после введения в эксплуатацию</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
            <p className="text-gray-600">Наша миссия – поддерживать мощь Российского производства!</p>
          </div>
        </div>
      </div>
    </section>
  );
} 