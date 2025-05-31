import React from 'react';

function Course(props) {
    return (
        <div className="p-4">
            <strong className="block mb-2 text-lg">COURSE SELECTION :</strong>
            <label htmlFor="Course" className="block mb-1 font-medium">COURSE NAME :</label>
            <select id="Course" className="block w-full p-2 border border-gray-300 rounded mb-4">
                <option value="">Select a course</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JAVASCRIPT">JAVASCRIPT</option>
                <option value="C">C</option>
                <option value="C++">C++</option>
                <option value="PYTHON">PYTHON</option>
                <option value="JAVA">JAVA</option>
                <option value="MySQL">MySQL</option>
            </select>
        </div>
    );
}

export default Course;