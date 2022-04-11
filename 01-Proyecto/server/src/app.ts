import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import * as dotenv from 'dotenv';

// Variable de entorno
dotenv.config();

// Rutas
import adminRoutes from './routes/admin.routes';
import developRoutes from './routes/develop.routes'

import { db } from './database/db';

// Servidor de express
const app = express();

// middelwares
app.set('port', process.env.PORT || 4000);
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'))

// Conection DB
const dbInitialization = async () => {
  try {
    await db.authenticate();
    console.log('Database is connected...');
  } catch (e) {
    console.log(e);
  }
};

dbInitialization();


app.get('/curso', (req, res) => 
  res.send({
    curso: 'Laboratorio de redes de computadoras 2',
    grupo: '9'
  })
);

// Rutas
app.use('/api/admin', adminRoutes);
app.use('/api/develop', developRoutes);

export default app;