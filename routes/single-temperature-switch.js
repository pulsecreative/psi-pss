var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var SingleTemperatureSwitch = mongoose.model('SingleTemperatureSwitch');

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

/* GET Page for Single Temperature Switch Product Selection Software. */
router.get('/', function(req, res, next) {
  res.render('single-temperature-switch/search', {});
});

/* Process Submitted Query Form; Return Search Results */
router.post('/results', function(req, res, next){
    /* 1. Extract submitted data */
    var cutoff = req.body.cutoff;
    var cutin = req.body.cutin; 

    /* 2. get differential */
    var differential = cutoff - cutin;

    /* 3. Do a query against database based on the parameters */
    SingleTemperatureSwitch
    .where("TempAdjustRangeMax").gte(cutoff)
    .where("TempAdjustRangeMin").lte(cutoff)
    .where("TempDiffMax").gte(differential)
    .where("TempDiffMin").lte(differential)
    .sort('model')
    .exec(function(err, models) {
      if (err) {
        console.log(err);
      }
      /* Curate query data */
      console.log(models);
      
      var query_data = {
        cutin: cutin,
        cutoff: cutoff,
        differential: differential,
        models: models
      };
      /* Return search results */
      res.render('single-temperature-switch/search-results', query_data);
    });
});

/*
==
== Module Enport
==
*/

module.exports = router;
