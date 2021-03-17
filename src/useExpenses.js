import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";
import { resetCategories, categories } from "./constants/categories";
import useWindowSize from "./utils/useWindowSize";
import formatThousandSeparator from "./utils/formatThousandSeparator";

const useExpenses = () => {
  resetCategories();
  const { expenses } = useContext(ExpenseTrackerContext);

  const total = expenses.reduce(
    (acc, currVal) =>
      currVal.type === "Gastos" ? acc + currVal.expenseAmount : acc + 0,
    0
  );

  expenses.forEach((expense) => {
    const category = categories.find((c) => c.type === expense.category);
    if (category) category.expenseAmount += expense.expenseAmount;
  });
  const filteredCategories = categories.filter((c) => c.expenseAmount > 0);

  let options = {
    legend: {
      display: false,
    },
  };

  if (useWindowSize()[0] > 886) {
    options = {
      legend: {
        display: true,
      },
    };
  }

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) =>
          formatThousandSeparator(c.expenseAmount)
        ),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };
  return { total, chartData, options };
};

export default useExpenses;
