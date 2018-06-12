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