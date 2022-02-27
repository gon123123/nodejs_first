const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, max: 100 },
    description: { type: String, max: 300 },
    image: { type: String, max: 150 },
    slug: { type: String, max: 150 },
    videoId: { type: String, max: 150 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);