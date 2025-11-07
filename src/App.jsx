import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import CategoryScroller from './components/CategoryScroller';
import WhyUs from './components/WhyUs';
import ContactCTA from './components/ContactCTA';

function Footer() {
  return (
    <footer className="py-10 border-t border-black/5 text-center text-sm text-gray-600">
      © {new Date().getFullYear()} PulseCommerce. All rights reserved.
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="relative">
        <Hero3D />
        <CategoryScroller />
        <WhyUs />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
