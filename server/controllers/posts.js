import Post from "../models/Post.js";
import User from "../models/User.js";
import Comment from "../models/Comment.js";
import { fileURLToPath } from "url";
import path, {dirname} from 'path'

export const createPost = async(req, res) =>{
    try {
        const {body:{title, text}, files, userId} = req
        const user = await User.findById(req.userId)

        if(files){
         let fileName = Date.now().toString() + req.files.image.name    //для upload имя
         const __dirname = dirname(fileURLToPath(import.meta.url)) //где находимся
         req.files.image.mv(path.join(__dirname, '..', 'upload', fileName)) // переносим картинку в папку upload

         const newPostWithImage = new Post({
            firstname: user.firstname,
            lastname: user.lastname,
            imgUrl: fileName,
            title,
            text,
            author: userId
         }) 

         await newPostWithImage.save()
         await User.findByIdAndUpdate(userId,{
            $push: {
                posts: newPostWithImage
            }
         })

         return res.json(newPostWithImage)
        }else{
            const newPostWithoutImage = new Post({
                firstname: user.firstname,
                lastname: user.lastname,
                title,
                text,
                author: userId
            }) 

            await newPostWithoutImage.save()
            await User.findByIdAndUpdate(userId,{
                $push: {
                    posts: newPostWithoutImage
                }
            })

            res.json(newPostWithoutImage)
        }
    } catch (err) {
        console.log({message: 'Щось пішло не так.'}, err.message)
    }
}

export const getAllPost = async(req, res) => {
    try {
        const posts = await Post.find().sort('-createdAt')
        const popularPosts = await Post.find().limit(5).sort('-views')
        if(!posts){
            return res.json({message: 'Немає постів.'})
        }
        res.json({posts, popularPosts})
    } catch (error) {
        res.json({message: 'Щось пішло не так.'})
    }
}

export const getById = async(req, res) => {
    try {
        const {params: {id}} = req;
        const post = await Post.findByIdAndUpdate(id, {
            $inc: {views: 1},
        })
        res.json(post)
    } catch (error) {
        res.json({message: 'Щось пішло не так.'})
    }
}

export const getMyPosts = async(req, res) => {
    try {
        const {userId} = req
        const user = await User.findById(userId)
        const posts = await Promise.all(
            user.posts.map(post => {
                return Post.findById(post._id)
            })
        )
        return res.json(posts)
    } catch (error) {
        res.json({message: 'Щось пішло не так.'})
    }
}

export const deletePost = async (req, res) => {
    try {
        const {params: {id}, userId} = req;
        const post = await Post.findByIdAndRemove(id)
        if(!post){
            res.json({message: 'Немає такої поста.'})
        }

        await User.findByIdAndUpdate(userId, {
            $pull: {posts: id}
        })

        res.json({message: 'Пост був видален.'})
    } catch (error) {
        res.json({message: 'Щось пішло не так.'})
    }
}

export const updatePost = async (req, res) => {
    try {
       const {title, text, id} = req.body
       const post = await Post.findById(id)
       console.log(title)

       if(req.files){
        let fileName = Date.now().toString() + req.files.image.name    //для upload имя
        const __dirname = dirname(fileURLToPath(import.meta.url)) //где находимся
        req.files.image.mv(path.join(__dirname, '..', 'upload', fileName)) // переносим картинку в папку upload
        post.imgUrl = fileName || '' //
    }

    post.title = title
    post.text = text

    await post.save()

    res.json(post)
    } catch (error) {
        res.json({message: 'Щось пішло не так.'})
    }
}

export const getPostComments = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        //console.log(typeof(post.comments))
        const list = await Promise.all(
            post.comments.map((comment)=>{
                return Comment.findById(comment)
            })
        )
        res.json(list)
    } catch (error) {
        console.log(error)
    }
}