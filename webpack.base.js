// const path = require('path')

// const { SRC_DIR, DIST_DIR, STATIC_DIR } = require('./webpack.constants')
const commons = require('./webpack.common')
const merge = require('webpack-merge')

const base = merge(commons)

module.exports = base
