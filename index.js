require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

/*#######################
* url Handeling sequance
* #######################*/
// setting routes for API
const routes = require(`${__dirname}/routes/index.js`);
app.use('/api', routes);
// setting routes for static webpages
app.use(express.static(`${__dirname}/public`))
// a script tag to your application's JavaScript file(s) - required for react router BrowserHistory.

//Error Handlers (Must be at the bottom!!!)
// require('./routes/errorHandeling.js');
/*#####    END     #####*/

//Start Node Server
app.listen(port);
console.log(`Node js listen on port ${port}...`);

module.exports = app;