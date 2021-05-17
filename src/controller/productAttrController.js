const { ProductAttributes } = require('../models'); 

const ProductAttrController = {
	async index (req, res) {
		const productAttrs = await ProductAttributes.find();
		console.log(productAttrs)
		res.send(productAttrs);
	},
	async save (req, res, next) {
		try{
			const {
				name,
				description
			} = req.body

			const prodAttr = {
				name,
				description
			};

			const result = await ProductAttributes.create(prodAttr);
			
			res.send(result)
		}catch(err) {
			next(err)
		}
	}
}

module.exports =  ProductAttrController;