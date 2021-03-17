import React from "react";
import Main from "./components/Main/Main";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import Details from "./components/Details/Details";
import List from "./components/Main/List/List";

const App = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.grid}
      container
      spacing={0}
      alignItems="center"
      justify="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={10} sm={7}>
        <Main />
      </Grid>
      <Grid item xs={10} sm={5}>
        <Details title="Gastos" />
      </Grid>
      <Grid item xs={10} sm={5} className={classes.lastItem}>
        <List />
      </Grid>
    </Grid>
  );
};

export default App;
