const { Hotel } = require('Models');
const config = require('config');
const addHotel = async (req, res, next) => {
  const {
    hotelName,
    address,
    city,
    pincode,
    state,
    mobile,
    star,
    email,
    pancard,
    description,
    image
  } = req.body;
  const message = [];
  if (!hotelName) {
    message.push('hotelname is required');
  }
  if (!address) {
    message.push('address is required');
  }
  if (!city) {
    message.push('city is required');
  }
  if (!pincode) {
    message.push('pincode is required');
  }
  if (!mobile) {
    message.push('mobile is required');
  }
  if (!state) {
    message.push('state is required');
  }
  if (!star) {
    message.push('star is required');
  }
  if (!email) {
    message.push('email is required');
  }
  if (!pancard) {
    message.push('pancard is required');
  }
  if (!description) {
    message.push('description is required');
  }
  if (!image) {
    message.push('upload your hotel images');
  }

  if (
    !email ||
    !hotelName ||
    !address ||
    !city ||
    !pincode ||
    !mobile ||
    !state ||
    !star ||
    !email ||
    !pancard ||
    !description ||
    !image
  ) {
    res.json({
      code: 401,
      data: {
        message
      },
      success: false
    });
    return;
  }
  hotel = await new Hotel({
    hotelName,
    address,
    city,
    pincode,
    mobile,
    state,
    star,
    email,
    pancard,
    description,
    image
  }).save();
  res.status(200);
  res.json({
    code: 200,
    data: {
      hotel
    },
    success: true
  });
  return;
};

const getHotels = async (req, res, next) => {
  const hotels = await Hotel.find();
  res.json({
    code: 200,
    data: {
      hotels
    },
    success: true
  });
};

const getHotelsById = async (req, res, next) => {
  const { _id } = req.params;
  const hotels = await Hotel.findOne({ _id });
  if (hotels) {
    res.json({
      code: 200,
      data: {
        hotels
      },
      success: true
    });
  } else {
    res.json({
      code: 200,
      data: {
        message: ['No Hotel Found']
      },
      success: false
    });
  }
};

const searchHotel = async (req, res, next) => {
  const { search } = req.params;
  const hotels = await Hotel.find({
    $or: [
      { hotelName: { $regex: search, $options: 'i' } },
      { city: { $regex: search, $options: 'i' } }
    ]
  });
  return res.json({
    code: 200,
    data: {
      hotels
    },
    success: true
  });
};

module.exports = {
  addHotel,
  getHotels,
  getHotelsById,
  searchHotel
};
