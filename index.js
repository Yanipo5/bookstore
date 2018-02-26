require("dotenv").config();
const express = require("express"),
  app = express(),
  morgan = require(`${__dirname}/util/morgan`),
  bodyParser = require("body-parser"),
  PORT = process.env.PORT || 8080;

// setup the logger
app.use(morgan);

/*#######################
* url Handeling sequance
* #######################*/
// setting routes for API
app.use("/api", require(`${__dirname}/routes/`));
// setting routes for static webpages
app.use(express.static(`${__dirname}/public`));
// a script tag to your application's JavaScript file(s) - required for react router BrowserHistory.

//Error Handlers (Must be at the bottom!!!)
// require('./routes/errorHandeling.js');
/*#####    END     #####*/

//Start Node Server
app.listen(PORT);
console.log(`Node js listen on port ${PORT}...`);

module.exports = app;
