import axios from 'axios'
const API_URL = "https://localhost:1337"

import {
  AUTH_USER,
  SIGNUP_ERROR,
  HIDE_MODAL
} from '../../types';


export default function signupUser({reqUserName, password}){
  return function(dispatch){
    axios({
      url: `${API_URL}/api/v1/auth/signup`,
      data: { reqUserName, password },
      method: 'post',
      responseType: 'json'
    })
    .then(response => {
      dispatch({
        type: AUTH_USER,
        payload: response.data.user.username
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.user.id);
      localStorage.setItem('userName', response.data.user.username);
      dispatch({ type: HIDE_MODAL });
    })
    .catch(error => {
      dispatch({
        type: SIGNUP_ERROR,
        payload: error.response.data.error
      });
    });
  }
}
