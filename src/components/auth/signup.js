import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {

  handleFormSubmit({reqUserName, password}) {
    this.props.signupUser({reqUserName, password});
  }

  renderAlert(){
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
        <strong>Oops!</strong>{this.props.errorMessage}
        </div>
      )
    }
  }

  render(){

    const { handleSubmit, fields: { reqUserName, password, passwordConfirm}} = this.props

    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

        {reqUserName.touched && reqUserName.error && <div className="error">{reqUserName.error}</div>}
        <fieldset className="form-group">
        <input {...reqUserName} className="form-control" placeholder="User Name" type="text"/>
        </fieldset>

        {password.touched && password.error && <div className="error">{password.error}</div>}
        <fieldset className="form-group">
        <input type="password" {...password} className="form-control" type="password" placeholder="Password"/>
        </fieldset>

        {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
        <fieldset className="form-group">
        <input {...passwordConfirm} className="form-control" type="password" placeholder="Verify Password"/>
        </fieldset>

        {this.renderAlert()}

        <div className="signup-btn-container">
          <button action="submit" className="btn btn-primary signup-btn">SIGN UP</button>
        </div>

      </form>

    )
  }
}

function validate(formProps){
  const errors = {};

  if (!formProps.reqUserName) {
    errors.reqUserName = "Please Enter a user name!"
  }
  if (!formProps.password) {
    errors.password = "Please Enter a password!"
  }
  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = "Please verify password!"
  }
  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match!'
  }

  return errors;
}


function mapStateToProps(state) {
  return {errorMessage: state.auth.signUpError};
}

export default reduxForm({
  form: 'signupForm',
  fields: ['reqUserName', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup)
