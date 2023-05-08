import {Router} from 'express';
import { createComment } from '../controllers/comments.js';
import { checkAuth } from "../midllewares/checkAuth.js";


const commentRouter = new Router()

commentRouter.post('/comments/:id', checkAuth, createComment)

export default commentRouter