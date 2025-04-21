import Hero from '@/components/Hero';
import About from '@/components/About';
import RecentDeliveries from '@/components/RecentDeliveries';
import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <RecentDeliveries />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Заполните форму и мы найдем для вас любой* товар на нужных условиях!
            </h2>
            <p className="text-center text-gray-600 mb-8">*практически</p>
            <ContactForm type="full" />
          </div>
        </div>
      </section>
      
      <WhatsAppButton />
    </main>
  );
}
