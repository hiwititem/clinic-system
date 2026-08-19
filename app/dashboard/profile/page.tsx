"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Camera,
  Mail,
  MapPin,
  Phone,
  Save,
  Stethoscope,
  UserRound,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">

          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Stethoscope size={22} />
            </div>

            <span className="text-xl font-bold text-slate-900">
              MediCare
            </span>
          </div>

        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">

        <div>
          <p className="text-sm font-semibold text-blue-600">
            Patient Portal
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            My Profile
          </h1>

          <p className="mt-2 text-slate-600">
            Manage your personal and contact information.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">

          {/* Profile picture */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">

            <h2 className="font-bold text-slate-900">
              Profile Photo
            </h2>

            <div className="mt-6 flex flex-col items-center">

              <div className="relative">

                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <UserRound size={55} />
                </div>

                <button className="absolute bottom-1 right-1 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700">
                  <Camera size={18} />
                </button>

              </div>

              <p className="mt-5 text-lg font-bold text-slate-900">
                John Patient
              </p>

              <p className="text-sm text-slate-500">
                Patient
              </p>

              <button className="mt-5 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Change Photo
              </button>

            </div>

          </div>

          {/* Profile form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-2">

            <h2 className="text-xl font-bold text-slate-900">
              Personal Information
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Keep your information up to date.
            </p>

            <form className="mt-7 space-y-6">

              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Full Name
                  </label>

                  <div className="relative mt-2">
                    <UserRound
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      defaultValue="John Patient"
                      className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Email
                  </label>

                  <div className="relative mt-2">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="email"
                      defaultValue="john@example.com"
                      className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Phone
                  </label>

                  <div className="relative mt-2">
                    <Phone
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="tel"
                      defaultValue="+251 900 000 000"
                      className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Date of Birth
                  </label>

                  <input
                    type="date"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Gender
                  </label>

                  <select className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
                    <option>Select gender</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Blood Group
                  </label>

                  <select className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
                    <option>Select blood group</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                  </select>
                </div>

              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Address
                </label>

                <div className="relative mt-2">
                  <MapPin
                    size={18}
                    className="absolute left-4 top-4 text-slate-400"
                  />

                  <textarea
                    rows={3}
                    placeholder="Enter your address"
                    className="w-full resize-none rounded-lg border border-slate-300 py-3 pl-11 pr-4 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900">
                  Emergency Contact
                </h3>

                <div className="mt-5 grid gap-6 sm:grid-cols-2">

                  <input
                    type="text"
                    placeholder="Emergency contact name"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                  />

                  <input
                    type="tel"
                    placeholder="Emergency contact phone"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                  />

                </div>
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                <Save size={18} />
                Save Changes
              </button>

            </form>

          </div>

        </div>

      </div>
    </main>
  );
}