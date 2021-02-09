export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POST":
      return action.payload;
    default:
      return state;
  }
};

// Very First time when a reducers called thats why we pass a default parmeter as [] or ""
