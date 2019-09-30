const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.join(_dirname,'./src/main.js'),
    output:path.join(_direname,'./dist'),
    filename:'bundle.js'
}