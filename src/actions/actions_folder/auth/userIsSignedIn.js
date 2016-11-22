import axios from 'axios'
const API_URL = "https://localhost:1337"

import {
  AUTH_USER,
  SIGNUP_ERROR,
  SIGNIN_ERROR,
  HIDE_MODAL,
  UNAUTH_USER
} from '../../types';

export default function({user}){
  return function(dispatch){
    dispatch({
      type: AUTH_USER,
      payload: user
    });
  }
}
