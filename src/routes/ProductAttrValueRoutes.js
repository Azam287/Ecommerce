const { ProductAttributeValueController } = require('../controller'); 

module.exports = function(router) {
    router.get('/productAttrValues', ProductAttributeValueController.index);
    router.post('/productAttrValue', ProductAttributeValueController.save);
    router.get('/productAttr/:productAttrId/productAttrValue', ProductAttributeValueController.productAttrValueById);
}