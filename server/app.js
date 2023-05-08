import  express  from "express";
import cors from 'cors';
import authRouter from './routes/auth.js'
import postRouter from './routes/post.js'
import commentRouter from './routes/comment.js'
import fileUpload from "express-fileupload";

const app = express();

app.use(express.json());
app.use(cors()); //что бы отправлять к нашему бэку с разных ip адресов
app.use(fileUpload())
app.use(express.static('upload'))

app.use('/api', authRouter)
app.use('/api', postRouter)
app.use('/api', commentRouter)


export default app;