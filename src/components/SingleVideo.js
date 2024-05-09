import React from 'react';
import parser from 'html-react-parser';
// import photo from  './photo.jpg';
import html_icon from './html-5-icon.png';
import css_icon from './css-3-icon.png';
import js_icon from './javascript-icon.png';
import youtube_logo from './youtube_logo.png';

const SingleVideo = ({ heading, course }) => {
    return (<>
        <h1>{ heading }</h1>
        <div className="flex-container">
            <div className="flex-item-large">
                <div>
                    <iframe 
                        width="546" 
                        height="410"
                        title={course.title}
                        src={course.embed}
                        allowFullScreen
                        loading="lazy">
                    </iframe>
                </div>
            </div>
            <div className="flex-item-large">
                <h3>{course.title}</h3>
                <div>
                    <img className="logo" src={html_icon} alt="HTML"></img>
                    <img className="logo" src={css_icon} alt="CSS"></img>
                    <img className="logo" src={js_icon} alt="JavaScript"></img>
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
        </div>
    </>
    )};

export default SingleVideo;