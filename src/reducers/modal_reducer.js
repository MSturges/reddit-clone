import {
  SHOW_MODAL,
  HIDE_MODAL
} from '../actions/types';


export default function(state = { modal: false }, action) {

  switch(action.type) {

    case SHOW_MODAL:
    return { ...state,  modal: true};

    case HIDE_MODAL:
    return { ...state, error: '', modal: false};

  }
  return state;
}
