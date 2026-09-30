"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock,
  Stethoscope,
  XCircle,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

type Appointment = {
  id: string;
  patient: string;
  doctor: string;
  date: string;
  time: string;
  status: string;
};

export default function AdminAppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAppointments();
  }, []);

  async function loadAppointments() {
    const { data, error } = await supabase
      .from("appointments")
      .select("*")
      .order("date", { ascending: true });

    if (error) {
      console.error("Appointments error:", error);
    } else {
      setAppointments(data || []);
    }

    setLoading(false);
  }

  async function updateStatus(id: string, status: string) {
    const { error } = await supabase
      .from("appointments")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error("Update error:", error);
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

  const confirmed = appointments.filter(
    (a) => a.status?.toLowerCase() === "confirmed"
  ).length;

  const pending = appointments.filter(
    (a) => a.status?.toLowerCase() === "pending"
  ).length;

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600"
        >
          <ArrowLeft size={17} />
          Admin Dashboard
        </Link>

        <div className="mt-5">
          <h1 className="text-3xl font-bold text-slate-900">
            Appointments
          </h1>

          <p className="mt-2 text-slate-600">
            Manage patient appointments and booking requests.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-8 grid gap-5 sm:grid-cols-3">

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <CalendarDays className="text-blue-600" />

            <p className="mt-4 text-sm text-slate-500">
              Total Appointments
            </p>

            <p className="mt-1 text-2xl font-bold text-slate-900">
              {appointments.length}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <CheckCircle2 className="text-green-600" />

            <p className="mt-4 text-sm text-slate-500">
              Confirmed
            </p>

            <p className="mt-1 text-2xl font-bold text-slate-900">
              {confirmed}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <Clock className="text-yellow-600" />

            <p className="mt-4 text-sm text-slate-500">
              Pending
            </p>

            <p className="mt-1 text-2xl font-bold text-slate-900">
              {pending}
            </p>
          </div>

        </div>

        {/* Table */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">

          {loading ? (
            <div className="p-10 text-center text-slate-500">
              Loading appointments...
            </div>
          ) : appointments.length === 0 ? (
            <div className="p-10 text-center text-slate-500">
              No appointments found.
            </div>
          ) : (
            <div className="overflow-x-auto">

              <table className="w-full min-w-[850px]">

                <thead className="border-b border-slate-200 bg-slate-50">

                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                      Patient
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                      Doctor
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                      Date
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                      Time
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                      Status
                    </th>

                    <th className="px-6 py-4 text-right text-xs font-semibold uppercase text-slate-500">
                      Actions
                    </th>
                  </tr>

                </thead>

                <tbody className="divide-y divide-slate-200">

                  {appointments.map((appointment) => (

                    <tr
                      key={appointment.id}
                      className="hover:bg-slate-50"
                    >

                      <td className="px-6 py-5 font-semibold text-slate-900">
                        {appointment.patient}
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Stethoscope
                            size={17}
                            className="text-blue-600"
                          />

                          {appointment.doctor}
                        </div>
                      </td>

                      <td className="px-6 py-5 text-sm text-slate-600">
                        {appointment.date}
                      </td>

                      <td className="px-6 py-5 text-sm text-slate-600">
                        {appointment.time}
                      </td>

                      <td className="px-6 py-5">

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            appointment.status?.toLowerCase() ===
                            "confirmed"
                              ? "bg-green-100 text-green-700"
                              : appointment.status?.toLowerCase() ===
                                "cancelled"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {appointment.status}
                        </span>

                      </td>

                      <td className="px-6 py-5">

                        <div className="flex justify-end gap-2">

                          {appointment.status?.toLowerCase() ===
                            "pending" && (
                            <button
                              onClick={() =>
                                updateStatus(
                                  appointment.id,
                                  "Confirmed"
                                )
                              }
                              className="rounded-lg p-2 text-green-600 hover:bg-green-50"
                              title="Confirm"
                            >
                              <CheckCircle2 size={19} />
                            </button>
                          )}

                          <button
                            onClick={() =>
                              updateStatus(
                                appointment.id,
                                "Cancelled"
                              )
                            }
                            className="rounded-lg p-2 text-red-600 hover:bg-red-50"
                            title="Cancel"
                          >
                            <XCircle size={19} />
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>
          )}

        </div>

      </div>
    </main>
  );
}