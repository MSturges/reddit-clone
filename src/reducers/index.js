import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form';
import authReducer from './auth_reducer';
import modalReducer from './modal_reducer';


const rootReducer = combineReducers({
  form,
  modal: modalReducer,
  auth: authReducer
});

export default rootReducer;
