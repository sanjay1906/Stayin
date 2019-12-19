import React, { Component } from 'react';
import { Typography, AppBar, Toolbar, withStyles } from '@material-ui/core';

import style from './style';

class Layout extends Component {
  render() {
    const { classes, title } = this.props;
    return (
      <AppBar position='static' className={classes.AppBar}>
        <Toolbar className={classes.navigationBar}>
          <Typography variant='h6' >{title || 'STAYIN'}</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(style)(Layout);
