import { Handler } from 'express';

import Develop from '../models/desarrollador.models';

export const getDevelop: Handler = async ( req, res ) => {

  try {
    const develop = await Develop.findAll();

    return res.status(201).json({
      status: true,
      develop: develop
    });

  } catch (error) {
    return res.status(500).json({
      status: false,
      msg: 'Error en el servidor'
    });
  }

}