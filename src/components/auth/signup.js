import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {

  handleFormSubmit({reqUserName, password}) {
    console.log('hello');
    this.props.signupUser({reqUserName, password});
  }

  renderAlert(){
  if (this.props.errorMessage) {
    return (
      <div className="alert alert-danger">
      <strong>Oops!</strong> {this.props.errorMessage}
      </div>
    );
  }
}

  render(){

    const { handleSubmit, fields: {reqUserName, password}} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

      <fieldset className="">
      <label>User Name:</label>
      <input {...reqUserName}className=""/>
      </fieldset>

      <fieldset className="">
      <label>Password:</label>
      <input {...password} type="password" className=""/>
      </fieldset>

      {this.renderAlert()}

      <button action="submit" className="">Sign-in</button>

      </form>
    )
  }

}

// function mapStateToProps(state) {
//   return { errorMessage: state.auth.error};
// }

export default reduxForm({
  form: 'signin',
  fields: ['reqUserName', 'password']
}, null, actions)(Signup);
