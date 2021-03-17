import React, { useContext } from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";
import Form from "./Form/Form";
import { ExpenseTrackerContext } from "../../context/context";
import formatThousandSeparator from "../../utils/formatThousandSeparator";

const Main = () => {
  const classes = useStyles();
  const { balance, resetBudget } = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5">
          Presupuesto: ${formatThousandSeparator(balance)}
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            onClick={resetBudget}
          >
            Reset
          </Button>
        </Typography>
        <Divider />
        <Form />
      </CardContent>
    </Card>
  );
};

export default Main;
