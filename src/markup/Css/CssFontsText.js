import React from 'react';
import styles from '../style.module.css';

function CssFontsText() {
  return (
    <section className={styles['course-main']}>
       <h2>Шрифти та текст</h2> 
       <p>Теперь, когда мы изучили некоторые основы CSS, давайте добавим ещё несколько правил и информацию в наш файл style.css, чтобы наш пример хорошо выглядел. Прежде всего, давайте сделаем, чтобы наши шрифты и текст выглядели немного лучше.</p>
       <ul className={styles['course-list']}>
        <li>{`Перш за все, поверніться і знайдіть висновок з Google Fonts, який ви вже десь зберегли. Додайте елемент <link> десь усередині шапки вашого index.html (знову ж таки, у будь-якому місці між тегами <head> і </head>). Це матиме приблизно такий вигляд:`}
        </li>
        <div className={styles['blockStyle']}>
            {`<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>`}
            </div>
            <p className={styles['padding-left-20px']}>Цей код пов'язує вашу сторінку з таблицею стилів, яка завантажує сімейство шрифтів Open Sans разом із вашою сторінкою і дає змогу вам застосовувати їх до ваших HTML-елементів, використовуючи свою власну таблицю стилів.</p>
        <li>Потім видаліть наявне правило у вашому style.css файлі. Це був хороший тест, але червоний текст, насправді, не дуже добре виглядає.</li>
        <li>Додайте такі рядки в потрібне місце, замінивши рядок placeholder актуальним font-family рядком, який ви отримали з Google Fonts. (font-family просто означає, який шрифт(и) ви хочете використовувати для вашого тексту). Це правило встановлює глобальний базовий шрифт і розмір шрифту для всієї сторінки (оскільки {`<html>`} є батьківським елементом для всієї сторінки, і всі елементи всередині нього успадковують такий самий font-size і font-family):</li>
        <div className={styles['blockStyle']}>
            <span>{`html {`}</span>
            <span>{`font-size: 10px; /* px значит 'пиксели': базовый шрифт будет 10 пикселей в высоту  */`}</span>
            <span>{`font-family: placeholder: здесь должно быть имя шрифта из Google fonts`}</span>
            <span>{`}`}</span>
        </div>
        <div className={styles['notes']}><span className={styles['fw700']}>Примітка:</span> Усе в CSS документі між /* і */ є CSS коментарем, який браузер ігнорує під час виконання коду. Це місце, де ви можете написати корисні нотатки про те, що ви робите.</div>
        <li>{`Тепер ми встановимо розмір шрифту для елементів, що містять текст усередині HTML тіла (<h1> (en-US), <li>, і <p>). Ми також відцентруємо текст нашого заголовка і встановимо деяку висоту рядка і відстань між буквами в тілі документа, щоб зробити його трохи зручнішим для читання:`}</li>
       </ul>
       <div className={styles['blockStyle']}>
        <span>{`h1 {`}</span>
        <span className={styles['padding-left-20px']}>{`  font-size: 60px;`}</span>
        <span className={styles['padding-left-20px']}>{`  text-align: center;`}</span>
        <span>{`}`}</span>
        <span>{``}</span>
        <span>{`p, li {`}</span>
        <span className={styles['padding-left-20px']}>{`font-size: 16px;`}</span>
        <span className={styles['padding-left-20px']}>{`line-height: 2;`}</span>
        <span className={styles['padding-left-20px']}>{`letter-spacing: 1px;`}</span>
        <span>{`}`}</span>
       </div>
       <p>Ви можете налаштувати значення px так, як вам подобається, щоб ваш дизайн мав такий вигляд, як ви хочете, але, загалом, ваш дизайн має мати такий вигляд:</p>
       <img src='/img/css_text_fonts.png' className={styles['first-elem']}/>
    </section>
  )
}
export default CssFontsText;
