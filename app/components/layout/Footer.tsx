import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  Stethoscope,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Doctors", href: "/doctors" },
  { name: "Articles", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Internal Medicine",
  "Diabetes Management",
  "Hypertension Management",
  "Respiratory Care",
  "Digestive Health",
  "Preventive Medicine",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Clinic information */}
          <div>
            <a href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Stethoscope size={24} />
              </div>

              <div>
                <span className="block text-lg font-bold text-white">
                  MediCare
                </span>

                <span className="text-xs text-slate-400">
                  Internal Medicine Clinic
                </span>
              </div>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Providing compassionate, professional, and patient-centered
              internal medicine care for adults.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Our Services
            </h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="/services"
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4">

              <div className="flex gap-3">
                <MapPin
                  size={19}
                  className="mt-0.5 shrink-0 text-blue-500"
                />

                <span className="text-sm leading-6 text-slate-400">
                  Clinic Address
                  <br />
                  Addis Ababa, Ethiopia
                </span>
              </div>

              <div className="flex gap-3">
                <Phone
                  size={19}
                  className="mt-0.5 shrink-0 text-blue-500"
                />

                <a
                  href="tel:+251000000000"
                  className="text-sm text-slate-400 hover:text-white"
                >
                  +251 00 000 0000
                </a>
              </div>

              <div className="flex gap-3">
                <Mail
                  size={19}
                  className="mt-0.5 shrink-0 text-blue-500"
                />

                <a
                  href="mailto:info@medicareclinic.com"
                  className="text-sm text-slate-400 hover:text-white"
                >
                  info@medicareclinic.com
                </a>
              </div>

              <div className="flex gap-3">
                <Clock3
                  size={19}
                  className="mt-0.5 shrink-0 text-blue-500"
                />

                <span className="text-sm leading-6 text-slate-400">
                  Monday – Friday
                  <br />
                  8:00 AM – 5:00 PM
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

          <p className="text-slate-500">
            © {new Date().getFullYear()} MediCare Internal Medicine Clinic.
            All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="/privacy"
              className="text-slate-500 hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="text-slate-500 hover:text-white"
            >
              Terms of Use
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}