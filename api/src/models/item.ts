import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize.ts';

class Item extends Model {}

Item.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  amountType: {
    type: DataTypes.ENUM('g', 'oz', 'pieces'),
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'Item'
});

export default Item;
