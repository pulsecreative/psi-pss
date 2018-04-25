var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var DualTemperatureSwitch = mongoose.model('DualTemperatureSwitch');

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

/* GET Page for Dual Temperature Switch Product Selection Software. */
router.get('/', function(req, res, next) {
  res.render('dual-temperature-switch/search', {});
});

/* Process Submitted Query Form; Return Search Results */
router.post('/results', function(req, res, next){
    /* 1. Extract submitted data */
    var low_cutoff = req.body.low_cutoff;
    var low_cutin = req.body.low_cutin; 
    var high_cutoff = req.body.high_cutoff;
    var high_cutin = req.body.high_cutin; 

    /* 2. get differential */
    var low_differential = low_cutoff - low_cutin;
    var high_differential = high_cutoff - high_cutin;

    /* 3. Do a query against database based on the parameters */
    DualTemperatureSwitch
    .where("LowTempAdjustRangeMax").gte(low_cutoff)
    .where("LowTempAdjustRangeMin").lte(low_cutoff)
    .where("LowTempDiffMax").gte(low_differential)
    .where("LowTempDiffMin").lte(low_differential)
    .where("HighTempAdjustRangeMax").gte(high_cutoff)
    .where("HighTempAdjustRangeMin").lte(high_cutoff)
    .where("HighTempDiffMax").gte(high_differential)
    .where("HighTempDiffMin").lte(high_differential)
    .sort('model')
    .exec(function(err, models) {
      if (err) {
        console.log(err);
      }
      /* Curate query data */
      console.log(models);
      
      var query_data = {
        low_cutin: low_cutin,
        low_cutoff: low_cutoff,
        low_differential: low_differential,
        high_cutin: high_cutin,
        high_cutoff: high_cutoff,
        high_differential: high_differential,
        models: models
      };
      /* Return search results */
      res.render('dual-temperature-switch/search-results', query_data);
    });
});

/*
==
== Module Enport
==
*/

module.exports = router;
