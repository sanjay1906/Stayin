import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import {
  withStyles,
  Typography,
  Button,
  Container,
  TextField,
  Grid,
  CardActions,
  CardContent,
  CardMedia,
  Card
} from '@material-ui/core';

import style from './style';
import { Header, Footer } from 'Components';
import { HotelServices, AuthServices } from 'Services';

class Layout extends Component {
  handleLogout = () => {
    AuthServices.logout();
    this.props.history.push('/login');
  };
  handleLogin = () => {
    this.props.history.push('/login');
  };

  handleSignup = () => {
    this.props.history.push('/signup');
  };
  state = {
    hotels: []
  };

  async componentDidMount() {
    const response = await HotelServices.getHotels();
    if (response.success) {
      this.setState({ hotels: response.data.hotels });
    }
  }
  searchHotel = async e => {
    const search = e.target.value;
    let response;
    if (search) {
      response = await HotelServices.searchHotel(search);
      if (response.success) {
        this.setState({ hotels: response.data.hotels });
      }
    } else {
      response = await HotelServices.getHotels();
      if (response.success) {
        this.setState({ hotels: response.data.hotels });
      }
    }
  };

  handleNavigation = id => {
    this.props.history.push(`/room/${id}`);
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header title='STAY IN' />
        <div className='header' className={classes.mainheader}>
          <div className={classes.overlay}></div>
          <div className={classes.headerContent}>
            <Typography variant='h4' color='defulat' className={classes.typo}>
              Welcome To STAY IN
            </Typography>
            {AuthServices.isAuthenticated() && (
              <div>
                <Button
                  onClick={this.handleLogout}
                  variant='contained'
                  color='secondary'
                  className={classes.button}
                >
                  Logout
                </Button>
              </div>
            )}
            {!AuthServices.isAuthenticated() && (
              <div>
                <Button
                  onClick={this.handleLogin}
                  variant='contained'
                  color='secondary'
                  className={classes.button}
                >
                  Login
                </Button>
                <Button
                  onClick={this.handleSignup}
                  variant='contained'
                  color='secondary'
                  className={classes.button}
                >
                  SingUp
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className={classes.Search}>
          <Container maxWidth='sm'>
            <TextField
              name='Search'
              className={classes.textField}
              variant='outlined'
              placeholder='Search Your Hotel'
              fullWidth
              onChange={this.searchHotel}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start' style={{ color: '#F50057' }}>
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
            />
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {this.state.hotels.length === 0 && <div className={classes.notfound}>Opps !!  Hotel Not Found... </div>}
            {this.state.hotels.length > 0 &&
              this.state.hotels.map((hotel, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={hotel.image}
                      title='Hotel'
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant='h5'>{hotel.hotelName}</Typography>
                      <Typography gutterBottom>{hotel.address}</Typography>
                      <Typography gutterBottom>{hotel.city}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant='contained'
                        color='secondary'
                        className={classes.button}
                        onClick={() => this.handleNavigation(hotel._id)}
                      >
                        BOOK NOW
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default withStyles(style)(Layout);
