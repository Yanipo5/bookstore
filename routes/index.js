const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** ############################
 *      Mapping api routes
 ############################ */
app.use("/book", require("./routers/book.js"));

/** ############################
 *      THESE ROUTES MUST BE LAST
 ############################ */
// catch 404 and forward to error handler.
app.use((req, res, next) => {
  let err = new Error("Page Not Found");
  err.status = 404;
  next(err);
});

// If our applicatione encounters an error, we'll display the error and stacktrace accordingly.
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
