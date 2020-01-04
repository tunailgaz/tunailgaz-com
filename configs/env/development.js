'use strict';
const path = require('path');
require('dotenv').config({path: path.normalize(__dirname + '/../../.env')});
module.exports = {
    base_url : `http://localhost:${process.env.PORT}`,
};
