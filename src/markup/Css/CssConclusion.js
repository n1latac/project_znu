import React from 'react';
import styles from '../style.module.css';

function CssConclusion() {
  return (
    <section className={styles['course-main']}>
        <h2>Висновок</h2>
        <p>Якщо ви дотримувалися всіх інструкцій у цій статті, ви маєте отримати сторінку, яка має приблизно такий вигляд:</p>
        <img src='/img/css_conclusion.png' className={styles['first-elem']}/>
        <p>Тут ми дізналися тільки саму поверхню CSS.</p>
    </section>
  )
}

export default CssConclusion;
