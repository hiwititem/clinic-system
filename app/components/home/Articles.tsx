import {
  ArrowRight,
  CalendarDays,
  Clock,
} from "lucide-react";

const articles = [
  {
    title: "Understanding Diabetes and Blood Sugar",
    description:
      "Learn about diabetes, blood sugar management, and healthy habits that can support your overall health.",
    category: "Diabetes",
    date: "Health Education",
    readTime: "5 min read",
  },
  {
    title: "Understanding High Blood Pressure",
    description:
      "Learn why blood pressure matters and how healthy lifestyle choices can support cardiovascular health.",
    category: "Heart Health",
    date: "Health Education",
    readTime: "4 min read",
  },
  {
    title: "Building a Healthier Lifestyle",
    description:
      "Simple, practical habits that can help support your health and well-being in everyday life.",
    category: "Wellness",
    date: "Health Education",
    readTime: "6 min read",
  },
];

export default function Articles() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Health Education
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Latest Health Articles
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Helpful information to help you understand your health and
              make informed decisions.
            </p>
          </div>

          <a
            href="/blog"
            className="inline-flex shrink-0 items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
          >
            View All Articles
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Articles */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image placeholder */}
              <div className="flex aspect-[16/9] items-center justify-center bg-blue-100">
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                    <CalendarDays size={28} />
                  </div>

                  <p className="mt-3 text-sm font-medium text-blue-700">
                    {article.category}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={14} />
                    {article.date}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold leading-7 text-slate-900 transition group-hover:text-blue-600">
                  {article.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {article.description}
                </p>

                <a
                  href="/blog"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition group-hover:gap-3"
                >
                  Read Article
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}