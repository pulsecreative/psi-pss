var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var HotGasBypass = mongoose.model('HotGasBypass');

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

/* GET Page for KASTV Expansion Valve Product Selection Software. */
router.get('/', function(req, res, next) {
  res.render('hot-gas-bypass/search', {});
});

/* Process Submitted Query Form; Return Search Results */
router.post('/results', function(req, res, next){
    /* 1. Extract submitted data */
      var nominal_capacity = req.body.nominal_capacity;
      var nominal_capacity_ton = round(nominal_capacity / 3.5, 3);

    /* 2. Do a query against database based on the parameters */
    HotGasBypass
    .where("NominalCapacityKW").gte(nominal_capacity * 0.8)
    .where("NominalCapacityKW").lte(nominal_capacity * 1.2)
    .sort('model')
    .exec(function(err, models) {
      if (err) {
        console.log(err);
      }
      /* Curate query data */
      console.log(models);
      
      var query_data = {
        nominal_capacity: nominal_capacity,
        nominal_capacity_ton: nominal_capacity_ton,
        models: models
      };
      /* Return search results */
      res.render('hot-gas-bypass/search-results', query_data);
    });
});

/*
==
== Module Enport
==
*/

module.exports = router;
