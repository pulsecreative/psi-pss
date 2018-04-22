// require Mongoose and define db connection URI
var mongoose = require('mongoose');
var dbURI = 'mongodb://fsiadmin:fsindustries@ds033163.mlab.com:33163/fsiproductselectionsoftware';

// BRING IN SCHEMAS & models
require('./models/products');

// connect to MongoDB database
mongoose.connect(dbURI);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});