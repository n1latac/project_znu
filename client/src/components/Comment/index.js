import React from 'react'
import styles from './style.module.css'

function Comment({cmt}) {
  return (
    <div className={styles['container']}>
        <div className={styles['user-avatar']}>ava</div>
        <div className={styles['comment']}>{cmt.comment}</div>
    </div>
  )
}

export default Comment