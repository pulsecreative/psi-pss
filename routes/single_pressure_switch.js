var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var SinglePressureSwitch = mongoose.model('SinglePressureSwitch');

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

/* GET Page for Single Pressure Switch Product Selection Software. */
router.get('/', function(req, res, next) {
  res.render('single_pressure_switch/search', {});
});

/* Process Submitted Query Form; Return search Results */
router.post('/results', function(req, res, next){
    /* 1. Extract submitted data */
    var cutoff_PSI = req.body.cutoff;
    var cutoff_MPA = req.body.cutoff / 145;
    cutoff_MPA = round(cutoff_MPA, 3);
    var cutin_PSI = req.body.cutin; 
    var cutin_MPA = req.body.cutin / 145;
    cutin_MPA = round(cutin_MPA, 3);

    /* 2. Subtract cut-in pressure from cut-out pressure -> get differential */
    var differential_PSI = cutoff_PSI - cutin_PSI;
    var differential_MPA = cutoff_MPA - cutin_MPA;
    differential_MPA = round(differential_MPA, 3);

    /* 3. Do a query against database based on the parameters */
    SinglePressureSwitch
    .where("MaxCutOffPressure").gte(cutoff_MPA)
    .where("MinCutOffPressure").lte(cutoff_MPA)
    .where("MaxDifferential").gte(differential_MPA)
    .where("MinDifferential").lte(differential_MPA)
    .sort('model')
    .exec(function(err, models) {
      console.log(models);
      if (err) {
        console.log(err);
      }
      /* Curate query data */
      var query_data = {
        cutin_MPA: cutin_MPA,
        cutin_PSI: cutin_PSI,
        cutoff_MPA: cutoff_MPA,
        cutoff_PSI: cutoff_PSI,
        differential_MPA: differential_MPA,
        differential_PSI: differential_PSI,
        models: models
      };
      /* Return search results */
      res.render('single_pressure_switch/search_results', query_data);
    });
});

/*
==
== Data Entry
==
*/

// GET page for single pressure switch data entry point
router.get('/data-entry', function(req, res, next){
  // GET all current models
  SinglePressureSwitch
  .find()
  .sort('model')
  .exec(function(err, models) {
    if (err) {
      console.log(err);
    }
    res.render('single_pressure_switch/data_entry', {models});
  });
});

// POST entered product data to the database.
router.post('/post-data-entry', function(req, res, next){
  var model = req.body.model;
  var MaxCutOffPressure = req.body.MaxCutOffPressure;
  var MinCutOffPressure = req.body.MinCutOffPressure;
  var MaxDifferential = req.body.MaxDifferential;
  var MinDifferential = req.body.MinDifferential;
  var Reset = req.body.Reset;
  var MaxPressure = req.body.MaxPressure;
  var profile_img = req.body.profile_img;
  var certifications = req.body.certifications.replace(/\s+/g, '').split(',');
  var url = req.body.profile_img;

  SinglePressureSwitch.create({
    model: model,
    MaxCutOffPressure: MaxCutOffPressure,
    MinCutOffPressure: MinCutOffPressure,
    MaxDifferential: MaxDifferential,
    MinDifferential: MinDifferential,
    Reset: Reset,
    MaxPressure: MaxPressure,
    profile_img: profile_img,
    certifications: certifications,
    url: url
  }, function (err, entry) {
    if (err) {
      console.log(err);
    }
    console.log(entry.model + ' saved successfully.');
    console.log(entry);

    res.redirect('data-entry');
  });
});

/*
==
== Module Enport
==
*/

module.exports = router;
