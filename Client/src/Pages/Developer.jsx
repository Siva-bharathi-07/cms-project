import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const team = [
    {
        name: 'SIVABARATHI',
        degree: 'B.E COMPUTER SCIENCE ENGINEERING',
        role: 'TEAMLEADER',
        img: 'https://i.pinimg.com/originals/13/0d/e9/130de90d259d637c8ffa05ef65331b18.jpg',
        linkedin: 'https://www.linkedin.com/in/sivabarathi',
    },
    {
        name: 'VISVANTHA',
        degree: 'B.E COMPUTER SCIENCE ENGINEERING',
        role: 'MEMBERS',
        img: 'https://static.wikia.nocookie.net/callofduty/images/c/c0/Alex_Mason_Infobox_1986_BOII.png/revision/latest?cb=20231213181030',
        linkedin: 'https://www.linkedin.com/in/visvantha',
    },
    {
        name: 'SAKTHI SUDARSHAN',
        degree: 'B.E COMPUTER SCIENCE ENGINEERING',
        role: 'MEMBERS',
        img: 'https://static.wikia.nocookie.net/callofduty/images/9/9c/JasonHudson_RevealTrailer_BOCW.png/revision/latest?cb=20200826203728',
        linkedin: 'https://www.linkedin.com/in/sakthisudarshan',
    },
];

function Developer() {
    const [openPopup, setOpenPopup] = useState(null);

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-700 via-blue-500 to-blue-800 bg-cover bg-center flex flex-col relative">
                {/* Thick blue gradient line below the header */}
                <div className="absolute top-24 left-0 w-full h-3 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-800 shadow-lg z-20 rounded"></div>
                <div className="absolute top-8 left-10">
                    <h1 className="text-4xl font-extrabold text-white drop-shadow-lg tracking-tight">Developer</h1>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="bg-gradient-to-br from-white via-gray-100 to-gray-300 rounded-0xl shadow-2xl px-8 py-8 flex flex-col items-center w-full max-w-10xl  mx-auto">
                        <h2
                            className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 bg-clip-text text-transparent drop-shadow-md tracking-tight mb-8 transition-transform duration-300 hover:scale-110 hover:text-blue-700"
                            style={{ cursor: 'pointer' }}
                        >
                            <span className="font-bold text-black">OUR</span> <span className="font-extrabold uppercase">TEAM</span>
                        </h2>
                        <div className="flex flex-row gap-8 justify-center">
                            {team.map((member, idx) => (
                                <div key={member.name} className="relative flex flex-col items-center rounded-lg p-6 w-72 h-80 shadow cursor-pointer transition-transform duration-200 hover:scale-105 hover:z-10 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-400 text-white hover:shadow-2xl">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-25 h-24 rounded-full object-cover mb-4 border-4 border-white shadow"
                                    />
                                    <div className="flex flex-col items-center space-y-2">
                                        <div className="font-bold text-base leading-tight">Name</div>
                                        <div className="mb-1 font-extrabold text-lg leading-tight tracking-tight">{member.name}</div>
                                        <div className="font-bold text-base leading-tight">Degree</div>
                                        <div className="mb-1 font-semibold text-sm leading-tight tracking-tight">{member.degree}</div>
                                        <div className="font-bold text-base leading-tight">{member.role}</div>
                                    </div>
                                    {/* LinkedIn Icon */}
                                    <a
                                        className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow hover:bg-blue-100 transition"
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Show LinkedIn for ${member.name}`}
                                        onClick={e => e.stopPropagation()}
                                    >
                                        <FaLinkedin size={28} className="text-blue-700" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="fixed right-8 bottom-24 flex flex-col items-center z-50">
                    <span className="mb-1 text-xs font-semibold text-white bg-blue-900 px-2 py-1 rounded shadow">View on GitHub</span>
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-full p-3 shadow hover:bg-gray-100 transition flex items-center"
                        aria-label="GitHub"
                    >
                        <FaGithub size={32} className="text-gray-800" />
                    </a>
                </div>
                {/* Footer */}
                <footer className="w-full bg-blue-900 text-white py-4 mt-8 text-center relative">
                    <div className="max-w-4xl mx-auto flex flex-col items-center">
                        <span className="font-semibold">CMS Project &copy; {new Date().getFullYear()}</span>
                        <span className="text-sm mt-1">Developed by our passionate team of Computer Science Engineers</span>
                    </div>
                </footer>
            </div>
        </>
    );
}
{/* GitHub icon with text above the footer box, right side */}

export default Developer;
