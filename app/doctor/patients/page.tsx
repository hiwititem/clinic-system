import Link from "next/link";
import {
  ArrowLeft,
  Eye,
  Search,
  UserRound,
} from "lucide-react";

const patients = [
  {
    name: "John Patient",
    age: 34,
    gender: "Male",
    condition: "Hypertension",
  },
  {
    name: "Sara Mohammed",
    age: 42,
    gender: "Female",
    condition: "Diabetes",
  },
  {
    name: "Michael Alemu",
    age: 29,
    gender: "Male",
    condition: "Asthma",
  },
];

export default function DoctorPatientsPage() {
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
              My Patients
            </h1>

            <p className="mt-2 text-slate-600">
              Patients assigned to you.
            </p>

          </div>

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              placeholder="Search patient..."
              className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-11 pr-4 outline-none focus:border-blue-600 sm:w-72"
            />

          </div>

        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {patients.map((patient) => (

            <div
              key={patient.name}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <UserRound size={25} />
                </div>

                <div>

                  <h2 className="font-bold text-slate-900">
                    {patient.name}
                  </h2>

                  <p className="text-sm text-slate-500">
                    {patient.age} years • {patient.gender}
                  </p>

                </div>

              </div>

              <div className="mt-6 rounded-lg bg-slate-50 p-4">

                <p className="text-xs font-semibold uppercase text-slate-400">
                  Current Condition
                </p>

                <p className="mt-1 font-semibold text-slate-900">
                  {patient.condition}
                </p>

              </div>

              <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                <Eye size={17} />
                View Patient
              </button>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}