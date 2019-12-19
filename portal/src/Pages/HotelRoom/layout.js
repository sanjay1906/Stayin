import React, { Component } from 'react';
import {
  withStyles,
  Grid,
  Container,
  Typography,
  Button,
  CircularProgress
} from '@material-ui/core';

import style from './style';
import { Header } from 'Components';

import { HotelServices } from 'Services';

class Layout extends Component {
  state = {
    isLoaded: false,
    hotel: {}
  };
  async componentDidMount() {
    const id = this.props.match.params.id;
    const response = await HotelServices.getHotelById(id);
    this.setState({
      isLoaded: true,
      hotel: response.data.hotels
    });
  }
  render() {
    const { classes } = this.props;
    const { hotel } = this.state;
    return (
      <div>
        <Header title='Room' />
        <Container maxWidth='lg' className={classes.container}>
          {!this.state.isLoaded && <CircularProgress />}
          {this.state.isLoaded && (
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <div className={classes.hotelimages}>
                  <img
                    src={hotel.image}
                    className={classes.img}
                    alt='hotelroomimage'
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <div className={classes.content}>
                  <div className={classes.innercontent}>
                    <div className={classes.topcontent}>
                      <div>
                        <Typography variant='h5' gutterBottom>
                          {hotel.hotelName}
                        </Typography>
                      </div>
                      <div>
                        <Button
                          variant='contained'
                          color='secondary'
                          className={classes.button}
                        >
                          {hotel.star}
                        </Button>
                      </div>
                    </div>
                    <div className={classes.center}>
                      <h5>Why This Hotel ??</h5>
                      <p>{hotel.description}</p>
                      <p className={classes.Address}>
                        <b>Address:</b> <span>{hotel.address}</span>
                      </p>
                      <p className={classes.Moblile}>
                        <b>Phone:</b> {hotel.mobile}
                      </p>
                      <p className={classes.Moblile}>
                        <b>Email:</b> {hotel.email}
                      </p>
                      <p className={classes.Moblile}>
                        <b>City:</b> {hotel.city}
                      </p>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          )}
        </Container>

      </div>
    );
  }
}

export default withStyles(style)(Layout);
