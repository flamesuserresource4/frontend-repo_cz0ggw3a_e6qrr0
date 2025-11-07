import { Mail } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-3xl text-center px-4">
        <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Ready to elevate your product marketing?</h3>
        <p className="mt-3 text-gray-600">Book a 20‑minute walkthrough and see how brands drive results with immersive 3D campaigns.</p>
        <form className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <input type="email" required placeholder="you@brand.com" className="w-full sm:w-80 rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
          <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-black text-white px-5 py-3">
            <Mail className="h-4 w-4" />
            Request demo
          </button>
        </form>
        <p className="mt-3 text-xs text-gray-500">We care about your data in our privacy policy.</p>
      </div>
    </section>
  );
}
