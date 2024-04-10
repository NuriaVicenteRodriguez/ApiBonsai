import { DataTypes } from "sequelize";
import connection_db from "../database/connection_db.js";

const BonsaiModel = connection_db.define('Bonsai', {

    specie: {
      type: DataTypes.STRING,
      allowNull: false
    },
    abonated: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    trasplanted: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
    notes: {
        type: DataTypes.STRING,
        allowNull: false
      },
    images: {
        type: DataTypes.STRING,
        allowNull: false
      }
  }, {
    tableName: 'bonsais', // Nombre de la tabla en la base de datos
    timestamps: false // Deshabilitar los campos createdAt y updatedAt
  });
  
  // `sequelize.define` also returns the model

 

  export default BonsaiModel