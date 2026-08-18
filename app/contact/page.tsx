import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Contact
          </span>

          <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
            Contact Our Clinic
          </h1>

          <p className="mt-5 text-lg text-slate-600">
            We're here to help. Contact us for appointments and general
            inquiries.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">

          <div className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Get in Touch
            </h2>

            <div className="mt-8 space-y-6">

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <MapPin size={21} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Address
                  </h3>

                  <p className="mt-1 text-slate-600">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Phone size={21} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Phone
                  </h3>

                  <p className="mt-1 text-slate-600">
                    +251 00 000 0000
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Mail size={21} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Email
                  </h3>

                  <p className="mt-1 text-slate-600">
                    info@medicareclinic.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Clock3 size={21} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Working Hours
                  </h3>

                  <p className="mt-1 text-slate-600">
                    Monday – Friday
                    <br />
                    8:00 AM – 5:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="rounded-2xl bg-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Find Us
            </h2>

            <div className="mt-6 flex min-h-[350px] items-center justify-center rounded-xl bg-slate-200">
              <div className="text-center text-slate-500">
                <MapPin size={45} className="mx-auto" />

                <p className="mt-3 font-medium">
                  Clinic Location Map
                </p>

                <p className="mt-1 text-sm">
                  We will add the real clinic map later.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}