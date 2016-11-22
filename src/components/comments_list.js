import React from 'react';
import { Link } from 'react-router';

const CommentList = (props) => {

  console.log(props);

  const VideoItems = props.comments.reviews.map((comment) => {



    return (

      <li  className="video-list-item" key={comment.id}>
        <h3>hello!!!!</h3>
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
