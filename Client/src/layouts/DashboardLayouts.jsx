import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-base md:text-lg">
      <aside className="fixed inset-y-0 left-0 w-64 bg-purple-800 text-white flex flex-col z-20 text-base md:text-lg">
        <div className="h-16 flex items-center justify-center font-bold text-2xl border-b border-purple-700">
          Dashboard
        </div>
        <nav className="flex-1 mt-4">
          <ul className="flex flex-col gap-2 px-4">
            <li>
              <Link
                to="/dashboard/about"
                className="block py-2 px-3 rounded hover:bg-purple-700 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/course"
                className="block py-2 px-3 rounded hover:bg-purple-700 transition"
              >
                Course
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/assessment"
                className="block py-2 px-3 rounded hover:bg-purple-700 transition"
              >
                Assessment
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/developer"
                className="block py-2 px-3 rounded hover:bg-purple-700 transition"
              >
                Developer
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mt-auto p-4 text-xs md:text-sm text-purple-200 border-t border-purple-700">
          &copy; {new Date().getFullYear()} My CMS Dashboard
        </div>
      </aside>

      <div className="flex-1 flex flex-col ml-64 text-base md:text-lg">
        <main className="flex-1 p-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
