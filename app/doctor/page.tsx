import Link from "next/link";
import {
  CalendarDays,
  CheckCircle2,
  Clock,
  FileText,
  LogOut,
  Settings,
  Stethoscope,
  UserRound,
  Users,
} from "lucide-react";

const appointments = [
  {
    time: "08:30 AM",
    patient: "John Patient",
    type: "General Consultation",
    status: "Confirmed",
  },
  {
    time: "10:00 AM",
    patient: "Sara Mohammed",
    type: "Follow-up Visit",
    status: "Confirmed",
  },
  {
    time: "11:30 AM",
    patient: "Michael Alemu",
    type: "Medical Checkup",
    status: "Pending",
  },
  {
    time: "02:00 PM",
    patient: "Meron Tadesse",
    type: "Diabetes Follow-up",
    status: "Confirmed",
  },
];

export default function DoctorDashboard() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* Sidebar */}

      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-200 bg-white lg:block">

        <div className="flex h-20 items-center gap-3 border-b border-slate-200 px-6">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
            <Stethoscope size={24} />
          </div>

          <div>
            <p className="font-bold text-slate-900">
              MediCare
            </p>

            <p className="text-xs text-slate-500">
              Doctor Portal
            </p>
          </div>

        </div>

        <nav className="p-4">

          <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Doctor
          </p>

          <div className="mt-2 space-y-1">

            <Link
              href="/doctor"
              className="flex items-center gap-3 rounded-lg bg-blue-50 px-3 py-3 font-semibold text-blue-600"
            >
              <CalendarDays size={20} />
              Dashboard
            </Link>

            <Link
              href="/doctor/appointments"
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-slate-600 hover:bg-slate-100"
            >
              <CalendarDays size={20} />
              Appointments
            </Link>

            <Link
              href="/doctor/patients"
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-slate-600 hover:bg-slate-100"
            >
              <Users size={20} />
              My Patients
            </Link>

            <Link
              href="/doctor/records"
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-slate-600 hover:bg-slate-100"
            >
              <FileText size={20} />
              Medical Records
            </Link>

          </div>

          <p className="mt-8 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Account
          </p>

          <Link
            href="/doctor/profile"
            className="flex items-center gap-3 rounded-lg px-3 py-3 text-slate-600 hover:bg-slate-100"
          >
            <UserRound size={20} />
            My Profile
          </Link>

          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 rounded-lg px-3 py-3 text-slate-600 hover:bg-slate-100"
          >
            <Settings size={20} />
            Settings
          </Link>

          <Link
            href="/"
            className="mt-1 flex items-center gap-3 rounded-lg px-3 py-3 text-slate-600 hover:bg-slate-100"
          >
            <LogOut size={20} />
            Logout
          </Link>

        </nav>

      </aside>

      {/* Main */}

      <div className="lg:pl-64">

        <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">

          <div>
            <p className="text-sm text-slate-500">
              Doctor Portal
            </p>

            <h1 className="text-xl font-bold text-slate-900">
              Doctor Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3">

            <div className="hidden text-right sm:block">

              <p className="text-sm font-semibold text-slate-900">
                Dr. Abebe Bekele
              </p>

              <p className="text-xs text-slate-500">
                Internal Medicine
              </p>

            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Stethoscope size={21} />
            </div>

          </div>

        </header>

        <div className="p-4 sm:p-6 lg:p-8">

          {/* Welcome */}

          <div className="rounded-2xl bg-blue-600 p-7 text-white">

            <p className="text-blue-100">
              Internal Medicine Department
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Good morning, Dr. Abebe
            </h2>

            <p className="mt-3 max-w-2xl text-blue-100">
              Here is an overview of your appointments and patients for
              today.
            </p>

          </div>

          {/* Statistics */}

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-2xl border border-slate-200 bg-white p-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <CalendarDays size={22} />
              </div>

              <p className="mt-5 text-sm text-slate-500">
                Today's Appointments
              </p>

              <p className="mt-1 text-3xl font-bold text-slate-900">
                8
              </p>

            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <CheckCircle2 size={22} />
              </div>

              <p className="mt-5 text-sm text-slate-500">
                Completed
              </p>

              <p className="mt-1 text-3xl font-bold text-slate-900">
                5
              </p>

            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600">
                <Clock size={22} />
              </div>

              <p className="mt-5 text-sm text-slate-500">
                Pending
              </p>

              <p className="mt-1 text-3xl font-bold text-slate-900">
                3
              </p>

            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <Users size={22} />
              </div>

              <p className="mt-5 text-sm text-slate-500">
                Total Patients
              </p>

              <p className="mt-1 text-3xl font-bold text-slate-900">
                156
              </p>

            </div>

          </div>

          {/* Appointments */}

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white">

            <div className="border-b border-slate-200 p-6">

              <h2 className="text-xl font-bold text-slate-900">
                Today's Appointments
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your scheduled patients for today.
              </p>

            </div>

            <div className="divide-y divide-slate-200">

              {appointments.map((appointment) => (

                <div
                  key={`${appointment.time}-${appointment.patient}`}
                  className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
                >

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Clock size={21} />
                    </div>

                    <div>

                      <p className="font-bold text-slate-900">
                        {appointment.patient}
                      </p>

                      <p className="text-sm text-slate-500">
                        {appointment.type}
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-5">

                    <span className="text-sm font-semibold text-slate-600">
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

                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                      View
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Quick actions */}

          <div className="mt-8 grid gap-5 sm:grid-cols-3">

            <Link
              href="/doctor/appointments"
              className="rounded-xl border border-slate-200 bg-white p-6 hover:border-blue-300"
            >
              <CalendarDays className="text-blue-600" />

              <h3 className="mt-4 font-bold text-slate-900">
                Manage Appointments
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                View and update your appointments.
              </p>

            </Link>

            <Link
              href="/doctor/patients"
              className="rounded-xl border border-slate-200 bg-white p-6 hover:border-blue-300"
            >
              <Users className="text-blue-600" />

              <h3 className="mt-4 font-bold text-slate-900">
                My Patients
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                View your assigned patients.
              </p>

            </Link>

            <Link
              href="/doctor/records"
              className="rounded-xl border border-slate-200 bg-white p-6 hover:border-blue-300"
            >
              <FileText className="text-blue-600" />

              <h3 className="mt-4 font-bold text-slate-900">
                Medical Records
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Manage patient medical records.
              </p>

            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}