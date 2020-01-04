'use strict';
const path = require('path');
require('dotenv').config({path: path.normalize(__dirname + '/../../.env')});
module.exports = {
    base_url : process.env.BASE_URL,
};
