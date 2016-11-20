import React, { Component } from 'react';
import SigninSide from './auth/signin_side';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router'


class SideContent extends Component {

  showModal(){
    this.props.showModal();
  }

  render(){
    return (
      <div className="side-container">
      <div className="side-search">
      </div>
      {!this.props.authenticated ? <div className="side-login"> <SigninSide/> </div>: <a href="https://www.redditgifts.com/exchanges/manage/#/exchange/secret-santa-2016/"> <div className="reddit-santa"></div></a>}
      <a href="http://crushroutes.com">
      <div className="advertising-one">
      <h4>Find Your next Climb!</h4>
      </div>
      </a>
      {!this.props.authenticated ? <a onClick={this.showModal.bind(this)} className="side-submit-link">Submit a new link</a> : <Link to="/submit" className="side-submit-link">Submit a new link</Link>}
      <a href="http://reduxreactapp.s3-website-us-west-2.amazonaws.com/">
      <div className="advertising-two">
      <h4>Get your weather here!</h4>
      </div>
      </a>

      <a href="https://github.com/MSturges/reddit-clone" className="side-submit-link">View On GitHub</a>

      </div>
    )
  }

}


function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, actions)(SideContent);
