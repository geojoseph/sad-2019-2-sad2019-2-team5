module.exports = (sequelize, DataTypes) => {
    const certishares = sequelize.define('certishares', {
       email: {
           type: DataTypes.STRING
       },    
        shareid: DataTypes.STRING,
       })  
    return certishares
   }