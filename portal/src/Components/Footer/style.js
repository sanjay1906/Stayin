const style = theme => ({
  footerBar: {
    marginTop:"2rem",
    position:"relative",
    bottom:0,
    // marginTop:theme.spacing() * 10,

  },
  navigationBar: {
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(0),
    padding: theme.spacing(1, 0)
  },
  footerTypo:{
      color:"white",
      fontFamily:"cursive",
      fontSize:theme.spacing() * 3 ,
  }
});
export default style;