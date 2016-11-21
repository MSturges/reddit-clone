import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

class SubmitComment extends Component {


  componentWillMount(){
    browserHistory.listen((location) => {
      var path = location.pathname;
      var id = path.slice(7, 11)
    })
  }

  handleFormSubmit({comment, embed_url}) {

    const userName = localStorage.getItem('userName');

    this.props.submitComment();

  }


  render(){
    const { handleSubmit, fields: { comment }} = this.props

    return (
      <div>

      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

        {comment.touched && comment.error && <div className="error">{comment.error}</div>}
        <fieldset className="video-field-set">
        <input {...comment} className="form-control" placeholder="Comment" type="text"/>
        </fieldset>

        <div className="video-field-set">
          <button action="submit" className="btn btn-primary">Submit Comment</button>
        </div>

      </form>

      </div>
    )
  }
}

function validate(formProps){
  const errors = {};

  if (!formProps.comment) {
    errors.comment = "Please Enter a comment"
  }

  return errors;
}


function mapStateToProps(state) {
  // return {errorMessage: state.auth.signUpError};
}

export default reduxForm({
  form: 'commentForm',
  fields: ['comment', ],
  validate
}, mapStateToProps, actions)(SubmitComment)
