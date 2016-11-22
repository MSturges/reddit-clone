import {
  HIDE_MODAL,
  DELETE_ERROR } from '../../types'

export default function(){
  return function(dispatch){
    dispatch({ type: HIDE_MODAL });
    dispatch({type: DELETE_ERROR });
  }
}
