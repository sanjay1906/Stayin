import React from 'react';
import {
  withStyles,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container
} from '@material-ui/core';
import { Header} from 'Components';
import { HotelServices } from 'Services';

import style from './style';
class Layout extends React.Component {
  state = {
    hotels: []
  };

  async componentDidMount() {
    const response = await HotelServices.getHotels();
    if (response.success) {
      this.setState({ hotels: response.data.hotels });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header title='Admin' className={classes.Header} />
        <div>
          <Container className={classes.tophead} maxWidth='xl'>
            <div>Worked Hotel</div>
            <div>
              <Button
                variant='contained'
                color='secondary'

                onClick={() => {
                  this.props.history.push('/');
                }}
                className={classes.button}
              >
                BACK
              </Button>
              <Button
                variant='contained'
                color='secondary'
                onClick={() => {
                  this.props.history.push('/addhotel');
                }}
                className={classes.button}
              >
                ADD HOTEL
              </Button>
            </div>
          </Container>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Hotel Name</TableCell>
                <TableCell style={{ width: '20%' }}>Mobile No</TableCell>
                <TableCell>City</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.hotels.map((hotel, index) => (
                <TableRow key={index} className={classes.listContainer}>
                  <TableCell>{hotel.hotelName}</TableCell>
                  <TableCell>{hotel.mobile}</TableCell>
                  <TableCell>{hotel.city}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}
export default withStyles(style)(Layout);
