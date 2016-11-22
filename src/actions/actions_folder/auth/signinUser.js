import axios from 'axios'
const API_URL = "http://localhost:1337"

import {
  AUTH_USER,
  SIGNUP_ERROR,
  SIGNIN_ERROR,
  DELETE_ERROR,
  HIDE_MODAL } from '../../types';

export default function({reqUserName, password}){
  return function(dispatch){
    axios({
      url: `${API_URL}/api/v1/auth/signin`,
      data: { reqUserName, password },
      method: 'post',
      responseType: 'json'
    })
    .then(response => {
      dispatch({
        type: AUTH_USER,
        payload: response.data.user.username
      });
      dispatch({ type: DELETE_ERROR });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.user.id);
      localStorage.setItem('userName', response.data.user.username);
      dispatch({ type: HIDE_MODAL });
    })
    .catch(error => {
      dispatch({
        type: SIGNIN_ERROR,
        payload: error.response.data.error
      });
    });
  }
}
