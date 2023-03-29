import React from 'react';
import styles from './HtmlCourse.module.css';
import Header from '../../components/Header/Header';
import { Link, Outlet } from 'react-router-dom';

function HtmlPage() {
  return (
    <div className={styles['html-body']}>
    <Header style={{padding: '0vh 10vw', margin: '0 auto', backgroundColor: 'black', backdropFilter: 'blur(20px)'}}/>
    <div className={styles['html-content']}>
        <div className={styles['html-navbar']}>
          
        </div>
        <section className={styles['html-main']}>
          <Outlet/>
        </section>
    </div>
</div>
  )
}

export default HtmlPage;