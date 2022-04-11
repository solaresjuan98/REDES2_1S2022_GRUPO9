import { DataTypes, Model } from 'sequelize';
import { db } from '../database/db';

export interface AdminAttributes extends Model {
  administradorId: number,
  nombre: string,
  descripcion: string,
  puesto: string,
  foto: string,

  createdAt?: Date;
  updatedAt?: Date;
}

const Admin = db.define<AdminAttributes>('Administrador', {

  administradorId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  puesto: {
    type: DataTypes.STRING,
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

export default Admin;