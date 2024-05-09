import React from 'react';
import parser from 'html-react-parser';
import python_ad from  './python-02.jpg';
import python_icon from './python-icon.png';

const PythonCourse = ({ heading, course }) => {
    return (<>
        <h1>{ heading }</h1>
        <div className="flex-container">
            <div className="flex-item-large">
                <h3>{course.title}</h3>
                <p>
                    <a 
                        href={course.url}
                        rel="noreferrer">
                        <img className="pythonlogo" src={python_icon} alt="PYTHON" />
                        REGISTER NOW
                    </a> 
                </p>

                <div className="description">
                    { parser(course.description) }
                </div>
            </div>
            <div className="flex-item-large">
                <div>
                    <a 
                        href={course.url}
                        id="advt"
                        rel="noreferrer">
                        <img
                            src={python_ad}
                            width="546" 
                            title={course.title}
                            alt="Python Tuitions"
                        />
                    </a>
                </div>
            </div>
        </div>
    </>
    )};

export default PythonCourse;