import { makeStyles } from "@material-ui/core/styles";
import { red, green } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  avatarIncome: {
    color: "#fff",
    backgroundColor: green[500],
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  list: {
    overflow: "auto",
    background: "white",
    [theme.breakpoints.up("sm")]: {
      height: "169px",
    },
    [theme.breakpoints.up("md")]: {
      height: "319px",
    },
  },

  typography: {
    margin: "16px 0 16px 16px",
  },
}));
