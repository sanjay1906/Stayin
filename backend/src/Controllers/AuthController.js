const { User, Manager } = require('Models');
const jwt = require('jsonwebtoken');
const config = require('config');

const login = async (req, res, next) => {
  const { username, password } = req.body;
  const message = [];
  if (!username) {
    message.push('Username is required');
  }
  if (!password) {
    message.push('Password is required');
  }
  if (!username || !password) {
    res.json({
      code: 401,
      data: {
        message
      },
      success: false
    });
    return;
  }

  const user = await User.findOne({ username, password }, { username: 1 });
  if (!user) {
    res.json({
      code: 401,
      data: {
        message: ['Invalid username or password']
      },
      success: false
    });
    return;
  }
  const expiredOn = Date.now() + 1000 * 60 * 60;
  const authInfo = {
    expiredOn,
    username
  };
  const token = jwt.sign(JSON.stringify(authInfo), config.get('jwt').secret);
  res.status(200);
  res.json({
    code: 200,
    data: {
      expiredOn,
      token,
      username
    },
    success: true
  });
  return;
};

const managerlogin = async (req, res, next) => {
  const { username, password } = req.body;
  const message = [];
  if (!username) {
    message.push('Username is required');
  }
  if (!password) {
    message.push('Password is required');
  }
  if (!username || !password) {
    res.json({
      code: 401,
      data: {
        message
      },
      success: false
    });
    return;
  }

  const manager = await Manager.findOne(
    { username, password },
    { username: 1 }
  );
  if (!manager) {
    res.json({
      code: 401,
      data: {
        message: ['Invalid username or password']
      },
      success: false
    });
    return;
  }
  const expiredOn = Date.now() + 1000 * 60 * 60;
  const authInfo = {
    expiredOn,
    username
  };
  const token = jwt.sign(JSON.stringify(authInfo), config.get('jwt').secret);
  res.status(200);
  res.json({
    code: 200,
    data: {
      expiredOn,
      token,
      username
    },
    success: true
  });
  return;
};

const signup = async (req, res, next) => {
  const { firstname, lastname, username, password } = req.body;
  const message = [];
  if (!firstname) {
    message.push('firstname is required');
  }

  if (!lastname) {
    message.push('lastname is required');
  }
  if (!username) {
    message.push('Username is required');
  }
  if (!password) {
    message.push('Password is required');
  }
  if (!firstname || !username || !lastname || !password) {
    res.json({
      code: 401,
      data: {
        message
      },
      success: false
    });
    return;
  }
  const user = await User.findOne({ username });
  if (user) {
    res.json({
      code: 401,
      data: {
        message: ['User is already exists']
      },
      success: false
    });
    return;
  }

  const expiredOn = Date.now() + 1000 * 60 * 60;
  const authInfo = {
    expiredOn,
    username
  };
  const token = jwt.sign(JSON.stringify(authInfo), config.get('jwt').secret);
  await new User({
    firstname,
    lastname,
    username,
    password
  }).save();
  res.status(200);
  res.json({
    code: 200,
    data: {
      expiredOn,
      token,
      username
    },
    success: true
  });
  return;
};

const managersignup = async (req, res, next) => {
  const { name, address, mobile, username, password } = req.body;
  const message = [];
  if (!name) {
    message.push('name is required');
  }
  if (!mobile) {
    message.push('mobile is required');
  }
  if (!address) {
    message.push('address is required');
  }
  if (!username) {
    message.push('Email is required');
  }
  if (!password) {
    message.push('Password is required');
  }
  if (!name || !mobile || !address || !username || !password) {
    res.json({
      code: 401,
      data: {
        message
      },
      success: false
    });
    return;
  }
  const manager = await Manager.findOne({ username });
  if (manager) {
    res.json({
      code: 401,
      data: {
        message: ['Manager is already exists']
      },
      success: false
    });
    return;
  }

  const expiredOn = Date.now() + 1000 * 60 * 60;
  const authInfo = {
    expiredOn,
    username
  };
  const token = jwt.sign(JSON.stringify(authInfo), config.get('jwt').secret);
  await new Manager({
    name,
    address,
    mobile,
    username,
    password
  }).save();
  res.status(200);
  res.json({
    code: 200,
    data: {
      expiredOn,
      token,
      username
    },
    success: true
  });
  return;
};

module.exports = {
  login,
  signup,
  managerlogin,
  managersignup
};
