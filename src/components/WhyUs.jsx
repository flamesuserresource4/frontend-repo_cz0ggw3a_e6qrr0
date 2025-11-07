import { Star, ShieldCheck, Sparkles } from 'lucide-react';

const features = [
  {
    title: 'Immersive 3D visuals',
    icon: Sparkles,
    desc: 'Show products in interactive scenes that boost engagement and conversion.',
  },
  {
    title: 'Data‑driven targeting',
    icon: Star,
    desc: 'AI‑assisted audiences and insights to reach the right customers at scale.',
  },
  {
    title: 'Brand‑safe & secure',
    icon: ShieldCheck,
    desc: 'Enterprise‑grade privacy, uptime, and compliance you can trust.',
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="rounded-2xl border border-black/5 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 rounded-xl bg-black text-white grid place-items-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
