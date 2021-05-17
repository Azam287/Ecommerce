const mongoose = require('mongoose');

const unitSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Unit name is required"]
    }
})

module.exports = mongoose.model('Units', unitSchema)
