import User from "../models/User.js";
import bcrypt from 'bcryptjs'
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

        res.json({
            newUser, message: 'Реєстрація пройшла успішно.'
        })
    }catch(err){
        res.json({message: 'Помилка при реєстрації користувача.'})
    }
}
//Login user
export const login = async (req, res) => {
    try{

    }catch(err){
        res.json({message: ''})
    }
}
//Get Me
export const getMe = async (req, res) => {
    try{

    }catch(err){
        res.json({message: ''})
    }
}