const background =
  'https://www.travelplusstyle.com/wp-content/uploads/2016/01/sonevajani-1880.jpg';

const style = theme => ({
  mainheader: {
    height: '94vh',
    position: 'relative',
    background: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  headerContent: {
    display: 'flex',
    alignItems: 'Center',
    justifyContent: 'Center',
    color: 'white',
    height: '95vh',
    flexDirection: 'column'
  },
  button: {
    marginTop: '10px',
    textAlign: 'center',
    marginLeft: 9,
    padding: '10px 30px'
  },
  typo: {
    padding: 15,
    color: 'white',
    zIndex: 9,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    fontFamily: 'Roboto',
    fontSize: '3em',
    fontWeight: 500,
    fontStyle: 'italic'
  },
  Search: {
    height: 125,
    width: '100%',
    backgroundColor: "#d3d3d3"
  },
  textField: {
    display: 'flex',
    position: 'relative',
    top: theme.spacing(4),
    border: 'none',
    borderRadius: theme.spacing(1),
    backgroundColor: 'white',
    alignItems: 'center'
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(0)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    flexGrow: 1
  },
  Footer:{
    height:"100%",
  },
  notfound:{
    height:theme.spacing() * 50,
    position:"sticky",
    margin:"0px auto",
    color:"#1e90ff",
    fontSize:theme.spacing() * 3
  }

});
export default style;
