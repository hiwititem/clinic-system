"use client";

import Link from "next/link";
import { LockKeyhole, Mail, Stethoscope } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-md">

        {/* Logo */}
        <div className="text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white">
            <Stethoscope size={28} />
          </div>

          <h1 className="mt-5 text-3xl font-bold text-slate-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-slate-600">
            Sign in to your MediCare patient account
          </p>

        </div>

        {/* Form */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">

          <form className="space-y-5">

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

            {/* Password */}
            <div>

              <div className="flex items-center justify-between">

                <label className="text-sm font-semibold text-slate-700">
                  Password
                </label>

                <Link
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Forgot password?
                </Link>

              </div>

              <div className="relative mt-2">

                <LockKeyhole
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="password"
                  required
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>

            </div>

            {/* Login */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Sign In
            </button>

          </form>

          {/* Register */}
          <div className="mt-7 border-t border-slate-200 pt-6 text-center">

            <p className="text-sm text-slate-600">
              Don't have an account?
            </p>

            <Link
              href="/register"
              className="mt-2 inline-block font-semibold text-blue-600 hover:text-blue-700"
            >
              Create a Patient Account
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
}