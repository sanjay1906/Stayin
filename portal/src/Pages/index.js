import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'Pages/Home';
import Login from 'Pages/Login';
import Singup from 'Pages/Signup';
import ManagerLogin from 'Pages/ManagerLogin';
import ManagerSignup from 'Pages/ManagerSignup';
import HotelRegistration from 'Pages/HotelRegistration';
import HotelRooms from 'Pages/HotelRoom';
import Admin from 'Pages/Admin';
import SellerLogin from 'Pages/SellerLogin';

class Root extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Singup} />
          <Route exact path='/managerlogin' component={ManagerLogin} />
          <Route exact path='/managersignup' component={ManagerSignup} />
          <Route exact path='/addhotel' component={HotelRegistration} />
          <Route exact path='/room/:id' component={HotelRooms} />
          <Route exact path='/admin' component={Admin} />
          <Route exact path='/admin/login' component={SellerLogin} />
          <Route exact path='/admin/addhotel' component={HotelRegistration} />
        </Switch>
      </Router>
    );
  }
}
export default Root;
