// eslint-disable-next-line import/no-anonymous-default-export
export default ({ dispatch }) =>
  (next) =>
  (action) => {
    // Check to see if the action has promise on its payload property, if it does, then wait for it to resolve else, send the action on to the next middleware
    if (!action.payload || !action.payload.then) {
      return next(action); // Here we will forwarding the action to next middleware or go to reducer
    } else {
      // We want to wait for the promise to resolve (get its data!!) and then create a new action with that data and dispatch it.
      action.payload
        .then((res) => {
          const newAction = { ...action, payload: res.data };
          dispatch(newAction);
        })
        .catch((e) => {
          const newAction = { ...action, payload: e.message };
          dispatch(newAction);
        });
    }
  };

// THis is the fancy setup for redux and the way we writing here is function inside function it is structure for redux only

// THis is signature to redux middleware
