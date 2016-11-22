import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import VideoList from './video/video_list'


class PostsContent extends Component {

  componentWillMount(){
    this.props.getVideos();
  }

  render(){

    return (
      <div className="main-container">


      <ul className="list-container-video">
        {this.props.videoList ? <VideoList videos={this.props.videoList}/> : null}
      </ul>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    videoList: state.video.videoList,
    videoCreated: state.video.videoCreated
  }
}


export default connect(mapStateToProps, actions)(PostsContent);
