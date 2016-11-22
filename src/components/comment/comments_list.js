import React from 'react';
import { Link } from 'react-router';

const CommentList = (props) => {

  const VideoItems = props.comments.reviews.map((comment) => {

    console.log(comment);

    return (
      <li  className="video-list-item" key={comment.id}>

      <div className="comment-header">
        <span>Posted by: {comment.username}</span>
      </div>
      <div className="comment-container">
        <p>{comment.review}</p>
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


export default CommentList;
