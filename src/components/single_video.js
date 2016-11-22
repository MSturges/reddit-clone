import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import SubmitComment from './comment/make_coment';
import CommentList from './comment/comments_list'

class Comment extends Component {

  componentWillMount(){
    browserHistory.listen((location) => {
      var path = location.pathname;
      var id = path.slice(7, 11)
      this.props.getVideo(id)
      this.props.getComments({id})
    })
  }

  render(){
    if (this.props.video && this.props.commentList) {
      var video = this.props.video;

      return (
        <div>
        <iframe className="video_comment"src={video.embed_url} frameBorder="1" allowFullScreen></iframe>

        <SubmitComment/>

        <CommentList comments={this.props.commentList}/>

        <ul>
        </ul>

        </div>
      )
    } else {
      return(
        <div className="animated bounce">Loading...</div>
      )
    }
  }
}


function mapStateToProps(state) {
  return {
    video: state.video.videoSingle,
    submitedComment: state.video.commentCreated,
    commentList: state.comment.commentList
  };
}

export default connect(mapStateToProps, actions)(Comment);
