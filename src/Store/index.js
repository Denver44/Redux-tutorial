import { combineReducers } from "@reduxjs/toolkit";
import { claimsHistory, accounting, policies } from "../Reducer";

export const ourDepartment = combineReducers({
  claimsHistory: claimsHistory,
  accounting: accounting,
  policies: policies,
});
