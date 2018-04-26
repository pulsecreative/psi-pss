var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var OilFlowSwitch = mongoose.model('OilFlowSwitch');

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

/* GET Page for Oil Flow Switch Product Selection Software. */
router.get('/', function(req, res, next) {
  res.render('oil-flow-switch/search', {});
});

/* Process Submitted Query Form; Return Search Results */
router.post('/results', function(req, res, next){
    /* 1. Extract submitted data */
    var cutoff = req.body.cutoff;
    var cutin = req.body.cutin; 

    /* 2. Do a query against database based on the parameters */
    OilFlowSwitch
    .where("DecreasingFlowMax").gte(cutoff)
    .where("DecreasingFlowMin").lte(cutoff)
    .where("IncreasingFlowMax").gte(cutin)
    .where("IncreasingFlowMin").lte(cutin)
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
        models: models
      };
      /* Return search results */
      res.render('oil-flow-switch/search-results', query_data);
    });
});

/*
==
== Module Enport
==
*/

module.exports = router;
