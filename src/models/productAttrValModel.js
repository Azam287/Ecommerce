const mongoose = require('mongoose');

const ProductAttrValSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product attr name is required"]
    },
    code: {
        type: String,
        required: [true, "Product attr code is required"]
    },
    description: {
        type: String
    },
    productAttrId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductAttributes'
    }
},{
    timestamp: true
});

module.exports = mongoose.model("ProductAttrVal", ProductAttrValSchema)