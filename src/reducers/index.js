import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form';
import authReducer from './auth_reducer';
import modalReducer from './modal_reducer';
import videoReducer from './video_reducer';


const rootReducer = combineReducers({
  form,
  modal: modalReducer,
  auth: authReducer,
  video: videoReducer
});

export default rootReducer;
