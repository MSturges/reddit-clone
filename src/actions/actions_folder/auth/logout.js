import axios from 'axios'

import { UNAUTH_USER } from '../../types';

export default function() {
  localStorage.removeItem('token');
  localStorage.removeItem('userName');
  localStorage.removeItem('userId');
  return function(dispatch){
    dispatch({
      type: UNAUTH_USER,
    })
  }
}
