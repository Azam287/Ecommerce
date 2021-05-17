const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    productCatId: {
        type: mongoose.Schema.Types.ObjectId,
		ref: 'ProductCategory',
		required: [true, "Product Category must be mentioned"]
    },
    name: {
        type: String,
        required: [true, "Product name is mandatory field"]
    },
    description: {
        type: String
    },
    unit: {
        type: String,
        required: [true, "Product unit is mandatory field"]
    },
    purchasePrice: {
        type: mongoose.Types.Decimal128,
        required: [true, "Product Purchase price is mandatory field"]
    },
    sellingPrice: {
        type: mongoose.Types.Decimal128,
        required: [true, "Product Selling price is mandatory field"]
    },
    discount: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    qty: {
        type: Number,
        required: [true, "Product quantity must be mentioned"]
    },
    sku: {
        type: String,
        required: [true, "Product SKU is mandatory field"],
        unique: true
    },
    attributeIds: [{
        type: mongoose.Types.ObjectId,
        ref: "ProductAttributes",
        required: [true, "Product attributes must be atleast 1"],
    }],
    attributeValIds: [{
        type: mongoose.Types.ObjectId,
        ref: "ProductAttributesValue",
        required: [true, "Product attributes must be atleast 1"],
    }],
    attributeConfig:{
        type: {},
        required: [true, "Product attributes must be atleast 1"],
    }

},{
    timestamp: true
});

module.exports = mongoose.model('ProductModel', ProductSchema);