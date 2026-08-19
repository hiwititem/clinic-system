import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  Save,
  Stethoscope,
  UserRound,
} from "lucide-react";

export default function DoctorProfilePage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">

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
            My Profile
          </h1>

          <p className="mt-2 text-slate-600">
            Manage your professional information.
          </p>

        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">

          <div className="flex flex-col items-center border-b border-slate-200 pb-8">

            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Stethoscope size={50} />
            </div>

            <h2 className="mt-4 text-xl font-bold text-slate-900">
              Dr. Abebe Bekele
            </h2>

            <p className="text-sm text-slate-500">
              Internal Medicine Specialist
            </p>

          </div>

          <form className="mt-8 space-y-6">

            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Full Name
                </label>

                <div className="relative mt-2">

                  <UserRound
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    defaultValue="Dr. Abebe Bekele"
                    className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 outline-none focus:border-blue-600"
                  />

                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Email
                </label>

                <div className="relative mt-2">

                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="email"
                    defaultValue="doctor@medicare.com"
                    className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 outline-none focus:border-blue-600"
                  />

                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Phone
                </label>

                <div className="relative mt-2">

                  <Phone
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="tel"
                    defaultValue="+251 900 000 000"
                    className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 outline-none focus:border-blue-600"
                  />

                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Specialty
                </label>

                <input
                  type="text"
                  defaultValue="Internal Medicine"
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Years of Experience
                </label>

                <input
                  type="number"
                  defaultValue="12"
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Medical License Number
                </label>

                <input
                  type="text"
                  placeholder="License number"
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

            </div>

            <div>

              <label className="text-sm font-semibold text-slate-700">
                Professional Biography
              </label>

              <textarea
                rows={5}
                defaultValue="Internal Medicine specialist focused on comprehensive adult healthcare, disease prevention, diagnosis and treatment."
                className="mt-2 w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />

            </div>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              <Save size={18} />
              Save Profile
            </button>

          </form>

        </div>

      </div>

    </main>
  );
}