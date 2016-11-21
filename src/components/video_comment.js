import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class Comment extends Component {



componentWillMount(){
  browserHistory.listen((location) => {
    var path = location.pathname;
    var id = path.slice(7, 11)
    this.props.getVideo(id);
  })
}


  render(){

    if (this.props.video) {
      var video = this.props.video;

      console.log(video.embed_url);

      return (
        <div>
        <iframe className="video_comment"src={video.embed_url} frameborder="1" allowfullscreen></iframe>
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
    video: state.video.videoSingle
  };
}

export default connect(mapStateToProps, actions)(Comment);
