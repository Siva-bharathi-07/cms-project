import React from "react";

export default function About() {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto bg-blue-50 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          About Our Assessment Courses
        </h1>
        <p className="text-blue-900 mb-6 text-lg">
          Our platform offers a unique selection of assessment courses designed
          to help you master new skills and track your progress effectively.
          Unlike other websites, we provide:
        </p>
        <ul className="space-y-4 mb-6">
          <li className="flex items-start">
            <span className="text-blue-600 font-semibold mr-2">•</span>
            <span>
              <strong className="text-blue-700">
                Personalized Learning Paths:
              </strong>{" "}
              Courses adapt to your strengths and areas for improvement.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-semibold mr-2">•</span>
            <span>
              <strong className="text-blue-700">Real-Time Feedback:</strong>{" "}
              Instant feedback on assessments to help you learn faster.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-semibold mr-2">•</span>
            <span>
              <strong className="text-blue-700">
                Industry-Relevant Content:
              </strong>{" "}
              All courses are curated by experts to match current industry
              standards.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-semibold mr-2">•</span>
            <span>
              <strong className="text-blue-700">
                Interactive Assessments:
              </strong>{" "}
              Engaging quizzes and projects to reinforce your knowledge.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-semibold mr-2">•</span>
            <span>
              <strong className="text-blue-700">Progress Tracking:</strong>{" "}
              Visual dashboards to monitor your achievements and set new goals.
            </span>
          </li>
        </ul>
        <p className="text-blue-900 text-center text-lg">
          Join us to experience a smarter, more effective way to learn and
          assess your skills!
        </p>
      </div>
    </div>
  );
}
