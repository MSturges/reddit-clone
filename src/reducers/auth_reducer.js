import {
  AUTH_USER,
  SIGNUP_ERROR,
  SIGNIN_ERROR,
  UNAUTH_USER,
  DELETE_ERROR
} from '../actions/types';


export default function(state = { authenticated: false }, action) {

  switch(action.type) {

    case AUTH_USER:
    return { ...state, error: '', authenticated: true, user: action.payload};

    case SIGNIN_ERROR:
    return { ...state, signInError: action.payload };

    case SIGNUP_ERROR:
    return { ...state, signUpError: action.payload };

    case DELETE_ERROR:
    return { ...state, signUpError: '', signInError: ''}

    case UNAUTH_USER:
    return { ...state, authenticated: false, user: ''}
  }
  return state;
}
