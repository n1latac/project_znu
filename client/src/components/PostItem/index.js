import React from 'react'
import styles from './style.module.css'
import {AiFillEye, AiOutlineMessage} from 'react-icons/ai'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostItem({post}) {
    
    if(!post){
        return(
            <div className={styles['no-posts']}>Немає постів.</div>
        )
    }
  return (
    <Link to={`/${post._id}`} style={{textDecoration: 'none', color: 'inherit', border: '2px solid black', padding: '15px', backgroundColor: 'rgb(150 150 150)'}}><div className={styles['container']}>
        <div style={post.imgUrl ? {display: 'flex', borderRadius: '0.125rem', height: '20rem'}: {display: 'flex', borderRadius: '0.125rem'}}>
        {post.imgUrl && (
            <img src={`http://localhost:3002/${post.imgUrl}`} alt='img' style={{objectFit: 'cover', width: '100%'}}/>
        )}
        </div>
        
        <div className={styles['post']}>
            <div className={styles['post-username']}>{`${post.firstname} ${post.lastname}`}</div>
            <div className={styles['post-data']}><Moment date={post.createdAt} format='D MMM YYYY'/></div>
        </div>
        <div className={styles['title']}>{post.title}</div>
        <div className={styles['text']}>{post.text}</div>

        <div className={styles['statistic']}>
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
    </Link>
  )
}

export default PostItem