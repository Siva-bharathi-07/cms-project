import React from "react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-white to-blue-100">
      <div className="bg-white rounded-xl shadow-2xl p-10 flex flex-col items-center">
        <h1 className="text-7xl font-extrabold text-blue-600 mb-4 drop-shadow-lg">
          404
        </h1>
        <p className="text-3xl font-semibold text-blue-800 mb-2">
          Page Not Found
        </p>
        <p className="text-blue-500 mb-6 text-center max-w-md">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          to={"/home"}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
