import { ArrowRight, CalendarCheck, Phone } from "lucide-react";

export default function AppointmentCTA() {
  return (
    <section className="bg-blue-600 py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white">
          <CalendarCheck size={32} />
        </div>

        <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to Take Care of Your Health?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
          Schedule an appointment with our internal medicine specialists
          and take the next step toward better health.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/appointment"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            <CalendarCheck size={20} />
            Book an Appointment
            <ArrowRight size={18} />
          </a>

          <a
            href="tel:+251000000000"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-300 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
          >
            <Phone size={19} />
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
}