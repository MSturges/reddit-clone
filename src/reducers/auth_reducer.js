import {
  AUTH_USER,
  SIGNUP_ERROR,
  SIGNIN_ERROR,
  DELETE_ERROR
} from '../actions/types';


export default function(state = {}, action) {

  // console.log('action', action);
  switch(action.type) {

    case AUTH_USER:
    return { ...state, error: '', authenticated: true};

    case SIGNIN_ERROR:
    return { ...state, signInError: action.payload };

    case SIGNUP_ERROR:
    return { ...state, signUpError: action.payload };

    case DELETE_ERROR:
    return { ...state, signUpError: '', signInError: ''}

  }
  return state;
}
