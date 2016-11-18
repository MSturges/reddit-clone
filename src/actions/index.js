import axios from 'axios'
import {
  AUTH_USER,
  SIGNIN_ERROR,
  SIGNUP_ERROR,
  SHOW_MODAL,
  HIDE_MODAL,
  DELETE_ERROR } from './types';

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
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userName', response.data.user.id);
        localStorage.setItem('userId', response.data.user.username);
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

  export function signinUser({reqUserName, password}){
    return function(dispatch){
      axios({
        url: `${API_URL}/api/v1/auth/signin`,
        data: { reqUserName, password },
        method: 'post',
        responseType: 'json'
      })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userName', response.data.user.id);
        localStorage.setItem('userId', response.data.user.username);
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

  export function showModal(){
    return function(dispatch){
      dispatch({ type: SHOW_MODAL });
    }
  }

  export function hideModal(){
    return function(dispatch){
      dispatch({ type: HIDE_MODAL });
      dispatch({type: DELETE_ERROR });
    }
  }
