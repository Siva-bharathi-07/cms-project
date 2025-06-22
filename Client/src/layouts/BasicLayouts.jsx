import { Link, Outlet } from "react-router";
import { FcNook } from "react-icons/fc";

function BasicLayouts() {
  return (
    <div className="flex flex-col min-h-screen h-screen">
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-gray-900 text-white py-5 px-10 flex items-center justify-between shadow-lg rounded-b-2xl">
        <div className="flex items-center text-3xl font-extrabold tracking-tight text-blue-300 drop-shadow-lg select-none cursor-pointer">
          <Link to="/home" className="flex items-center">
            <FcNook className="inline-block mr-2" />
            <span className="ml-1">Learning Platform</span>
          </Link>
        </div>

        <div className="flex gap-4">
          <Link to="/Login">
            <button className="px-5 py-2 rounded-lg font-medium bg-transparent border border-blue-400 text-blue-300 hover:bg-blue-700 hover:text-white transition-all duration-200 cursor-pointer">
              Log In
            </button>
          </Link>
          <Link to="/Signup">
            <button className="px-5 py-2 rounded-lg font-medium bg-blue-500 text-white hover:bg-blue-700 transition-all duration-200 shadow cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      </header>
      <main className="bg-white min-h-[calc(100vh-112px)] pt-6 pb-16 px-4">
        <Outlet />
      </main>
      <footer className="fixed bottom-0 left-0 w-full bg-blue-900 text-blue-100 py-1 px-4 rounded-t-xl shadow-inner flex items-center justify-center text-xs z-40">
        <div className="font-semibold tracking-wide text-center w-full">
          © {new Date().getFullYear()} Learning Platform. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default BasicLayouts;
