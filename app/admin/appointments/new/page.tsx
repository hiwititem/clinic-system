"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarDays, Clock, Stethoscope } from "lucide-react";

export default function NewAppointmentPage() {
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    alert("Appointment form submitted!");
  }

  return (
    <main className="min-h-screen bg-slate-50">

      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">

          <Link
            href="/dashboard"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Stethoscope size={24} />
            </div>

            <div>
              <h1 className="font-bold text-slate-900">
                MediCare
              </h1>

              <p className="text-xs text-slate-500">
                Internal Medicine Clinic
              </p>
            </div>
          </Link>

          <Link
            href="/dashboard"
            className="text-sm font-medium text-blue-600"
          >
            Dashboard
          </Link>

        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-12">

        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-600">
            Appointments
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Book an Appointment
          </h2>

          <p className="mt-2 text-slate-500">
            Choose a doctor, date and convenient time for your visit.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border bg-white p-8 shadow-sm"
        >

          {/* Doctor */}
          <div>
            <label className="text-sm font-semibold text-slate-700">
              Choose Doctor
            </label>

            <select
              required
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
            >
              <option value="">Select a doctor</option>
              <option value="doctor-1">
                Dr. Abebe Kebede — Internal Medicine
              </option>
              <option value="doctor-2">
                Dr. Hana Tesfaye — Internal Medicine
              </option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <CalendarDays size={17} />
              Appointment Date
            </label>

            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          {/* Time */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Clock size={17} />
              Appointment Time
            </label>

            <select
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
            >
              <option value="">Select a time</option>
              <option value="08:00">08:00 AM</option>
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="02:00">02:00 PM</option>
              <option value="03:00">03:00 PM</option>
              <option value="04:00">04:00 PM</option>
            </select>
          </div>

          {/* Reason */}
          <div>
            <label className="text-sm font-semibold text-slate-700">
              Reason for Visit
            </label>

            <textarea
              required
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Describe briefly why you want to see the doctor..."
              rows={5}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Book Appointment
          </button>

        </form>

      </div>

    </main>
  );
}