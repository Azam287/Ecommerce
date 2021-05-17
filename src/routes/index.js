const express = require('express');
const router = express.Router();

module.exports = function(app) {
    router.get('/',(req, res) => {
        console.log('Hello world')
    });
    require('./ProductCatRoutes')(router);
    require('./ProductAttrRoutes')(router);
    require('./ProductAttrValueRoutes')(router);
    require('./ProductRoutes')(router);
    require('./UnitsRoutes')(router);

    app.use('/api', router)
}