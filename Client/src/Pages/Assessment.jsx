import React from 'react';

function Assessment(props) {
    
    const [showAssessment, setShowAssessment] = React.useState(false);
    const [startTest, setStartTest] = React.useState(false);
    const [selectedTopic, setSelectedTopic] = React.useState(""); // New state for topic

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowAssessment(true);
    };

    const handleStart = () => {
        if (selectedTopic) {
            setStartTest(true);
        } else {
            alert("Please select a topic before starting the assessment.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-700 to-cyan-500 flex flex-col items-center py-12 px-4">
            <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-12 tracking-wide flex items-center gap-3">
                <svg className="w-10 h-10 text-yellow-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-5-9-5-9 5 9 5zm0 0v-5m0-5V4m0 0L3 9m9-5l9 5" />
                </svg>
                ASSESSMENT
            </h1>
            <div className="bg-white/90 rounded-3xl shadow-2xl w-full max-w-md p-10 flex flex-col items-center border-2 border-blue-200">
                <div className="w-full">
                    {showAssessment ? (
                        startTest ? (
                            <div className="flex flex-col items-center space-y-5">
                                <span className="text-2xl font-bold text-blue-800 flex items-center gap-2">
                                    <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2l4-4" />
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                                    </svg>
                                    Assessment Questions for <span className="underline">{selectedTopic}</span>
                                </span>
                                <button
                                    className="mt-2 px-6 py-2 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-blue-900 font-semibold rounded-lg shadow-lg transition flex items-center gap-2"
                                    onClick={() => window.location.href = '/Ass'}
                                >
                                    <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                    Go here!
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center text-center space-y-7">
                                <span className="text-xl font-bold text-blue-800 flex items-center gap-2">
                                    <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01" />
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                                    </svg>
                                    Welcome to the Assessment!
                                </span>
                                <ol className="list-decimal text-left text-blue-700 text-base pl-7 space-y-1">
                                    <li className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Read the instructions carefully.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Ensure you have a stable internet connection.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Complete the assessment within the given time limit.
                                    </li>
                                </ol>
                                <select
                                    className="mt-2 px-4 py-2 rounded-lg border-2 border-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 w-full text-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50"
                                    value={selectedTopic}
                                    onChange={e => setSelectedTopic(e.target.value)}
                                >
                                    <option value="">Select Topic</option>
                                    <option value="HTML">HTML</option>
                                    <option value="CSS">CSS</option>
                                    <option value="JAVASCRIPT">JAVASCRIPT</option>
                                    <option value="C++">C++</option>
                                </select>
                                <button
                                    onClick={handleStart}
                                    className="w-full mt-2 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 hover:from-blue-800 hover:to-cyan-600 text-white font-bold py-2 rounded-lg shadow-lg transition flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                    START
                                </button>
                            </div>
                        )
                    ) : (
                        <>
                            <span className="block text-center text-2xl font-bold text-blue-800 mb-8 tracking-wider flex items-center gap-2">
                                <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V5a4 4 0 00-8 0v2m8 0a4 4 0 01-8 0" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7m-4-4h8" />
                                </svg>
                                ENTER YOUR DETAILS
                            </span>
                            <form
                                className="flex flex-col items-center space-y-6"
                                onSubmit={handleSubmit}
                            >
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        className="pl-10 pr-4 py-2 rounded-lg border-2 border-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 w-full text-blue-900 bg-gradient-to-r from-blue-50 to-cyan-50 placeholder-blue-400"
                                        pattern="^[A-Za-z\s]+$"
                                        title="Name must contain only alphabets and spaces"
                                        required
                                        autoComplete="off"
                                    />
                                    <span className="absolute left-3 top-2.5 text-blue-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        name="rollnumber"
                                        placeholder="Roll Number"
                                        className="pl-10 pr-4 py-2 rounded-lg border-2 border-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 w-full text-blue-900 bg-gradient-to-r from-blue-50 to-cyan-50 placeholder-blue-400"
                                        required
                                        autoComplete="off"
                                    />
                                    <span className="absolute left-3 top-2.5 text-blue-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V5a4 4 0 00-8 0v2m8 0a4 4 0 01-8 0" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7m-4-4h8" />
                                        </svg>
                                    </span>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 hover:from-blue-800 hover:to-cyan-600 text-white font-bold py-2 rounded-lg shadow-lg transition flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                    Submit
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Assessment;