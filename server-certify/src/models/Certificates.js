module.exports = (sequelize, DataTypes) => {
 const Certi = sequelize.define('Certificate', {
    email: {
        type: DataTypes.STRING
    },    
     name: DataTypes.STRING,
     provider: DataTypes.STRING,
     grade: DataTypes.STRING,
     validity: DataTypes.STRING,
     selectedFile: DataTypes.BLOB('long')
    })

 return Certi
}