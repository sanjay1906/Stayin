const style = theme => ({
  container: {
    display: "flex",
    height: "90vh",
    justifyContent: "Center",
    alignItems: "center",
    flexDirection: "column",
  },
  textField: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  img: {
    height: theme.spacing(25),
    width: theme.spacing(25),
    textAlign: "center",
  }
});

export default style;
