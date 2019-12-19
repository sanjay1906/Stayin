const style = theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column'
  },

  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    marginTop: theme.spacing() * 3
  },
  loginForm: {
    marginTop: theme.spacing() * 15
  },
  formContainer: {
    flexDirection: 'column'
  },
  textFieldStyle: {
    width: theme.spacing() * 40
  },
  button: {
    marginTop: theme.spacing() * 2,
    fontSize: theme.spacing() * 2,
    fontWeight: 'bold',
  },
  createSignup: {
    marginTop: theme.spacing() * 5
  },
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing() * 3
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

export default style;
