const Joi = require('joi')

module.exports = {
    register(req, res, next){
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            ),
            name: Joi.string()
        }
        const {error} = Joi.validate(req.body, schema)
        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                res.status(400).send({
                    error: 'Please provide a valid email address'
                })
                break
                case 'password':
                res.status(400).send({
                    error: `The password provided is failed to match the following rules:
                    <br>
                    1.It must contain ONLY the following characters: lower case, upper case, numerics.
                    <br>a
                    2.It must be atleast 8 characters in length and not greater than 32 characters in length.
                    `
                })
                break
                case 'name':
                res.status(400).send({
                    error: 'You must provide a valid first name'
                })
                break                
                default:
                res.status(400).send({
                    error: 'Invalid registration information'
                })
                }
        } else{
            next()
        }

    }
}