import React from 'react';
import Header from '../../components/Header/Header';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';
import { navItems } from '../../components/NavItems/NavItems';
//import img from '../../img/title.jpg'

console.log(navItems);

export default function Home() {
  return (
    <div className={styles.body}>
      <section className={styles['main-content']}>
      <Header style={{padding: '0vh 10vw', margin: '0 auto', background: 'transparent', backdropFilter: 'blur(20px)'}}/>
         <div className={styles['main-article']}>
           <h1>Best html,css,JavaScript courses</h1>
           <p>lorem ipsu lorem lorem lorem lorem lorem lore  lorenm lorem lorem</p>
           <Link to='Course/html/introduction'><button className={styles['main-btn']}>Start courses</button></Link>
         </div>
      </section>
        <div className={styles.homeBox}>
            <div className={styles.content}>             
              <div className={styles.title}>
                <div className={styles.course}>
                  <p>In this course, you'll learn what HTML, CSS, and JavaScript are and how they interact to bring content to your browser.</p>
                </div>
                <img src="./img/title4.png" alt='title photo'/>
              </div>
            </div>
        </div>  

    </div>
  )
}
