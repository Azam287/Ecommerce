const { ProductAttributeController } = require('../controller')

module.exports = function (router) {
    router.get('/productAttrs', ProductAttributeController.index);
    router.post('/productAttrs', ProductAttributeController.save);
}