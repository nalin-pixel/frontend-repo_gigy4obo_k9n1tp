export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div className="col-span-2">
            <h4 className="tracking-widest text-xs text-gray-500 uppercase">Enchantique</h4>
            <p className="mt-3 text-gray-600 max-w-sm">
              Designed to Shine. Contemporary jewelry with a luminous, iridescent soul.
            </p>
          </div>
          <div>
            <h5 className="font-medium">Customer Care</h5>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
              <li><a href="#" className="hover:underline">Care Guide</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium">Newsletter</h5>
            <form className="mt-3 flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/10" />
              <button className="rounded-md bg-black text-white px-4 py-2">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Enchantique</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
