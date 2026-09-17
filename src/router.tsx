import { createBrowserRouter } from "react-router";

import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import Layout from "@/components/layouts/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
