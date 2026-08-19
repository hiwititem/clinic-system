import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  Plus,
  Search,
  UserRound,
} from "lucide-react";

const records = [
  {
    patient: "John Patient",
    record: "Hypertension Follow-up",
    date: "August 12, 2026",
  },
  {
    patient: "Sara Mohammed",
    record: "Diabetes Consultation",
    date: "August 10, 2026",
  },
  {
    patient: "Michael Alemu",
    record: "Asthma Review",
    date: "August 5, 2026",
  },
];

export default function DoctorRecordsPage() {
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

        <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <p className="text-sm font-semibold text-blue-600">
              Doctor Portal
            </p>

            <h1 className="mt-1 text-3xl font-bold text-slate-900">
              Medical Records
            </h1>

            <p className="mt-2 text-slate-600">
              Review and create patient medical records.
            </p>

          </div>

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              placeholder="Search records..."
              className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-11 pr-4 outline-none focus:border-blue-600 sm:w-72"
            />

          </div>

        </div>

        <div className="mt-8 space-y-4">

          {records.map((record) => (

            <div
              key={`${record.patient}-${record.date}`}
              className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FileText size={22} />
                </div>

                <div>

                  <h2 className="font-bold text-slate-900">
                    {record.record}
                  </h2>

                  <p className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                    <UserRound size={15} />
                    {record.patient}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {record.date}
                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <button className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                  View
                </button>

                <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
                  <Plus size={17} />
                  Add Record
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}