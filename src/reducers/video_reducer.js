import {
CREATE_VIDEO,
VIDEO_ERROR,
VIDEO_LIST,
VIDEO_SINGLE } from '../actions/types';


export default function(state = { videoCreated: false, commentCreated: false }, action) {

  switch(action.type) {

    case CREATE_VIDEO:
    return { ...state,  videoCreated: true};

    case VIDEO_LIST:
    return { ...state,  videoList: action.payload};

    case VIDEO_SINGLE:
    return { ...state,  videoSingle: action.payload};

    case VIDEO_ERROR:
    return { ...state,  videoError: action.payload};

    case CREATE_COMMENT:
    return { ...state,  commentCreated: true};

  }
  return state;
}
