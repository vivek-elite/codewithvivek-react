import React from 'react';
import parser from 'html-react-parser';
// import photo from  './photo.jpg';
import youtube_logo from './youtube_logo.png';
import './EpisodeVideo.css';

const EpisodeVideo = ({ episode }) => {
    return (
        <div className="episode-container">
            <div className="episode-detail">
                <div>
                    <iframe 
                        width="364" 
                        height="275"
                        title={episode.title}
                        src={episode.embed}
                        allowFullScreen
                        loading="lazy">
                    </iframe>
                </div>
            </div>
            <div className="episode-detail">
                <h4>{episode.title}</h4>
                <p className="duration">Duration: {episode.duration}</p>
                <div className="description">
                    { parser(episode.description) }
                </div>
                <p>
                    <a 
                        href={episode.url}
                        target="_blank"
                        rel="noreferrer">
                        Click to watch on YouTube
                        <img src={youtube_logo} alt="YouTube Logo" className="youtube-logo"></img>
                    </a> 
                </p>
            </div>
        </div>
)};

export default EpisodeVideo;