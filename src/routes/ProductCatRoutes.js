const { ProductCategoryController } = require('../controller');

module.exports = function (router) {
    router.get('/productCategories', ProductCategoryController.index)
    router.post('/productCategories', ProductCategoryController.save)
}