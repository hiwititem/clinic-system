import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock,
  Stethoscope,
  XCircle,
} from "lucide-react";

const appointments = [
  {
    patient: "John Patient",
    doctor: "Dr. Abebe Bekele",
    date: "August 25, 2026",
    time: "10:00 AM",
    status: "Confirmed",
  },
  {
    patient: "Sara Mohammed",
    doctor: "Dr. Hana Tesfaye",
    date: "August 25, 2026",
    time: "11:30 AM",
    status: "Pending",
  },
  {
    patient: "Michael Alemu",
    doctor: "Dr. Daniel Alemu",
    date: "August 26, 2026",
    time: "09:00 AM",
    status: "Confirmed",
  },
];

export default function AdminAppointmentsPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600"
        >
          <ArrowLeft size={17} />
          Admin Dashboard
        </Link>

        <div className="mt-5">

          <h1 className="text-3xl font-bold text-slate-900">
            Appointments
          </h1>

          <p className="mt-2 text-slate-600">
            Manage patient appointments and booking requests.
          </p>

        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <CalendarDays className="text-blue-600" />
            <p className="mt-4 text-sm text-slate-500">
              Total Appointments
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-900">
              86
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <CheckCircle2 className="text-green-600" />
            <p className="mt-4 text-sm text-slate-500">
              Confirmed
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-900">
              64
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <Clock className="text-yellow-600" />
            <p className="mt-4 text-sm text-slate-500">
              Pending
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-900">
              22
            </p>
          </div>

        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[850px]">

              <thead className="border-b border-slate-200 bg-slate-50">

                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                    Patient
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                    Doctor
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                    Date
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                    Time
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                    Status
                  </th>

                  <th className="px-6 py-4 text-right text-xs font-semibold uppercase text-slate-500">
                    Actions
                  </th>
                </tr>

              </thead>

              <tbody className="divide-y divide-slate-200">

                {appointments.map((appointment) => (

                  <tr
                    key={`${appointment.patient}-${appointment.date}`}
                    className="hover:bg-slate-50"
                  >

                    <td className="px-6 py-5 font-semibold text-slate-900">
                      {appointment.patient}
                    </td>

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Stethoscope size={17} className="text-blue-600" />
                        {appointment.doctor}
                      </div>

                    </td>

                    <td className="px-6 py-5 text-sm text-slate-600">
                      {appointment.date}
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-600">
                      {appointment.time}
                    </td>

                    <td className="px-6 py-5">

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          appointment.status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {appointment.status}
                      </span>

                    </td>

                    <td className="px-6 py-5">

                      <div className="flex justify-end gap-2">

                        {appointment.status === "Pending" && (
                          <button className="rounded-lg p-2 text-green-600 hover:bg-green-50">
                            <CheckCircle2 size={19} />
                          </button>
                        )}

                        <button className="rounded-lg p-2 text-red-600 hover:bg-red-50">
                          <XCircle size={19} />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </main>
  );
}