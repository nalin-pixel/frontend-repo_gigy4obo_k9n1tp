export default function Lookbook() {
  const images = [
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560269507-68da9b6577ef?q=80&w=2069&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560972550-aba3456b207e?q=80&w=2071&auto=format&fit=crop',
  ];

  return (
    <section id="lookbook" className="bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between">
          <h3 className="text-2xl sm:text-3xl tracking-wide">Lookbook</h3>
          <p className="text-sm text-gray-400 max-w-md">Soft light, sculptural silhouettes, and effortless shine. Explore our editorial visuals.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl bg-gray-900/40">
              <img src={src} alt="Lookbook" className="w-full h-full object-cover aspect-[3/4]" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
