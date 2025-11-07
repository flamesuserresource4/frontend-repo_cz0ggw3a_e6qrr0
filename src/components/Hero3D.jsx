import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero3D() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        {/* Replace with your Spline scene URL if desired */}
        <Spline scene="https://prod.spline.design/0hLLWcuVJkK1oTnI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-black/80 text-white px-3 py-1 text-xs mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Omnichannel Product Marketing Platform
          </span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
            Market fashion, beauty, electronics & health with immersive 3D stories
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Launch high‑converting campaigns with interactive 3D visuals, smart targeting,
            and seamless category journeys—all in one platform.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#categories" className="rounded-lg bg-black text-white px-5 py-3 text-sm hover:bg-gray-900">Explore Categories</a>
            <a href="#why" className="rounded-lg bg-white text-gray-900 px-5 py-3 text-sm border border-gray-200 hover:border-gray-300">How it Works</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
