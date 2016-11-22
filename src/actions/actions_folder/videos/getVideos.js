import axios from 'axios'

import {
  VIDEO_LIST,
  VIDEO_ERROR } from '../../types'

const API_URL = "https://localhost:1337"

export default function(){
  return function(dispatch){
    axios({
      url: `${API_URL}/api/v1/videos/getVideos`,
      method: 'get',
      responseType: 'json'
    })
    .then(response => {
      dispatch({
        type: VIDEO_LIST,
        payload: response.data
      })
    })
    .catch(error => {
      dispatch({
        type: VIDEO_ERROR,
        payload: error.response.data.error
      });
    });
  }
}
