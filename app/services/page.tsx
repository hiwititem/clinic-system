import {
  Activity,
  Apple,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Wind,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "General Internal Medicine",
    description:
      "Comprehensive evaluation, diagnosis, treatment, and ongoing care for adult patients.",
    icon: Stethoscope,
  },
  {
    title: "Diabetes Management",
    description:
      "Personalized support for diabetes management, monitoring, treatment, and healthy lifestyle choices.",
    icon: Activity,
  },
  {
    title: "Hypertension Management",
    description:
      "Evaluation and management of high blood pressure with individualized treatment plans.",
    icon: HeartPulse,
  },
  {
    title: "Respiratory Care",
    description:
      "Assessment and treatment of common respiratory conditions and breathing-related concerns.",
    icon: Wind,
  },
  {
    title: "Digestive Health",
    description:
      "Medical evaluation and management of digestive and gastrointestinal health concerns.",
    icon: Apple,
  },
  {
    title: "Preventive Medicine",
    description:
      "Health screening, routine assessments, and preventive care to support long-term health.",
    icon: ShieldCheck,
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Medical Services
          </span>

          <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
            Our Services
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Comprehensive internal medicine services designed around the
            individual needs of every patient.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-slate-200 p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h2 className="mt-6 text-xl font-bold text-slate-900">
                    {service.title}
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <a
                    href="/appointment"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600"
                  >
                    Book Appointment
                    <ArrowRight size={17} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}