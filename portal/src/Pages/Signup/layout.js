import React, { Component } from 'react';
import style from './style';
import { Header, Snackbar } from 'Components';
import {
  withStyles,
  Container,
  Grid,
  TextField,
  Button,
  CircularProgress
} from '@material-ui/core';
import {AuthServices} from 'Services';


class Layout extends Component {
  state = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    isOpen: false,
    message: '',
    variant: 'error',
    isChecking: false
  };
  onClickSignup = async () => {
    this.setState({ isChecking: true });
    const { firstname, lastname, username, password } = this.state;
    const response = await AuthServices.signup(firstname,lastname,username, password);
    if (!response.success) {
      const message = response.data.message;
      console.log(message);
      this.setState({
        message: message[0],
        isOpen: true,
        variant: 'error'
      });
    } else {
      this.props.history.push('/');
    }
    this.setState({
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      isChecking: false
    });
  };

  render() {
    const { classes } = this.props;
    const { firstname, lastname, username, password } = this.state;
    return (
      <div className={classes.container}>
        <Header title='Signup' />
        <Snackbar
          errorMessage={this.state.message}
          isOpen={this.state.isOpen}
          handleClose={() => this.setState({ isOpen: false })}
          variant={this.state.variant}
        />
        <Container component='main' maxWidth='xs'>
          <div className={classes.paper}>
            <img src='/images/boy.svg' alt='svgicon' height='150' width='150' />
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete='fname'
                    name='firstName'
                    variant='outlined'
                    required
                    fullWidth
                    placeholder='Enter firstname'
                    id='firstName'
                    autoFocus
                    value={firstname}
                    onChange={e => this.setState({ firstname: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='lastName'
                    placeholder='Enter lastname'
                    name='lastName'
                    autoComplete='lname'
                    value={lastname}
                    onChange={e => this.setState({ lastname: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='email'
                    placeholder='Email'
                    name='email'
                    // autoComplete='email'
                    value={username}
                    onChange={e => this.setState({ username: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    name='password'
                    placeholder='password'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    value={password}
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                </Grid>
              </Grid>

              <Button
                onClick={this.onClickSignup}
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
                disabled={this.state.isChecking ? true : false}
              >
                {this.state.isChecking && <CircularProgress size={20} />}Signup
              </Button>
            </form>
          </div>
        </Container>

      </div>
    );
  }
}

export default withStyles(style)(Layout);
