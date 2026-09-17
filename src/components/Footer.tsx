import {
ArrowUpRight,
Code2,
Mail,
MessageCircle,
Send,
} from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
return ( <footer
   id="contacts"
   className="border-t border-white/[0.08] bg-[#0a0a0a]"
 > <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8"> <div className="grid gap-12 md:grid-cols-3"> <div> <div className="text-base font-semibold tracking-tight text-white">
React Template </div>

        <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">
          Минималистичный шаблон для современных React-приложений.
          Аккуратная архитектура, тёмный интерфейс и быстрый старт.
        </p>

        <a
          href="mailto:hello@example.com"
          className="mt-5 inline-flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-white"
        >
          <Mail size={15} strokeWidth={1.8} />
          hello@example.com
        </a>
      </div>

      <div>
        <div className="text-xs font-medium uppercase tracking-[0.18em] text-white/30">
          Навигация
        </div>

        <nav className="mt-5 flex flex-col gap-3">
          <Link
            to="/"
            className="group flex w-fit items-center gap-1 text-sm text-white/50 transition-colors hover:text-white"
          >
            Главная

            <ArrowUpRight
              size={13}
              strokeWidth={1.8}
              className="opacity-0 transition-opacity group-hover:opacity-60"
            />
          </Link>

          <Link
            to="/about"
            className="group flex w-fit items-center gap-1 text-sm text-white/50 transition-colors hover:text-white"
          >
            О проекте

            <ArrowUpRight
              size={13}
              strokeWidth={1.8}
              className="opacity-0 transition-opacity group-hover:opacity-60"
            />
          </Link>

          <Link
            to="/contacts"
            className="group flex w-fit items-center gap-1 text-sm text-white/50 transition-colors hover:text-white"
          >
            Контакты

            <ArrowUpRight
              size={13}
              strokeWidth={1.8}
              className="opacity-0 transition-opacity group-hover:opacity-60"
            />
          </Link>
        </nav>
      </div>

      <div>
        <div className="text-xs font-medium uppercase tracking-[0.18em] text-white/30">
          Мы в соцсетях
        </div>

        <div className="mt-5 flex items-center gap-2">
          <a
            href="#"
            aria-label="Telegram"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/45 transition-all hover:border-white/[0.15] hover:bg-white/[0.07] hover:text-white"
          >
            <Send size={17} strokeWidth={1.8} />
          </a>

          <a
            href="#"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/45 transition-all hover:border-white/[0.15] hover:bg-white/[0.07] hover:text-white"
          >
            <Code2 size={18} strokeWidth={1.8} />
          </a>

          <a
            href="#"
            aria-label="Сообщество"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/45 transition-all hover:border-white/[0.15] hover:bg-white/[0.07] hover:text-white"
          >
            <MessageCircle size={18} strokeWidth={1.8} />
          </a>
        </div>

        <p className="mt-4 max-w-xs text-xs leading-5 text-white/25">
          Следите за обновлениями, новостями и новыми проектами.
        </p>
      </div>
    </div>

    <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-xs text-white/25">
        © {new Date().getFullYear()} React Template
      </p>

      <p className="text-xs text-white/20">
        Built with React & Tailwind CSS
      </p>
    </div>
  </div>
</footer>

);
}
