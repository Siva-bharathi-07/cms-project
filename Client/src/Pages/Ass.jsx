import React from 'react';

function Ass(props) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 flex items-center justify-center py-12 px-4">
            <div className="w-full max-w-2xl bg-white/90 rounded-2xl shadow-2xl p-10 relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </div>
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-2 mt-10">Assessment</h1>
                <p className="text-center text-gray-500 mb-8">Please fill out the form below to complete your assessment.</p>
                <form className="space-y-7">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="question1">
                            1. What is your name?
                        </label>
                        <input
                            id="question1"
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="question2">
                            2. Select your favorite language:
                        </label>
                        <select
                            id="question2"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50"
                        >
                            <option>JavaScript</option>
                            <option>Python</option>
                            <option>Java</option>
                            <option>C#</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="question3">
                            3. Any comments?
                        </label>
                        <textarea
                            id="question3"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
                            rows={3}
                            placeholder="Your comments"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition"
                    >
                        Submit Assessment
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Ass;