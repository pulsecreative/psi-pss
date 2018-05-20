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
mongoose.model('DualTemperatureSwitch').remove({}, function (err) {
    if (err) {
        console.log(err);
    }
    console.log('DualTemperatureSwitch collection removed');

    DualTemperatureSwitch.create({
        Name: "THC60 Dual Temperature Switch",
        Model: "THC60",
        LowTempAdjustRangeMax: 15,
        LowTempAdjustRangeMin: -15,
        LowTempDiffMax: 15,
        LowTempDiffMin: 5,
        LowReset: "Auto",
        LowTempMax: 130,
        HighTempAdjustRangeMax: 60,
        HighTempAdjustRangeMin: 20,
        HighTempDiffMax: 8,
        HighTempDiffMin: 0,
        HighReset: "Auto",
        HighTempMax: 70,
        ProfileImage: "http://fsindustriesinc.com/wp-content/uploads/THC-1.jpg",
        Certifications: ["CE", "CQC"],
        URL: "http://fsindustriesinc.com/products/temperature-switches/thc60/"
    }, function(err, product){
        if (err) {
            console.log(err);
        }
        console.log(product.Name + ' saved successfully.');
    });
});
*/

// Product Schema for Dual Temperature Switches
var PressureDifferentialSwitchSchema = new Schema({
    Name: String,
    Model: String,
    DifferentialAdjustRangeMax: Number,
    DifferentialAdjustRangeMin: Number,
    SwitchDifferentialMax: Number,
    FactorySetting: Number,
    MaxPressure: Number,
    DelayTime: Number,
    ProfileImage: String,
    Certifications: [String],
    URL: String
});

var PressureDifferentialSwitch = mongoose.model(
    'PressureDifferentialSwitch', 
    PressureDifferentialSwitchSchema);
/*
    mongoose.model('PressureDifferentialSwitch').remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('PressureDifferentialSwitch collection removed');
    
        PressureDifferentialSwitch.create({
            Name: "FSD15C Pressure Differential Switch",
            Model: "FSD15C",
            DifferentialAdjustRangeMax: 0.15,
            DifferentialAdjustRangeMin: 0.05,
            SwitchDifferentialMax: 0.03,
            FactorySetting: 0.05,
            MaxPressure: 1.7,
            DelayTime: 0,
            ProfileImage: "http://fsindustriesinc.com/wp-content/uploads/FSD-1.jpg",
            Certifications: ["CE", "CQC"],
            URL: "http://fsindustriesinc.com/products/differential-pressure-switches/fsd15c/"
        }, function(err, product){
            if (err) {
                console.log(err);
            }
            console.log(product.Name + ' saved successfully.');
        });
    });
*/

// Product Schema for Dual Temperature Switches
var TemperatureDifferentialSwitchSchema = new Schema({
    Name: String,
    Model: String,
    DifferentialAdjustRangeMax: Number,
    DifferentialAdjustRangeMin: Number,
    SwitchDifferentialMax: Number,
    TempRangeMax: Number,
    TempRangeMin: Number,
    MaxTemp: Number,
    ProfileImage: String,
    Certifications: [String],
    URL: String
});

var TemperatureDifferentialSwitch = mongoose.model(
    'TemperatureDifferentialSwitch', 
    TemperatureDifferentialSwitchSchema);

/*
    mongoose.model('TemperatureDifferentialSwitch').remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('TemperatureDifferentialSwitch collection removed');
    
        TemperatureDifferentialSwitch.create({
            Name: "TDC40 Temperature Differential Switch",
            Model: "TDC40",
            DifferentialAdjustRangeMax: 15,
            DifferentialAdjustRangeMin: 0,
            SwitchDifferentialMax: 3,
            TempRangeMax: 40,
            TempRangeMin: -25,
            MaxTemp: 60,
            ProfileImage: "http://fsindustriesinc.com/wp-content/uploads/TDC-1.jpg",
            Certifications: ["CE"],
            URL: "http://fsindustriesinc.com/products/temperature-switches/tdc40/"
        }, function(err, product){
            if (err) {
                console.log(err);
            }
            console.log(product.Name + ' saved successfully.');
        });
    });
*/

// Product Schema for Oil Flow Switches
var OilFlowSwitchSchema = new Schema({
    Name: String,
    Model: String,
    IncreasingFlowMax: Number,
    IncreasingFlowMin: Number,
    DecreasingFlowMax: Number,
    DecreasingFlowMin: Number,
    ConnectionSize: String,
    Material: String,
    ProfileImage: String,
    Certifications: [String],
    URL: String
});

var OilFlowSwitch = mongoose.model(
    'OilFlowSwitch', 
    OilFlowSwitchSchema);

/*
    mongoose.model('OilFlowSwitch').remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('OilFlowSwitch collection removed');
    
        OilFlowSwitch.create({
            Name: "FSF10-ZG3/8 Oil Flpw Switch",
            Model: "FSF10-ZG3/8",
            IncreasingFlowMax: 2.9,
            IncreasingFlowMin: 2.4,
            DecreasingFlowMax: 2.6,
            DecreasingFlowMin: 2.1,
            ConnectionSize: "ZG3/8",
            Material: "Brass",
            ProfileImage: "http://fsindustriesinc.com/wp-content/uploads/FSF-Oil-1.jpg",
            Certifications: ["CE"],
            URL: "http://fsindustriesinc.com/products/flow-switches/fsf10-zg3-8/"
        }, function(err, product){
            if (err) {
                console.log(err);
            }
            console.log(product.Name + ' saved successfully.');
        });
    });
*/

// Product Schema for Pressure Controlled Water Valve
var PressureControlledWaterValveSchema = new Schema({
    Name: String,
    Model: String,
    CondenserPressureAdjustRangeMax: Number,
    CondenserPressureAdjustRangeMin: Number,
    CondenserWorkingPressureMax: Number,
    CondenserTestingPressureMax: Number,
    LiquidMedium: String,
    LiquidWorkingPressureMax: Number,
    LiquidMediumTempMax: Number,
    FactorySettingOpeningPressure: Number,
    Kv: Number,
    ProfileImage: String,
    Certifications: [String],
    URL: String
});

var PressureControlledWaterValve = mongoose.model(
    'PressureControlledWaterValve', 
    PressureControlledWaterValveSchema);

/*
    mongoose.model('PressureControlledWaterValve').remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('PressureControlledWaterValve collection removed');
    
        PressureControlledWaterValve.create({
            Name: "PWV3/8 Pressure Controlled ",
            Model: "PWV3/8",
            CondenserPressureAdjustRangeMax: 1.8,
            CondenserPressureAdjustRangeMin: 0.5,
            CondenserWorkingPressureMax: 2.0,
            CondenserTestingPressureMax: 2.4,
            LiquidMedium: "Fresh Water",
            LiquidWorkingPressureMax: 1,
            LiquidMediumTempMax: 60,
            FactorySettingOpeningPressure: 0.75,
            Kv: 0.8,
            ProfileImage: "http://fsindustriesinc.com/wp-content/uploads/PWV-1.jpg",
            Certifications: ["CE"],
            URL: "http://fsindustriesinc.com/products/pressure-controlled-water-valves/pwv3-8/"
        }, function(err, product){
            if (err) {
                console.log(err);
            }
            console.log(product.Name + ' saved successfully.');
        });
    });
*/

// Product Schema for Temperature Controlled Water Valve
var TemperatureControlledWaterValveSchema = new Schema({
    Name: String,
    Model: String,
    TempAdjustRangeMax: Number,
    TempAdjustRangeMin: Number,
    MaxTemp: Number,
    FactorySettingOpeningTemperature: Number,
    MaxMediumTemp: Number,
    MaxPress: Number,
    ProfileImage: String,
    Certifications: [String],
    URL: String
});

var TemperatureControlledWaterValve = mongoose.model(
    'TemperatureControlledWaterValve', 
    TemperatureControlledWaterValveSchema);

/*
    mongoose.model('TemperatureControlledWaterValve').remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('TemperatureControlledWaterValve collection removed');
    
        TemperatureControlledWaterValve.create({
            Name: "TWV30B-3/8 Temperature Controlled Watr Valve",
            Model: "TWV30B-3/8",
            TempAdjustRangeMax: 30,
            TempAdjustRangeMin: 0,
            MaxTemp: 50,
            FactorySettingOpeningTemperature: 10,
            MaxMediumTemp: 35,
            MaxPress: 1,
            ProfileImage: "http://fsindustriesinc.com/wp-content/uploads/TWV30B-1.jpg",
            Certifications: ["CE"],
            URL: "http://fsindustriesinc.com/products/temperature-controlled-water-valves/twv30b/"
        }, function(err, product){
            if (err) {
                console.log(err);
            }
            console.log(product.Name + ' saved successfully.');
        });
    });
*/

// Product Schema for SV Series Solenoid Valve
var SVSolenoidValveSchema = new Schema({
    Name: String,
    Model: String,
    ModelR410a: String,
    ConnectionForm: String,
    ConnectionMM: Number,
    ConnectionINCH: String,
    Kv: Number,
    OpeningDifferentialPressureMin: Number,
    OpeningDifferentialPressureMaxAC: Number,
    OpeningDifferentialPressureMaxDC: Number,
    Length: Number,
    Width: Number,
    Height: Number,
    ProfileImage: String,
    Certifications: [String],
    URL: String
});

var SVSolenoidValve = mongoose.model(
    'SVSolenoidValve', 
    SVSolenoidValveSchema);

/*
    mongoose.model('SVSolenoidValve').remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('SVSolenoidValve collection removed');
    
        SVSolenoidValve.create({
            Name: "SV6 Solenoid Valve",
            Model: "SV6",
            ModelR410a: "SV6-L",
            ConnectionForm: "Flare SAE",
            ConnectionMM: 8,
            ConnectionINCH: "5/16",
            Kv: 0.4,
            OpeningDifferentialPressureMin: 0.005,
            OpeningDifferentialPressureMaxAC: 2.1,
            OpeningDifferentialPressureMaxDC: 1.7,
            Length: 85,
            Width: 45,
            Height: 97,
            ProfileImage: "http://fsindustriesinc.com/wp-content/uploads/SV-1.jpg",
            Certifications: ["CE"],
            URL: "http://fsindustriesinc.com/products/solenoid-valves/sv6/"
        }, function(err, product){
            if (err) {
                console.log(err);
            }
            console.log(product.Name + ' saved successfully.');
        });
    });
*/

// Product Schema for SSV Series Solenoid Valve
var SSVSolenoidValveSchema = new Schema({
    Name: String,
    Model: String,
    ConnectionForm: String,
    ConnectionMM: Number,
    ConnectionINCH: String,
    Kv: Number,
    OpeningDifferentialPressureMin: Number,
    OpeningDifferentialPressureMaxAC: Number,
    OpeningDifferentialPressureMaxDC: Number,
    Length: Number,
    Width: Number,
    Height: Number,
    ProfileImage: String,
    Certifications: [String],
    URL: String
});

var SSVSolenoidValve = mongoose.model(
    'SSVSolenoidValve', 
    SSVSolenoidValveSchema);

/*
    mongoose.model('SSVSolenoidValve').remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('SSVSolenoidValve collection removed');
    
        SSVSolenoidValve.create({
            Name: "SSV6 Solenoid Valve",
            Model: "SSV6",
            ConnectionForm: "Flare SAE",
            ConnectionMM: 8,
            ConnectionINCH: "5/16",
            Kv: 0.4,
            OpeningDifferentialPressureMin: 0.01,
            OpeningDifferentialPressureMaxAC: 2.1,
            OpeningDifferentialPressureMaxDC: 1.7,
            Length: 85,
            Width: 45,
            Height: 97,
            ProfileImage: "http://fsindustriesinc.com/wp-content/uploads/SSV-1.jpg",
            Certifications: ["CE"],
            URL: "http://fsindustriesinc.com/products/solenoid-valves/ssv6/"
        }, function(err, product){
            if (err) {
                console.log(err);
            }
            console.log(product.Name + ' saved successfully.');
        });
    });
*/

// Product Schema for SV-G Series Water Solenoid Valve
var SVGSolenoidValveSchema = new Schema({
    Name: String,
    Model: String,
    ConnectionForm: String,
    ConnectionMM: String,
    Kv: Number,
    OpeningDifferentialPressureMin: Number,
    OpeningDifferentialPressureMaxAC: Number,
    OpeningDifferentialPressureMaxDC: Number,
    Length: Number,
    Width: Number,
    Height: Number,
    ProfileImage: String,
    Certifications: [String],
    URL: String
});

var SVGSolenoidValve = mongoose.model(
    'SVGSolenoidValve', 
    SVGSolenoidValveSchema);

/*
    mongoose.model('SVGSolenoidValve').remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('SVGSolenoidValve collection removed');
    
        SVGSolenoidValve.create({
            Name: "SV1/4G Solenoid Valve",
            Model: "SV1/4G",
            ConnectionForm: "Internal Thread",
            ConnectionMM: "G1/4",
            Kv: 1,
            OpeningDifferentialPressureMin: 0.0005,
            OpeningDifferentialPressureMaxAC: 2.1,
            OpeningDifferentialPressureMaxDC: 1.7,
            Length: 71,
            Width: 45,
            Height: 100,
            ProfileImage: "http://fsindustriesinc.com/wp-content/uploads/SV-G-1.jpg",
            Certifications: ["CE"],
            URL: "http://fsindustriesinc.com/products/solenoid-valves/sv1-4g/"
        }, function(err, product){
            if (err) {
                console.log(err);
            }
            console.log(product.Name + ' saved successfully.');
        });
    });
*/

// Product Schema for NSV Series Solenoid Valve
var NSVSolenoidValveSchema = new Schema({
    Name: String,
    Model: String,
    ConnectionForm: String,
    ConnectionMM: String,
    Kv: Number,
    OpeningDifferentialPressureMin: Number,
    OpeningDifferentialPressureMaxAC: Number,
    OpeningDifferentialPressureMaxDC: Number,
    ProfileImage: String,
    Certifications: [String],
    URL: String
});

var NSVSolenoidValve = mongoose.model(
    'NSVSolenoidValve', 
    NSVSolenoidValveSchema);

/*
    mongoose.model('NSVSolenoidValve').remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('NSVSolenoidValve collection removed');
    
        NSVSolenoidValve.create({
            Name: "NSV6A Solenoid Valve",
            Model: "NSV6A",
            ConnectionForm: "SAE",
            ConnectionMM: "3/8",
            Kv: 0.69,
            OpeningDifferentialPressureMin: 0,
            OpeningDifferentialPressureMaxAC: 2.45,
            OpeningDifferentialPressureMaxDC: 1.96,
            ProfileImage: "",
            Certifications: ["CE"],
            URL: ""
        }, function(err, product){
            if (err) {
                console.log(err);
            }
            console.log(product.Name + ' saved successfully.');
        });
    });
*/

// Product Schema for SV Series Solenoid Valve
var ASVSolenoidValveSchema = new Schema({
    Name: String,
    Model: String,
    Kv: Number,
    MaxWorkingPressure: Number,
    OpeningDifferentialPressureAC: Number,
    OpeningDifferentialPressureDC: Number,
    ProfileImage: String,
    Certifications: [String],
    URL: String
});

var ASVSolenoidValve = mongoose.model(
    'ASVSolenoidValve', 
    ASVSolenoidValveSchema);

/*
    mongoose.model('ASVSolenoidValve').remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('ASVSolenoidValve collection removed');
    
        ASVSolenoidValve.create({
            Name: "ASV3 Solenoid Valve",
            Model: "ASV3",
            Kv: 0.23,
            MaxWorkingPressure: 4.2,
            OpeningDifferentialPressureAC: 0,
            OpeningDifferentialPressureDC: 2.1,
            ProfileImage: "http://fsindustriesinc.com/wp-content/uploads/ASV-1.jpg",
            Certifications: ["CE"],
            URL: "http://fsindustriesinc.com/products/solenoid-valves/asv3/"
        }, function(err, product){
            if (err) {
                console.log(err);
            }
            console.log(product.Name + ' saved successfully.');
        });
    });
*/

// Product Schema for K-ASTV Series Expansion Valve
var KASTVExpansionValveSchema = new Schema({
    Name: String,
    Model: String,
    Refrigerant: String,
    NominalCapacityKW: Number,
    NominalCapacityTon: Number,
    InletINCH: String,
    InletMM: Number,
    OutletINCH: String,
    OutletMM: Number,
    CapillaryLength: Number,
    ProfileImage: String,
    Certifications: [String],
    URL: String
});

var KASTVExpansionValve = mongoose.model(
    'KASTVExpansionValve', 
    KASTVExpansionValveSchema);

/*
    mongoose.model('KASTVExpansionValve').remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('KASTVExpansionValve collection removed');
    
        KASTVExpansionValve.create({
            Name: "ASTVE1.5N Expansion Valve",
            Model: "ASTVE1.5N",
            Refrigerant: "R134a",
            NominalCapacityKW: 6.5,
            NominalCapacityTon: 1.5,
            InletINCH: "3/8",
            InletMM: 10,
            OutletINCH: "1/2",
            OutletMM: 12,
            CapillaryLength: 1.5,
            ProfileImage: "http://fsindustriesinc.com/wp-content/uploads/ASTV-1.jpg",
            Certifications: ["CE"],
            URL: "http://fsindustriesinc.com/products/expansion-valves/astve1-5n/"
        }, function(err, product){
            if (err) {
                console.log(err);
            }
            console.log(product.Name + ' saved successfully.');
        });
    });
*/

// Product Schema for K-BWTV Series Expansion Valve
var KBWTVExpansionValveSchema = new Schema({
    Name: String,
    Model: String,
    Refrigerant: String,
    NominalCapacityKW: Number,
    NominalCapacityTon: Number,
    InletINCH: String,
    InletMM: Number,
    OutletINCH: String,
    OutletMM: Number,
    CapillaryLength: Number,
    ProfileImage: String,
    Certifications: [String],
    URL: String
});

var KBWTVExpansionValve = mongoose.model(
    'KBWTVExpansionValve', 
    KBWTVExpansionValveSchema);

/*
    mongoose.model('KBWTVExpansionValve').remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('KBWTVExpansionValve collection removed');
    
        KBWTVExpansionValve.create({
            Name: "BWTVE1.5N Expansion Valve",
            Model: "BWTVE1.5N",
            Refrigerant: "R134a",
            NominalCapacityKW: 6.5,
            NominalCapacityTon: 1.5,
            InletINCH: "3/8",
            InletMM: 10,
            OutletINCH: "1/2",
            OutletMM: 12,
            CapillaryLength: 1.5,
            ProfileImage: "http://fsindustriesinc.com/wp-content/uploads/BWTV-1.jpg",
            Certifications: ["CE"],
            URL: "http://fsindustriesinc.com/products/expansion-valves/bwtve1-5n/"
        }, function(err, product){
            if (err) {
                console.log(err);
            }
            console.log(product.Name + ' saved successfully.');
        });
    });
*/

// Product Schema for K-BWTV Series Expansion Valve
var ETVExpansionValveSchema = new Schema({
    Name: String,
    Model: String,
    Refrigerant: String,
    NominalCapacityKW: Number,
    NominalCapacityTon: Number,
    InletINCH: String,
    InletMM: Number,
    OutletINCH: String,
    OutletMM: Number,
    CapillaryLength: Number,
    ProfileImage: String,
    Certifications: [String],
    URL: String
});

var ETVExpansionValve = mongoose.model(
    'ETVExpansionValve', 
    ETVExpansionValveSchema);

/*
    mongoose.model('ETVExpansionValve').remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('ETVExpansionValve collection removed');
    
        ETVExpansionValve.create({
            Name: "ETV11N Expansion Valve",
            Model: "ETV11N",
            Refrigerant: "R134a",
            NominalCapacityKW: 39,
            NominalCapacityTon: 11,
            InletINCH: "5/8",
            InletMM: 16,
            OutletINCH: "7/8",
            OutletMM: 22,
            CapillaryLength: 1.5,
            ProfileImage: "http://fsindustriesinc.com/wp-content/uploads/ETV-1.jpg",
            Certifications: ["CE"],
            URL: "http://fsindustriesinc.com/products/expansion-valves/etv11n/"
        }, function(err, product){
            if (err) {
                console.log(err);
            }
            console.log(product.Name + ' saved successfully.');
        });
    });
*/

// Product Schema for SS Series Bi-Flow Expansion Valve
var SSTVExpansionValveSchema = new Schema({
    Name: String,
    Model: String,
    Refrigerant: String,
    NominalCapacityKW: Number,
    NominalCapacityTon: Number,
    InletINCH: String,
    InletMM: Number,
    OutletINCH: String,
    OutletMM: Number,
    CapillaryLength: Number,
    ProfileImage: String,
    Certifications: [String],
    URL: String
});

var SSTVExpansionValve = mongoose.model(
    'SSTVExpansionValve', 
    SSTVExpansionValveSchema);

/*
mongoose.model('SSTVExpansionValve').remove({}, function (err) {
    if (err) {
        console.log(err);
    }
    console.log('SSTVExpansionValve collection removed');

    SSTVExpansionValve.create({
        Name: "SSATVE1.5N Expansion Valve",
        Model: "SSATVE1.5N",
        Refrigerant: "R134a",
        NominalCapacityKW: 5.3,
        NominalCapacityTon: 1.5,
        InletINCH: "3/8",
        InletMM: 10,
        OutletINCH: "1/2",
        OutletMM: 12,
        CapillaryLength: 1.5,
        ProfileImage: "http://fsindustriesinc.com/wp-content/uploads/SSATV-1.jpg",
        Certifications: ["CE"],
        URL: "fsindustriesinc.com/products/expansion-valves/ssatve1-5n/"
    }, function(err, product){
        if (err) {
            console.log(err);
        }
        console.log(product.Name + ' saved successfully.');
    });
});
*/