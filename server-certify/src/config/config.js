module.exports = {
    port : process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'certify',
        user: process.env.DB_USER || 'certify',
        password: process.env.DB_PASS || 'certify',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './sad-2019-2-sad2019-2-team5.sqlite'

        }
    }
}