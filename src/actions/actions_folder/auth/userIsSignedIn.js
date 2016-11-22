import axios from 'axios'

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
