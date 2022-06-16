const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String },
    description: { type: String },
    img: { type: String},
    slug: { type: String },
    youtubeId: {type: String}
},{ collection: 'courses' });

module.exports = mongoose.model('Course', Course);