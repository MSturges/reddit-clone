import React, { Component } from 'react';
import SigninSide from './auth/signin_side';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Content extends Component {

  showModal(){
    this.props.showModal();
  }

  render(){
    console.log(this.props.authenticated);
    return (
      <div className="conetent-container">

      <div className="side-container">

      <div className="side-search">
      </div>

      {!this.props.authenticated ? <div className="side-login"> <SigninSide/> </div>: null}

      <a href="http://crushroutes.com">
      <div className="advertising-one">
        <h4>Find Your next Climb!</h4>
      </div>
      </a>

      {!this.props.authenticated ? <a onClick={this.showModal.bind(this)} className="side-submit-link">Submit a new link</a> : <a className="side-submit-link">Submit a new link</a>}


      <a href="http://reduxreactapp.s3-website-us-west-2.amazonaws.com/">
      <div className="advertising-two">
      <h4>Get your weather here!</h4>
      </div>
      </a>

      <div className="side-search">
      </div>

      </div>
        <div className="post-container"></div>
      </div>
    )
  }

}


function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, actions)(Content);
