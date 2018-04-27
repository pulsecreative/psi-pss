var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var NSVSolenoidValve = mongoose.model('NSVSolenoidValve');

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

/* GET Page for NSV Series Solenoid Valve Product Selection Software. */
router.get('/', function(req, res, next) {
  res.render('nsv-solenoid-valve/search', {});
});

/* Process Submitted Query Form; Return Search Results */
router.post('/results', function(req, res, next){
    /* 1. Extract submitted data */
      var connection_size = req.body.connection_size;
      var connection_size_mm = connection_size * 254;

    /* 2. Do a query against database based on the parameters */
    NSVSolenoidValve
    .where("ConnectionMM").gte(connection_size_mm * 0.8)
    .where("ConnectionMM").lte(connection_size_mm * 1.2)
    .sort('model')
    .exec(function(err, models) {
      if (err) {
        console.log(err);
      }
      /* Curate query data */
      console.log(models);
      
      var query_data = {
        connection_size: connection_size,
        connection_size_mm: connection_size_mm,
        models: models
      };
      /* Return search results */
      res.render('nsv-solenoid-valve/search-results', query_data);
    });
});

/*
==
== Module Enport
==
*/

module.exports = router;
