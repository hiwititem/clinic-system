import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">

        {/* Left Content */}
        <div>
          {/* Small badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <Stethoscope size={17} />
            Specialized Internal Medicine Care
          </div>

          {/* Main heading */}
          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Expert Care for
            <span className="block text-blue-600">
              Your Health
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Comprehensive, compassionate medical care from experienced
            internal medicine specialists. Your health, our priority.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              <CalendarCheck size={20} />
              Book an Appointment
            </a>

            <a
              href="/doctors"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              Meet Our Doctors
              <ArrowRight size={19} />
            </a>
          </div>

          {/* Trust points */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="shrink-0 text-blue-600" size={20} />
              <span className="text-sm text-slate-600">
                Experienced Specialists
              </span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="shrink-0 text-blue-600" size={20} />
              <span className="text-sm text-slate-600">
                Patient-Centered Care
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CalendarCheck className="shrink-0 text-blue-600" size={20} />
              <span className="text-sm text-slate-600">
                Easy Booking
              </span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative">
          {/* Main image container */}
          <div className="relative mx-auto max-w-lg overflow-hidden rounded-3xl bg-blue-100 shadow-xl">

            {/* Temporary image placeholder */}
            <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50">
              <div className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                  <Stethoscope size={42} />
                </div>

                <p className="mt-5 text-lg font-semibold text-slate-800">
                  Professional Medical Care
                </p>

                <p className="mt-2 px-8 text-sm text-slate-500">
                  Your trusted partner in better health
                </p>
              </div>
            </div>
          </div>

          {/* Floating information card */}
          <div className="absolute -bottom-5 -left-4 rounded-2xl bg-white p-5 shadow-xl sm:-left-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50 text-green-600">
                <CheckCircle2 size={23} />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900">
                  Trusted Care
                </p>
                <p className="text-xs text-slate-500">
                  Your health matters
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}