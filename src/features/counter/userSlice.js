import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: null,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = userSlice.actions;
// This is selctor state.whose name is user and it initial state name is null.
export const selectName = (state) => state.user.name;

export default userSlice.reducer;
