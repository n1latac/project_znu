import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

function PopularPost({post, key}) {
  return (
    <Link to={`/${post._id}`} className={styles['container']}>
        <div className={styles['body']}>
            {post.title}
        </div>
    </Link>
  )
}

export default PopularPost