import jwt from 'jsonwebtoken';

export const checkAuth = (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '') //достаем токен с нашего запроса

    if(token){
        try{
            const result = jwt.verify(token, process.env.JWT_SECRET) //расшифровуем токен

            req.userId = result.id //добавляем поле в req

            next()
        }catch(err){
            return res.json({message: 'Немає доступа.'})
        }
    }else{
        return res.json({
            message: 'Немає доступа.'
        })
    }
}