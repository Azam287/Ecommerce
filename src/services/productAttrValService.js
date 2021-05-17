const { ObjectID } = require('mongodb');
const { ProductAttributesValue } = require('../models');

module.exports = {
    checkAttrValAlreadyExist : async (name, productAttrId) =>{
        try{
            let filter =[
                {
                    $match: {
                        name,
                        productAttrId: new ObjectID(productAttrId)
                    }
                }
            ]
            const result = await ProductAttributesValue.aggregate(filter).exec()

            return result.length >0
        }catch(err){
            throw new Error(err)
        }
    }
}