import {
CREATE_VIDEO,
VIDEO_ERROR,
VIDEO_LIST } from '../actions/types';


export default function(state = { videoCreated: false }, action) {

  switch(action.type) {

    case CREATE_VIDEO:
    return { ...state,  videoCreated: true};

    case VIDEO_LIST:
    return { ...state,  videoList: action.payload};

    case VIDEO_ERROR:
    return { ...state,  videoError: action.payload};

  }
  return state;
}
