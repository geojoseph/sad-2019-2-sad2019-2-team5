const {Certificates} = require('../models')
module.exports = {
    async get (req, res) {
        // eslint-disable-next-line no-console
        console.log(req.query.email)    
        try {
            const certificate = await Certificates.findAll({
                where: {
                    email: req.query.email
                }
            })
          res.send(certificate)
        }catch (err) {
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
    },
    async put (req, res) {
        try {
            // eslint-disable-next-line no-console
            console.log( req.body)
            const certi = req.body
            const certificate = await Certificates.update({
                name: certi.name,
                provider: certi.provider,
                grade: certi.grade,
                validity: certi.validity,
                selectedFile: certi.selectedFile,
                verification: certi.verification
            },{
                where: {
                    email: certi.email,
                    id: certi.id
                }
            })
            res.send(certificate)
        }catch (err) {
           res.status(500).send({
               error: 'An error has occured while trying to create the certificate.'
           })
       }
    },

    async delete(req, res) {
    try {  
        const certificate = await Certificates.destroy({
               where: {
                    email: req.query.email,
                    id: req.query.id
                }
            })
          // eslint-disable-next-line no-console
          console.log(certificate)
          res.status(200).send({ error: 'Certificate has been deleted'})
        }catch (err) {
           res.status(500).send({
               error: 'An error has occured while trying to delete the certificates.'
           })
       }
    }
}