import React from 'react';
import styles from './Course.module.css';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../../components/CustomLink';

function HtmlPage() {
  return (
    <div className={styles['courses-body']}>
    <div className={styles['courses-content']}>
        <ul className={styles['courses-navbar']}>
        <li><CustomLink to='/Course/html/introduction' colorText='black'>Вступ</CustomLink></li>
        
        <li><CustomLink to='/Course/html/What_is_html' colorText='black'>Що таке html?</CustomLink></li> 
          
        </ul>
          <Outlet/>
    </div>
</div>
  )
}

export default HtmlPage;