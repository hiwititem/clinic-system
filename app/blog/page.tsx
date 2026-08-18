const articles = [
  {
    title: "Understanding Diabetes",
    category: "Diabetes",
  },
  {
    title: "Understanding High Blood Pressure",
    category: "Heart Health",
  },
  {
    title: "Healthy Lifestyle Habits",
    category: "Wellness",
  },
];

export default function BlogPage() {
  return (
    <main>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Health Education
          </span>

          <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
            Health Articles
          </h1>

          <p className="mt-5 text-lg text-slate-600">
            Educational information to help you learn more about your health.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {articles.map((article) => (
            <article
              key={article.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="flex aspect-video items-center justify-center bg-blue-50">
                <span className="font-semibold text-blue-600">
                  {article.category}
                </span>
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold text-blue-600">
                  {article.category}
                </p>

                <h2 className="mt-3 text-xl font-bold text-slate-900">
                  {article.title}
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Educational information about this health topic will be
                  available here.
                </p>

                <button className="mt-5 font-semibold text-blue-600">
                  Read Article →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}