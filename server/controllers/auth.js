import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
//Register user
export const register = async (req, res) => {
    try{
        const {firstname,lastname,email,password} = req.body;
        const isUsed = await User.findOne({email}) // проверяем если ли такой email в БД

        if(isUsed){
            return res.json({message: 'Данний email вже зайнят.'}) 
        }

        const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10)) //2 аргумент это сложность хэширования пароля

        const newUser = new User({
            firstname,
            lastname,
            email,
            password: hash
        })

        await newUser.save(); //сохраняем пользователя в БД

        return res.json({
            newUser, message: 'Реєстрація пройшла успішно.'
        })
    }catch(err){
        res.json({message: 'Помилка при реєстрації користувача.'})
    }
}
//Login user
export const login = async (req, res) => {
    try{
        const {email, password} = req.body;

        const user = await User.findOne({email})

        if(!user){
            return res.json({message: 'Немає такого користувача.'})
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)  //сравниваем обычный пароль с хэшированым
        
        if(!isPasswordCorrect){
            res.json({message: 'Невірний пароль.'})
        }

        const token = jwt.sign({
            id: user.id  //зашифровка user_id в наш токен
        },
        process.env.JWT_SECRET, //строка с помощью которой будем потом считывать наш user_id
        {expiresIn: '7d'})

        return res.json({
            token, user, message: 'Ви увійшли в систему'
        })
    }catch(err){
        res.json({message: 'Помилка при авторизації користувача.'})
    }
}
//Get Me
export const getMe = async (req, res) => {  // ,будет срабатовать при обновлении страницы, что бы заново не логинится 
    try{
        const {userId} = req;
        const user = await User.findById(userId)

        if(!user){
            return res.json({message: 'Немає такого користувача.'})
        }

        const token = jwt.sign({ //опять создаем токен
            id: user.id  
        },
        process.env.JWT_SECRET, 
        {expiresIn: '7d'})

        return res.json({
            user, token
        })

    }catch(err){
        res.json({message: 'Нема доступа.'})
    }
}