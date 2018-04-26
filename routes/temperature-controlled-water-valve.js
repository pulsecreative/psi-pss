var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var TemperatureControlledWaterValve = mongoose.model('TemperatureControlledWaterValve');

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

/* GET Page for Temperature Controlled Water Valve Product Selection Software. */
router.get('/', function(req, res, next) {
  console.log('temperature-controlled-water-valve');
  
  res.render('temperature-controlled-water-valve/search', {});
});

/* Process Submitted Query Form; Return Search Results */
router.post('/results', function(req, res, next){
    /* 1. Extract submitted data */
    var temperature = req.body.temperature;

    /* 2. Do a query against database based on the parameters */
    TemperatureControlledWaterValve
    .where("TempAdjustRangeMax").gte(temperature)
    .where("TempAdjustRangeMin").lte(temperature)
    .sort('model')
    .exec(function(err, models) {
      if (err) {
        console.log(err);
      }
      /* Curate query data */
      console.log(models);
      
      var query_data = {
        temperature: temperature,
        models: models
      };
      /* Return search results */
      res.render('temperature-controlled-water-valve/search-results', query_data);
    });
});

/*
==
== Module Enport
==
*/

module.exports = router;
