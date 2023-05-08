import React, { useEffect } from 'react'
import styles from './style.module.css'
import PostItem from '../../components/PostItem'
import PopularPost from '../../components/PopularPost'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../../redux/features/post/postSlice'

function Blog() {

    const dispatch = useDispatch()
    const {posts, popularPosts} = useSelector(state => state.post)

    useEffect(()=>{
        dispatch(getAllPosts())
    },[dispatch])

    if(!posts.length){
        return(
            <div className={styles['container']}>
            <div className={styles['no-posts']}>Постів немає.</div>
            </div>
        )
    }


  return (
    <div className={styles['container']}>
        <div className={styles['post-container']}>
            <div className={styles['post-body']}>
                <div className={styles['common-posts']}>
                    {posts?.map((post, index)=><PostItem key={index} post={post}/>)}
                    
                </div>
                <div className={styles['popular-post-container']}>
                    <div>
                        Популярне:
                    </div>
                    {popularPosts?.map((post, index)=><PopularPost key={index} post={post}/>)}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog