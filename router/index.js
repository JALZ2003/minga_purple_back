import { Router } from "express";
import authorsRouter from "./authors.js";
import mangasRouter from "./mangas.js";
import usersRouter from "./auth.js";
import chaptersRouter from "./chapters.js";

const indexRouter = Router();

indexRouter.use('/authors', authorsRouter);
indexRouter.use('/mangas', mangasRouter);
indexRouter.use('/auth', usersRouter);
indexRouter.use('/chapters', chaptersRouter);

export default indexRouter;