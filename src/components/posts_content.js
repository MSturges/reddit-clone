import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import VideoList from './video_list'


class PostsContent extends Component {

  componentWillMount(){
    this.props.getVideos();
  }

  render(){

    console.log(this.props.videoList);

    return (
      <div className="main-container">

      {this.props.videoList ? <VideoList videos={this.props.videoList}/> : null}

      <ul>
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
