console.log("HELLO");
console.clear();

// 1. Create Action Creator
// 2. Reducer Which will Listen to Your action
// 3. Create a Store and Combined all Your reducers in one Function in Key value Pair.
// 4. Use Dispatch to dispatch your action.

// People Dropping off form (action Creator)
// Action return a Object.
// The Object has 1. Type and 2. Payload.

const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount,
    },
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect,
    },
  };
};

const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name, // ES6 way if key and Value is same.
    },
  };
};

// ----------------- CREATING REDUCERS---------------------------
// So for the first the value not get undeifned we make and Empty array

const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    //   We care about this.
    // we are creating a brand new array and adding new data at the end.
    return [...oldListOfClaims, action.payload];
  }
  // We dont Care.
  return oldListOfClaims;
};

// We set the Default value as 100.
const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};

// We set the Default value as 100.
const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter((name) => name !== action.payload.name);
  }
  return listOfPolicies;
};

// Here we have three Diffrent type of form and three department which Continously listen as some dipatch a form .

// console.log(Redux);

const { createStore, combineReducers } = Redux;

// Combine All three Department in One Department with help of Combine Reducers Functions
// our action is Store in key value Pair.
// We can Name diffrent to our key.
const ourDepartment = combineReducers({
  claimsHistory: claimsHistory,
  accounting: accounting,
  policies: policies,
});

// All the data produced by dpeartment are store here and Dipstach is Function of Store.
const store = createStore(ourDepartment);

const action1 = createPolicy("Kevin", 20);
const action2 = createPolicy("MaxWell", 20);
const action3 = createPolicy("Root", 20);
const action4 = createPolicy("Jason", 20);
const action5 = createClaim("Root", 100);
const action6 = deletePolicy("Jason");

console.log(action1);

// This actually run the Redux Cycle.
store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action3);
store.dispatch(action4);
store.dispatch(action5);
store.dispatch(action6);

console.log(store.getState());
