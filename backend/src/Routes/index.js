const router = require('express').Router();

const { AuthController, HotelController } = require('Controllers');
// Auth Routes
router.post('/login', AuthController.login);
router.post('/signup', AuthController.signup);
router.post('/managersignup', AuthController.managersignup);
router.post('/managerlogin', AuthController.managerlogin);

// Hotel Controllers
router.post('/addhotel', HotelController.addHotel);
router.get('/hotels', HotelController.getHotels);
router.get('/hotels/:_id', HotelController.getHotelsById);
router.get('/hotels/search/:search', HotelController.searchHotel);

module.exports = router;
