import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class PostsContent extends Component {


  render(){
    return (
      <div className="main-container">Yo dawg here you like posts</div>
    )
  }
}

export default connect(null)(PostsContent);
