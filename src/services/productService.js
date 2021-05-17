const { ProductModel, ProductAttributes ,ProductAttributesValue, ProductCategory } = require('../models');
const helper = require('../helper');
const { ObjectID } = require('mongodb');
module.exports = {
    generateProductSku: async (name, attrValIds) => {
        const firstTwoLetter = helper.getFirstTwoLetter(name);
        const attrValues = await Promise.all(attrValIds.map(async (id) => {
            if(id){
                let attrVal = await ProductAttributesValue.findById(id)
                return attrVal;
            }
            else{
                return undefined;
            }
            
        }))
        let skuCode = firstTwoLetter;

        attrValues.map(el => {
            if(el){
                skuCode =`${skuCode}-${el.code}`
            }
        })

        return skuCode;

    },
    getProductAttributesByCategoryId : async(id) => {
        const result = await ProductCategory.find({
            id: ObjectID(id)
        })

        return result.attrsId
    }
}