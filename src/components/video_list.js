import React from 'react';
import { Link } from 'react-router';

const VideoList = (props) => {



  const VideoItems = props.videos.map((video) => {

    return (
      <li  className="video-list-item" key={video.id}>

      <div className="video-rank">
      <span>{video.id}</span>
      </div>

      <div className="video-rating">
      <i className="fa fa-arrow-up video-arrow" aria-hidden="true"></i>
      <span>{video.rating}</span>
      <i className="fa fa-arrow-down video-arrow" aria-hidden="true"></i>
      </div>

      <div className="IframeWrapper">
      <iframe  className="iframewebpage" src={video.embed_url} ></iframe>
      <div className="iframeBlocker"></div>
      </div>

      <div className="video-creator">
      <h5>{video.title}</h5>
      <span className="text-video">Submitted by {video.creator_name}!</span>
      <br/>
      <span className="text-video"><Link to="/video" className="">Comments</Link></span>

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
