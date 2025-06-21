import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const quizData = {
  HTML: [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinking Text Mark Language"], answer: 0 },
    { question: "Who is making the Web standards?", options: ["Google", "Microsoft", "Mozilla", "W3C"], answer: 3 },
    { question: "Choose the correct HTML element for the largest heading:", options: ["<head>", "<h6>", "<h1>", "<heading>"], answer: 2 },
    { question: "What is the correct HTML element for inserting a line break?", options: ["<break>", "<lb>", "<br>", "<line>"], answer: 2 },
    { question: "What is the correct HTML for adding a background color?", options: ['<body bg="yellow">', '<body style="background-color:yellow;">', '<background>yellow</background>', '<bg>yellow</bg>'], answer: 1 },
    { question: "How can you make a numbered list?", options: ["<ol>", "<ul>", "<list>", "<dl>"], answer: 0 },
    { question: "How can you make a bulleted list?", options: ["<ul>", "<ol>", "<list>", "<dl>"], answer: 0 },
    { question: "What is the correct HTML for creating a hyperlink?", options: ['<a href="url">link</a>', '<link href="url">link</link>', '<a>link</a>', '<href>link</href>'], answer: 0 },
    { question: "Which character is used to indicate an end tag?", options: ["^", "/", "*", "<"], answer: 1 },
    { question: "How can you open a link in a new tab/browser window?", options: ['<a href="url" target="_blank">', '<a href="url" new>', '<a href="url" target="new">', '<a href="url" target="_self">'], answer: 0 },
  ],
  CSS: [
    { question: "What does CSS stand for?", options: ["Creative Style Sheets", "Colorful Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"], answer: 2 },
    { question: "Where in an HTML document is the correct place to refer to an external style sheet?", options: ["In the <head> section", "In the <body> section", "At the end of the document", "Before the <html> tag"], answer: 0 },
    { question: "Which HTML tag is used to define an internal style sheet?", options: ["<script>", "<style>", "<css>", "<stylesheet>"], answer: 1 },
    { question: "Which property is used to change the background color?", options: ["color", "background-color", "bgcolor", "bg-color"], answer: 1 },
    { question: "How do you add a comment in a CSS file?", options: ["// this is a comment", "/* this is a comment */", "' this is a comment", "// this is a comment //"], answer: 1 },
    { question: "Which property controls the text size?", options: ["font-style", "text-size", "font-size", "text-style"], answer: 2 },
    { question: "How do you select an element with id 'demo'?", options: ["#demo", ".demo", "*demo", "demo"], answer: 0 },
    { question: "How do you group selectors?", options: ["Separate each selector with a comma", "Separate each selector with a space", "Separate each selector with a plus sign", "Separate each selector with a dot"], answer: 0 },
    { question: "Which property is used to change the font of an element?", options: ["font-weight", "font-style", "font-family", "font-variant"], answer: 2 },
    { question: "How do you make each word in a text start with a capital letter?", options: ["text-transform: capitalize;", "text-style: capitalize;", "transform: capitalize;", "You can't do that with CSS"], answer: 0 },
  ],
  JAVASCRIPT: [
    { question: "Inside which HTML element do we put the JavaScript?", options: ["<javascript>", "<script>", "<js>", "<scripting>"], answer: 1 },
    { question: "How do you write 'Hello World' in an alert box?", options: ['msg("Hello World")', 'alertBox("Hello World")', 'alert("Hello World")', 'msgBox("Hello World")'], answer: 2 },
    { question: "How do you create a function in JavaScript?", options: ['function myFunction()', 'function:myFunction()', 'function = myFunction()', 'create myFunction()'], answer: 0 },
    { question: "How to write an IF statement in JavaScript?", options: ['if i = 5 then', 'if i == 5 then', 'if (i == 5)', 'if i = 5'], answer: 2 },
    { question: "How does a WHILE loop start?", options: ['while (i <= 10)', 'while i = 1 to 10', 'while (i <= 10; i++)', 'while (i <= 10) i++'], answer: 0 },
    { question: "How can you add a comment in JavaScript?", options: ['<!-- This is a comment -->', '// This is a comment', '/* This is a comment */', '# This is a comment'], answer: 1 },
    { question: "What is the correct way to write a JavaScript array?", options: ['var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = ["red", "green", "blue"]', 'var colors = "red", "green", "blue"', 'var colors = {"red", "green", "blue"}'], answer: 1 },
    { question: "How do you round the number 7.25 to the nearest integer?", options: ['round(7.25)', 'rnd(7.25)', 'Math.round(7.25)', 'Math.rnd(7.25)'], answer: 2 },
    { question: "How do you find the number with the highest value of x and y?", options: ['Math.max(x, y)', 'Math.high(x, y)', 'top(x, y)', 'Math.ceil(x, y)'], answer: 0 },
    { question: "Which event occurs when the user clicks on an HTML element?", options: ['onchange', 'onclick', 'onmouseover', 'onmouseclick'], answer: 1 },
  ],
  "C++": [
    { question: "Which of the following is a correct comment in C++?", options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "Both A and B"], answer: 3 },
    { question: "Which header file is needed for input/output in C++?", options: ["<iostream>", "<stdio.h>", "<input>", "<output>"], answer: 0 },
    { question: "What is the correct way to declare a variable in C++?", options: ["int varName;", "var int varName;", "int varName = 0;", "Both A and C"], answer: 3 },
    { question: "Which operator is used to access members of a class through a pointer?", options: ["->", ".", "*", "&"], answer: 0 },
    { question: "What is the default access modifier for class members?", options: ["private", "public", "protected", "none"], answer: 0 },
    { question: "Which keyword is used to inherit a class?", options: ["extends", "inherits", ":", "::"], answer: 2 },
    { question: "Which function is the entry point of a C++ program?", options: ["main()", "start()", "init()", "run()"], answer: 0 },
    { question: "What does 'cout' do in C++?", options: ["Outputs data to screen", "Takes input", "Stores data", "None of the above"], answer: 0 },
    { question: "Which keyword is used to define a constant variable?", options: ["const", "constant", "constexpr", "immutable"], answer: 0 },
    { question: "How do you create a single-line comment in C++?", options: ["// comment", "/* comment */", "# comment", "<!-- comment -->"], answer: 0 },
  ],
};

const motivationQuotes = [
  "Believe you can and you're halfway there.",
  "Don't watch the clock; do what it does. Keep going.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Keep your face always toward the sunshine—and shadows will fall behind you.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
];

export default function Ass() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, rollnumber, selectedTopic } = location.state || {};

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600);
  const [showResult, setShowResult] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (!name || !rollnumber || !selectedTopic) {
      alert("Missing data! Please go back and fill the form.");
      navigate("/");
    }
  }, [name, rollnumber, selectedTopic, navigate]);

  useEffect(() => {
    if (timeLeft <= 0) {
      setShowResult(true);
      return;
    }
    const timerId = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  if (!selectedTopic || !quizData[selectedTopic]) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 text-gray-100 px-4">
        <p className="text-2xl font-semibold">Invalid topic selected. Please go back and choose a valid topic.</p>
      </div>
    );
  }

  const questions = quizData[selectedTopic];
  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption === null) {
      alert("Please select an option before proceeding.");
      return;
    }

    const earned = selectedOption === currentQuestion.answer ? 5 : 0;
    setScore((prev) => prev + earned);
    setSelectedOption(null);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
      if (score + earned === questions.length * 5) {
        setShowCongrats(true);
      }
    }
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 text-gray-100">
      <header className="bg-blue-950 p-4 shadow text-white text-center text-xl font-semibold">Assessment Portal</header>

      <div className="flex-1 p-6 flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="bg-white/90 text-blue-900 rounded-lg shadow p-6 w-full lg:w-64 mb-6 lg:mb-0 lg:mr-6">
          <h2 className="text-xl font-bold border-b pb-2 mb-4">Candidate Info</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Roll No:</strong> {rollnumber}</p>
          <p className="mt-4"><strong>Topic:</strong> <span className="text-blue-600 font-semibold">{selectedTopic}</span></p>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white/90 text-blue-900 rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Question {currentQuestionIndex + 1} of {questions.length}</h3>
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-mono">
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </div>
          </div>

          {!showResult ? (
            <div>
              <h4 className="text-xl font-bold mb-4">{currentQuestion.question}</h4>
              <div className="space-y-4">
                {currentQuestion.options.map((option, index) => (
                  <label key={index} className={`block p-4 rounded-lg border cursor-pointer transition-all ${
                    selectedOption === index ? 'bg-blue-100 border-blue-600' : 'bg-white border-gray-300 hover:border-blue-400'
                  }`}>
                    <input
                      type="radio"
                      name="option"
                      value={index}
                      checked={selectedOption === index}
                      onChange={() => handleOptionSelect(index)}
                      className="mr-3"
                    />
                    {option}
                  </label>
                ))}
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={handleNext}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow"
                >
                  {currentQuestionIndex + 1 === questions.length ? "Finish" : "Next"}
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-green-600">Your Score</h2>
              <p className="text-5xl my-4">{score} / {questions.length * 5}</p>

              {showCongrats && (
                <div className="bg-green-100 text-green-800 p-4 rounded shadow mb-4">
                  🎉 Hurray, you got full score! 🎉
                </div>
              )}

              <p className="italic text-gray-700 mb-6">"{motivationQuotes[Math.floor(Math.random() * motivationQuotes.length)]}"</p>

              <textarea
                placeholder="Write your feedback here..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full p-4 border rounded-lg text-blue-900 mb-6"
                rows="4"
              ></textarea>

              {/* Show all questions and correct answers after finishing */}
              <div className="mt-8 text-left max-h-96 overflow-y-auto bg-blue-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Quiz Review: Questions & Correct Answers</h3>
                {questions.map((q, idx) => (
                  <div key={idx} className="mb-4 p-4 border border-blue-300 rounded-lg bg-white">
                    <p className="font-semibold">
                      {idx + 1}. {q.question}
                    </p>
                    <p className="mt-2 text-green-700 font-medium">
                      Correct Answer: {q.options[q.answer]}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/")}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow"
              >
                Back to Home
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Thin Footer */}
      <footer className="bg-white/20 backdrop-blur-sm text-center text-blue-100 py-1 text-xs mt-auto">
        <p className="mb-0">
          <button
            onClick={() => navigate("/")}
            className="text-blue-200 hover:text-white font-semibold transition"
          >
            Get Started
          </button>
        </p>
        <p>© 2025 Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}
