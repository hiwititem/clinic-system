import {
  ArrowRight,
  Award,
  CalendarCheck,
  GraduationCap,
} from "lucide-react";

const doctors = [
  {
    name: "Dr. Abebe Bekele",
    specialty: "Internal Medicine Specialist",
    experience: "10+ Years Experience",
    education: "MD, Internal Medicine",
    image: "/images/doctor-1.jpg",
  },
  {
    name: "Dr. Hana Tesfaye",
    specialty: "Internal Medicine Specialist",
    experience: "8+ Years Experience",
    education: "MD, Internal Medicine",
    image: "/images/doctor-2.jpg",
  },
  {
    name: "Dr. Daniel Alemu",
    specialty: "Internal Medicine Specialist",
    experience: "7+ Years Experience",
    education: "MD, Internal Medicine",
    image: "/images/doctor-3.jpg",
  },
];

export default function Doctors() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Our Doctors
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Meet Our Specialists
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Experienced medical professionals dedicated to providing
            personalized care for every patient.
          </p>
        </div>

        {/* Doctor cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Doctor image */}
              <div className="aspect-[4/3] overflow-hidden bg-blue-50">
                <div className="flex h-full items-center justify-center">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <GraduationCap size={50} />
                  </div>
                </div>
              </div>

              {/* Information */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {doctor.name}
                </h3>

                <p className="mt-1 font-medium text-blue-600">
                  {doctor.specialty}
                </p>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Award size={18} className="text-blue-600" />
                    {doctor.experience}
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <GraduationCap size={18} className="text-blue-600" />
                    {doctor.education}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t pt-5">
                  <a
                    href="/doctors"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition group-hover:gap-3"
                  >
                    View Profile
                    <ArrowRight size={16} />
                  </a>

                  <a
                    href="/appointment"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                    aria-label={`Book appointment with ${doctor.name}`}
                  >
                    <CalendarCheck size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/doctors"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            Meet All Doctors
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}