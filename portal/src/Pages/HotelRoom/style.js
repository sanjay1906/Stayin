const style = theme => ({
    container: {
       paddingTop: theme.spacing() *11,
      display:"flex",
      minHeight:"80vh",

    },
    hotelimages:{
      height:350,
      boxShadow:"none",


    },
    img:{
      height:"100%",
      maxWidth:"100%",
      overFlow:"hidden",
      borderRadius:theme.spacing()  * 1,
    },
    innercontent:{
        margin:theme.spacing() * 2
    },
    content:{
      height:"400px",

    },
    topcontent:{
      paddingBottom:theme.spacing() * 1,
      borderBottom:"1px solid grey",
      display:"flex",
      justifyContent:"space-Between"
    }
  });

  export default style;
