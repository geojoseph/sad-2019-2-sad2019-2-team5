const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const CertificatesController = require('./Controllers/CertificatesController')

module.exports = (app) => {
    app.post('/register',
     AuthenticationControllerPolicy.register,
     AuthenticationController.register),
    app.post('/login',
     AuthenticationController.login)

    app.get('/certificates',
     CertificatesController.index)
    app.post('/certificates',
     CertificatesController.post)     
}
