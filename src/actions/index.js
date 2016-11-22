import axios from 'axios'
import { browserHistory } from 'react-router';

import {
  SHOW_MODAL,
  HIDE_MODAL,
  DELETE_ERROR,
  CREATE_VIDEO,
  VIDEO_ERROR,
  VIDEO_LIST,
  VIDEO_SINGLE,
  CREATE_COMMENT,
  GET_COMMENTS
} from './types';

const API_URL = "http://localhost:1337"

// user authorization actions
import signupUser from './actions_folder/auth/signupUser'
import signinUser from './actions_folder/auth/signinUser'
import userIsSignedIn from './actions_folder/auth/userIsSignedIn'
import logout from './actions_folder/auth/logout'

export { signupUser, signinUser, userIsSignedIn, logout }


// Modals actions
import showModal from './actions_folder/modal/showModal'
import hideModal from './actions_folder/modal/hideModal'

export { showModal, hideModal }


// Video Actions
import submitVideo from './actions_folder/videos/submitVideo'
import getVideos from './actions_folder/videos/getVideos'
import getVideo from './actions_folder/videos/getVideo'

export {submitVideo, getVideos, getVideo }


// Comment Actions
import submitComment from './actions_folder/comments/submitComment'
import getComments from './actions_folder/comments/getComments'

export { submitComment, getComments }
