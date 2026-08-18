import {
  Award,
  CalendarCheck,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  UsersRound,
} from "lucide-react";

const features = [
  {
    title: "Experienced Specialists",
    description:
      "Our medical team provides professional internal medicine care based on experience, knowledge, and evidence-based practice.",
    icon: Award,
  },
  {
    title: "Patient-Centered Care",
    description:
      "We listen to your concerns and work with you to develop a care plan that fits your individual health needs.",
    icon: HeartHandshake,
  },
  {
    title: "Comprehensive Care",
    description:
      "From diagnosis and treatment to ongoing health management, we provide comprehensive adult medical care.",
    icon: Stethoscope,
  },
  {
    title: "Trusted & Confidential",
    description:
      "Your privacy, dignity, and personal medical information are treated with care and confidentiality.",
    icon: ShieldCheck,
  },
  {
    title: "Easy Appointment Booking",
    description:
      "Request an appointment online without unnecessary waiting or complicated booking processes.",
    icon: CalendarCheck,
  },
  {
    title: "Focused on Your Well-Being",
    description:
      "We aim to build long-term relationships with our patients and support healthier lives.",
    icon: UsersRound,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Care You Can Trust
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            We combine medical expertise with compassionate, patient-focused
            care to help you achieve better health.
          </p>
        </div>

        {/* Features */}
        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group flex gap-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}