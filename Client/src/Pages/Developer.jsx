import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const team = [
  {
    name: "SIVABARATHI",
    degree: "B.E COMPUTER SCIENCE ENGINEERING",
    role: "TEAMLEADER",
    img: "https://i.pinimg.com/originals/13/0d/e9/130de90d259d637c8ffa05ef65331b18.jpg",
    linkedin: "https://www.linkedin.com/in/sivabarathi",
  },
  {
    name: "VISVANTHA",
    degree: "B.E COMPUTER SCIENCE ENGINEERING",
    role: "MEMBERS",
    img: "https://static.wikia.nocookie.net/callofduty/images/c/c0/Alex_Mason_Infobox_1986_BOII.png/revision/latest?cb=20231213181030",
    linkedin: "https://www.linkedin.com/in/visvantha",
  },
  {
    name: "SAKTHI SUDARSHAN",
    degree: "B.E COMPUTER SCIENCE ENGINEERING",
    role: "MEMBERS",
    img: "https://static.wikia.nocookie.net/callofduty/images/9/9c/JasonHudson_RevealTrailer_BOCW.png/revision/latest?cb=20200826203728",
    linkedin: "https://www.linkedin.com/in/sakthisudarshan",
  },
];

function Developer() {
  const [openPopup, setOpenPopup] = useState(null);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 flex flex-col relative">
        {/* Header */}
        <header className="py-10 px-8 flex flex-col items-center relative">
          <h1 className="text-5xl font-black text-white drop-shadow-lg tracking-tight mb-2">
            Developer
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 rounded-full mt-2 mb-4"></div>
          <p className="text-gray-200 text-lg font-medium">
            Meet our passionate development team
          </p>
        </header>

        {/* Team Section */}
        <main className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {team.map((member, idx) => (
              <div
                key={member.name}
                className="relative flex flex-col items-center rounded-2xl p-8 bg-white/90 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 group"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-500 shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="flex flex-col items-center space-y-1">
                  <div className="font-semibold text-gray-700 text-sm">
                    Name
                  </div>
                  <div className="font-extrabold text-lg text-blue-800 tracking-tight">
                    {member.name}
                  </div>
                  <div className="font-semibold text-gray-700 text-sm mt-2">
                    Degree
                  </div>
                  <div className="font-medium text-gray-600 text-xs text-center">
                    {member.degree}
                  </div>
                  <div className="mt-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-wider shadow-sm">
                    {member.role}
                  </div>
                </div>
                <a
                  className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow hover:bg-blue-100 transition"
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Show LinkedIn for ${member.name}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaLinkedin size={28} className="text-blue-700" />
                </a>
              </div>
            ))}
          </div>
        </main>

        {/* GitHub Corner */}
        <div className="fixed bottom-16 right-8 z-50">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-xl shadow-lg transition-all duration-300 opacity-80 hover:opacity-100 hover:-translate-y-2"
            style={{ minWidth: 100, cursor: "pointer" }}
            aria-label="View on GitHub"
          >
            <FaGithub size={26} />
            <span className="font-semibold text-base">GitHub</span>
          </a>
        </div>

        {/* Footer */}
        <footer className="w-full bg-blue-900 text-white py-3 mt-8 text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <span className="text-sm">
              © 2025 Learning Platform. All rights reserved.
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Developer;
