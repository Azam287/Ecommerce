const { Units } = require('../models')

module.exports = {
    async index(req, res) {
        const result = await Units.find();
        res.send(result)
    },
    async save (req, res, next) {
        try{
            const { body } = req;
            const result = await Units.create(body);
            res.send(result);
        }catch(err) {
            next(err);
        }
    }
}