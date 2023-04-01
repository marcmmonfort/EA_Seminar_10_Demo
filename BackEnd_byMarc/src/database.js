const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect('mongodb://127.0.0.1:27017/flutterDemoByMarc', { // Cambio aquí respecto al tutorial.
        useNewUrlParser: true
    });
    console.log('Database Connected!')
};

module.exports = { connect };