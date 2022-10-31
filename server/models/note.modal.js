const mongoose = require('mongoose');

const Note = new mongoose.Schema({
    title: {
        type: String,
        required: false,
    },
    content: {
        type: String,
        required: false,
    },

});

module.exports = mongoose.model('Note', Note);