var morgan = require("morgan");
var fs = require("fs");
var path = require("path");
var rfs = require("rotating-file-stream");

var logDirectory = path.join(__dirname, "../logs");

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// create a rotating write stream
var accessLogStream = rfs("access.log", {
  interval: "1d", // rotate daily
  path: logDirectory
});

// Custom morgan token - loggin request body
morgan.token("body", req => {
  return JSON.stringify(req.body);
});

const morganFormat =
  ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :body :res[content-length] ":referrer" ":user-agent"';
// setup the logger
module.exports = morgan(morganFormat, { stream: accessLogStream });
