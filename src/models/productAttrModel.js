const mongoose = require('mongoose');

const productAttrSchema = mongoose.Schema({
    name: {
        type: String,
		required: [true, "Product Attributes name required"],
		unique: true
    },
    description: {
        type: String
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('ProductAttributes', productAttrSchema);