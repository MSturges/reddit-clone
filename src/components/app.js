import React, { Component } from 'react';
import ModalUser from './modal_user';
import Header from './header';
import { connect } from 'react-redux';
import * as actions from '../actions';



class App extends Component {

  componentWillMount(){
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('userId');
    if (token && user) {
      this.props.userIsSignedIn({user})
    }
  }

  render() {
    return (
      <div className="app_container">
      <Header/>
      { this.props.toggleModal ? <ModalUser /> : null }

      {this.props.children}

      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    toggleModal: state.modal.modal
  }
}

export default connect(mapStateToProps, actions)(App);
