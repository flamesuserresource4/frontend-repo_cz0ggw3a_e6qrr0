import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Camera, Heart, Shirt, Cpu, Pill } from 'lucide-react';

const categories = [
  {
    id: 'fashion',
    title: 'Fashion',
    color: 'from-fuchsia-500 to-pink-500',
    icon: Shirt,
    tagline: 'Runway-ready campaigns that turn looks into conversions.',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'beauty',
    title: 'Beauty',
    color: 'from-rose-500 to-amber-400',
    icon: Heart,
    tagline: 'Highlight textures, shades, and glows in stunning detail.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'electronics',
    title: 'Electronics',
    color: 'from-cyan-500 to-violet-500',
    icon: Cpu,
    tagline: 'Showcase specs with interactive 3D demos that sell themselves.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'health',
    title: 'Health Supplements',
    color: 'from-emerald-500 to-lime-500',
    icon: Pill,
    tagline: 'Build trust with credible stories and transparent benefits.',
    image: 'https://images.unsplash.com/photo-1627467959547-8e44da7aa00a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIZWFsdGglMjBTdXBwbGVtZW50c3xlbnwwfDB8fHwxNzYyNTE4NzYzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

function CategoryPanel({ item, index }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.6, once: false });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, scale: 1 });
    } else {
      controls.start({ opacity: 0.5, y: 40, scale: 0.98 });
    }
  }, [inView, controls]);

  const Icon = item.icon;

  return (
    <section ref={ref} id={item.id} className="relative h-[90vh] snap-start flex items-center">
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover opacity-80" />
        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} mix-blend-multiply opacity-60`} />
      </div>
      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 mx-auto max-w-6xl px-6"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs text-gray-800 shadow">
          <Icon className="h-4 w-4" />
          {item.title}
        </div>
        <h3 className="mt-4 text-4xl sm:text-5xl font-semibold text-white drop-shadow-lg">
          {item.title}
        </h3>
        <p className="mt-3 text-white/90 max-w-xl text-lg">
          {item.tagline}
        </p>
        <div className="mt-6 flex gap-3">
          <a href="#contact" className="rounded-lg bg-white text-gray-900 px-5 py-2 text-sm shadow hover:shadow-md">Book a demo</a>
          <a href="#why" className="rounded-lg bg-black/80 text-white px-5 py-2 text-sm">See how it works</a>
        </div>
      </motion.div>
    </section>
  );
}

export default function CategoryScroller() {
  return (
    <section id="categories" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-8">Explore categories</h2>
      </div>
      <div className="snap-y snap-mandatory h-[360vh] overflow-y-scroll rounded-3xl border border-black/5 shadow-inner">
        {categories.map((c, i) => (
          <CategoryPanel key={c.id} item={c} index={i} />
        ))}
      </div>
    </section>
  );
}
