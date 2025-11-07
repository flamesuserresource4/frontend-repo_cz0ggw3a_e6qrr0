import { Rocket, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-500 grid place-items-center text-white">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold text-lg tracking-tight">PulseCommerce</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#categories" className="text-gray-700 hover:text-gray-900">Categories</a>
          <a href="#why" className="text-gray-700 hover:text-gray-900">Why Us</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-lg bg-black text-white px-4 py-2 text-sm shadow-sm hover:shadow-md transition-shadow">
          <ShoppingBag className="h-4 w-4" />
          Get Started
        </button>
      </div>
    </header>
  );
}
