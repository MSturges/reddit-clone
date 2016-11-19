import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';


class SubmitLink extends Component {

  handleFormSubmit({title, embed_url}) {
    const id = localStorage.getItem('userId');

    this.props.submitVideo({title, embed_url, id});
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

    const { handleSubmit, fields: { title, embed_url }} = this.props

    return (
      <div className="main-container">

      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      <h5>Create A New Account</h5>

        {title.touched && title.error && <div className="error">{title.error}</div>}
        <fieldset className="form-group">
        <input {...title} className="form-control" placeholder="Title" type="text"/>
        </fieldset>

        {embed_url.touched && embed_url.error && <div className="error">{embed_url.error}</div>}
        <fieldset className="form-group">
        <input type="embed_url" {...embed_url} className="form-control" type="text" placeholder="Embed URL ONLY"/>
        </fieldset>


        {this.renderAlert()}

        <div className="signup-btn-container">
          <button action="submit" className="btn btn-primary signup-btn">SIGN UP</button>
        </div>

      </form>

      </div>
    )
  }
}

function validate(formProps){
  const errors = {};

  if (!formProps.title) {
    errors.title = "Please Enter a title"
  }
  if (!formProps.embed_url) {
    errors.embed_url = "Please Enter a Embed URL!"
  }

  return errors;
}


function mapStateToProps(state) {
  return {errorMessage: state.auth.signUpError};
}

export default reduxForm({
  form: 'signupForm',
  fields: ['title', 'embed_url'],
  validate
}, mapStateToProps, actions)(SubmitLink)
