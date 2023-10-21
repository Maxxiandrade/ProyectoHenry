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
    imagen:{
      type:DataTypes.STRING,
      allowNull:false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altura:{
      type:DataTypes.JSON,
      allowNull:false
    },
    peso:{
      type:DataTypes.JSON,
      allowNull:false
    },
    vida:{
      type:DataTypes.STRING,
      allowNull:false
    }
  },{timestamps:false});
};
