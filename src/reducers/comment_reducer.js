import {
CREATE_COMMENT,
GET_COMMENTS } from '../actions/types';

export default function(state = { videoCreated: false, commentCreated: false }, action) {

  switch(action.type) {

    case CREATE_COMMENT:
    return { ...state,  commentCreated: true};

    case GET_COMMENTS:
    return { ...state,  commentList: action.payload};

  }
  return state;
}
