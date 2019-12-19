import React, { Component } from 'react';
import { AuthServices } from 'Services';
import { AccountCircle } from '@material-ui/icons';
import LockIcon from '@material-ui/icons/Lock';

import {
  withStyles,
  InputAdornment,
  TextField,
  Button,
  Container,
  Grid,
  CircularProgress
} from '@material-ui/core';
import style from './style';
import { Header, Snackbar } from 'Components';

class Layout extends Component {
  state = {
    username: '',
    password: '',
    isOpen: false,
    message: '',
    variant: 'error',
    isChecking: false
  };
  onClickLogin = async () => {
    this.setState({ isChecking: true });
    const { username, password } = this.state;
    const response = await AuthServices.login(username, password);
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
    const { username, password } = this.state;
    return (
      <div className={classes.container}>
        <Header title='Login' />
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
                <Grid item xs={12}>
                  <TextField
                    AccountCircle
                    autoFocus
                    variant='outlined'
                    required
                    fullWidth
                    id='username'
                    placeholder='Email'
                    name='email'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position='start'
                          style={{ color: '#1e90ff' }}
                        >
                          <AccountCircle />
                        </InputAdornment>
                      )
                    }}
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
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position='start'
                          style={{ color: '#1e90ff' }}
                        >
                          <LockIcon />
                        </InputAdornment>
                      )
                    }}
                    value={password}
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                </Grid>
              </Grid>

              <Button
                onClick={this.onClickLogin}
                variant='contained'
                color='primary'
                className={classes.button}
                fullWidth
                disabled={this.state.isChecking ? true : false}
              >
                {this.state.isChecking && <CircularProgress size={20} />}Login
              </Button>
            </form>
          </div>
        </Container>
          </div>
    );
  }
}

export default withStyles(style)(Layout);
