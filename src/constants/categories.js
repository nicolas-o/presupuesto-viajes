const expenseColors = [
  "#b50d12",
  "#bf2f1f",
  "#c9452c",
  "#d3583a",
  "#dc6a48",
  "#e57c58",
  "#ee8d68",
  "#f79d79",
  "#ffae8a",
  "#cc474b",
  "#f55b5f",
];

export const categories = [
  { type: "Sin Categoria", expenseAmount: 0, color: expenseColors[0] },
  { type: "Pasajes", expenseAmount: 0, color: expenseColors[1] },
  { type: "Alojamiento", expenseAmount: 0, color: expenseColors[2] },
  { type: "Comida", expenseAmount: 0, color: expenseColors[3] },
  { type: "Souvenirs", expenseAmount: 0, color: expenseColors[4] },
  { type: "Transporte", expenseAmount: 0, color: expenseColors[5] },
  { type: "Entradas", expenseAmount: 0, color: expenseColors[6] },
];

export const resetCategories = () => {
  categories.forEach((c) => (c.expenseAmount = 0));
};
