import axios from 'axios'

import {
  VIDEO_SINGLE,
  VIDEO_ERROR } from '../../types'

const API_URL = "https://localhost:1337"

export default function(id){
  return function(dispatch){
    axios({
      url: `${API_URL}/api/v1/videos/video/${id}`,
      method: 'get',
      responseType: 'json'
    })
    .then(response => {
      dispatch({
        type: VIDEO_SINGLE,
        payload: response.data
      })
    })
    .catch(error => {
      dispatch({
        type: VIDEO_ERROR,
        payload: error
      });
    });
  }
}
