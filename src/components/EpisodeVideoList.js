import React from 'react';
import EpisodeVideo from './EpisodeVideo';

const EpisodeVideoList = ({ heading, episodes }) => {
    const data = Array.from(episodes);
    return (
        <>
            <h1>{ heading }</h1>
            {data.map(episode => {
                return <EpisodeVideo episode={episode} key={episode.key} />
            })}
        </>
    )
};

export default EpisodeVideoList;