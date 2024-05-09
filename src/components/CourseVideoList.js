import React from 'react';
// import photo from  './photo.jpg';
// import youtube_logo from './youtube_logo.png';
import CourseVideo from './CourseVideo';

const CourseVideoList = ({ heading, courses }) => {
    const data = Array.from(courses);
    return (
        <>
            <h1>{ heading }</h1>
            <div className="flex-container">
                {data.map(course => {
                    return <CourseVideo course={course} key={course.key} />
                })}
            </div>
        </>
    )
};

export default CourseVideoList;