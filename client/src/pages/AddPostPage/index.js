import React, {useState} from 'react'
import styles from './styles.module.css'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { createPost } from '../../redux/features/post/postSlice'
function AddPostPage() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [image, setImage] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()



    const submitHandler = () => {
        try {
          const data = new FormData
          data.append('image', image) //ключ, значення
          data.append('title', title)
          data.append('text', text)
          dispatch(createPost(data))
          navigate('/')
        } catch (error) {
          console.log(error)
        }
    }
    const clearForm = () => {
      setText('');
      setTitle('');
      setImage('');
    }


  return (
    <div className={styles['blog-body']}>
    <form
    onSubmit={event => event.preventDefault()}
    className={styles['blog-form']}>
      <label className={styles['blog-addFile']}>
        Додати зображення
        <input type='file' className={styles['blog-file']} onChange={event => setImage(event.target.files[0])}/>
      </label>
      <div>
        {image && (
          <img className={styles['blog-image']} src={URL.createObjectURL(image)} alt='image'/>
        )}
      </div>
      <label className={styles['blog-title']}>
        Заголовок поста:
        <input type='text' placeholder='Заголовок поста' className={styles['title-text']} value={title} onChange={event => setTitle(event.target.value)}/>
      </label>
      <label className={styles['blog-text']}>
        Текст поста:
        <textarea placeholder='Текст поста' className={styles['blog-textarea']} value={text} onChange={event => setText(event.target.value)}/>
      </label>
      <div className={styles['blog-button']}>
        <button className={styles['blog-addButton']} onClick={submitHandler}>Додати</button>
        <button className={styles['blog-deleteButton']} onClick={clearForm}>Видалити</button>
      </div>
    </form>
    </div>
  )
}

export default AddPostPage
