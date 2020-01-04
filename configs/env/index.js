'use strict';
const path = require('path');
const _ = require('lodash');
require('dotenv').config({path: path.normalize(__dirname + '/../../.env')});
const global = {
    env :  process.env.NODE_ENV || 'production',
    port : process.env.PORT || 5000 ,
    root: path.normalize(__dirname + '/../../'),
    version :  require('../../package.json').version,
    debug : process.env.DEBUG || 'false'
};
module.exports = _.merge(
    global,
    require('./' + _.trim((process.env.NODE_ENV || 'production')) + '.js') || {});

