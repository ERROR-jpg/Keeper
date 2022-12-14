const mongoose = require('mongoose');
const appConfig = require('../config/appConfig');

const DB_URL =  appConfig.DB_URL_CLOUD

mongoose.connect(DB_URL,{ useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true}, (err) => {
    if (!err) {
      console.log('Connection to Database has been established.');
    }
    else {
      console.log('Error in connecting to Database.' + err);
    }
});

require('./noteModel');
require('./userModel');