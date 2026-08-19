import Link from "next/link";
import {
  Activity,
  CalendarDays,
  ChevronRight,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  Stethoscope,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Total Patients",
    value: "1,248",
    icon: Users,
    description: "+12% this month",
  },
  {
    title: "Appointments",
    value: "86",
    icon: CalendarDays,
    description: "18 today",
  },
  {
    title: "Doctors",
    value: "12",
    icon: Stethoscope,
    description: "10 available",
  },
  {
    title: "Articles",
    value: "24",
    icon: FileText,
    description: "3 drafts",
  },
];

export default function AdminDashboard() {
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
              Admin Panel
            </p>
          </div>

        </div>

        <nav className="p-4">

          <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Management
          </p>

          <div className="mt-2 space-y-1">

            <Link
              href="/admin"
              className="flex items-center gap-3 rounded-lg bg-blue-50 px-3 py-3 font-semibold text-blue-600"
            >
              <LayoutDashboard size={20} />
              Dashboard
            </Link>

            <Link
              href="/admin/appointments"
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-slate-600 hover:bg-slate-100"
            >
              <CalendarDays size={20} />
              Appointments
            </Link>

            <Link
              href="/admin/doctors"
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-slate-600 hover:bg-slate-100"
            >
              <Stethoscope size={20} />
              Doctors
            </Link>

            <Link
              href="/admin/patients"
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-slate-600 hover:bg-slate-100"
            >
              <Users size={20} />
              Patients
            </Link>

            <Link
              href="/admin/articles"
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-slate-600 hover:bg-slate-100"
            >
              <FileText size={20} />
              Articles
            </Link>

          </div>

          <p className="mt-8 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            System
          </p>

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
              Administration
            </p>

            <h1 className="text-xl font-bold text-slate-900">
              Clinic Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3">

            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-slate-900">
                Clinic Admin
              </p>

              <p className="text-xs text-slate-500">
                Administrator
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Users size={21} />
            </div>

          </div>

        </header>

        <div className="p-4 sm:p-6 lg:p-8">

          {/* Welcome */}
          <div className="rounded-2xl bg-blue-600 p-7 text-white">

            <p className="text-blue-100">
              Clinic Management System
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Good morning, Admin
            </h2>

            <p className="mt-3 max-w-2xl text-blue-100">
              Manage patients, doctors, appointments and health articles
              from one central dashboard.
            </p>

          </div>

          {/* Statistics */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={22} />
                  </div>

                  <p className="mt-5 text-sm text-slate-500">
                    {stat.title}
                  </p>

                  <p className="mt-1 text-3xl font-bold text-slate-900">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-xs font-medium text-green-600">
                    {stat.description}
                  </p>

                </div>
              );
            })}

          </div>

          {/* Today's appointments */}
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white">

            <div className="flex items-center justify-between border-b border-slate-200 p-6">

              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Today's Appointments
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Appointments scheduled for today
                </p>
              </div>

              <Link
                href="/admin/appointments"
                className="flex items-center gap-1 text-sm font-semibold text-blue-600"
              >
                View All
                <ChevronRight size={17} />
              </Link>

            </div>

            <div className="divide-y divide-slate-200">

              {[
                ["08:30 AM", "John Patient", "Dr. Abebe Bekele", "Confirmed"],
                ["10:00 AM", "Sara Mohammed", "Dr. Hana Tesfaye", "Confirmed"],
                ["11:30 AM", "Michael Alemu", "Dr. Daniel Alemu", "Pending"],
                ["02:00 PM", "Meron Tadesse", "Dr. Abebe Bekele", "Confirmed"],
              ].map((appointment) => (

                <div
                  key={`${appointment[0]}-${appointment[1]}`}
                  className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
                >

                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <CalendarDays size={20} />
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900">
                        {appointment[1]}
                      </p>

                      <p className="text-sm text-slate-500">
                        {appointment[2]}
                      </p>
                    </div>

                  </div>

                  <div className="flex items-center gap-5">

                    <span className="text-sm font-medium text-slate-600">
                      {appointment[0]}
                    </span>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                      {appointment[3]}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Quick actions */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <Link
              href="/admin/appointments"
              className="rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-300"
            >
              <CalendarDays className="text-blue-600" />
              <h3 className="mt-4 font-bold text-slate-900">
                Manage Appointments
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Review and manage bookings.
              </p>
            </Link>

            <Link
              href="/admin/doctors"
              className="rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-300"
            >
              <Stethoscope className="text-blue-600" />
              <h3 className="mt-4 font-bold text-slate-900">
                Manage Doctors
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Add and manage clinic doctors.
              </p>
            </Link>

            <Link
              href="/admin/patients"
              className="rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-300"
            >
              <Users className="text-blue-600" />
              <h3 className="mt-4 font-bold text-slate-900">
                Manage Patients
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                View registered patients.
              </p>
            </Link>

            <Link
              href="/admin/articles"
              className="rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-300"
            >
              <FileText className="text-blue-600" />
              <h3 className="mt-4 font-bold text-slate-900">
                Manage Articles
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Publish health information.
              </p>
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}