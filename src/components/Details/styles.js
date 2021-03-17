import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  gastos: {
    [theme.breakpoints.up("sm")]: {
      height: "250px",
    },
    [theme.breakpoints.up("md")]: {
      height: "400px",
    },
  },
}));
