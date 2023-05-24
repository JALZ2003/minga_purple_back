import { Router } from 'express';
import create from '../controllers/authors/create.js';
import read from '../controllers/authors/read.js';

const authorsRouter = Router();

// Aca se deben configurar las rutas para CRUD de authors
// Put
// Delete

authorsRouter.get('/', read);
authorsRouter.post('/', create);

export default authorsRouter;