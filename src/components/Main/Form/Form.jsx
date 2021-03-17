import React, { useState, useContext } from "react";
import {
  TextField,
  Grid,
  Button,
  FormControl,
  MenuItem,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import useStyles from "./styles";
import { categories } from "../../../constants/categories";
import { ExpenseTrackerContext } from "../../../context/context";

const initialState = {
  budgetAmount: "",
  expenseAmount: "",
  category: "Sin Categoria",
  type: "",
};

const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const { addToBudget } = useContext(ExpenseTrackerContext);

  const createBudget = (e) => {
    const amount =
      formData.type === "Budget"
        ? { budgetAmount: formData.budgetAmount }
        : { expenseAmount: formData.expenseAmount };

    const budget = {
      ...formData,
      amount,
      id: uuidv4(),
    };
    e.preventDefault();
    if ((budget.budgetAmount || budget.expenseAmount) !== "") {
      addToBudget(budget);
    }
    setFormData(initialState);
  };
  return (
    <Grid container spacing={2} className={classes.grid}>
      <Grid item xs={8}>
        <form
          onSubmit={createBudget}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField
            type="number"
            label="Presupuesto"
            fullWidth
            value={formData.budgetAmount}
            onChange={(e) =>
              setFormData({
                ...formData,
                budgetAmount: Number(e.target.value),
                type: "Budget",
              })
            }
          />
        </form>
      </Grid>
      <Grid item xs={4}>
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          fullWidth
          onClick={createBudget}
        >
          Añadir
        </Button>
      </Grid>

      <Grid item xs={4}>
        <form
          onSubmit={createBudget}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField
            type="number"
            label="Gastos"
            value={formData.expenseAmount}
            fullWidth
            onChange={(e) =>
              setFormData({
                ...formData,
                expenseAmount: Number(e.target.value),
                type: "Gastos",
              })
            }
          />
        </form>
      </Grid>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <TextField
            select
            value={
              formData.category === initialState
                ? initialState
                : formData.category
            }
            label="Categoria"
            onChange={(e) =>
              setFormData({
                ...formData,
                category: e.target.value ? e.target.value : "Sin Categoria",
              })
            }
          >
            {categories.map((c) => (
              <MenuItem key={c.type} value={c.type}>
                {c.type}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          fullWidth
          onClick={createBudget}
        >
          Añadir
        </Button>
      </Grid>
    </Grid>
  );
};

export default Form;
