import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock,
  Stethoscope,
} from "lucide-react";

const appointments = [
  {
    patient: "John Patient",
    date: "August 25, 2026",
    time: "08:30 AM",
    type: "General Consultation",
    status: "Confirmed",
  },
  {
    patient: "Sara Mohammed",
    date: "August 25, 2026",
    time: "10:00 AM",
    type: "Follow-up Visit",
    status: "Confirmed",
  },
  {
    patient: "Michael Alemu",
    date: "August 25, 2026",
    time: "11:30 AM",
    type: "Medical Checkup",
    status: "Pending",
  },
];

export default function DoctorAppointmentsPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

        <Link
          href="/doctor"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600"
        >
          <ArrowLeft size={17} />
          Doctor Dashboard
        </Link>

        <div className="mt-5">

          <p className="text-sm font-semibold text-blue-600">
            Doctor Portal
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            My Appointments
          </h1>

          <p className="mt-2 text-slate-600">
            Manage your scheduled patient appointments.
          </p>

        </div>

        <div className="mt-8 space-y-4">

          {appointments.map((appointment) => (

            <div
              key={`${appointment.patient}-${appointment.time}`}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >

              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <CalendarDays size={22} />
                  </div>

                  <div>

                    <h2 className="font-bold text-slate-900">
                      {appointment.patient}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      {appointment.type}
                    </p>

                  </div>

                </div>

                <div className="flex flex-wrap items-center gap-4">

                  <span className="flex items-center gap-2 text-sm text-slate-600">
                    <CalendarDays size={17} />
                    {appointment.date}
                  </span>

                  <span className="flex items-center gap-2 text-sm text-slate-600">
                    <Clock size={17} />
                    {appointment.time}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      appointment.status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {appointment.status}
                  </span>

                </div>

              </div>

              <div className="mt-5 flex flex-wrap gap-3 border-t border-slate-200 pt-5">

                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                  View Patient
                </button>

                <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                  Add Medical Note
                </button>

                {appointment.status === "Pending" && (
                  <button className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700">
                    <CheckCircle2 size={17} />
                    Confirm
                  </button>
                )}

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}