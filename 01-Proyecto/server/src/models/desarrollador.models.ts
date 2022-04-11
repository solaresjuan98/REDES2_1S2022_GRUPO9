import { DataTypes, Model } from 'sequelize';
import { db } from '../database/db';

export interface DevelopAttributes extends Model {
  desarrolladorId: number,
  nombre: string,
  carnet: number,
  foto: string,

  createdAt?: Date;
  updatedAt?: Date;
}

const Developer = db.define<DevelopAttributes>('Desarrollador', {

  desarrolladorId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  carnet: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  foto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  }


});

export default Developer;