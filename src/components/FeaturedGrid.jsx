export default function FeaturedGrid() {
  const items = [
    {
      title: 'Iridescent Link Chain',
      subtitle: 'Sterling Silver',
      image:
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1974&auto=format&fit=crop',
    },
    {
      title: 'Halo Studs',
      subtitle: 'White Gold',
      image:
        'https://images.unsplash.com/photo-1615220368123-6c2f3fe96ca0?q=80&w=2069&auto=format&fit=crop',
    },
    {
      title: 'Sculpted Cuff',
      subtitle: 'Mirror Finish',
      image:
        'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=2069&auto=format&fit=crop',
    },
  ];

  return (
    <section id="collections" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between">
          <h3 className="text-2xl sm:text-3xl tracking-wide">Featured Selections</h3>
          <a href="#" className="text-sm underline underline-offset-4 text-gray-600 hover:text-black">View all</a>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <article key={item.title} className="group">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.subtitle}</p>
                </div>
                <button className="text-sm rounded-full border px-4 py-2 hover:bg-black hover:text-white transition">Add</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
