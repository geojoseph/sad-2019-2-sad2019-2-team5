const {Certificates} = require('../models')
// eslint-disable-next-line no-console
console.log(Certificates)
module.exports = {
    async index (req, res) {
        try {
            const certificate = await Certificates.findAll({
                limit: 50
            })
          res.send(certificate)
        }catch (err) {
            // eslint-disable-next-line no-console
            console.log(err)
           res.status(500).send({
               error: 'An error has occured while trying to fetch the certificates.'
           })
       }
    },    
    async post (req, res) {
        try {
            const certificate = await Certificates.create(req.body)
            res.send(certificate)
        }catch (err) {
           res.status(500).send({
               error: 'An error has occured while trying to create the certificate.'
           })
       }
    }
}