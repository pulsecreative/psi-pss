// require mongoose and its Schema constructor
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create Product Schema
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

/*

mongoose.model('SinglePressureSwitch').remove({}, function (err) {
    if (err) {
        console.log(err);
    }
    console.log('product collection removed');

    var P2E = new SinglePressureSwitch({
        model: "P2E Single Low Pressure Switch",
        MaxCutOffPressure: 0.2,
        MinCutOffPressure: 0,
        MaxDifferential: 0.1,
        MinDifferential: 0.04,
        Reset: 'Auto',
        MaxPressure: 1.7,
        profile_img: 'http://fs.industries/img/products_img/commercial_products/pressure_switch/P_PC/1.jpg',
        certifications: ['UL', 'CE', 'CQC', 'ROHS'],
        url: 'http://fs.industries/product/p_pc'
    });

    P2E.save((err, product) => {
        if (err) {
            console.log(err);
        }
        console.log(product.model + ' saved successfully.');
    });

    var P3E = new SinglePressureSwitch({
        model: "P3E Single Low Pressure Switch",
        MaxCutOffPressure: 0.3,
        MinCutOffPressure: -0.05,
        MaxDifferential: 0.2,
        MinDifferential: 0.05,
        Reset: 'Auto',
        MaxPressure: 1.7,
        profile_img: 'http://fs.industries/img/products_img/commercial_products/pressure_switch/P_PC/1.jpg',
        certifications: ['UL', 'CE', 'CQC', 'ROHS'],
        url: 'http://fs.industries/product/p_pc'
    });

    P3E.save((err, product) => {
        if (err) {
            console.log(err);
        }
        console.log(product.model + ' saved successfully.');
    });

    var P6ME = new SinglePressureSwitch({
        model: "P6ME Single Low Pressure Switch",
        MaxCutOffPressure: 0.6,
        MinCutOffPressure: -0.05,
        MaxDifferential: 0.2,
        MinDifferential: 0.2,
        Reset: 'Manual',
        MaxPressure: 1.7,
        profile_img: 'http://fs.industries/img/products_img/commercial_products/pressure_switch/P_PC/1.jpg',
        certifications: ['UL', 'CE', 'CQC', 'ROHS'],
        url: 'http://fs.industries/product/p_pc'
    });

    P6ME.save((err, product) => {
        if (err) {
            console.log(err);
        }
        console.log(product.model + ' saved successfully.');
    });

    var P6E = new SinglePressureSwitch({
        model: "P6E Single Low Pressure Switch",
        MaxCutOffPressure: 0.6,
        MinCutOffPressure: -0.05,
        MaxDifferential: 0.4,
        MinDifferential: 0.1,
        Reset: 'Auto',
        MaxPressure: 1.7,
        profile_img: 'http://fs.industries/img/products_img/commercial_products/pressure_switch/P_PC/1.jpg',
        certifications: ['UL', 'CE', 'CQC', 'ROHS'],
        url: 'http://fs.industries/product/p_pc'
    });

    P6E.save((err, product) => {
        if (err) {
            console.log(err);
        }
        console.log(product.model + ' saved successfully.');
    });

    var P10E = new SinglePressureSwitch({
        model: "P10E Single Low Pressure Switch",
        MaxCutOffPressure: 1.6,
        MinCutOffPressure: 0.1,
        MaxDifferential: 0.3,
        MinDifferential: 0.1,
        Reset: 'Auto',
        MaxPressure: 1.7,
        profile_img: 'http://fs.industries/img/products_img/commercial_products/pressure_switch/P_PC/1.jpg',
        certifications: ['UL', 'CE', 'CQC', 'ROHS'],
        url: 'http://fs.industries/product/p_pc'
    });

    P10E.save((err, product) => {
        if (err) {
            console.log(err);
        }
        console.log(product.model + ' saved successfully.');
    });

    var P760E = new SinglePressureSwitch({
        model: "P760E Single Low Pressure Switch",
        MaxCutOffPressure: -0.1,
        MinCutOffPressure: 0,
        MaxDifferential: null,
        MinDifferential: null,
        Reset: 'Auto',
        MaxPressure: 1.7,
        profile_img: 'http://fs.industries/img/products_img/commercial_products/pressure_switch/P_PC/1.jpg',
        certifications: ['UL', 'CE', 'CQC', 'ROHS'],
        url: 'http://fs.industries/product/p_pc'
    });

    P760E.save((err, product) => {
        if (err) {
            console.log(err);
        }
        console.log(product.model + ' saved successfully.');
    });

    var P12DE = new SinglePressureSwitch({
        model: "P12DE Single High Pressure Switch",
        MaxCutOffPressure: 1.2,
        MinCutOffPressure: 0.2,
        MaxDifferential: 0.4,
        MinDifferential: 0.1,
        Reset: 'Auto',
        MaxPressure: 3.3,
        profile_img: 'http://fs.industries/img/products_img/commercial_products/pressure_switch/P_PC/1.jpg',
        certifications: ['UL', 'CE', 'CQC', 'ROHS'],
        url: 'http://fs.industries/product/p_pc'
    });

    P12DE.save((err, product) => {
        if (err) {
            console.log(err);
        }
        console.log(product.model + ' saved successfully.');
    });

    var P16DE = new SinglePressureSwitch({
        model: "P16DE Single High Pressure Switch",
        MaxCutOffPressure: 1.7,
        MinCutOffPressure: 0.3,
        MaxDifferential: 0.5,
        MinDifferential: 0.2,
        Reset: 'Auto',
        MaxPressure: 3.3,
        profile_img: 'http://fs.industries/img/products_img/commercial_products/pressure_switch/P_PC/1.jpg',
        certifications: ['UL', 'CE', 'CQC', 'ROHS'],
        url: 'http://fs.industries/product/p_pc'
    });

    P16DE.save((err, product) => {
        if (err) {
            console.log(err);
        }
        console.log(product.model + ' saved successfully.');
    });

    var P20DE = new SinglePressureSwitch({
        model: "P20DE Single High Pressure Switch",
        MaxCutOffPressure: 2.0,
        MinCutOffPressure: 0.4,
        MaxDifferential: 0.5,
        MinDifferential: 0.2,
        Reset: 'Auto',
        MaxPressure: 3.3,
        profile_img: 'http://fs.industries/img/products_img/commercial_products/pressure_switch/P_PC/1.jpg',
        certifications: ['UL', 'CE', 'CQC', 'ROHS'],
        url: 'http://fs.industries/product/p_pc'
    });

    P20DE.save((err, product) => {
        if (err) {
            console.log(err);
        }
        console.log(product.model + ' saved successfully.');
    });

    var P30DE = new SinglePressureSwitch({
        model: "P30DE Single High Pressure Switch",
        MaxCutOffPressure: 3.0,
        MinCutOffPressure: 0.5,
        MaxDifferential: 1.0,
        MinDifferential: 0.5,
        Reset: 'Auto',
        MaxPressure: 3.3,
        profile_img: 'http://fs.industries/img/products_img/commercial_products/pressure_switch/P_PC/1.jpg',
        certifications: ['UL', 'CE', 'CQC', 'ROHS'],
        url: 'http://fs.industries/product/p_pc'
    });

    P30DE.save((err, product) => {
        if (err) {
            console.log(err);
        }
        console.log(product.model + ' saved successfully.');
    });

    var P30E = new SinglePressureSwitch({
        model: "P30E Single High Pressure Switch",
        MaxCutOffPressure: 3.0,
        MinCutOffPressure: 1.0,
        MaxDifferential: 0.4,
        MinDifferential: 0.4,
        Reset: 'Auto',
        MaxPressure: 3.3,
        profile_img: 'http://fs.industries/img/products_img/commercial_products/pressure_switch/P_PC/1.jpg',
        certifications: ['UL', 'CE', 'CQC', 'ROHS'],
        url: 'http://fs.industries/product/p_pc'
    });

    P30E.save((err, product) => {
        if (err) {
            console.log(err);
        }
        console.log(product.model + ' saved successfully.');
    });

    var P30ME = new SinglePressureSwitch({
        model: "P30ME Single High Pressure Switch",
        MaxCutOffPressure: 3.0,
        MinCutOffPressure: 1.0,
        MaxDifferential: 0.4,
        MinDifferential: 0.4,
        Reset: 'Manual',
        MaxPressure: 3.3,
        profile_img: 'http://fs.industries/img/products_img/commercial_products/pressure_switch/P_PC/1.jpg',
        certifications: ['UL', 'CE', 'CQC', 'ROHS'],
        url: 'http://fs.industries/product/p_pc'
    });

    P30ME.save((err, product) => {
        if (err) {
            console.log(err);
        }
        console.log(product.model + ' saved successfully.');
    });

    var P45LE = new SinglePressureSwitch({
        model: "P45LE Single High Pressure Switch",
        MaxCutOffPressure: 4.5,
        MinCutOffPressure: 1.0,
        MaxDifferential: 0.6,
        MinDifferential: 0.6,
        Reset: 'Auto',
        MaxPressure: 4.8,
        profile_img: 'http://fs.industries/img/products_img/commercial_products/pressure_switch/P_PC/1.jpg',
        certifications: ['UL', 'CE', 'CQC', 'ROHS'],
        url: 'http://fs.industries/product/p_pc'
    });

    P45LE.save((err, product) => {
        if (err) {
            console.log(err);
        }
        console.log(product.model + ' saved successfully.');
    });

    var P45DLE = new SinglePressureSwitch({
        model: "P45DLE Single High Pressure Switch",
        MaxCutOffPressure: 4.5,
        MinCutOffPressure: 1.0,
        MaxDifferential: 1.5,
        MinDifferential: 0.5,
        Reset: 'Auto',
        MaxPressure: 4.8,
        profile_img: 'http://fs.industries/img/products_img/commercial_products/pressure_switch/P_PC/1.jpg',
        certifications: ['UL', 'CE', 'CQC', 'ROHS'],
        url: 'http://fs.industries/product/p_pc'
    });

    P45DLE.save((err, product) => {
        if (err) {
            console.log(err);
        }
        console.log(product.model + ' saved successfully.');
    });
});

*/