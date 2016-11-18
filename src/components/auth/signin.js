import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {

  handleFormSubmit({reqUserName, password}) {
    this.props.signinUser({reqUserName, password});
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

    const { handleSubmit, fields: { reqUserName, password}} = this.props

    return(

      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      <h5>Log In</h5>

        {reqUserName.touched && reqUserName.error && <div className="error">{reqUserName.error}</div>}
        <fieldset className="form-group">
        <input {...reqUserName} className="form-control" placeholder="User Name" type="text"/>
        </fieldset>

        {password.touched && password.error && <div className="error">{password.error}</div>}
        <fieldset className="form-group">
        <input type="password" {...password} className="form-control" type="password" placeholder="Password"/>
        </fieldset>

        {this.renderAlert()}

        <div className="signin-btn-container">
          <button action="submit" className="btn btn-primary signin-btn">LOG IN</button>
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
  return {errorMessage: state.auth.signInError};
}

export default reduxForm({
  form: 'signinForm',
  fields: ['reqUserName', 'password'],
  validate
}, mapStateToProps, actions)(Signin)
