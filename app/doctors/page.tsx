import {
  Award,
  CalendarCheck,
  GraduationCap,
  Stethoscope,
} from "lucide-react";

const doctors = [
  {
    name: "Dr. Abebe Bekele",
    specialty: "Internal Medicine Specialist",
    experience: "10+ Years Experience",
    education: "MD, Internal Medicine",
  },
  {
    name: "Dr. Hana Tesfaye",
    specialty: "Internal Medicine Specialist",
    experience: "8+ Years Experience",
    education: "MD, Internal Medicine",
  },
  {
    name: "Dr. Daniel Alemu",
    specialty: "Internal Medicine Specialist",
    experience: "7+ Years Experience",
    education: "MD, Internal Medicine",
  },
];

export default function DoctorsPage() {
  return (
    <main>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Medical Team
          </span>

          <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
            Meet Our Doctors
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Experienced specialists committed to providing high-quality
            internal medicine care.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <div
                key={doctor.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-blue-50">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Stethoscope size={48} />
                  </div>
                </div>

                <div className="p-7">
                  <h2 className="text-xl font-bold text-slate-900">
                    {doctor.name}
                  </h2>

                  <p className="mt-1 font-medium text-blue-600">
                    {doctor.specialty}
                  </p>

                  <div className="mt-6 space-y-3">
                    <p className="flex items-center gap-3 text-sm text-slate-600">
                      <Award size={18} className="text-blue-600" />
                      {doctor.experience}
                    </p>

                    <p className="flex items-center gap-3 text-sm text-slate-600">
                      <GraduationCap size={18} className="text-blue-600" />
                      {doctor.education}
                    </p>
                  </div>

                  <a
                    href="/appointment"
                    className="mt-7 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
                  >
                    <CalendarCheck size={18} />
                    Book Appointment
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}