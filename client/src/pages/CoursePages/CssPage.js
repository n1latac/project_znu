import React from 'react';
import styles from './Course.module.css';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../../components/CustomLink';

function CssPage() {
  return (
    <div className={styles['courses-body']}>
    <div className={styles['courses-content']}>
        <ul className={styles['courses-navbar']}>
         <li><CustomLink to='/Course/css/introduction' colorText='black'>Що таке CSS?</CustomLink></li>
        
        <li><CustomLink to='/Course/css/fonts_text' colorText='black'>Шрифти та текст</CustomLink></li>
        <li><CustomLink to='/Course/css/blocks' colorText='black'>Блоки, блоки і ще раз блоки</CustomLink></li> 
        <li><CustomLink to='/Course/css/conclusion' colorText='black'>Результат першої роботи</CustomLink></li>  
        </ul>
          <Outlet/>
    </div>
</div>
  )
}

export default CssPage;