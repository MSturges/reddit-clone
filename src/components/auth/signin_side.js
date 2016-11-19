import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class SigninSide extends Component {


  handleFormSubmit({reqUserName, password}) {
    this.props.signinUser({reqUserName, password})
  }

  renderAlert(){
    if (this.props.errorMessage) {
      return (
        <div className="error">
        <strong>Oops! </strong>{this.props.errorMessage}
        </div>
      )
    }
  }


  render(){

    const { handleSubmit, fields: { reqUserName, password}} = this.props

    return(

      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

      <fieldset className="side-userName">
      <input {...reqUserName} className="side-input-field" placeholder="User Name" type="text"/>
      </fieldset>

      <fieldset className="side-password">
      <input type="password" {...password} className="side-input-field" type="password" placeholder="Password"/>
      </fieldset>

      {reqUserName.touched && reqUserName.error && <div className="error"><strong>Oops! </strong>{reqUserName.error}</div>}
      {password.touched && password.error && <div className="error"><strong>Oops! </strong>{password.error}</div>}
      {this.renderAlert()}

      <div className="side-btn-container">
      <button action="submit" className="side-btn">login</button>
      </div>

      </form>

    )
  }
}

function validate(formProps){
  const errors = {};

  if (!formProps.reqUserName) {
    errors.reqUserName = "Please enter youruser name!"
  }
  if (!formProps.password) {
    errors.password = "Please enter your password!"
  }

  return errors;
}


function mapStateToProps(state) {
  return {
    errorMessage: state.auth.signInError,
    authenticated: state.auth.authenticated
  };
}

export default reduxForm({
  form: 'signinSideForm',
  fields: ['reqUserName', 'password'],
  validate
}, mapStateToProps, actions)(SigninSide)
