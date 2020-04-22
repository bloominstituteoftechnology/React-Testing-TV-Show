import React from 'react';
import parse from 'html-react-parser';

export default function Episodes(props) {
  return (
    <div className="episodes" data-testid='tId'>
      {props.episodes.map(ep => (
        <div className="episode" key={ep.id}>
          {ep.image && (
            <img className="episode-image" src={ep.image.medium} alt={ep.name} />
          )}
          <div className="episode-info">
            <p className="episode-number">
              Season {ep.season}, Episode {ep.number}
            </p>
            <h3>{ep.name}</h3>
            {ep.summary && parse(ep.summary)}
            <div className="flex-spacer" />
            <p className="episode-runtime">{ep.runtime} minutes</p>
          </div>
        </div>
      ))}
    </div>
  );
}
