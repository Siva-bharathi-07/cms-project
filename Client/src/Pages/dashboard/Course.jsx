import React from "react";

export default function Course() {
  const courses = [
    {
      name: "HTML",
      description:
        "The standard markup language for creating web pages and web applications.",
      topics: [
        {
          title: "Elements and tags",
          code: `<h1>Hello World</h1>`,
        },
        {
          title: "Attributes",
          code: `<img src="logo.png" alt="Logo" />`,
        },
        {
          title: "Document structure (head, body)",
          code: `<html>
<head>
    <title>Page Title</title>
</head>
<body>
    Content here
</body>
</html>`,
        },
        {
          title: "Forms and inputs",
          code: `<form><input type="text" /></form>`,
        },
        {
          title: "Links and images",
          code: `<a href="https://example.com">Visit</a>`,
        },
        {
          title: "Lists (ordered, unordered)",
          code: `<ul>
<li>Item 1</li>
<li>Item 2</li>
</ul>
<ol>
<li>First</li>
<li>Second</li>
</ol>`,
        },
        {
          title: "Tables",
          code: `<table>
<tr><th>Name</th><th>Age</th></tr>
<tr><td>Alice</td><td>24</td></tr>
</table>`,
        },
        {
          title: "Semantic elements",
          code: `<header>Header</header>
<nav>Navigation</nav>
<main>Main content</main>
<footer>Footer</footer>`,
        },
        {
          title: "Meta tags",
          code: `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
        },
      ],
    },
    {
      name: "CSS",
      description:
        "A stylesheet language used for describing the presentation of a document written in HTML.",
      topics: [
        {
          title: "Selectors and properties",
          code: `p {
color: blue;
}`,
        },
        {
          title: "Box model",
          code: `div {
padding: 10px;
border: 1px solid black;
margin: 5px;
}`,
        },
        {
          title: "Layout (Flexbox, Grid)",
          code: `.container {
display: flex;
}`,
        },
        {
          title: "Colors and fonts",
          code: `h1 {
color: red;
font-family: Arial;
}`,
        },
        {
          title: "Responsive design",
          code: `@media (max-width: 600px) {
body { font-size: 14px; }
}`,
        },
        {
          title: "Pseudo-classes and pseudo-elements",
          code: `a:hover {
color: green;
}
p::first-line {
font-weight: bold;
}`,
        },
        {
          title: "Transitions and animations",
          code: `.box {
transition: background 0.3s;
}
@keyframes fade {
from { opacity: 0; }
to { opacity: 1; }
}`,
        },
        {
          title: "Positioning (absolute, relative, fixed)",
          code: `.fixed-header {
position: fixed;
top: 0;
width: 100%;
}`,
        },
        {
          title: "Z-index and stacking context",
          code: `.modal {
z-index: 1000;
}`,
        },
      ],
    },
    {
      name: "JavaScript",
      description:
        "A programming language that enables interactive web pages and is an essential part of web applications.",
      topics: [
        {
          title: "Variables and data types",
          code: `let name = "Alice";
let age = 25;`,
        },
        {
          title: "Functions",
          code: `function greet() {
alert("Hello!");
}`,
        },
        {
          title: "Control structures (if, for, while)",
          code: `for(let i=0; i<3; i++) {
console.log(i);
}`,
        },
        {
          title: "DOM manipulation",
          code: `document.getElementById("demo").innerText = "Hi";`,
        },
        {
          title: "Events",
          code: `button.onclick = function() {
alert("Clicked!");
}`,
        },
        {
          title: "Arrays and objects",
          code: `const arr = [1, 2, 3];
const obj = { name: "Bob", age: 30 };`,
        },
        {
          title: "Arrow functions",
          code: `const add = (a, b) => a + b;`,
        },
        {
          title: "Promises and async/await",
          code: `async function fetchData() {
const res = await fetch('/api');
}`,
        },
        {
          title: "Local storage",
          code: `localStorage.setItem("key", "value");
const val = localStorage.getItem("key");`,
        },
      ],
    },
    {
      name: "C++",
      description:
        "A general-purpose programming language known for its performance and use in system/software development.",
      topics: [
        {
          title: "Variables and data types",
          code: `int age = 20;
double price = 19.99;`,
        },
        {
          title: "Functions",
          code: `void greet() {
cout << "Hello!";
}`,
        },
        {
          title: "Control structures (if, for, while)",
          code: `for(int i=0; i<3; i++) {
cout << i << endl;
}`,
        },
        {
          title: "Classes and objects",
          code: `class Car {
public:
void drive() { cout << "Driving"; }
};`,
        },
        {
          title: "Pointers and memory management",
          code: `int* ptr = new int;
*ptr = 5;
delete ptr;`,
        },
        {
          title: "Inheritance",
          code: `class Animal {
public:
void speak() { cout << "Sound"; }
};
class Dog : public Animal {};`,
        },
        {
          title: "STL (Standard Template Library)",
          code: `#include <vector>
std::vector<int> v = {1, 2, 3};`,
        },
        {
          title: "File I/O",
          code: `#include <fstream>
std::ofstream file("test.txt");
file << "Hello";
file.close();`,
        },
        {
          title: "References",
          code: `int a = 5;
int& ref = a;`,
        },
      ],
    },
  ];

  const [selected, setSelected] = React.useState(0);

  return (
    <div className="bg-white min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex space-x-4 mb-8">
          {courses.map((course, idx) => (
            <button
              key={course.name}
              onClick={() => setSelected(idx)}
              className={`px-4 py-2 rounded font-semibold transition-colors ${
                selected === idx
                  ? "bg-blue-600 text-white shadow"
                  : "bg-blue-50 text-blue-700 hover:bg-blue-100"
              }`}
            >
              {course.name}
            </button>
          ))}
        </div>
        <div className="bg-blue-50 rounded-lg shadow p-6">
          <strong className="text-blue-700 text-xl">
            {courses[selected].name}
          </strong>
          <span className="block text-gray-700 mt-2 mb-4">
            {courses[selected].description}
          </span>
          <ul className="space-y-4 ml-4">
            {courses[selected].topics.map((topic, i) => (
              <li key={i}>
                <span className="font-semibold text-blue-600">
                  {topic.title}
                </span>
                <br />
                <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded block mt-1 whitespace-pre">
                  {topic.code}
                </code>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
