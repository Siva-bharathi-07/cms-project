import React, { useState } from 'react';
// import Footer from "../components/Footer";

// No changes needed here for the footer import, it's already imported above.

const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyper Tool Multi Language"
        ],
        answer: 0
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: [
            "<css>",
            "<script>",
            "<style>",
            "<link>"
        ],
        answer: 2
    },
    {
        question: "Which property is used to change the background color in CSS?",
        options: [
            "color",
            "background-color",
            "bgcolor",
            "background"
        ],
        answer: 1
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options: [
            "<break>",
            "<br>",
            "<lb>",
            "<linebreak>"
        ],
        answer: 1
    },
    {
        question: "Which CSS property controls the text size?",
        options: [
            "font-style",
            "text-size",
            "font-size",
            "text-style"
        ],
        answer: 2
    },
    {
        question: "How do you write a comment in HTML?",
        options: [
            "// This is a comment",
            "<!-- This is a comment -->",
            "' This is a comment",
            "** This is a comment **"
        ],
        answer: 1
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: [
            "font",
            "style",
            "class",
            "styles"
        ],
        answer: 1
    },
    {
        question: "How do you select an element with id 'demo' in CSS?",
        options: [
            ".demo",
            "#demo",
            "*demo",
            "demo"
        ],
        answer: 1
    },
    {
        question: "Which HTML tag is used to display a picture on a webpage?",
        options: [
            "<picture>",
            "<img>",
            "<image>",
            "<photo>"
        ],
        answer: 1
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: [
            "fgcolor",
            "color",
            "text-color",
            "font-color"
        ],
        answer: 1
    },
    {
        question: "What is the correct HTML for making a checkbox?",
        options: [
            "<input type='checkbox'>",
            "<checkbox>",
            "<input type='check'>",
            "<check>"
        ],
        answer: 0
    },
    {
        question: "How do you make a list that lists its items with numbers?",
        options: [
            "<ul>",
            "<ol>",
            "<dl>",
            "<list>"
        ],
        answer: 1
    },
    {
        question: "Which property is used to change the left margin of an element?",
        options: [
            "margin-left",
            "padding-left",
            "indent",
            "margin"
        ],
        answer: 0
    },
    {
        question: "Which HTML tag is used to define a table row?",
        options: [
            "<tr>",
            "<td>",
            "<th>",
            "<row>"
        ],
        answer: 0
    },
    {
        question: "How do you add a background color for all <h1> elements in CSS?",
        options: [
            "h1 {background-color: #FFFFFF;}",
            "h1.all {background-color: #FFFFFF;}",
            "all.h1 {background-color: #FFFFFF;}",
            "h1 {bgcolor: #FFFFFF;}"
        ],
        answer: 0
    },
    {
        question: "Which HTML tag is used to make text bold?",
        options: [
            "<bold>",
            "<b>",
            "<strong>",
            "<bl>"
        ],
        answer: 1
    },
    {
        question: "Which CSS property is used to change the font of an element?",
        options: [
            "font-family",
            "font-style",
            "font-weight",
            "font-type"
        ],
        answer: 0
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        options: [
            "<a>http://www.example.com</a>",
            "<a href='http://www.example.com'>Example</a>",
            "<link>http://www.example.com</link>",
            "<href>http://www.example.com</href>"
        ],
        answer: 1
    },
    {
        question: "How do you display a border like this: The top border = 10px, bottom = 5px, left = 20px, right = 1px?",
        options: [
            "border-width:10px 1px 5px 20px;",
            "border-width:10px 20px 5px 1px;",
            "border-width:10px 1px 20px 5px;",
            "border-width:10px 20px 1px 5px;"
        ],
        answer: 0
    },
    {
        question: "Which HTML element defines the title of a document?",
        options: [
            "<meta>",
            "<title>",
            "<head>",
            "<header>"
        ],
        answer: 1
    }
];

function Assessment() {
    const [step, setStep] = React.useState(0); // 0: user info, 1: welcome, 2: quiz, 3: result
    const [name, setName] = React.useState('');
    const [rollno, setRollno] = React.useState('');
    const [current, setCurrent] = React.useState(0);
    const [selected, setSelected] = React.useState(null);
    const [score, setScore] = React.useState(0);
    const [showSuper, setShowSuper] = React.useState(false);
    const [nameError, setNameError] = React.useState('');

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        if (/^[A-Za-z\s]*$/.test(value)) {
            setNameError('');
        } else {
            setNameError('Invalid name');
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (name.trim() && rollno.trim() && !nameError) {
            setStep(1);
        }
    };

    const handleStartAssessment = () => {
        setStep(2);
    };

    const handleOptionClick = (idx) => {
        setSelected(idx);
    };

    const handleNext = () => {
        if (selected === questions[current].answer) {
            setScore(score + 1);
        }
        setSelected(null);
        if (current < questions.length - 1) {
            setCurrent(current + 1);
        } else {
            const finalScore = score + (selected === questions[current].answer ? 1 : 0);
            if (finalScore === questions.length) {
                setShowSuper(true);
            }
            setScore(finalScore);
            setStep(3);
        }
    };

    const handleRestart = () => {
        setStep(0);
        setName('');
        setRollno('');
        setCurrent(0);
        setSelected(null);
        setScore(0);
        setShowSuper(false);
        setNameError('');
    };

    return (

        
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex">
            {/* Heading on left */}
            <div className="w-1/3 p-10">
                <h2 className="text-4xl font-extrabold text-white mb-4">Assessment </h2>
            </div>
        
                    <div className="w-2/3 flex justify-center items-center">
                        <div className="max-w-xl w-full p-10 border border-white-1000 rounded-lg shadow-15xl shadow-black bg-white  text-blue relative">
                            {step === 0 && (
                                <form onSubmit={handleFormSubmit} className="space-y-4">
                                    <div>
                                        <label className="block mb-1 font-bold text-blue-700">Name</label>
                                        <input
                                            type="text"
                                            className={`w-full px-3 py-2 border rounded focus:outline-black-1x focus:ring-2 bg-blue-500 text-white placeholder-blue-200
                                                ${nameError ? "border-black-400 focus:ring-red-400" : "border-blue-400 focus:ring-blue-200"}`}
                                            value={name}
                                            onChange={handleNameChange}
                                            required
                                            placeholder="Enter your name"
                                        />
                                        {nameError && (
                                            <div className="text-red-300 text-sm mt-1">{nameError}</div>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block mb-1 font-bold text-blue-700">Roll No</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-blue-400 rounded focus:outline-black focus:ring-2 focus:ring-blue-200 bg-blue-500 text-white placeholder-blue-200"
                                            value={rollno}
                                            onChange={e => setRollno(e.target.value)}
                                            required
                                            placeholder="Enter your roll number"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className={`w-full px-6 py-2 text-white rounded font-semibold transition
                                            ${name.trim() && rollno.trim() && !nameError ? "bg-blue-800 hover:bg-blue-900" : "bg-blue-400 cursor-not-allowed"}`}
                                        disabled={!(name.trim() && rollno.trim() && !nameError)}
                                    >
                                        Continue
                                    </button>
                                </form>
                            )}
                            {step === 1 && (
                                <div className="text-center space-y-6">
                                    <div className="text-lg font-bold text-blue-800 mb-2">
                                        Welcome to the assessment, <span className="font-bold text-gray-800 text-2xl">{name}</span>!
                                    </div>
                                    <div className="text-blue-700 text-xl">Roll No: <span className="font-semibold text-gray-800 text-2xl">{rollno}</span></div>
                                    <div className="text-black-100">Press the button below to begin your assessment.</div>
                                    <button
                                        onClick={handleStartAssessment}
                                        className="px-6 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition font-semibold"
                                    >
                                        Start Assessment
                                    </button>
                                </div>
                            )}
                            {step === 2 && (
                                <div>
                                    <div className="mb-2 text-gray-800 text-sm">
                                        <span className="font-semibold text-blue-700 text-lg">Name:</span> <span className="text-gray-800 text-lg">{name}</span> &nbsp; | &nbsp;
                                        <span className="font-semibold text-blue-700 text-lg">Roll No:</span> <span className="text-gray-800 text-lg">{rollno}</span>
                                    </div>
                                    <h4 className="text-lg font-medium mb-2">Question {current + 1} of {questions.length}</h4>
                                    <p className="mb-4">{questions[current].question}</p>
                                    <ul className="list-none p-0 mb-4">
                                        {questions[current].options.map((opt, idx) => (
                                            <li key={idx} className="mb-2">
                                                <button
                                                    className={`w-full px-4 py-2 rounded border transition text-white
                                                        ${selected === idx
                                                            ? "bg-blue-900 border-blue-300"
                                                            : "bg-blue-500 border-blue-400 hover:bg-blue-700"}
                                                        ${selected !== null ? "cursor-not-allowed opacity-70" : "cursor-pointer"}
                                                    `}
                                                    onClick={() => handleOptionClick(idx)}
                                                    disabled={selected !== null}
                                                >
                                                    {opt}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={handleNext}
                                        disabled={selected === null}
                                        className={`mt-4 px-6 py-2 rounded text-white font-semibold transition
                                            ${selected === null
                                                ? "bg-blue-400 cursor-not-allowed"
                                                : "bg-blue-800 hover:bg-blue-900"}
                                        `}
                                    >
                                        {current === questions.length - 1 ? "Finish" : "Next"}
                                    </button>
                                </div>
                            )}
                            {step === 3 && (
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Your Score: {score * 5} / {questions.length * 5}
                                    </h3>
                                    <div className="mb-4 text-blue-700">
                                        <span className="font-semibold text-blue-700 text-xl">Name:</span> <span className="text-gray-800 text-2xl">{name}</span> <br />
                                        <span className="font-semibold text-blue-700 text-xl">Roll No:</span> <span className="text-gray-800 text-2xl">{rollno}</span>
                                    </div>
                                    <button
                                        onClick={handleRestart}
                                        className="px-6 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition"
                                    >
                                        Restart
                                    </button>
                                </div>
                            )}
                            {/* Super popup */}
                    {showSuper && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                                <div className="text-3xl font-bold text-green-600 mb-4">Super!</div>
                                <div className="mb-4">You got full marks!</div>
                                <button
                                    onClick={() => setShowSuper(false)}
                                    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="fixed bottom-0 left-0 w-full z-5">
                <div className="bg-blue-900 text-white text-center py-1 text-sm font-semibold">
                    All the best!
                </div>
            </div>
        </div>
    );
}

export default Assessment;
