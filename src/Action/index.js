export const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount,
    },
  };
};

export const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect,
    },
  };
};

export const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name, // ES6 way if key and Value is same.
    },
  };
};
