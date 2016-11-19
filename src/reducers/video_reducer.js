import {
CREATE_VIDEO,
VIDEO_ERROR } from '../actions/types';


export default function(state = { video_created: false }, action) {

  switch(action.type) {

    case CREATE_VIDEO:
    return { ...state,  video_created: true};

    case VIDEO_ERROR:
    return { ...state,  videoError: action.payload};

  }
  return state;
}
