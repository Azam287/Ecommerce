const { ProductCategory } = require('../models');

module.exports = {
    getProdCatCount : async() => {
        const prodAttrs = await ProductCategory.find();
        return prodAttrs.length;
    },
}