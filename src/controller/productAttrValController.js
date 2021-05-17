const { ProductAttributesValue } = require('../models')
const helper = require('../helper');
const { ProductAttributeValueService } = require('../services');
const { ObjectID } = require('mongodb');

module.exports = {
	async index (req, res) {
		const result = await ProductAttributesValue.find();
		res.send(result)
	},  
	async save (req, res, next) {
		try{
			const { body } = req;
			const {
				productAttrId,
				name,
				description
			} = body;

			let firstTwoLetter = helper.getFirstTwoLetter(name);
			let code = firstTwoLetter;
			const isAlreadyExist = await ProductAttributeValueService.checkAttrValAlreadyExist(name, productAttrId)
			if(isAlreadyExist){
				res.send({
					success: false,
					message: 'Product Attribute Value already exist'
				})
				return ;
			}
			const data = { name, productAttrId, code, description};
			const result = await ProductAttributesValue.create(data);
			res.send({
				result,
				success: true
			});
		}catch(err){
			next(err)
		}
	},
	async productAttrValueById (req, res, next) {
		try{
			const {
				params
			} = req
			
			const result  = await ProductAttributesValue.aggregate([
				{
					$match: {
						productAttrId: new ObjectID(params.productAttrId)
					}
				}
			]).exec()

			res.send({result})

		}catch(err){
			next(err)
		}
	}
}