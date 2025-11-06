import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EQgEIs2r5cMbWroZ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient vignette to soften edges without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-xl">
          <p className="uppercase tracking-[0.35em] text-sm text-gray-300">Enchantique</p>
          <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
            Luxury Jewelry for the Modern Muse
          </h2>
          <p className="mt-4 text-gray-300/90">
            Minimal forms. Iridescent glow. Timeless pieces that capture light and attention.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#collections" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm tracking-wider hover:bg-gray-100 transition">
              Shop Collections
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm tracking-wider hover:bg-white/10 transition">
              Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
