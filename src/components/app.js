import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './header';
import SideContent from './side_content';
import ModalUser from './modal_user';



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
      <SideContent/>

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
