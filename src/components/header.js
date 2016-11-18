import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ModalUser from './modal_user';
import * as actions from '../actions';

class Header extends Component {



  showModal(){
    this.props.showModal();
  }

  logout(){
    this.props.logout();
  }

  render(){


    if (this.props.authenticated) {

      return (
        <div className="header-container">
        <div className="sub-reddit-bar"></div>
        <div className="header">
        <div className="header-image"></div>
        <div className="user-auth">
        <span>Welcome: {this.props.userName}!<a onClick={this.logout.bind(this)}>Logout</a></span>
        </div>
        </div>
        </div>
      );
    } else{
      return(
        <div className="header-container">
        <div className="sub-reddit-bar"></div>
        <div className="header">
        <div className="header-image"></div>
        <div className="user-auth">
        <span>Want to join?<a onClick={this.showModal.bind(this)}> Log in or Sign Up </a>in seconds.</span>
        </div>
        </div>
        </div>
      );
    }

  }
}

function mapStateToProps(state){
  return{
    toggleModal: state.modal.modal,
    authenticated: state.auth.authenticated,
    userName: state.auth.user
  }
}

export default connect(mapStateToProps, actions)(Header);
