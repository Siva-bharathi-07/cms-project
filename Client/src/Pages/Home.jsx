import React from "react";

export default function Home() {
  return (
    <>
      <header className="bg-gray-900 text-white py-4 px-8 flex items-center justify-between shadow-md">
        <span className="font-semibold text-lg hover:text-blue-400 cursor-pointer transition">
          Home
        </span>
        <span className="font-semibold text-lg hover:text-blue-400 cursor-pointer transition">
          About
        </span>
        <span className="font-semibold text-lg hover:text-blue-400 cursor-pointer transition">
          Courses
        </span>
        <span className="font-semibold text-lg hover:text-blue-400 cursor-pointer transition">
          Assessment
        </span>
        <span className="font-semibold text-lg hover:text-blue-400 cursor-pointer transition">
          Developer Pages
        </span>
      </header>
    </>
  );
}
