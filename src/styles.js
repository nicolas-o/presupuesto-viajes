import { makeStyles } from "@material-ui/core/styles";
import beach from "./assets/Jungle_beach,_Galle.jpg";

export default makeStyles((theme) => ({
  lastItem: {
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "16px",
    },
  },
  grid: {
    background: ` linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url(${beach})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));
