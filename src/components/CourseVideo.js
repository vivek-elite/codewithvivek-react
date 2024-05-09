import React from 'react';
import parser from 'html-react-parser';
// import photo from  './photo.jpg';
import youtube_logo from './youtube_logo.png';

const CourseVideo = ({ course }) => {
    return (<>
        <div className="flex-item">
            <h3>{course.title}</h3>
            <div>
                <iframe 
                    width="364" 
                    height="275"
                    title={course.title}
                    src={course.embed}
                    allowFullScreen
                    loading="lazy">
                </iframe>
            </div>
            <div className="description">
                { parser(course.description) }
            </div>
            <p>
                <a 
                    href={course.url}
                    target="_blank"
                    rel="noreferrer">
                    Click to watch on YouTube
                    <img src={youtube_logo} alt="YouTube Logo" className="youtube-logo"></img>
                </a> 
            </p>
        </div>
    </>
    )};

export default CourseVideo;


