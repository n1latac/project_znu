import React from 'react';
import styles from './HtmlCourse.module.css';
import Header from '../../components/Header/Header';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../../components/CustomLink';

function HtmlPage() {
  return (
    <div className={styles['html-body']}>
    <Header style={{padding: '0vh 10vw', margin: '0 auto', backgroundColor: 'black', backdropFilter: 'blur(20px)'}}/>
    <div className={styles['html-content']}>
        <ul className={styles['html-navbar']}>
        <li><CustomLink to='/Course/html/introduction'>Intro</CustomLink></li>
        
        <li><CustomLink to='/Course/html/What_is_html'>What is html?</CustomLink></li> 
          
        </ul>
          <Outlet/>
    </div>
</div>
  )
}

export default HtmlPage;