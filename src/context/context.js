import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

let initial = JSON.parse(localStorage.getItem("expenses")) || [];

export const ExpenseTrackerContext = createContext(initial);

export const Provider = ({ children }) => {
  const [expenses, dispatch] = useReducer(contextReducer, initial);

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE_EXPENSE", payload: id });
  };

  const addToBudget = (budget) => {
    dispatch({ type: "ADD_BUDGET", payload: budget });
  };
  const resetBudget = () => {
    dispatch({ type: "RESET_BUDGET" });
  };
  const balance = expenses.reduce(
    (acc, currVal) =>
      currVal.type === "Gastos"
        ? acc - currVal.expenseAmount
        : acc + currVal.budgetAmount,
    0
  );

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteExpense,
        addToBudget,
        expenses,
        balance,
        initial,
        resetBudget,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
