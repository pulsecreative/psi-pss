var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// require database configuration and establish connection
var db = require('./database');

// create Express app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// require routes
var index = require('./routes/index');
var single_pressure_switch = require('./routes/single-pressure-switch');
var dual_pressure_switch = require('./routes/dual-pressure-switch');
var single_temperature_switch = require('./routes/single-temperature-switch');
var dual_temperature_switch = require('./routes/dual-temperature-switch');
var pressure_differential_switch = require('./routes/pressure-differential-switch');
var temperature_differential_switch = require('./routes/temperature-differential-switch');
var oil_flow_switch = require('./routes/oil-flow-switch');
var pressure_controlled_water_valve = require('./routes/pressure-controlled-water-valve');
var temperature_controlled_water_valve = require('./routes/temperature-controlled-water-valve');
var sv_solenoid_valve = require('./routes/sv-solenoid-valve');
var ssv_solenoid_valve = require('./routes/ssv-solenoid-valve');
var svg_solenoid_valve = require('./routes/svg-solenoid-valve');
var nsv_solenoid_valve = require('./routes/nsv-solenoid-valve');
var asv_solenoid_valve = require('./routes/asv-solenoid-valve');
var k_astv_expansion_valve = require('./routes/k-astv-expansion-valve');
var k_bwtv_expansion_valve = require('./routes/k-bwtv-expansion-valve');
var etv_expansion_valve = require('./routes/etv-expansion-valve');
var sstv_expansion_valve = require('./routes/sstv-expansion-valve');
var hot_gas_bypass = require('./routes/hot-gas-bypass');

// use routes
app.use('/', index);
app.use('/single-pressure-switch', single_pressure_switch);
app.use('/dual-pressure-switch', dual_pressure_switch);
app.use('/single-temperature-switch', single_temperature_switch);
app.use('/dual-temperature-switch', dual_temperature_switch);
app.use('/pressure-differential-switch', pressure_differential_switch);
app.use('/temperature-differential-switch', temperature_differential_switch);
app.use('/oil-flow-switch', oil_flow_switch);
app.use('/pressure-controlled-water-valve', pressure_controlled_water_valve);
app.use('/temperature-controlled-water-valve', temperature_controlled_water_valve);
app.use('/sv-solenoid-valve', sv_solenoid_valve);
app.use('/ssv-solenoid-valve', ssv_solenoid_valve);
app.use('/svg-solenoid-valve', svg_solenoid_valve);
app.use('/nsv-solenoid-valve', nsv_solenoid_valve);
app.use('/asv-solenoid-valve', asv_solenoid_valve);
app.use('/k-astv-expansion-valve', k_astv_expansion_valve);
app.use('/k-bwtv-expansion-valve', k_bwtv_expansion_valve);
app.use('/etv-expansion-valve', etv_expansion_valve);
app.use('/sstv-expansion-valve', sstv_expansion_valve);
app.use('/hot-gas-bypass', hot_gas_bypass);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;