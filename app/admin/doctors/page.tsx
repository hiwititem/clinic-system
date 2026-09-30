"use client";

import { useState } from "react";

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  email: string;
  phone: string;
  availability: string;
  status: string;
};

const initialDoctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Hana Bekele",
    specialty: "Internal Medicine",
    email: "hana@medicare.com",
    phone: "+251 911 111 111",
    availability: "Mon - Fri",
    status: "Available",
  },
  {
    id: 2,
    name: "Dr. Samuel Alemu",
    specialty: "Internal Medicine",
    email: "samuel@medicare.com",
    phone: "+251 922 222 222",
    availability: "Tue - Sat",
    status: "Available",
  },
];

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>(initialDoctors);

  function changeStatus(id: number, status: string) {
    setDoctors((current) =>
      current.map((doctor) =>
        doctor.id === id
          ? { ...doctor, status }
          : doctor
      )
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Doctors
          </h1>

          <p className="mt-2 text-slate-500">
            Manage doctors in the internal medicine clinic
          </p>
        </div>

        {/* Statistics */}
        <div className="mb-8 grid gap-4 md:grid-cols-3">

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Total Doctors
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {doctors.length}
            </h2>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Available
            </p>

            <h2 className="mt-2 text-3xl font-bold text-green-600">
              {
                doctors.filter(
                  (doctor) => doctor.status === "Available"
                ).length
              }
            </h2>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Unavailable
            </p>

            <h2 className="mt-2 text-3xl font-bold text-red-500">
              {
                doctors.filter(
                  (doctor) => doctor.status === "Unavailable"
                ).length
              }
            </h2>
          </div>

        </div>

        {/* Doctors table */}
        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-100">
                <tr>
                  <th className="px-6 py-4 text-left">
                    Doctor
                  </th>

                  <th className="px-6 py-4 text-left">
                    Specialty
                  </th>

                  <th className="px-6 py-4 text-left">
                    Email
                  </th>

                  <th className="px-6 py-4 text-left">
                    Phone
                  </th>

                  <th className="px-6 py-4 text-left">
                    Availability
                  </th>

                  <th className="px-6 py-4 text-left">
                    Status
                  </th>

                  <th className="px-6 py-4 text-left">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>

                {doctors.map((doctor) => (
                  <tr
                    key={doctor.id}
                    className="border-t hover:bg-slate-50"
                  >

                    <td className="px-6 py-4 font-medium">
                      {doctor.name}
                    </td>

                    <td className="px-6 py-4">
                      {doctor.specialty}
                    </td>

                    <td className="px-6 py-4">
                      {doctor.email}
                    </td>

                    <td className="px-6 py-4">
                      {doctor.phone}
                    </td>

                    <td className="px-6 py-4">
                      {doctor.availability}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-sm ${
                          doctor.status === "Available"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {doctor.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">

                      <button
                        onClick={() =>
                          changeStatus(
                            doctor.id,
                            doctor.status === "Available"
                              ? "Unavailable"
                              : "Available"
                          )
                        }
                        className="rounded-lg bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
                      >
                        Change Status
                      </button>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        </div>

      </div>
    </main>
  );
}