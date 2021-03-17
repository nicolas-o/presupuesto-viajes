import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useStyles from "./styles";
import formatThousandSeparator from "../../utils/formatThousandSeparator";
import useExpenses from "../../useExpenses";

const Details = () => {
  const classes = useStyles();
  const { total, chartData, options } = useExpenses();
  return (
    <Card className={classes.gastos}>
      <CardContent>
        <Typography variant="h5">
          Gastos ${formatThousandSeparator(total)}
        </Typography>
        <Doughnut data={chartData} options={options} />
      </CardContent>
    </Card>
  );
};

export default Details;
