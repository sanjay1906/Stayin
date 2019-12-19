const app = require('express')();
const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const Debug = require('debug');
const cors = require('cors');
const bodyParser = require('body-parser');
const absPath = require('app-module-path');
const path = require('path');

absPath.addPath(__dirname);
const router = require('Routes');
const { portalServe } = require('Middleware');

const debug = Debug('app:server');
const error = Debug('app:error');
error.log = console.info.bind(console);

const server = (async () => {
  try {
    await mongoose.connect(config.get('db'), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    debug('Connected to database');
    app.use(cors());
    app.use(express.static(path.join(__dirname, '../../portal/build/')));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use('/api/1.0', router);
    if (process.env.NODE_ENV === 'production') {
      app.use(portalServe);
    }
    const PORT = process.env.PORT || config.get('port');
    app.listen(PORT);
    debug('Server is running...');
  } catch (err) {
    error('Server startup failed' + err.message);
  }
})();

module.exports = server;
