import React from 'react';
import styles from '../style.module.css';
import { Link } from 'react-router-dom';


function JsIntro() {
  return (
    <section className={styles['course-main']}>
        <h2>Передмова</h2>
        <p>Вам не потрібно мати жодних попередніх знань JavaScript, щоб розпочати цей модуль, але ви повинні мати певне уявлення про HTML і CSS. Рекомендуємо ознайомитися з наступними матеріалами, перш ніж починати знайомство з JavaScript:</p>
        <ul className={styles['course-list']}>
            <li><Link to='/Course/html/introduction'>Вступ до HTML</Link></li>
            <li><Link to='/Course/css/introduction'>Вступ до CSS</Link></li>
        </ul>
        <div className={styles['notes']}><span className={styles['fw700']}>Примітка:</span> Якщо ви працюєте на комп'ютері, планшеті або іншому пристрої, де немає можливості повноцінно працювати з файлами, можете використовувати такі онлайн-сервіси, як JSBin або Thimble, для запуску прикладів коду.</div>
    </section>
  )
}


export default JsIntro;
