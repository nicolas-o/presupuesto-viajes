import React, { useContext } from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
  Typography,
  Grid,
  Button,
  Card,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
import useStyles from "./styles";
import { ExpenseTrackerContext } from "../../../context/context";
import formatThousandSeparator from "../../../utils/formatThousandSeparator";

const List = () => {
  const classes = useStyles();
  const { deleteExpense, expenses } = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.cardContent}>
      <Typography variant="h5" className={classes.typography}>
        Historial
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <MUIList dense={false} className={classes.list}>
            {expenses.map((expense) => (
              <Slide
                direction="down"
                in
                mountOnEnter
                unmountOnExit
                key={expense.id}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      className={
                        expense.type === "Budget"
                          ? classes.avatarIncome
                          : classes.avatarExpense
                      }
                    >
                      <MoneyOff />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      expense.type === "Budget"
                        ? "Presupuesto"
                        : expense.category
                    }
                    secondary={`$${
                      expense.type === "Budget"
                        ? formatThousandSeparator(expense.budgetAmount)
                        : formatThousandSeparator(expense.expenseAmount)
                    }`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => deleteExpense(expense.id)}
                    >
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </Slide>
            ))}
          </MUIList>
        </Grid>
      </Grid>
    </Card>
  );
};

export default List;
