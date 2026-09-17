import { Outlet } from "react-router";

import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0a] text-[#ececec]">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
