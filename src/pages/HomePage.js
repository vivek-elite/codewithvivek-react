import React from 'react';
import PythonCourse from '../components/PythonCourse';
import CourseVideoList from '../components/CourseVideoList';
import SingleVideo from '../components/SingleVideo';
import pythonCourses from '../data/pythonCourses';
import kidsCourses from '../data/kidsCourses';
import essentialCourses from '../data/essentialCourses';
import programmingCourses from '../data/programmingCourses';
import jsProjectsHindi from '../data/jsProjectsHindi';
import jsProjectsEnglish from '../data/jsProjectsEnglish';

const HomePage = () => (
    <>
        <PythonCourse heading="Learn Python in Jammu" course={pythonCourses[0]} />
        <CourseVideoList heading="Learn Web Development" courses={essentialCourses} />
        <CourseVideoList heading="Learn Programming" courses={programmingCourses} />
        <SingleVideo heading="Programming for Kids" course={kidsCourses[0]} />
        <CourseVideoList heading="JavaScript Projects in Hindi" courses={jsProjectsHindi} />
        <CourseVideoList heading="JavaScript Projects in English" courses={jsProjectsEnglish} />
    </>
);

export default HomePage;