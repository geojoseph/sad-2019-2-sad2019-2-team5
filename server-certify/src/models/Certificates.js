module.exports = (sequelize, DataTypes) => {
 const Certificate = sequelize.define('Certificates', {
    email: {
        type: DataTypes.STRING
    },    
     name: DataTypes.STRING,
     provider: DataTypes.STRING,
     grade: DataTypes.STRING,
     validity: DataTypes.STRING,
     selectedFile: DataTypes.BLOB('long')
    })

 return Certificate
}