import { Handler } from 'express';

import Admin from '../models/admin.models';

export const getAdmins: Handler = async ( req, res ) => {
  try {
    const admins = await Admin.findAll();

    return res.status(201).json({
      status: true,
      admin: admins
    });

  } catch (error) {
    return res.status(500).json({
      status: false,
      msg: 'Error en el servidor'
    });
  }

}