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

/* GET Page for Single Pressure Switch Product Selection Software. */
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
    var differential_PSI = cutoff_PSI - cutin_PSI;
    var differential_MPA = cutoff_MPA - cutin_MPA;
    differential_MPA = round(differential_MPA, 3);

    /* 4. Subtract cut-in pressure from cut-out pressure -> get HIGH differential */
    var high_differential_PSI = high_cutoff_PSI - high_cutin_PSI;
    var high_differential_MPA = high_cutoff_MPA - high_cutin_MPA;
    high_differential_MPA = round(high_differential_MPA, 3);

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
== Data Entry
==
*/

// GET page for single pressure switch data entry point
// the data entry page includes a list of existing products
router.get('/data-entry', function(req, res, next){
  // GET all current models
  DualPressureSwitch
  .find()
  .sort('model')
  .exec(function(err, models) {
    if (err) {
      console.log(err);
    }
    res.render('dual-pressure-switch/data-entry', {models});
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

    res.redirect('data-entry');
  });
});

/* 
==
== Data Maintenance
==
*/

// GET page for checking individual product data.
router.get('/:id', function (req, res, next) {

  SinglePressureSwitch.findById(
    req.params.id, 
    function (err, product) {
    if (err) {
      console.log(err);
    }
    
    product.certifications = product.certifications.join(', ');
    
    res.render('single-pressure-switch/data-maintenance', {product: product});
  });
})

// PUT request for individual product date maintenance.
router.post('/data-maintenance', function(req, res){
  req.body.certifications = req.body.certifications.replace(/\s+/g, '').split(',');

  SinglePressureSwitch.
  findByIdAndUpdate(
    req.body.id,
    req.body,
    {new: true},
    function (err, updatedProduct) {
      if (err) {
        console.log(err);
      }
      
      var url = updatedProduct._id.toString();
      
      res.redirect(url);
  });
});

router.post('/delete', function (req, res) {
  SinglePressureSwitch
  .findByIdAndRemove(
    req.body.id,
    function (err, product) {
      if (err) {
        console.log(err);
      }
      console.log('Delete Successful');
      
      res.redirect('data-entry');
    }
  );
})

/*
==
== Module Enport
==
*/

module.exports = router;
