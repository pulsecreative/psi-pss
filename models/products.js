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

var SinglePressureSwitch = mongoose.model('SinglePressureSwitch', singlePressureSwitchSchema);

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

// Product Schema for Single Temperature Switches
var SingleTemperatureSwitchSchema = new Schema({
    Name: String,
    Model: String,
    TempAdjustRangeMax: Number,
    TempAdjustRangeMin: Number,
    TempDiffMax: Number,
    TempDiffMin: Number,
    Reset: String,
    TempMax: Number,
    ProfileImage: String,
    BulbLength: Number,
    BulbDiameter: Number,
    Certifications: [String],
    URL: String
});

var SingleTemperatureSwitch = mongoose.model(
    'SingleTemperatureSwitch', 
    SingleTemperatureSwitchSchema);

// Product Schema for Dual Temperature Switches
var DualTemperatureSwitchSchema = new Schema({
    Name: String,
    Model: String,
    LowTempAdjustRangeMax: Number,
    LowTempAdjustRangeMin: Number,
    LowTempDiffMax: Number,
    LowTempDiffMin: Number,
    LowReset: String,
    LowTempMax: Number,
    HighTempAdjustRangeMax: Number,
    HighTempAdjustRangeMin: Number,
    HighTempDiffMax: Number,
    HighTempDiffMin: Number,
    HighReset: String,
    HighTempMax: Number,
    ProfileImage: String,
    Certifications: [String],
    URL: String
});

var DualTemperatureSwitch = mongoose.model(
    'DualTemperatureSwitch', 
    DualTemperatureSwitchSchema);

/*
mongoose.model('SingleTemperatureSwitch').remove({}, function (err) {
    if (err) {
        console.log(err);
    }
    console.log('product collection removed');

    var TC5E = new SingleTemperatureSwitch({
        Name: 'TC5E Single Temperature Switch',
        Model: 'TC5E',
        TempAdjustRangeMax: -5,
        TempAdjustRangeMin: -40,
        TempDiffMax: 10,
        TempDiffMin: 2,
        Reset: 'Auto',
        TempMax: 45,
        ProfileImage: '',
        BulbLength: 82,
        BulbDiameter: 6,
        Certifications: ['CE', 'CQC', 'RoHS'],
        URL: ''
    });

    TC5E.save((err, product) => {
        if (err) {
            console.log(err);
        }
        console.log(product.Name + ' saved successfully.');
    });
});
*/


