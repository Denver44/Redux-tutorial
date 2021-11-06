import { combineReducers } from "redux";
import { studentReducer } from "./students";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  student: studentReducer,
  form: formReducer,
});
