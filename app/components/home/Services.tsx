import {
  Activity,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Wind,
  Apple,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "General Internal Medicine",
    description:
      "Comprehensive medical care for adults, including diagnosis, treatment, and ongoing health management.",
    icon: Stethoscope,
  },
  {
    title: "Diabetes Management",
    description:
      "Personalized care to help manage diabetes and support long-term health and wellness.",
    icon: Activity,
  },
  {
    title: "Hypertension Management",
    description:
      "Professional evaluation and treatment plans to help control high blood pressure.",
    icon: HeartPulse,
  },
  {
    title: "Respiratory Care",
    description:
      "Evaluation and management of common respiratory conditions and breathing problems.",
    icon: Wind,
  },
  {
    title: "Digestive Health",
    description:
      "Medical care for digestive concerns and conditions affecting the gastrointestinal system.",
    icon: Apple,
  },
  {
    title: "Preventive Medicine",
    description:
      "Health assessments, screening, and preventive care designed to keep you healthy.",
    icon: ShieldCheck,
  },
];

export default function Services() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Our Services
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Comprehensive Care for Your Health
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Our internal medicine specialists provide personalized,
            comprehensive care to help you maintain and improve your health.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={25} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>

                {/* Learn more */}
                <a
                  href="/services"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition group-hover:gap-3"
                >
                  Learn More
                  <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            View All Services
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}