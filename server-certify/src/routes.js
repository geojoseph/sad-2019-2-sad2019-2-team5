const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const CertificatesController = require('./controllers/CertificatesController')
const ShareController = require('./controllers/ShareController')
module.exports = (app) => {
    app.post('/register',
     AuthenticationControllerPolicy.register,
     AuthenticationController.register),
    app.post('/login',
     AuthenticationController.login)

    app.get('/certificates',
     CertificatesController.get)
    app.post('/certificates',
     CertificatesController.post)
     app.delete('/certificates',
     CertificatesController.delete) 
     app.put('/certificates',
     CertificatesController.put) 

     app.get('/shared-certificates',
     ShareController.get)
     app.post('/shared-certificates',
     ShareController.post)
     app.delete('/shared-certificates',
     ShareController.delete) 
     app.put('/shared-certificates',
     ShareController.put) 
}
