import {
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  UsersRound,
} from "lucide-react";

const values = [
  {
    title: "Patient First",
    description:
      "We listen to our patients and work together to provide care that respects their individual needs.",
    icon: HeartHandshake,
  },
  {
    title: "Professional Care",
    description:
      "Our clinic is committed to providing high-quality internal medicine services.",
    icon: Stethoscope,
  },
  {
    title: "Privacy & Respect",
    description:
      "We respect every patient's privacy, dignity, and confidentiality.",
    icon: ShieldCheck,
  },
  {
    title: "Long-Term Relationships",
    description:
      "We aim to build lasting relationships with patients and support their health over time.",
    icon: UsersRound,
  },
];

export default function AboutPage() {
  return (
    <main>

      {/* Header */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            About Us
          </span>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            About Our Clinic
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Providing trusted internal medicine care with compassion,
            professionalism, and respect.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Who We Are
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Comprehensive Internal Medicine Care
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our Internal Medicine Clinic is dedicated to providing
              comprehensive medical care for adults. We focus on understanding
              each patient's health needs and providing appropriate evaluation,
              treatment, and ongoing care.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Our approach combines medical knowledge with communication,
              compassion, and respect. We believe patients should understand
              their health and participate in decisions about their care.
            </p>
          </div>

          {/* Visual */}
          <div className="flex min-h-[350px] items-center justify-center rounded-3xl bg-blue-50">
            <div className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-white">
                <Stethoscope size={42} />
              </div>

              <p className="mt-5 text-xl font-bold text-slate-900">
                Trusted Medical Care
              </p>

              <p className="mt-2 text-slate-600">
                Your health is our priority.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Our Values
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              What We Stand For
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </main>
  );
}