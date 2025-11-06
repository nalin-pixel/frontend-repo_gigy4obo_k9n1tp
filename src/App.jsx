import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedGrid from './components/FeaturedGrid';
import Lookbook from './components/Lookbook';
import Footer from './components/Footer';

function BrandStrip() {
  const items = ['Minimal', 'Iridescent', 'Sculptural', 'Timeless', 'Refined'];
  return (
    <div className="bg-white border-y">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-xs tracking-widest text-gray-500 uppercase">
          {items.map((t) => (
            <span key={t}>• {t} •</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-inter">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <BrandStrip />
        <FeaturedGrid />
        <Lookbook />
      </main>
      <Footer />
    </div>
  );
}
