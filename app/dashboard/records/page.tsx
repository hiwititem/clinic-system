import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Download,
  FileText,
  Stethoscope,
} from "lucide-react";

const records = [
  {
    title: "General Consultation",
    doctor: "Dr. Abebe Bekele",
    date: "August 12, 2026",
    type: "Consultation",
  },
  {
    title: "Blood Test Results",
    doctor: "MediCare Laboratory",
    date: "August 12, 2026",
    type: "Laboratory",
  },
  {
    title: "Follow-up Consultation",
    doctor: "Dr. Hana Tesfaye",
    date: "July 20, 2026",
    type: "Consultation",
  },
  {
    title: "Prescription",
    doctor: "Dr. Abebe Bekele",
    date: "July 20, 2026",
    type: "Prescription",
  },
];

export default function RecordsPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">

          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Stethoscope size={22} />
            </div>

            <span className="text-xl font-bold text-slate-900">
              MediCare
            </span>
          </div>

        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <p className="text-sm font-semibold text-blue-600">
          Patient Portal
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-900">
          Medical Records
        </h1>

        <p className="mt-2 text-slate-600">
          View your previous medical documents and visit information.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">

          <div className="border-b border-slate-200 px-6 py-5">
            <h2 className="font-bold text-slate-900">
              Your Records
            </h2>
          </div>

          <div className="divide-y divide-slate-200">

            {records.map((record) => (
              <div
                key={`${record.title}-${record.date}`}
                className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <FileText size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      {record.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {record.doctor}
                    </p>

                    <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                      <CalendarDays size={14} />
                      {record.date}

                      <span className="ml-2 rounded-full bg-slate-100 px-2 py-1">
                        {record.type}
                      </span>
                    </div>
                  </div>

                </div>

                <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                  <Download size={17} />
                  Download
                </button>

              </div>
            ))}

          </div>

        </div>

        <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-5">
          <p className="text-sm leading-6 text-blue-800">
            Your medical records will be securely stored and available only
            to authorized users after we connect the system to Supabase.
          </p>
        </div>

      </div>
    </main>
  );
}