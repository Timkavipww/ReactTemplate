import { isRouteErrorResponse, useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "Что-то пошло не так";
  let message = "Произошла непредвиденная ошибка.";
  let status = "Ошибка";

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = "Страница не найдена";
      message = "Такой страницы не существует или она была перемещена.";
      status = "404";
    } else {
      status = `${error.status}`;
      message = error.statusText || message;
    }
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-lg text-center">
        <p className="text-sm font-medium text-gray-500">
          {status}
        </p>

        <h1 className="mt-3 text-4xl font-bold text-gray-900">
          {title}
        </h1>

        <p className="mt-4 text-gray-600">
          {message}
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Назад
          </button>

          <a
            href="/"
            className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-700"
          >
            На главную
          </a>
        </div>
      </div>
    </div>
  );
}
