import React from 'react';
import styles from './Course.module.css';
import Header from '../../components/Header/Header';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../../components/CustomLink';

function HtmlPage() {
  return (
    <div className={styles['courses-body']}>
    <Header style={{padding: '0vh 10vw', margin: '0 auto', backgroundColor: 'black', backdropFilter: 'blur(20px)'}}/>
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