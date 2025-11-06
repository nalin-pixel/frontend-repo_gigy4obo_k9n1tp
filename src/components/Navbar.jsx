import { ShoppingBag, Search, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/30 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Menu className="h-5 w-5 sm:hidden" />
            <span className="tracking-widest text-sm uppercase text-gray-300 hidden sm:block">Enchantique</span>
          </div>
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl font-medium tracking-[0.3em]">DESIGNED TO SHINE</h1>
          </div>
          <div className="flex items-center gap-4">
            <Search className="h-5 w-5" />
            <ShoppingBag className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
