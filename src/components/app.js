import React, { Component } from 'react';
import ModalUser from './modal_user';
import Header from './header';
import { connect } from 'react-redux';


class App extends Component {

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

export default connect(mapStateToProps)(App);
