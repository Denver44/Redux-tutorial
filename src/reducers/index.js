export const userReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};

export const postReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POST":
      return action.payload;
    default:
      return state;
  }
};
