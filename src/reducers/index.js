
export const postReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POST":
      return action.payload;
    case "ADD_POST":
      return [...state, action.payload];
    default:
      return state;
  }
};
