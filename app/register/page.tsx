"use client";

import Link from "next/link";
import {
  LockKeyhole,
  Mail,
  Phone,
  UserRound,
  Stethoscope,
} from "lucide-react";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-lg">

        {/* Header */}
        <div className="text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white">
            <Stethoscope size={28} />
          </div>

          <h1 className="mt-5 text-3xl font-bold text-slate-900">
            Create Your Account
          </h1>

          <p className="mt-2 text-slate-600">
            Create a patient account to manage your appointments
          </p>

        </div>

        {/* Form */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">

          <form className="space-y-5">

            {/* Full Name */}
            <div>

              <label className="text-sm font-semibold text-slate-700">
                Full Name
              </label>

              <div className="relative mt-2">

                <UserRound
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>

            </div>

            {/* Email */}
            <div>

              <label className="text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <div className="relative mt-2">

                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>

            </div>

            {/* Phone */}
            <div>

              <label className="text-sm font-semibold text-slate-700">
                Phone Number
              </label>

              <div className="relative mt-2">

                <Phone
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="tel"
                  required
                  placeholder="+251 9..."
                  className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>

            </div>

            {/* Password */}
            <div>

              <label className="text-sm font-semibold text-slate-700">
                Password
              </label>

              <div className="relative mt-2">

                <LockKeyhole
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="password"
                  required
                  placeholder="Create a password"
                  className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>

            </div>

            {/* Confirm Password */}
            <div>

              <label className="text-sm font-semibold text-slate-700">
                Confirm Password
              </label>

              <div className="relative mt-2">

                <LockKeyhole
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="password"
                  required
                  placeholder="Confirm your password"
                  className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Create Account
            </button>

          </form>

          {/* Login */}
          <div className="mt-7 border-t border-slate-200 pt-6 text-center">

            <p className="text-sm text-slate-600">
              Already have an account?
            </p>

            <Link
              href="/login"
              className="mt-2 inline-block font-semibold text-blue-600 hover:text-blue-700"
            >
              Sign In
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
}