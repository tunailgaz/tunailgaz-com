'use strict';
const path = require('path');
require('dotenv').config({path: path.normalize(__dirname + '/../../.env')});
module.exports = {
    base_url : process.env.BASE_URL,
    target_domain : process.env.TARGET_DOMAIN,
    redisChat : {
        port:  6379  ,
        host: 'redis_chat'
    },
};
