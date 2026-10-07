"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  CalendarDays,
  Clock,
  Mail,
  Phone,
  User,
  Stethoscope,
  FileText,
  CheckCircle2,
} from "lucide-react";

export default function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");
    setSubmitted(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const date = formData.get("date") as string;
    const time = formData.get("time") as string;
    const doctor = formData.get("doctor") as string;
    const reason = formData.get("reason") as string;

    // Check that the required values exist
    if (!name || !phone || !date || !time || !doctor) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    // Appointment object
    const appointment = {
      name: name,
      phone: phone,
      email: email || null,
      appointment_date: date,
      appointment_time: time,
      doctor: doctor,
      reason: reason || null,
      status: "Pending",
    };

    // Send appointment to Supabase
    const { error: supabaseError } = await supabase
      .from("appointments")
      .insert([appointment]);

    if (supabaseError) {
      console.error(supabaseError);
      setError(supabaseError.message);
      setLoading(false);
      return;
    }

    // Success
    setSubmitted(true);
    form.reset();
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Book an Appointment
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Schedule an appointment with our internal medicine specialists.
          </p>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Appointment Request
          </h2>

          <p className="text-slate-600 mb-8">
            Please provide your information and preferred appointment time.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name + Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name *
                </label>

                <div className="relative">
                  <User
                    size={20}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-slate-300 pl-10 pr-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number *
                </label>

                <div className="relative">
                  <Phone
                    size={20}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="09xxxxxxxx"
                    className="w-full rounded-lg border border-slate-300 pl-10 pr-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={20}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  className="w-full rounded-lg border border-slate-300 pl-10 pr-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Date + Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Appointment Date *
                </label>

                <div className="relative">
                  <CalendarDays
                    size={20}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="date"
                    name="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full rounded-lg border border-slate-300 pl-10 pr-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Appointment Time *
                </label>

                <div className="relative">
                  <Clock
                    size={20}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  {/* IMPORTANT: name="time" */}
                  <input
                    type="time"
                    name="time"
                    required
                    className="w-full rounded-lg border border-slate-300 pl-10 pr-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>
            </div>

            {/* Doctor */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Select Doctor *
              </label>

              <div className="relative">
                <Stethoscope
                  size={20}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <select
                  name="doctor"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-slate-300 pl-10 pr-4 py-3 bg-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="" disabled>
                    Select a doctor
                  </option>

                  <option value="Dr. Abebe Bekele">
                    Dr. Abebe Bekele
                  </option>

                  <option value="Dr. Hana Tesfaye">
                    Dr. Hana Tesfaye
                  </option>

                  <option value="Dr. Daniel Alemu">
                    Dr. Daniel Alemu
                  </option>
                </select>
              </div>
            </div>

            {/* Reason */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Reason for Visit
              </label>

              <div className="relative">
                <FileText
                  size={20}
                  className="absolute left-3 top-4 text-slate-400"
                />

                <textarea
                  name="reason"
                  rows={5}
                  placeholder="Describe the reason for your visit..."
                  className="w-full rounded-lg border border-slate-300 pl-10 pr-4 py-3 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-600">
                {error}
              </div>
            )}

            {/* Success */}
            {submitted && (
              <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-green-700">
                <CheckCircle2 size={22} />

                <div>
                  <p className="font-semibold">
                    Appointment submitted successfully!
                  </p>

                  <p className="text-sm">
                    Your appointment request is now pending confirmation.
                  </p>
                </div>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-blue-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Submitting Appointment..."
                : "Submit Appointment Request"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}