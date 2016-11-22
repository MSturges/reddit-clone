import axios from 'axios'
// const API_URL = "http://localhost:1337"

import {
  CREATE_COMMENT,
  VIDEO_ERROR } from '../../types';


export default function({comment_id, user_id, user_name, comment} ){
  return function(dispatch){
    axios({
      url: `/api/v1/comments/submitComment`,
      method: 'post',
      data: {comment_id, user_id, user_name, comment},
      responseType: 'json'
    })
    .then(response => {
      dispatch({
        type: CREATE_COMMENT,
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
