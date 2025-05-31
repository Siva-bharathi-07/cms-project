import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center mb-6">Sign In</h1>
        <input
          type="email"
          placeholder="Enter your Email"
          required
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Enter your Password"
          required
          className="w-full mb-6 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Sign In
        </button>
        <div className="mt-4 text-center">
          <span className="text-gray-600">Already have an account? </span>
          <Link to="/Signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
