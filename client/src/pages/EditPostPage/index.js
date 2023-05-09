import React, {useEffect, useState, useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import {updatePost} from '../../redux/features/post/postSlice'
import axios from '../../utils/axios'
import styles from './style.module.css'

function EditPostPage() {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [oldImage, setOldImage] = useState('')
    const [newImage, setNewImage] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const fetchPost = useCallback(async() => {
        const {data} = await axios.get(`/${params.id}`)
        setTitle(data.title)
        setText(data.text)
        setOldImage(data.imgUrl)
    }, [params.id])

    useEffect(()=>{
        fetchPost()
    },[fetchPost])

    const submitHandler = async() => {
        try {
          const updatedPost = new FormData()
            updatedPost.append('title', title)
            updatedPost.append('text', text)
            updatedPost.append('id', params.id)
            updatedPost.append('image', newImage)
            dispatch(updatePost(updatedPost))
            navigate('/Blog')
        } catch (error) {
            console.log(error)
        }
    }
    const clearForm = () => {
        setTitle('')
        setText('')
    }


    return (
        <div className={styles['blog-body']}>
        <form
        onSubmit={event => event.preventDefault()}
        className={styles['blog-form']}>
          <label className={styles['blog-addFile']}>
            Додати зображення
            <input type='file' className={styles['blog-file']} onChange={event => {
                setNewImage(event.target.files[0])
                setOldImage('')
                }}/>
          </label>
          <div>
          {oldImage && (
              <img className={styles['blog-image']} src={`http://localhost:3002/${oldImage}`} alt='image'/>
            )}
            {newImage && (
              <img className={styles['blog-image']} src={URL.createObjectURL(newImage)} alt='image'/>
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
            <button type='button' className={styles['blog-addButton']} onClick={submitHandler}>Оновити</button>
            <button className={styles['blog-deleteButton']} onClick={clearForm}>Очистити</button>
          </div>
        </form>
        </div>
      )
}

export default EditPostPage