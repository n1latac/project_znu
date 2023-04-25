import  express  from "express";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors()); //что бы отправлять к нашему бэку с разных ip адресов



export default app;