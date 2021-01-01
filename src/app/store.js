import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/counter/userSlice";
// This is our store. in which we get the information that how many reducer are there.
export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
