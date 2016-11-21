import axios from 'axios'
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  SIGNIN_ERROR,
  SIGNUP_ERROR,
  UNAUTH_USER,
  SHOW_MODAL,
  HIDE_MODAL,
  DELETE_ERROR,
  CREATE_VIDEO,
  VIDEO_ERROR,
  VIDEO_LIST } from './types';

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

  export function signinUser({reqUserName, password}){
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

  export function userIsSignedIn({user}){
    return function(dispatch){
      dispatch({
        type: AUTH_USER,
        payload: user
      });
    }
  }

  export function logout() {

    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    return function(dispatch){
      dispatch({
        type: UNAUTH_USER,
      })
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

  export function submitVideo({title, embed_url, id}){
    return function(dispatch){
      axios({
        url: `${API_URL}/api/v1/videos/addVideo`,
        data: { title, embed_url, id },
        method: 'post',
        responseType: 'json'
      })
      .then(response => {
        dispatch({
          type: CREATE_VIDEO,
        })
        browserHistory.push('/');
      })
      .catch(error => {
        dispatch({
          type: VIDEO_ERROR,
          payload: error.response.data.error
        });
      });
    }
  }

  export function getVideos(){
    return function(dispatch){
      axios({
        url: `${API_URL}/api/v1/videos/getVideos`,
        method: 'get',
        responseType: 'json'
      })
      .then(response => {
        dispatch({
          type: VIDEO_LIST,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({
          type: VIDEO_ERROR,
          payload: error.response.data.error
        });
      });
    }
  }
