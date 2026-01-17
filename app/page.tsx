import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WaitlistForm from '@/components/WaitlistForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              გაიშვი წინა რიგში
            </h2>
            <p className="text-xl text-gray-600">
              იყავი პირველთა შორის ვინც გამოიყენებს ჩვენს პლატფორმას
            </p>
          </div>
          <WaitlistForm />
        </div>
      </section>
    </main>
  );
}
