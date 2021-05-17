const { ProductCategory }   = require('../models');
const { ProductCategoryService } = require('../services');

const ProductCategoryController = {
	async index(req, res){
		const ProductCategories = await ProductCategory.find();
		res.send(ProductCategories)
	},
	async save (req, res, next) {
		try {
			const { body } = req;
			console.log(body)
			const { attrsId, name } = body || {};
			let prodAttrsCount =  await ProductCategoryService.getProdCatCount();
			let firstTwoLetter = name.substring(0,2);
			let code = `${firstTwoLetter}${prodAttrsCount+1}`
			const data ={ name, code, attrsId}
			const result = await ProductCategory.create(data) 
			return res.send(result)
		}catch(err) {
			// throw new Error(err);
			next(err)
		}
	}
}

module.exports = ProductCategoryController;