import { Types } from "../actions/students";

const INITIAL_STATE = { data: [], error: "" };

export const studentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_STUDENTS_SUCCESS:
      return { ...state, data: action.payload.items };
    case Types.STUDENT_ERROR:
      console.log("action ", action);
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};
