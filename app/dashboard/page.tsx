"use client";

import Link from "next/link";
import {
  CalendarCheck,
  CalendarDays,
  ChevronRight,
  Clock,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  Stethoscope,
  UserRound,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 transform border-r border-slate-200 bg-white transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-slate-200 px-6">

          <Link href="/" className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Stethoscope size={24} />
            </div>

            <div>
              <p className="text-lg font-bold text-slate-900">
                MediCare
              </p>

              <p className="text-xs text-slate-500">
                Patient Portal
              </p>
            </div>

          </Link>

          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
          >
            <X size={20} />
          </button>

        </div>

        {/* Navigation */}
        <nav className="p-4">

          <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Patient Portal
          </p>

          <div className="mt-2 space-y-1">

            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-lg bg-blue-50 px-3 py-3 font-semibold text-blue-600"
            >
              <LayoutDashboard size={20} />
              Dashboard
            </Link>

            <Link
              href="/dashboard/appointments"
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-slate-600 transition hover:bg-slate-100"
            >
              <CalendarDays size={20} />
              My Appointments
            </Link>

            <Link
              href="/doctors"
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-slate-600 transition hover:bg-slate-100"
            >
              <Users size={20} />
              Find a Doctor
            </Link>

            <Link
              href="/dashboard/profile"
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-slate-600 transition hover:bg-slate-100"
            >
              <UserRound size={20} />
              My Profile
            </Link>

          </div>

          <p className="mt-8 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Account
          </p>

          <div className="mt-2 space-y-1">

            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-slate-600 transition hover:bg-slate-100"
            >
              <Settings size={20} />
              Settings
            </Link>

            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-slate-600 transition hover:bg-slate-100"
            >
              <LogOut size={20} />
              Logout
            </Link>

          </div>

        </nav>

      </aside>

      {/* Main content */}
      <div className="lg:pl-72">

        {/* Header */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6 lg:px-8">

          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
          >
            <Menu size={24} />
          </button>

          <div className="hidden lg:block">
            <p className="text-sm text-slate-500">
              Patient Portal
            </p>

            <h1 className="text-xl font-bold text-slate-900">
              Dashboard
            </h1>
          </div>

          {/* Patient */}
          <div className="ml-auto flex items-center gap-3">

            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-slate-900">
                John Patient
              </p>

              <p className="text-xs text-slate-500">
                Patient
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <UserRound size={22} />
            </div>

          </div>

        </header>

        {/* Dashboard body */}
        <div className="p-4 sm:p-6 lg:p-8">

          {/* Welcome */}
          <section className="rounded-2xl bg-blue-600 p-6 text-white sm:p-8">

            <div className="max-w-2xl">

              <p className="text-sm font-medium text-blue-100">
                Wednesday, August 19, 2026
              </p>

              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                Welcome back, John!
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-blue-100">
                Manage your appointments, find doctors, and keep your
                healthcare information organized in one place.
              </p>

              <Link
                href="/appointment"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                <CalendarCheck size={19} />
                Book an Appointment
              </Link>

            </div>

          </section>

          {/* Statistics */}
          <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* Card 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <CalendarDays size={22} />
                </div>

                <span className="text-xs font-medium text-green-600">
                  Active
                </span>

              </div>

              <p className="mt-5 text-sm text-slate-500">
                Upcoming Appointments
              </p>

              <p className="mt-1 text-3xl font-bold text-slate-900">
                2
              </p>

            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <Stethoscope size={22} />
              </div>

              <p className="mt-5 text-sm text-slate-500">
                Doctors Visited
              </p>

              <p className="mt-1 text-3xl font-bold text-slate-900">
                4
              </p>

            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <FileText size={22} />
              </div>

              <p className="mt-5 text-sm text-slate-500">
                Medical Records
              </p>

              <p className="mt-1 text-3xl font-bold text-slate-900">
                6
              </p>

            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <Clock size={22} />
              </div>

              <p className="mt-5 text-sm text-slate-500">
                Last Visit
              </p>

              <p className="mt-1 text-xl font-bold text-slate-900">
                Aug 12
              </p>

            </div>

          </section>

          {/* Two columns */}
          <section className="mt-8 grid gap-8 xl:grid-cols-3">

            {/* Upcoming appointment */}
            <div className="rounded-2xl border border-slate-200 bg-white xl:col-span-2">

              <div className="flex items-center justify-between border-b border-slate-200 p-6">

                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Upcoming Appointment
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Your next scheduled visit
                  </p>
                </div>

                <Link
                  href="/dashboard/appointments"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  View All
                </Link>

              </div>

              <div className="p-6">

                <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-4">

                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-blue-600">
                        <Stethoscope size={25} />
                      </div>

                      <div>
                        <h3 className="font-bold text-slate-900">
                          Dr. Abebe Bekele
                        </h3>

                        <p className="mt-1 text-sm text-slate-600">
                          Internal Medicine Specialist
                        </p>
                      </div>

                    </div>

                    <div className="sm:text-right">

                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 sm:justify-end">
                        <CalendarDays size={17} className="text-blue-600" />
                        August 25, 2026
                      </div>

                      <div className="mt-2 flex items-center gap-2 text-sm text-slate-600 sm:justify-end">
                        <Clock size={17} />
                        10:00 AM
                      </div>

                    </div>

                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-blue-100 pt-5">

                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                      Confirmed
                    </span>

                    <button className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700">
                      View Details
                      <ChevronRight size={17} />
                    </button>

                  </div>

                </div>

              </div>

            </div>

            {/* Quick actions */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">

              <h2 className="text-xl font-bold text-slate-900">
                Quick Actions
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Common patient actions
              </p>

              <div className="mt-6 space-y-3">

                <Link
                  href="/appointment"
                  className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <CalendarCheck size={20} />
                    </div>

                    <span className="font-semibold text-slate-800">
                      Book Appointment
                    </span>

                  </div>

                  <ChevronRight size={18} className="text-slate-400" />

                </Link>

                <Link
                  href="/doctors"
                  className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                      <Users size={20} />
                    </div>

                    <span className="font-semibold text-slate-800">
                      Find a Doctor
                    </span>

                  </div>

                  <ChevronRight size={18} className="text-slate-400" />

                </Link>

                <Link
                  href="/dashboard/profile"
                  className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                      <UserRound size={20} />
                    </div>

                    <span className="font-semibold text-slate-800">
                      Edit Profile
                    </span>

                  </div>

                  <ChevronRight size={18} className="text-slate-400" />

                </Link>

              </div>

            </div>

          </section>

          {/* Health reminder */}
          <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <h2 className="text-xl font-bold text-slate-900">
                  Health Reminder
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  Regular medical checkups can help you stay informed about
                  your health. Talk with your healthcare provider about the
                  appropriate schedule for your needs.
                </p>

              </div>

              <Link
                href="/appointment"
                className="inline-flex shrink-0 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Schedule Visit
              </Link>

            </div>

          </section>

        </div>

      </div>

    </main>
  );
}