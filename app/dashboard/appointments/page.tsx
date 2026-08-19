"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  MapPin,
  Stethoscope,
  XCircle,
} from "lucide-react";

export default function AppointmentsPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">

          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Stethoscope size={22} />
            </div>

            <span className="text-xl font-bold text-slate-900">
              MediCare
            </span>
          </Link>

        </div>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Page title */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm font-semibold text-blue-600">
              Patient Portal
            </p>

            <h1 className="mt-1 text-3xl font-bold text-slate-900">
              My Appointments
            </h1>

            <p className="mt-2 text-slate-600">
              View and manage your clinic appointments.
            </p>
          </div>

          <Link
            href="/appointment"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            <CalendarDays size={19} />
            Book Appointment
          </Link>

        </div>

        {/* Tabs */}
        <div className="mt-8 flex gap-6 border-b border-slate-200">

          <button className="border-b-2 border-blue-600 px-1 pb-3 text-sm font-semibold text-blue-600">
            Upcoming
          </button>

          <button className="px-1 pb-3 text-sm font-semibold text-slate-500 hover:text-slate-900">
            Completed
          </button>

          <button className="px-1 pb-3 text-sm font-semibold text-slate-500 hover:text-slate-900">
            Cancelled
          </button>

        </div>

        {/* Upcoming appointment */}
        <section className="mt-8">

          <h2 className="text-lg font-bold text-slate-900">
            Upcoming Appointments
          </h2>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            {/* Doctor */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Stethoscope size={28} />
                </div>

                <div>

                  <h3 className="text-lg font-bold text-slate-900">
                    Dr. Abebe Bekele
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    Internal Medicine Specialist
                  </p>

                  <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    Confirmed
                  </span>

                </div>

              </div>

              {/* Date */}
              <div className="grid gap-4 sm:grid-cols-3 lg:min-w-[500px]">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <CalendarDays size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Date
                    </p>

                    <p className="text-sm font-semibold text-slate-900">
                      Aug 25, 2026
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Clock size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Time
                    </p>

                    <p className="text-sm font-semibold text-slate-900">
                      10:00 AM
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Location
                    </p>

                    <p className="text-sm font-semibold text-slate-900">
                      Main Clinic
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:justify-end">

              <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50">
                <XCircle size={18} />
                Cancel Appointment
              </button>

              <button className="rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-200">
                View Details
              </button>

            </div>

          </div>

        </section>

        {/* Second appointment */}
        <section className="mt-8">

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <Stethoscope size={28} />
                </div>

                <div>

                  <h3 className="text-lg font-bold text-slate-900">
                    Dr. Hana Tesfaye
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    Internal Medicine Specialist
                  </p>

                  <span className="mt-2 inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                    Pending
                  </span>

                </div>

              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:min-w-[500px]">

                <div className="flex items-center gap-3">

                  <CalendarDays className="text-blue-600" size={20} />

                  <div>
                    <p className="text-xs text-slate-500">
                      Date
                    </p>

                    <p className="text-sm font-semibold text-slate-900">
                      Sep 03, 2026
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <Clock className="text-blue-600" size={20} />

                  <div>
                    <p className="text-xs text-slate-500">
                      Time
                    </p>

                    <p className="text-sm font-semibold text-slate-900">
                      2:30 PM
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <MapPin className="text-blue-600" size={20} />

                  <div>
                    <p className="text-xs text-slate-500">
                      Location
                    </p>

                    <p className="text-sm font-semibold text-slate-900">
                      Main Clinic
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Information */}
        <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-5">

          <p className="text-sm leading-6 text-blue-800">
            <strong>Appointment reminder:</strong> Please arrive at the clinic
            10–15 minutes before your scheduled appointment. Bring any relevant
            medical documents and identification.
          </p>

        </div>

      </div>

    </main>
  );
}