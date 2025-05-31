import React from 'react';

function About(props) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')" }}>
            <div className="max-w-2xl mx-auto mt-10 p-8 bg-white/90 rounded-lg shadow-md backdrop-blur-sm">
                <strong className="text-xl text-blue-700 flex items-center gap-2 mb-2">
                    <span role="img" aria-label="about">🌟</span> ABOUT US :
                </strong>
                <p className="text-gray-700 mb-4">
                    The Career and Training Management System (CTMS) is a comprehensive platform designed to streamline and enhance career development and professional training processes for students, employees, or trainees. It provides an integrated environment where users can track progress, explore opportunities, and grow their skill sets effectively.
                </p>
                <strong className="text-lg text-blue-700 flex items-center gap-2 mb-2">
                    <span role="img" aria-label="purpose">🗣️</span> PURPOSE :
                </strong>
                <p className="text-gray-700 mb-2">
                    The primary goal of CTMS is to bridge the gap between career aspirations and practical skills by offering:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 pl-4">
                    <li>Personalized training roadmaps</li>
                    <li>Job and internship tracking</li>
                    <li>Skill assessment tools</li>
                    <li>Automated notifications and progress monitoring</li>
                </ul>
            </div>
        </div>
    );
}

export default About;
