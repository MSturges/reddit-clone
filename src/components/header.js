import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

  test(){
    return(
    <div>helloooooo</div>
    );
  }


  render(){


    return( <div className="header-container">
      <div className="sub-reddit-bar"></div>
      <div className="header">
        <div className="header-image" ></div>

        <div className="user-auth">
        <span>Want to join?
          <a onClick={this.test.bind(this)}> Login or Sign Up </a>
          in seconds.
        </span>

        </div>

      </div>



      </div>
    );
  }
}
// <div className="user-auth">
// <span>Want to join?
// <a onClick={this.test.bind(this)}> Login or Sign Up </a>
// in seconds.
// </span>
//
// </div>

export default Header;
