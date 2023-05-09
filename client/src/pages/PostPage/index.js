import React, { useCallback, useEffect, useState } from 'react'
import styles from './style.module.css'
import {AiFillEye, AiOutlineMessage, AiTwotoneEdit, AiFillDelete} from 'react-icons/ai'
import Moment from 'react-moment'
import axios from '../../utils/axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deletePost } from '../../redux/features/post/postSlice'
import { toast } from 'react-toastify'
import { createComment, getPostComments } from '../../redux/features/comment/commentSlice'
import Comment from '../../components/Comment'


function PostPage() {
    const [post, setPost] = useState(null)
    const [comment, setComment] = useState('');
    const params = useParams() //из строки браузера
    const {user} = useSelector(state => state.auth)
    const {comments} = useSelector((state) => state.comment)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const deletePostHandler = () => {
        try {
            dispatch(deletePost(params.id))
            toast('Пост був видалений.')
            navigate('/posts/me')
        } catch (error) {
            console.log(error)
        }
    }

     const fetchComments = useCallback(async() => {
         try {
             dispatch(getPostComments(params.id))     
         } catch (error) {
             console.log(error)
         }
     },[params.id, dispatch])

    const fetchPost = useCallback(async() => {
        const {data} = await axios.get(`/${params.id}`)
        setPost(data)
    }, [params.id])

    useEffect(()=>{
        fetchPost()
    },[fetchPost])

     useEffect(()=>{
         fetchComments()
     },[fetchComments])


    const clickHandler = () => {
        try {
            const postId = params.id
            dispatch(createComment({postId, comment}))
            setComment('')
        } catch (error) {
            console.log(error)
        }
    }


    if(!post){
        return(
            <div className={styles['no-posts']}>Постів немає.</div>
        )
    }
  return (
    <div className={styles['container']}>
        

        <div className={styles['container-post']}>
        
            <div className={styles['post']}>
            <Link to={'/Blog'} style={{textDecoration: 'none', width: '100px'}}><button className={styles['back-button']}>
            Назад
        </button></Link>
                <div className={styles['post-body']}>
                <div style={post.imgUrl ? {display: 'flex', borderRadius: '0.125rem', height: '20rem'}: {display: 'flex', borderRadius: '0.125rem'}}>
        {post?.imgUrl && (
            <img src={`http://localhost:3002/${post.imgUrl}`} alt='img' style={{objectFit: 'cover', width: '100%'}}/>
        )}
        </div>
        
                </div>
                <div className={styles['post-main']}>
            <div className={styles['post-username']}>{post.username}</div>
            <div className={styles['post-data']}><Moment date={post.createdAt} format='D MMM YYYY'/></div>
        </div>
        <div className={styles['title']}>{post.title}</div>
        <div className={styles['text']}>{post.text}</div>

        <div className={styles['statistic']}>
            <div className={styles['statistic-post']}>
            <div className={styles['views']}>
                <AiFillEye/>
                <span>{post.views}</span>
            </div>
            <div className={styles['views']}>
                <AiOutlineMessage/>
                <span>{post.comments?.length || 0}</span>
            </div>
            </div>
        </div>

        {
            user?._id === post.author && (
                <div className={styles['statistic-post']}>
                <button className={styles['views']}>
                    <Link to={`/${params.id}/edit`}>
                    <AiTwotoneEdit/>
                    </Link>
                </button>
                <button className={styles['views']} onClick={deletePostHandler}>
                    <AiFillDelete/>
                </button>
                </div>
            )
        }
            </div>
            
            <div className={styles['comments']}>
                <form className={styles['form']} onSubmit={event=>event.preventDefault()}>
                    <input type='text' placeholder='comment' className={styles['input-line']} value={comment}
                    onChange={event=>setComment(event.target.value)}/>
                    <button type='submit' className={styles['form-button']} onClick={clickHandler}>
                    Відправити
                    </button>
                </form>
                {
                    comments?.map((cmt)=>(
                        <Comment key={cmt._id} cmt={cmt}/>
                        
                        
                    ))
                }
            </div>
        </div>
    </div>

  )
}

export default PostPage