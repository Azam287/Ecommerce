const { ProductModel } = require('../models');
const { ProductService } = require('../services');


module.exports = {
    async index (req, res) {
        const result = await ProductModel.find();
        res.send(result); 
    },
    async save (req, res, next) {
        try{    
            const {
                productCatId,
                name,
                description,
                unit,
                purchasePrice,
                sellingPrice,
                discount,
                attributeConfig,
                qty
            } = req.body
            const catAttrIds = await ProductService.getProductAttributesByCategoryId(productCatId);
            const attributeIds = Object.keys(attributeConfig).map(key => key);
            const attributeValIds = Object.values(attributeConfig).map(val => val); 
            const updatedAttrConfig = catAttrIds && catAttrIds.map(attrId => {
                return{
                    attrsId: attributeConfig[attrsId]
                }
            })
            const sku = await ProductService.generateProductSku(name,attributeValIds);

            const data = {
                productCatId,
                name,
                description,
                unit,
                purchasePrice,
                sellingPrice,
                discount,
                attributeConfig: updatedAttrConfig|| attributeConfig,
                qty,
                attributeIds,
                attributeValIds,
                sku
            }
            const result = await ProductModel.create(data);

            res.send({
                result,
                success: true
            })
        }catch(err) {
            next(err)
        }
    }
}