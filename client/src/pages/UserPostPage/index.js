import React, { useEffect, useState } from 'react'
import styles from './style.module.css';
import axios from '../../utils/axios'
import PostItem from '../../components/PostItem';

function UserPostPage() {
    const [posts, setPosts] = useState([])

    const fetchMyPosts = async () => {
        try {
            const {data} = await axios.get('/posts/user/me')
            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchMyPosts()
    },[])
  return (
    <div className={styles['container']}>
        <div className={styles['post']}>
        {posts?.map((post, index)=><PostItem post={post} key={index}/>)}
        </div>
    </div>
  )
}

export default UserPostPage