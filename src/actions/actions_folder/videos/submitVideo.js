import axios from 'axios'
import { browserHistory } from 'react-router';

import {
  CREATE_VIDEO,
  VIDEO_ERROR } from '../../types'

const API_URL = "http://localhost:1337"

export default function({title, embed_url, id, userName}){
  return function(dispatch){
    axios({
      url: `${API_URL}/api/v1/videos/addVideo`,
      data: { title, embed_url, id, userName},
      method: 'post',
      responseType: 'json'
    })
    .then(response => {
      dispatch({
        type: CREATE_VIDEO,
      })
      browserHistory.push('/');
    })
    .catch(error => {
      dispatch({
        type: VIDEO_ERROR,
        payload: error.response.data.error
      });
    });
  }
}
