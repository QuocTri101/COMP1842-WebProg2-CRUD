const e = require('express');
const mongoose = require('mongoose');

const Schmema = mongoose.Schema;

const VocabSchema = new Schmema(
    {
        english: {
            type: String,
            required: 'English word is required'
            },
        german: {
            type: String,
            required: 'German word is required'
        },
        japanese: {
            type: String,
            required: 'Japanese word is required'
        }
    },
    { collections: 'vocab' }
);
module.exports = mongoose.model('Vocab', VocabSchema);