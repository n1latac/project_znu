import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import  {navItems}  from '../NavItems/NavItems';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth, logout } from '../../redux/features/auth/authSlice';
import {toast} from 'react-toastify'

export default function Header() {
  const [dropDown, setDropDown] = useState(false);
  const isAuth = useSelector(checkAuth)
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
    window.localStorage.removeItem('token')
    toast('Ви вийшли з системи.')
  }
  

  return (
    <>
      <div className={styles.header}>
        <Link to='/'><img className={styles['logo']} src='/img/logo.png'/></Link>
        <ul className={styles.menu}>
            <li className={styles['header-li']} onMouseEnter={()=>{setDropDown(!dropDown)}} onMouseLeave={()=>setDropDown(false)}>Courses
            {dropDown ? <DropDownMenu obj={navItems}/> : null}</li>
            <CustomLink to='/'><li className={styles['header-li']}>Home</li></CustomLink>



            {isAuth ? (
              <>
              <CustomLink to='/Post'><li className={styles['header-li']}>add Post</li></CustomLink>
              <CustomLink to='/Blog'><li className={styles['header-li']}>Blog</li></CustomLink>
              <CustomLink to='/posts/me'><li className={styles['header-li']}>my posts</li></CustomLink>
              <Link to='/' style={{textDecoration: 'none'}}><li onClick={logoutHandler} className={styles['header-li']}>Вийти</li></Link>
              </>
            ):(
              <>
                <CustomLink to='/Login'><li className={styles['header-li']}>Login</li></CustomLink>
                <CustomLink to='/Signup'><li className={styles['header-li']}>Signup</li></CustomLink>
                </>
            )}
            
        </ul>
      </div>
      </>
      
  )
}
