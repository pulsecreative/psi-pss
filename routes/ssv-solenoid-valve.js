var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var SSVSolenoidValve = mongoose.model('SSVSolenoidValve');

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

/* GET Page for SSV Series Solenoid Valve Product Selection Software. */
router.get('/', function(req, res, next) {
  res.render('ssv-solenoid-valve/search', {});
});

/* Process Submitted Query Form; Return Search Results */
router.post('/results', function(req, res, next){
    /* 1. Extract submitted data */
      var Kv = req.body.Kv;

    /* 2. Do a query against database based on the parameters */
    SSVSolenoidValve
    .where("Kv").gte(Kv * 0.8)
    .where("Kv").lte(Kv * 1.2)
    .sort('model')
    .exec(function(err, models) {
      if (err) {
        console.log(err);
      }
      /* Curate query data */
      console.log(models);
      
      var query_data = {
        Kv: Kv,
        models: models
      };
      /* Return search results */
      res.render('ssv-solenoid-valve/search-results', query_data);
    });
});

/*
==
== Module Enport
==
*/

module.exports = router;
