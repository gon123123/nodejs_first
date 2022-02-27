const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f7_education_dev');
        console.log('connect db successfully !!');
    } catch (err) {
        console.log('connect failed!!');
    }
}

module.exports = { connect };