import React from 'react';
import { Link } from 'react-router';

const VideoList = (props) => {

  console.log(props);

  const VideoItems = props.videos.map((video) => {

    return (
      <li key={video.id}>
      <h2>{video.title}</h2>
      <div className="IframeWrapper">
        <iframe  className="iframewebpage" src={video.embed_url} ></iframe>
        <div className="iframeBlocker"></div>
      </div>
      </li>


    );
  });

  return (
    <ul className="row">
    {VideoItems}
    </ul>
  );
};


export default VideoList;
