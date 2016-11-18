import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Signup from './auth/signup'
import Signin from './auth/signin'

class ModalUser extends Component {

  hideModal(){
    this.props.hideModal();
  }

  test(e){
    e.stopPropagation()
  }

  render(){
    return(
      <div onClick={this.hideModal.bind(this)} className="modal-background animated fadeIn">
        <div onClick={this.test.bind(this)} className="modal animated slideInDown">
          <a className="fa fa-times exit-modal" aria-hidden="true"onClick={this.hideModal.bind(this)}></a>

          <div className="split-left">
            <h5>Create A New Account</h5>
            <Signup/>
          </div>

          <div className="split-right">
          <h5>Log In</h5>

            <Signin/>
          </div>

        </div>
      </div>
    )
  }
}

export default connect(null, actions)(ModalUser)
