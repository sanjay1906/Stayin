import React, { Component } from 'react';
import { Typography, Toolbar, AppBar, withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import style from './style';



class Layout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.footerBar} position='static'>
        <Toolbar className={classes.navigationBar}>
          <Container maxWidth='lg'>
            <Typography
              variant='subtitle1'
              align='center'
              color='textSecondary'
              className={classes.footerTypo}
            >
              Made With 💗
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(style)(Layout);