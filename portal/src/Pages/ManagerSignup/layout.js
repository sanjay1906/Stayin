import React, { Component } from 'react';
import style from './style';
import { Header, Snackbar } from 'Components';
import axios from 'axios';
import Config from 'Config';

import {
  withStyles,
  Container,
  Grid,
  TextField,
  Button,
  CircularProgress
} from '@material-ui/core';

class Layout extends Component {
  state = {
    name: '',
    address: '',
    mobile: '',
    username: '',
    password: '',
    isOpen: false,
    message: '',
    variant: 'error',
    isChecking: false
  };
  onClickSignup = async () => {
    this.setState({ isChecking: true });
    const { name, address, mobile, username, password } = this.state;
    const response = await axios.post(`${Config.SERVER_URL}/managersignup`, {
      name,
      address,
      mobile,
      username,
      password
    });
    if (!response.data.success) {
      const message = response.data.data.message;
      this.setState({
        message: message[0],
        isOpen: true,
        variant: 'error'
      });
    } else {
      this.props.history.push('/admin');
    }
    this.setState({
      username: '',
      password: '',
      name: '',
      address: '',
      mobile: '',
      isChecking: false
    });
  };

  render() {
    const { classes } = this.props;
    const { name, address, mobile, username, password } = this.state;
    return (
      <div className={classes.container}>
        <Header title='Manager Signup' />
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
                    name='name'
                    variant='outlined'
                    required
                    fullWidth
                    placeholder='Enter name'
                    id='name'
                    autoFocus
                    value={name}
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='mobile'
                    placeholder='Enter mobile No'
                    name='lastName'
                    autoComplete='lname'
                    value={mobile}
                    onChange={e => this.setState({ mobile: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='address'
                    placeholder='address'
                    name='email'

                    value={address}
                    onChange={e => this.setState({ address: e.target.value })}
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
                {this.state.isChecking && <CircularProgress size={20} />}
                 Signup
              </Button>
            </form>
          </div>
        </Container>

      </div>
    );
  }
}

export default withStyles(style)(Layout);
