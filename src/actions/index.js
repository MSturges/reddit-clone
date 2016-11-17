import axios from 'axios'
import { AUTH_USER, AUTH_ERROR } from './types';
// import { browserHistory } from 'react-router';

const API_URL = "http://localhost:1337"

export function signupUser({reqUserName, password}){

  return function(dispatch){
    axios({
      url: `${API_URL}/api/v1/auth/signup`,
      data: { reqUserName, password },
      method: 'post',
      responseType: 'json'
    })
    .then(response => {
      dispatch({ type: AUTH_USER });
      console.log(response.data.token);
      localStorage.setItem('token', response.data.token);
      // browserHistory.push('/feature');
    })
    .catch(error => {
      dispatch(authError(error.response.data.error));
    });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
