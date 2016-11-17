import {
  AUTH_USER,
  AUTH_ERROR
} from '../actions/types';


export default function(state = {}, action) {
  switch(action.type) {

    case AUTH_USER:
    return { ...state, error: '', authenticated: true};

    case AUTH_ERROR:
    return { ...state, error: action.payload };

  }
  return state;
}
