"use client";

import { useState } from "react";
import { CalendarCheck, CheckCircle2 } from "lucide-react";

export default function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Appointments
          </span>

          <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
            Book an Appointment
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Request an appointment with one of our internal medicine
            specialists.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
              <CheckCircle2
                size={60}
                className="mx-auto text-green-600"
              />

              <h2 className="mt-5 text-2xl font-bold text-slate-900">
                Appointment Request Received
              </h2>

              <p className="mt-3 text-slate-600">
                Thank you. Our clinic will contact you to confirm your
                appointment.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10"
            >
              <div className="flex items-center gap-3 border-b pb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <CalendarCheck size={24} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Appointment Information
                  </h2>

                  <p className="text-sm text-slate-500">
                    Please provide your information below.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Full Name
                  </label>

                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Phone Number
                  </label>

                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="+251 ..."
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Email
                  </label>

                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Preferred Date
                  </label>

                  <input
                    required
                    name="date"
                    type="date"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Preferred Time
                  </label>

                  <input
                    required
                    name="time"
                    type="time"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Doctor
                  </label>

                  <select
                    name="doctor"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">Any available doctor</option>
                    <option>Dr. Abebe Bekele</option>
                    <option>Dr. Hana Tesfaye</option>
                    <option>Dr. Daniel Alemu</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Reason for Appointment
                </label>

                <textarea
                  name="reason"
                  rows={5}
                  placeholder="Briefly describe what you would like to discuss..."
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white hover:bg-blue-700"
              >
                Submit Appointment Request
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}