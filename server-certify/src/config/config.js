module.exports = {
    port : process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'certify',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'password',
        options: {
            dialect: process.env.DIALECT || 'mysql',
            host: process.env.HOST || 'mysqldb'
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
