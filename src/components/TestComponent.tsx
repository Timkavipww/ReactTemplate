export default function TestComponent() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
      <div className="rounded-2xl border border-white/[0.08] bg-[#111111] p-8 shadow-2xl shadow-black/20 sm:p-10">
        <div className="mb-8">
          <div className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/50">
            React Template
          </div>
        </div>

        <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Тестовый React Template
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-white/50">
          Здесь находится тестовый контент страницы. Header и Footer являются
          общими для всего приложения.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90 active:scale-[0.98]"
          >
            Тестовая кнопка
          </button>

          <button
            type="button"
            className="rounded-lg border border-white/[0.1] bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/[0.07] hover:text-white active:scale-[0.98]"
          >
            Вторичная кнопка
          </button>
        </div>
      </div>
    </section>
  );
}
