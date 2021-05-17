const mongoose = require('mongoose');


const validateAttrsId = (val) => {
	return val.length > 0;
}

const productCatSchema =  mongoose.Schema({
	name: {
		type: String,
		required: [true, "Product Category name required"],
		unique: true
	},
	code: {
		type: String,
		required: [true, "Product Category code required"],
		unique: true
	},
	description: {
		type: String 
	},
	attrsId: {
		type: [],
		required: [true, "Product Category attributes required"],
		validate: [validateAttrsId, "Attributes must be more than 0"]
	}
}, {
	timestamps: true
});


module.exports = mongoose.model('ProductCategory', productCatSchema);