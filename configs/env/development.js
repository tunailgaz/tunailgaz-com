'use strict';
const path = require('path');
require('dotenv').config({path: path.normalize(__dirname + '/../../.env')});
module.exports = {
    base_url : `http://localhost:${process.env.PORT}`,
    target_domain : 'http://localhost:3000',
    redisChat : {
        port:   9104  ,
        host:    'localhost'
    }
};
