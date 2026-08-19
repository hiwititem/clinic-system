"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  Lock,
  LogOut,
  Shield,
  Stethoscope,
  UserRound,
} from "lucide-react";

export default function SettingsPage() {
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

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">

        <p className="text-sm font-semibold text-blue-600">
          Patient Portal
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-900">
          Settings
        </h1>

        <p className="mt-2 text-slate-600">
          Manage your account and notification preferences.
        </p>

        <div className="mt-8 space-y-5">

          {/* Notifications */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Bell size={21} />
              </div>

              <div className="flex-1">

                <h2 className="font-bold text-slate-900">
                  Notifications
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Choose how you want to receive appointment reminders.
                </p>

                <div className="mt-5 space-y-4">

                  <label className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-slate-700">
                      Email notifications
                    </span>

                    <input
                      type="checkbox"
                      defaultChecked
                      className="h-5 w-5 accent-blue-600"
                    />
                  </label>

                  <label className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-slate-700">
                      Appointment reminders
                    </span>

                    <input
                      type="checkbox"
                      defaultChecked
                      className="h-5 w-5 accent-blue-600"
                    />
                  </label>

                  <label className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-slate-700">
                      Health information
                    </span>

                    <input
                      type="checkbox"
                      className="h-5 w-5 accent-blue-600"
                    />
                  </label>

                </div>

              </div>

            </div>

          </div>

          {/* Security */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <Shield size={21} />
              </div>

              <div className="flex-1">

                <h2 className="font-bold text-slate-900">
                  Security
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Manage your account security.
                </p>

                <div className="mt-5 space-y-3">

                  <button className="flex w-full items-center gap-3 rounded-lg border border-slate-200 p-4 text-left hover:bg-slate-50">
                    <Lock size={19} className="text-slate-500" />

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Change Password
                      </p>

                      <p className="text-xs text-slate-500">
                        Update your account password
                      </p>
                    </div>
                  </button>

                </div>

              </div>

            </div>

          </div>

          {/* Account */}
          <div className="rounded-2xl border border-red-100 bg-white p-6">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <UserRound size={21} />
              </div>

              <div>

                <h2 className="font-bold text-slate-900">
                  Account
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Manage your account.
                </p>

                <button className="mt-5 inline-flex items-center gap-2 rounded-lg border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50">
                  <LogOut size={17} />
                  Sign Out
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}