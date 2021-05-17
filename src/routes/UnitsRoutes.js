const { UnitsController } = require('../controller')

module.exports = function(router) {
    router.get('/units', UnitsController.index);
    router.post('/units', UnitsController.save)
}