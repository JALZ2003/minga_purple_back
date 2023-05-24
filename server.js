import indexRouter from './router/index.js';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import 'dotenv/config.js';
import './config/database.js';

const server = express();

const PORT = process.env.PORT || 8080;
const ready = () => console.log('Server ready in port: ' + PORT);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan('dev'));

server.use('/api', indexRouter);

server.listen(PORT, ready);