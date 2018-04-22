// require mongoose and its Schema constructor
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Product Schema for Single Pressure Switches
var singlePressureSwitchSchema = new Schema({
    model: String,
    MaxCutOffPressure: Number,
    MinCutOffPressure: Number,
    MaxDifferential: Number,
    MinDifferential: Number,
    Reset: String,
    MaxPressure: Number,
    profile_img: String,
    certifications: [String],
    url: String
});

var SinglePressureSwitch = mongoose.model(
    'SinglePressureSwitch', 
    singlePressureSwitchSchema);

// Product Schema for Dual Pressure Switches
var DualPressureSwitchSchema = new Schema({
    name: String,
    model: String,
    LowMaxCutOffPressure: Number,
    LowMinCutOffPressure: Number,
    LowMaxDifferential: Number,
    LowMinDifferential: Number,
    LowReset: String,
    LowMaxPressure: Number,
    HighMaxCutOffPressure: Number,
    HighMinCutOffPressure: Number,
    HighMaxDifferential: Number,
    HighMinDifferential: Number,
    HighReset: String,
    HighMaxPressure: Number,
    profile_img: String,
    certifications: [String],
    url: String
});

var DualPressureSwitch = mongoose.model(
    'DualPressureSwitch', 
    DualPressureSwitchSchema);

/*
mongoose.model('DualPressureSwitch').remove({}, function (err) {
    if (err) {
        console.log(err);
    }
    console.log('product collection removed');

    var P830E = new DualPressureSwitch({
        name: "P830E Dual Pressure Switch",
        model: "P830E",
        LowMaxCutOffPressure: 0.6,
        LowMinCutOffPressure: -0.05,
        LowMaxDifferential: 0.4,
        LowMinDifferential: 0.1,
        LowReset: "Auto",
        LowMaxPressure: 1.7,
        HighMaxCutOffPressure: 3.0,
        HighMinCutOffPressure: 1.0,
        HighMaxDifferential: 0.6,
        HighMinDifferential: 0.6,
        HighReset: 'Auto',
        HighMaxPressure: 3.5,
        profile_img: '',
        certifications: ['CE', 'CQC', 'ROHS'],
        url: ''
    });

    P830E.save((err, product) => {
        if (err) {
            console.log(err);
        }
        console.log(product.name + ' saved successfully.');
    });
});
*/

