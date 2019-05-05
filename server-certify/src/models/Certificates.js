module.exports = (sequelize, DataTypes) => {
 const User = sequelize.define('Certificate', {
     title: DataTypes.STRING,
     Cid: DataTypes.STRING,
     hyperlink: DataTypes.TEXT
    })

 return User
}