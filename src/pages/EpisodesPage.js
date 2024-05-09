import React from 'react';
import { useParams } from 'react-router-dom';
import EpisodeVideoList from '../components/EpisodeVideoList';
// import programmingCourses from '../data/programmingCourses';
import htmlTutorial from '../data/htmlTutorial';
import cssTutorial from '../data/cssTutorial';
import jsTutorial from '../data/jsTutorial';
import cTutorial from '../data/cTutorial';
import cppTutorial from '../data/cppTutorial';
import phpTutorial from '../data/phpTutorial';
import kidsTutorial from '../data/kidsTutorial';
import jsProjectsHindi  from '../data/jsProjectsHindi';
import jsProjectsEnglish from '../data/jsProjectsEnglish';

const EpisodesPage = () => {
    const params = useParams();
    const title = params.title;
    switch(title) {
        case 'htmltutorial':
            return <EpisodeVideoList heading="HTML Tutorial for Beginnners" episodes={htmlTutorial} />;
        case 'csstutorial':
            return <EpisodeVideoList heading="CSS Tutorial in Hindi" episodes={cssTutorial} />;
        case 'jstutorial':
            return <EpisodeVideoList heading="JavaScript Tutorial in Hindi" episodes={jsTutorial} />;
        case 'ctutorial':
            return <EpisodeVideoList heading="Learn C by Example" episodes={cTutorial} />;            
        case 'cpptutorial':
            return <EpisodeVideoList heading="Programming with C++" episodes={cppTutorial} />;                        
        case 'phptutorial':
            return <EpisodeVideoList heading="PHP Tutorial in Hindi" episodes={phpTutorial} />;
        case 'kidstutorial':
            return <EpisodeVideoList heading="Coding for Kids" episodes={kidsTutorial} />;
        case 'jsprojectshindi':
            return <EpisodeVideoList heading="JavaScript Projects in Hindi" episodes={jsProjectsHindi} />;
        case 'jsprojectseng':
            return <EpisodeVideoList heading="JavaScript Projects in English" episodes={jsProjectsEnglish} />;
        default:
            return <><p>Course not found!</p></>;
    }
}

export default EpisodesPage;