import React from 'react';

function Developer() {
    // Remove openBox state and handleBoxClick to disable "dissolve" (popup) on click
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 bg-cover bg-center flex flex-col">
            {/* Heading in top-left corner */}
            <div className="absolute top-8 left-10">
                <h1 className="text-4xl font-bold text-white drop-shadow-lg">Developer</h1>
            </div>
            <main className="flex flex-1 items-center justify-center">
                <div className="flex bg-white/90 rounded-lg shadow-lg p-8 backdrop-blur-md">
                    {/* 3 Photo + Info Boxes in a horizontal row */}
                    <div className="flex flex-row gap-6">
                        {/* Box 1 */}
                        <div
                            className="flex items-center rounded-lg p-6 min-w-[340px] shadow cursor-pointer transition-transform duration-200 hover:scale-110 hover:z-10 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white hover:shadow-2xl"
                        >
                            <img
                                src="https://i.pinimg.com/originals/13/0d/e9/130de90d259d637c8ffa05ef65331b18.jpg"
                                alt="John Doe"
                                className="w-20 h-20 rounded-full object-cover mr-6 border-4 border-white shadow"
                            />
                            <div>
                                <div className="font-semibold">Name</div>
                                <div className="mb-2">SIVABARATHI</div>
                                <div className="font-semibold">Degree</div>
                                <div className="mb-2">B.E COMPUTER SCIENCE ENGINEERING</div>
                                <div className="font-semibold">TeamLeader</div>
                            </div>
                        </div>
                        {/* Box 2 */}
                        <div
                            className="flex items-center rounded-lg p-6 min-w-[340px] shadow cursor-pointer transition-transform duration-200 hover:scale-110 hover:z-10 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white hover:shadow-2xl"
                        >
                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="Jane Smith"
                                className="w-20 h-20 rounded-full object-cover mr-6 border-4 border-white shadow"
                            />
                            <div>
                                <div className="font-semibold">Name</div>
                                <div className="mb-2">VISVANTHA</div>
                                <div className="font-semibold">Degree</div>
                                <div className="mb-2">B.E COMPUTER SCIENCE ENGINEERING</div>
                                <div className="font-semibold">MEMBERS</div>
                            </div>
                        </div>
                        {/* Box 3 */}
                        <div
                            className="flex items-center rounded-lg p-6 min-w-[340px] shadow cursor-pointer transition-transform duration-200 hover:scale-110 hover:z-10 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white hover:shadow-2xl"
                        >
                            <img
                                src="https://randomuser.me/api/portraits/men/65.jpg"
                                alt="Alex Lee"
                                className="w-20 h-20 rounded-full object-cover mr-6 border-4 border-white shadow"
                            />
                            <div>
                                <div className="font-semibold">Name</div>
                                <div className="mb-2">SAKTHI SUDARSHAN</div>
                                <div className="font-semibold">Degree</div>
                                <div className="mb-2">B.E COMPUTER SCIENCE ENGINEERING</div>
                                <div className="font-semibold">MEMBERS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Developer;