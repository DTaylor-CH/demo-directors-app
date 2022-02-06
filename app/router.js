'use strict'

// Export
module.exports.bind = app => {

    // this has to be the last route registered otherwise it will redirect other routes
    app.all('*', (req, res) => res.send('default response - HELLO WORLD!'))
}