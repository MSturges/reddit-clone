import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class SubmitLink extends Component {


  render(){
    return (
      <div>Yo dawg here you submit your link</div>
    )
  }
}

export default connect(null)(SubmitLink);
