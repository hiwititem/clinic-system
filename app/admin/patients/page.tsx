"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Patient = {
  id: string;
  full_name: string;
  email: string | null;
  phone: string | null;
  gender: string | null;
  date_of_birth: string | null;
};

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadPatients();
  }, []);

  async function loadPatients() {
    const { data, error } = await supabase
      .from("patients")
      .select("*");

    if (error) {
      console.error("Patients error:", error);
    } else {
      setPatients(data || []);
    }

    setLoading(false);
  }

  const filteredPatients = patients.filter((patient) =>
    `${patient.full_name} ${patient.email || ""} ${patient.phone || ""}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Patients
          </h1>

          <p className="mt-2 text-slate-500">
            Manage clinic patients
          </p>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search patients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md rounded-lg border bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

          {loading ? (
            <div className="p-8 text-center">
              Loading patients...
            </div>
          ) : filteredPatients.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              No patients found.
            </div>
          ) : (
            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-left">
                      Name
                    </th>

                    <th className="px-6 py-4 text-left">
                      Email
                    </th>

                    <th className="px-6 py-4 text-left">
                      Phone
                    </th>

                    <th className="px-6 py-4 text-left">
                      Gender
                    </th>

                    <th className="px-6 py-4 text-left">
                      Date of Birth
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {filteredPatients.map((patient) => (
                    <tr
                      key={patient.id}
                      className="border-t hover:bg-slate-50"
                    >

                      <td className="px-6 py-4 font-medium">
                        {patient.full_name}
                      </td>

                      <td className="px-6 py-4 text-slate-600">
                        {patient.email || "-"}
                      </td>

                      <td className="px-6 py-4 text-slate-600">
                        {patient.phone || "-"}
                      </td>

                      <td className="px-6 py-4">
                        {patient.gender || "-"}
                      </td>

                      <td className="px-6 py-4 text-slate-600">
                        {patient.date_of_birth || "-"}
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