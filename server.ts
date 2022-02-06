// Npm dependencies
import express = require('express');

// Global constants
const unconfiguredApp: express.Application = express()
const PORT = (process.env.PORT || 3000)

// Local dependencies
const router = require('./app/router')

function initialiseRoutes(app: express.Application) {
  router.bind(app)
}

function listen() {
  const app = initialise()
  app.listen(PORT)
}

/**
 * Configures app
 * @returns app
 */

function initialise() {
  const app = unconfiguredApp
  // Attackers can use this header (which is enabled by default) to detect apps running Express and then launch specifically-targeted attacks. The other option is Helmet, which would handle this for us
  app.disable('x-powered-by')
  initialiseRoutes(app)

  return app
}

/**
* Starts app
*/
function start() {
  listen()
}

export {
  start as start,
  initialise as getApp
}