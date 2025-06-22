import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[65vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="flex flex-1 justify-center items-center w-full min-h-[60vh]">
          <div className="text-center flex flex-col items-center">
            <h5 className="text-blue-700 font-semibold text-lg mb-2">
              Top Rated Program <span className="text-yellow-400">4.7/5 ★</span>
            </h5>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 drop-shadow-lg">
              Build a <span className="text-blue-600">successful career</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
              Join our platform to access top courses, and real-world
              assessments to accelerate your learning journey.
            </p>
            <div className="w-full flex justify-center mt-4">
              <Link to="/Login">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow transition-all duration-200 cursor-pointer">
                  Start Learning
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="fixed top-[60%] right-8 transform -translate-y-1/2 flex flex-col gap-4 z-50">
          <a
            href="https://wa.me/8489148790"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center transition-all duration-200 cursor-pointer"
            title="Chat on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.1 2.36 7.13L4 29l7.13-2.36A11.93 11.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.85-.58-5.41-1.58l-.39-.25-4.23 1.4 1.4-4.23-.25-.39A9.96 9.96 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.27-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.04 2.81 1.19 3.01.15.2 2.05 3.13 5.01 4.27.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.09 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
