import { Router } from "express";
import   {createPost, getAllPost, getById, getMyPosts, deletePost, updatePost, getPostComments}  from "../controllers/posts.js";
import { checkAuth } from "../midllewares/checkAuth.js";

const router = new Router()

router.post('/posts', checkAuth, createPost)

router.get('/posts', getAllPost)

router.get('/:id', getById)

router.get('/posts/user/me', checkAuth, getMyPosts)

router.delete('/posts/:id', checkAuth, deletePost)

router.put('/posts/:id', checkAuth, updatePost)

//post comment
//http://localhost:3002/api/posts/comments/:id
router.get('/posts/comments/:id', getPostComments)

export default router