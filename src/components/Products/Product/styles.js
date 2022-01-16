import { makeStyles } from "@material-ui/core/styles";

// call back with an instant return, instant returns get wrappted in parens retuens am object
export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", //16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
