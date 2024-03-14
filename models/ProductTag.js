const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id:{ //2
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
    },
    product_id:{  // 2
      type:DataTypes.INTEGER,
      references:{
        key:"id",
        model:"product"
      },
    },
    tag_id:{   // 1
      type:DataTypes.INTEGER,
      references:{
        key:"id",
        model:"tag"
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
