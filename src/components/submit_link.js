import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';
import { Link } from 'react-router';


class SubmitLink extends Component {

  handleFormSubmit({title, embed_url}) {
    const id = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');

    this.props.submitVideo({title, embed_url, id, userName});
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

      <h2 className="video-h">Submit to Reddit</h2>
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

        {title.touched && title.error && <div className="error">{title.error}</div>}
        <fieldset className="video-field-set">
        <label>Title:</label>
        <input {...title} className="form-control input-field-set" placeholder="Title" type="text"/>
        </fieldset>

        {embed_url.touched && embed_url.error && <div className="error">{embed_url.error}</div>}
        <fieldset className="video-field-set">
        <label>Embed Url:</label>
        <div className="video-example"></div>
        <p>Navigate to youtube.com. Click share, Click Embed, then copy & paste link without quoutes.</p>
        <input type="embed_url" {...embed_url} className="form-control input-field-set" type="text" placeholder="Embed URL"/>
        </fieldset>


        {this.renderAlert()}

        <div className="video-btn-container">
          <button action="submit" className="btn btn-primary video-btn">Submit</button>
          <Link to="/" className="btn btn-danger video-btn">Back to Front</Link>
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
