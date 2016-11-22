import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

class SubmitComment extends Component {



  handleFormSubmit({comment}) {
    browserHistory.listen((location) => {
      var path = location.pathname;
      var comment_id = path.slice(7, 11)
      const user_name = localStorage.getItem('userName');
      const user_id = localStorage.getItem('userId');
      this.props.submitComment({comment_id, user_id, user_name, comment});
    })
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

        <fieldset className="video-field-set">
          <div className="comment-submit-container" >
          <button action="submit" className="btn btn-primary">Submit Comment</button>
          </div>
        </fieldset>

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
  return {errorMessage: state.auth.signUpError};
}

export default reduxForm({
  form: 'commentForm',
  fields: ['comment', ],
  validate
}, mapStateToProps, actions)(SubmitComment)
