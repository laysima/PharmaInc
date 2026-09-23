const features = [
  {
    label: "One calm dashboard",
    title: "Your care, clearly organized",
    description:
      "See refills, reminders, consultations, and deliveries together—so staying on top of your health feels simple, not overwhelming.",
  },
  {
    label: "Wellness that gives back",
    title: "Healthy habits earn real rewards",
    description:
      "Earn points when you refill on time, complete a care plan, or make healthier choices—then use them on everyday wellness essentials.",
  },
  {
    label: "Always in the loop",
    title: "Follow every step of your care",
    description:
      "Get timely updates from your pharmacist, care team, and courier in one private feed—with less chasing and no guesswork.",
  },
];

export default function FeatureShowcase() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 text-white shadow-2xl shadow-slate-900/15">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="relative border-b border-white/10 px-7 py-14 text-center sm:px-12 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-300">
            Care without the clutter
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Everything your health needs, in one place
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
            From medication reminders to trusted advice and doorstep delivery,
            PharmaInc keeps every part of your care connected.
          </p>
        </div>

        <div className="relative grid gap-px bg-white/10 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="bg-slate-950 px-8 py-14 sm:px-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-300">
                {feature.label}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
                {feature.title}
              </h3>
              <p className="mt-5 text-base leading-7 text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
