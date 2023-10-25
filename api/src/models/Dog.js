const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type:DataTypes.UUID,
         allowNull: false,
         primaryKey:true,
         defaultValue: DataTypes.UUIDV4
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altMin:{
      type:DataTypes.STRING,
      allowNull:false
    },
    altMax:{
      type:DataTypes.STRING,
      allowNull:false
    },
    pesMin:{
      type:DataTypes.STRING,
      allowNull:false
    },
    pesMax:{
      type:DataTypes.STRING,
      allowNull:false
    },
    vida:{
      type:DataTypes.STRING,
      allowNull:false
    }
  },{timestamps:false});
};
