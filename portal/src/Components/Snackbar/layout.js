import * as React from 'react';
import { Snackbar } from '@material-ui/core';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/styles';

import style from './style';
class Layout extends React.Component {
  render() {
    const { handleClose, isOpen, errorMessage, classes, variant } = this.props;
    const isMobile = isWidthDown('sm', this.props.width);
    return (
      <Snackbar
        anchorOrigin={{
          vertical: isMobile ? 'bottom' : 'top',
          horizontal: isMobile ? 'center' : 'right'
        }}
        open={isOpen}
        autoHideDuration={5000}
        onClose={handleClose}
        message={errorMessage}
        ContentProps={{
          classes: {
            root: variant ? classes[variant] : classes.error
          }
        }}
      ></Snackbar>
    );
  }
}

export default withWidth()(withStyles(style)(Layout));
