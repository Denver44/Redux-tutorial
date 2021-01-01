import { createSlice } from "@reduxjs/toolkit";

// We create a slice for compnent so for count it will allfunction of in it.
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0, // Inital value of our state.
  },
  // Reducers here listen our actions.
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log(action);
      state.count += action.payload;
    },
  },
});

// we rae exporting the actions which we are going to perform.
export const { increment, decrement, incrementByAmount } = counterSlice.actions; // this actions is from reduxtoolkits wich help us to make easy our job so we can use this in our compnent.

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The secletor we pull the new value and send from here
export const selectCount = (state) => state.counter.count;
// The function above is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export default counterSlice.reducer; // this will go to store.
