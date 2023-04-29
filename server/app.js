import  express  from "express";
import cors from 'cors';
import authRouter from './routes/auth.js'

const app = express();

app.use(express.json());
app.use(cors()); //что бы отправлять к нашему бэку с разных ip адресов

app.use('/api', authRouter)


export default app;