var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var DualPressureSwitch = mongoose.model('DualPressureSwitch');

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

/* GET Page for Dual Pressure Switch Product Selection Software. */
router.get('/', function(req, res, next) {
  res.render('dual-pressure-switch/search', {});
});

/* Process Submitted Query Form; Return search Results */
router.post('/results', function(req, res, next){
    /* 1. Extract submitted data for low side */
    var low_cutoff_PSI = req.body.low_cutoff;
    var low_cutoff_MPA = req.body.low_cutoff / 145;
    low_cutoff_MPA = round(low_cutoff_MPA, 3);
    var low_cutin_PSI = req.body.low_cutin; 
    var low_cutin_MPA = req.body.low_cutin / 145;
    low_cutin_MPA = round(low_cutin_MPA, 3);

    /* 2. Extract submitted data for high side */
    var high_cutoff_PSI = req.body.high_cutoff;
    var high_cutoff_MPA = req.body.high_cutoff / 145;
    high_cutoff_MPA = round(high_cutoff_MPA, 3);
    var high_cutin_PSI = req.body.high_cutin; 
    var high_cutin_MPA = req.body.high_cutin / 145;
    high_cutin_MPA = round(high_cutin_MPA, 3);

    /* 3. Subtract cut-in pressure from cut-out pressure -> get LOW differential */
    var low_differential_PSI = low_cutoff_PSI - low_cutin_PSI;
    var low_differential_MPA = low_cutoff_MPA - low_cutin_MPA;
    low_differential_MPA = round(low_differential_MPA, 3);

    /* 4. Subtract cut-in pressure from cut-out pressure -> get HIGH differential */
    var high_differential_PSI = high_cutoff_PSI - high_cutin_PSI;
    var high_differential_MPA = high_cutoff_MPA - high_cutin_MPA;
    high_differential_MPA = round(high_differential_MPA, 3);

    console.log('Low Cut Off Pressure in MPA: ', low_cutoff_MPA);
    console.log('High Cut Off Pressure in MPA: ', high_cutoff_MPA);
    console.log('Low Differential Pressure in MPA: ', low_differential_MPA);
    console.log('High Differential Pressure in MPA: ', high_differential_MPA);
    
    /* 5. Do a query against database based on the parameters */
    DualPressureSwitch
    .where("LowMaxCutOffPressure").gte(low_cutoff_MPA)
    .where("LowMinCutOffPressure").lte(low_cutoff_MPA)
    .where("LowMaxDifferential").gte(low_differential_MPA)
    .where("LowMinDifferential").lte(low_differential_MPA)
    .where("HighMaxCutOffPressure").gte(high_cutoff_MPA)
    .where("HighMinCutOffPressure").lte(high_cutoff_MPA)
    .where("HighMaxDifferential").gte(high_differential_MPA)
    .where("HighMinDifferential").lte(high_differential_MPA)
    .sort('model')
    .exec(function(err, models) {
      if (err) {
        console.log(err);
      }
      /* Curate query data */
      var query_data = {
        low_cutin_MPA: low_cutin_MPA,
        low_cutin_PSI: low_cutin_PSI,
        low_cutoff_MPA: low_cutoff_MPA,
        low_cutoff_PSI: low_cutoff_PSI,
        low_differential_MPA: low_differential_MPA,
        low_differential_PSI: low_differential_PSI,
        high_cutin_MPA: high_cutin_MPA,
        high_cutin_PSI: high_cutin_PSI,
        high_cutoff_MPA: high_cutoff_MPA,
        high_cutoff_PSI: high_cutoff_PSI,
        high_differential_MPA: high_differential_MPA,
        high_differential_PSI: high_differential_PSI,
        models: models
      };
      /* Return search results */
      res.render('dual-pressure-switch/search-results', query_data);
    });
});

/*
==
== Module Enport
==
*/

module.exports = router;
