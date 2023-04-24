import React from 'react';
import styles from '../style.module.css';
import { useState } from 'react';

function WhatIsJs() {
    const [state, setState] = useState('CHRIS');

    const buttonHandler = () => {
       const res = prompt('vvedite danye');
       setState(res);
    }
  return (
    <section className={styles['course-main']}>
        <h2>Що таке JavaScript?</h2>
        <p>JavaScript - це мова, яка дає змогу вам застосовувати складні речі на web-сторінці - щоразу, коли на web-сторінці відбувається щось більше, ніж просто її статичне відображення, - відображення періодично оновлюваного контенту, чи інтерактивних карт, чи анімація 2D/3D-графіки, чи прокручування відео в програвачі, і т.д. - можете бути впевнені, що швидше за все, не обійшлося без JavaScript. Це третій шар листкового пирога стандартних web-технологій, два з яких (HTML і CSS) ми детально розкрили в інших частинах навчального посібника.</p>
        <img src='/img/js_whatIsJs.png' className={styles['first-elem']}/>
        <ul className={styles['course-list-disc']}>
            <li><span className={styles['fw700']}>HTML</span> - це мова розмітки, яку ми використовуємо для візуального та смислового структурування нашого web-контенту, наприклад, визначаємо параграфи, заголовки, таблиці даних, або вставляємо зображення та відео на сторінку.</li>
            <li><span className={styles['fw700']}>CSS</span>- це мова стилів, за допомогою якої ми надаємо стиль відображення нашого HTML-контенту, наприклад, надаємо колір фону (background) і шрифту, надаємо контенту багатоколонкового вигляду.</li>
            <li><span className={styles['fw700']}>JavaScript</span>мова програмування, яка дає змогу вам створити контент, що динамічно оновлюється, керує мультимедіа, анімує зображення, втім, робить усе, що завгодно. Окей, не все, що завгодно, але все одно, це дивовижно, чого можна досягти за допомогою кількох рядків JavaScript-коду.</li>
        </ul>
        <p>Три шари прекрасно вибудовуються один над одним. Візьмемо простий текст для прикладу. Для надання структури та смислового призначення тексту, розмітимо його за допомогою HTML:</p>
        <div className={styles['blockStyle']}>
            {`<p>Player 1: Chris</p>`}
        </div>
        <img src='/img/js_first.png' className={styles['first-elem']}/>
        <p>Потім ми додамо трохи CSS, щоб це мало симпатичніший вигляд:</p>
        <div className={styles['blockStyle']}>
            <span>{`p {`}</span>
            <span className={styles['padding-left-20px']}>{`font-family: 'helvetica neue', helvetica, sans-serif;`}</span>
            <span className={styles['padding-left-20px']}>{`letter-spacing: 1px;`}</span>
            <span className={styles['padding-left-20px']}>{`text-transform: uppercase;`}</span>
            <span className={styles['padding-left-20px']}>{`text-align: center;`}</span>
            <span className={styles['padding-left-20px']}>{`border: 2px solid rgba(0,0,200,0.6);`}</span>
            <span className={styles['padding-left-20px']}>{`background: rgba(0,0,200,0.3);`}</span>
            <span className={styles['padding-left-20px']}>{`color: rgba(0,0,200,0.6);`}</span>
            <span className={styles['padding-left-20px']}>{`box-shadow: 1px 1px 2px rgba(0,0,200,0.4);`}</span>
            <span className={styles['padding-left-20px']}>{`border-radius: 10px;`}</span>
            <span className={styles['padding-left-20px']}>{`padding: 3px 10px;`}</span>
            <span className={styles['padding-left-20px']}>{`display: inline-block;`}</span>
            <span className={styles['padding-left-20px']}>{`cursor:pointer;`}</span>
            <span>{`}`}</span>
        </div>
        <img src='/img/js_second.png' className={styles['first-elem']}/>
        <p>І нарешті, додамо трохи JavaScript для надання динамічної поведінки:</p>
        <div className={styles['blockStyle']}>
            <span>{`const para = document.querySelector('p');`}</span>
            <span>{`para.addEventListener('click', updateName);`}</span>
            <span>{`function updateName() {`}</span>
            <span className={styles['padding-left-20px']}>{`  let name = prompt('Enter a new name');`}</span>
            <span className={styles['padding-left-20px']}>{`  para.textContent = 'Player 1: ' + name;
`}</span>
            <span>{`}`}</span>
        </div>
        <button className={styles['course-button-test']} onClick={buttonHandler}>PLAYER 1: {state}</button>
        <p>JavaScript може робити набагато більше.</p>
    </section>
  )
}

export default WhatIsJs;
