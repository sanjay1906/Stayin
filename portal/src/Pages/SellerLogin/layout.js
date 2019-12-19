import React, { Component } from "react";
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
import {
  withStyles,
  Container,
  TextField,
  Button
} from "@material-ui/core";

import style from "./style";
import { Header } from "Components";

class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header title="Hotel Login" />
        <div className={classes.container} >
          <img src="/images/boy.svg" alt="boy" height='150' width='150' />
          <Container maxWidth="xs">
            <TextField
              name="hotelname"
              type="email"
              className={classes.textField}
              variant="outlined"
              placeholder="Enter Your Email"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" style={{ color: "#1e90ff" }}>
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              name="hotelname"
              id="outlined-bare"
              type="password"
              className={classes.textField}
              variant="outlined"
              placeholder="Enter Your Password"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" style={{ color: "#1e90ff" }}>
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              fullWidth
              color="primary"
              className={classes.button}
            >
              Login
                </Button>
          </Container>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(Layout);
