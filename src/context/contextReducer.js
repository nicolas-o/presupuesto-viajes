const contextReducer = (state, action) => {
  let expenses;

  switch (action.type) {
    case "DELETE_EXPENSE":
      expenses = state.filter((expense) => expense.id != action.payload);

      localStorage.setItem("expenses", JSON.stringify(expenses));
      return expenses;

    case "ADD_BUDGET":
      expenses = [action.payload, ...state];

      localStorage.setItem("expenses", JSON.stringify(expenses));
      return expenses;

    case "RESET_BUDGET":
      expenses = [];

      localStorage.setItem("expenses", JSON.stringify(expenses));
      return expenses;

    default:
      return state;
  }
};

export default contextReducer;
