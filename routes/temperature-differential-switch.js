var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var TemperatureDifferentialSwitch = mongoose.model('TemperatureDifferentialSwitch');

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

/* GET Page for Temperature Differential Switch Product Selection Software. */
router.get('/', function(req, res, next) {
  res.render('temperature-differential-switch/search', {});
});

/* Process Submitted Query Form; Return search Results */
router.post('/results', function(req, res, next){
    /* 1. Extract submitted data */
    var cutoff = req.body.cutoff;

    /* 2. Do a query against database based on the parameters */
    TemperatureDifferentialSwitch
    .where("DifferentialAdjustRangeMax").gte(cutoff)
    .where("DifferentialAdjustRangeMin").lte(cutoff)
    .sort('model')
    .exec(function(err, models) {
      if (err) {
        console.log(err);
      }
      /* Curate query data */
      var query_data = {
        cutoff: cutoff,
        models: models
      };
      /* Return search results */
      res.render('temperature-differential-switch/search-results', query_data);
    });
});

/*
==
== Module Enport
==
*/

module.exports = router;
