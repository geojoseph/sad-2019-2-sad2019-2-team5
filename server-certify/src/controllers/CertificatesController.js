const {Certificate} = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const email = req.body
            const certificates = await Certificate.findAll({
                where: {
                    email: email
                },
                limit: 10
            })
          res.send(certificates)
        }catch (err) {
           res.status(500).send({
               error: 'An error has occured while trying to fetch the songs.'
           })
       }
    },    
    async post (req, res) {
        try {
            const certificates = await Certificate.create(req.body)
            res.send(certificates)
        }catch (err) {
           res.status(500).send({
               error: 'An error has occured while trying to create the certificate.'
           })
       }
    }
}