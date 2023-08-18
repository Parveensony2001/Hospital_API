const mongoose = require('mongoose');

const reporterSchema = new mongoose.Schema({
    Doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    Patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Negative', 'Positive', 'Travel-Quarantine', 'Disease Symptom', 'Stage']
    }
}, {
    timestamps: true
});

const report = mongoose.model('report', reporterSchema);

module.exports = report;