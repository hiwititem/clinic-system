"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock,
  Stethoscope,
  XCircle,
  RefreshCw,
} from "lucide-react";

type Appointment = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  appointment_date: string;
  appointment_time: string;
  doctor: string;
  reason: string | null;
  status: string;
};

export default function AdminAppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadAppointments() {
    setLoading(true);

   const { data, error } = await supabase
  .from("appointments")
  .select("*");

console.log("APPOINTMENTS DATA:", data);
console.log("APPOINTMENTS ERROR:", error);

    if (error) {
      console.error("Error loading appointments:", error);
      setLoading(false);
      return;
    }

    setAppointments(data || []);
    setLoading(false);
  }

  useEffect(() => {
    loadAppointments();
  }, []);

  async function updateStatus(id: string, status: string) {
    const { error } = await supabase
      .from("appointments")
      .update({ status })
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    setAppointments((current) =>
      current.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status }
          : appointment
      )
    );
  }

  async function cancelAppointment(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );

    if (!confirmed) return;

    await updateStatus(id, "Cancelled");
  }

  const total = appointments.length;

  const confirmed = appointments.filter(
    (appointment) => appointment.status === "Confirmed"
  ).length;

  const pending = appointments.filter(
    (appointment) => appointment.status === "Pending"
  ).length;

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Link
            href="/admin"
            className="mb-6 inline-flex items-center gap-2 text-slate-600 hover:text-blue-600"
          >
            <ArrowLeft size={20} />
            Admin Dashboard
          </Link>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-4xl font-bold text-slate-900">
                Appointments
              </h1>

              <p className="mt-2 text-slate-600">
                Manage patient appointments and booking requests.
              </p>
            </div>

            <button
              onClick={loadAppointments}
              className="inline-flex items-center justify-center gap-2 rounded-lg border bg-white px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RefreshCw size={18} />
              Refresh
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Statistics */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-7 shadow-sm">
            <CalendarDays className="mb-5 text-blue-600" size={32} />

            <p className="text-slate-600">Total Appointments</p>

            <p className="mt-2 text-4xl font-bold text-slate-900">
              {total}
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-7 shadow-sm">
            <CheckCircle2 className="mb-5 text-green-600" size={32} />

            <p className="text-slate-600">Confirmed</p>

            <p className="mt-2 text-4xl font-bold text-slate-900">
              {confirmed}
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-7 shadow-sm">
            <Clock className="mb-5 text-yellow-600" size={32} />

            <p className="text-slate-600">Pending</p>

            <p className="mt-2 text-4xl font-bold text-slate-900">
              {pending}
            </p>
          </div>
        </div>

        {/* Appointments */}
        <div className="mt-10 overflow-hidden rounded-2xl border bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead>
                <tr className="border-b bg-slate-50">
                  <th className="px-6 py-5 text-left text-sm font-bold text-slate-600">
                    PATIENT
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold text-slate-600">
                    DOCTOR
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold text-slate-600">
                    DATE
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold text-slate-600">
                    TIME
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold text-slate-600">
                    STATUS
                  </th>

                  <th className="px-6 py-5 text-right text-sm font-bold text-slate-600">
                    ACTIONS
                  </th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-16 text-center text-slate-500"
                    >
                      Loading appointments...
                    </td>
                  </tr>
                ) : appointments.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-16 text-center text-slate-500"
                    >
                      No appointments found.
                    </td>
                  </tr>
                ) : (
                  appointments.map((appointment) => (
                    <tr
                      key={appointment.id}
                      className="border-b last:border-b-0 hover:bg-slate-50"
                    >
                      {/* Patient */}
                      <td className="px-6 py-6">
                        <div className="font-semibold text-slate-900">
                          {appointment.name}
                        </div>

                        <div className="mt-1 text-sm text-slate-500">
                          {appointment.phone}
                        </div>
                      </td>

                      {/* Doctor */}
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-2 text-slate-700">
                          <Stethoscope
                            size={20}
                            className="text-blue-600"
                          />

                          {appointment.doctor}
                        </div>
                      </td>

                      {/* Date */}
                      <td className="px-6 py-6 text-slate-700">
                        {appointment.appointment_date}
                      </td>

                      {/* Time */}
                      <td className="px-6 py-6 text-slate-700">
                        {appointment.appointment_time}
                      </td>

                      {/* Status */}
                      <td className="px-6 py-6">
                        <span
                          className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${
                            appointment.status === "Confirmed"
                              ? "bg-green-100 text-green-700"
                              : appointment.status === "Cancelled"
                                ? "bg-red-100 text-red-700"
                                : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-6">
                        <div className="flex justify-end gap-2">
                          {appointment.status === "Pending" && (
                            <button
                              onClick={() =>
                                updateStatus(
                                  appointment.id,
                                  "Confirmed"
                                )
                              }
                              title="Confirm appointment"
                              className="rounded-lg p-2 text-green-600 hover:bg-green-50"
                            >
                              <CheckCircle2 size={22} />
                            </button>
                          )}

                          {appointment.status !== "Cancelled" && (
                            <button
                              onClick={() =>
                                cancelAppointment(appointment.id)
                              }
                              title="Cancel appointment"
                              className="rounded-lg p-2 text-red-600 hover:bg-red-50"
                            >
                              <XCircle size={22} />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}