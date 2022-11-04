const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const livereload = require("livereload");
const livereloadcon = require('connect-livereload');
const handlebars = require('express-handlebars');
const indexRouter = require('./routes/index');
const liveReloadServer = livereload.createServer();

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    console.log("Refreshing the browser")
    liveReloadServer.refresh("/");
  }, 100);
});

const app = express();
app.use(livereloadcon());

// view engine setup
app.set('views', path.join(__dirname, 'views'));

const handlebarOptions = {
  extname: 'hbs',
  partialsDir: 'views/partials',
  helpers: {
    times: (n, block) => {
      let accum = '';
      for (let i = 0; i < n; ++i)
        accum += block.fn(i);
      return accum;
    }
  }
};
const engine = handlebars.create(handlebarOptions)
app.engine('hbs', engine.engine);

app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static('node_modules/'));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { layout: false });
});

module.exports = app;
