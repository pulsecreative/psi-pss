var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var PressureControlledWaterValve = mongoose.model('PressureControlledWaterValve');

/* Round method */
function round(value, exp) {
  if (typeof exp === 'undefined' || +exp === 0)
    return Math.round(value);

  value = +value;
  exp = +exp;

  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
    return NaN;

  // Shift
  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
}

/*
==
== Data Query
==
*/

/* GET Page for Pressure Controlled Water Valve Product Selection Software. */
router.get('/', function(req, res, next) {
  res.render('pressure-controlled-water-valve/search', {});
});

/* Process Submitted Query Form; Return Search Results */
router.post('/results', function(req, res, next){
    /* 1. Extract submitted data */
    var condenser_pressure = round(req.body.condenser_pressure / 145, 3);

    /* 2. Do a query against database based on the parameters */
    PressureControlledWaterValve
    .where("CondenserPressureAdjustRangeMax").gte(condenser_pressure)
    .where("CondenserPressureAdjustRangeMin").lte(condenser_pressure)
    .sort('model')
    .exec(function(err, models) {
      if (err) {
        console.log(err);
      }
      /* Curate query data */
      console.log(models);
      
      var query_data = {
        condenser_pressure: condenser_pressure,
        models: models
      };
      /* Return search results */
      res.render('pressure-controlled-water-valve/search-results', query_data);
    });
});

/*
==
== Module Enport
==
*/

module.exports = router;
