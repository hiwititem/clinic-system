import Link from "next/link";
import {
  ArrowLeft,
  Edit,
  FileText,
  Plus,
  Trash2,
} from "lucide-react";

const articles = [
  {
    title: "Understanding High Blood Pressure",
    category: "Heart Health",
    date: "August 10, 2026",
    status: "Published",
  },
  {
    title: "Healthy Living With Diabetes",
    category: "Diabetes",
    date: "August 5, 2026",
    status: "Published",
  },
  {
    title: "Why Regular Health Checkups Matter",
    category: "Prevention",
    date: "July 28, 2026",
    status: "Draft",
  },
];

export default function AdminArticlesPage() {
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

        <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <h1 className="text-3xl font-bold text-slate-900">
              Articles
            </h1>

            <p className="mt-2 text-slate-600">
              Create and manage health education articles.
            </p>

          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
            <Plus size={19} />
            New Article
          </button>

        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">

          <div className="divide-y divide-slate-200">

            {articles.map((article) => (

              <div
                key={article.title}
                className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <FileText size={22} />
                  </div>

                  <div>

                    <h2 className="font-bold text-slate-900">
                      {article.title}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      {article.category} • {article.date}
                    </p>

                    <span
                      className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                        article.status === "Published"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {article.status}
                    </span>

                  </div>

                </div>

                <div className="flex gap-2">

                  <button className="rounded-lg p-2 text-blue-600 hover:bg-blue-50">
                    <Edit size={19} />
                  </button>

                  <button className="rounded-lg p-2 text-red-600 hover:bg-red-50">
                    <Trash2 size={19} />
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </main>
  );
}