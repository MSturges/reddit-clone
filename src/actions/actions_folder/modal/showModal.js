import { SHOW_MODAL } from '../../types'

export default function(){
  return function(dispatch){
    dispatch({ type: SHOW_MODAL });
  }
}
