import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router/dom";

import { queryClient } from "./queryClient";
import { router } from "./router";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'sonner'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster theme="dark" />
    </QueryClientProvider>
  );
}
