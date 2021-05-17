const { ProductController } = require('../controller')

module.exports = function(router) {
    router.get('/products', ProductController.index);
    router.post('/product', ProductController.save)
}