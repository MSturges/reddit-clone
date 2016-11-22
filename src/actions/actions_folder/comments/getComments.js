import axios from 'axios'
const API_URL = "https://localhost:1337"

import {
  GET_COMMENTS,
  VIDEO_ERROR } from '../../types';

export default function({id} ){
  return function(dispatch){
    axios({
      url: `${API_URL}/api/v1/comments/getVideoComments`,
      method: 'post',
      data: { id },
      responseType: 'json'
    })
    .then(response => {
      dispatch({
        type: GET_COMMENTS,
        payload: response.data
      })
    })
    .catch(error => {
      // this one?
      dispatch({
        type: VIDEO_ERROR,
        payload: error
      });
    });
  }
}
