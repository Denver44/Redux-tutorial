import { combineReducers } from "redux";
import postreducers from "./postreducers";
import userreducer from "./userreducer";

export default combineReducers({
  post: postreducers,
  user: userreducer,
});
