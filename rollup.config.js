const config = require('./configs/env');
const replace = require('rollup-plugin-replace');
const loadz0r = require('rollup-plugin-loadz0r');
const terser = require('rollup-plugin-terser');
const pkg = require('./package.json');
const version = pkg.version;

export default {
    input: ['client/chat.js'],
    output: {
        format: "amd",
        dir: 'public/dist',
        footer: `/* MAINTAINER Tuna Ilgaz <tunailgaz@gmail.com>. Build Version ${version} */`
    },
    plugins: [
        replace({
            delimiters : ['{{','}}'],
            VERSION : version,
            CHAT_SERVER : config.base_url,
            ENV : config.env,
            DEBUG : config.debug
        }),
        loadz0r({
            publicPath: `${config.base_url}/public/dist`
        }),
        terser.terser()
    ],
}


