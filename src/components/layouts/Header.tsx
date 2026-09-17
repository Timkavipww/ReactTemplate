import { Link } from "react-router";

export default function Header() {
  return (
    <header className="border-b border-white/[0.08] bg-[#0a0a0a]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          to="/"
          className="text-sm font-semibold tracking-tight text-white transition-colors hover:text-white/80"
        >
          React Template
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          <Link
            to="/"
            className="rounded-lg px-3 py-2 text-sm text-white/60 transition-colors hover:bg-white/[0.06] hover:text-white"
          >
            Главная
          </Link>

          <Link
            to="/about"
            className="rounded-lg px-3 py-2 text-sm text-white/60 transition-colors hover:bg-white/[0.06] hover:text-white"
          >
            О проекте
          </Link>

          <Link
            to="/contacts"
            className="rounded-lg px-3 py-2 text-sm text-white/60 transition-colors hover:bg-white/[0.06] hover:text-white"
          >
            Контакты
          </Link>
        </nav>
      </div>
    </header>
  );
}
