import React from 'react';
import styles from '../style.module.css';
import { useState } from 'react';

function AddingJs() {
  const [state, setState] = useState('');

const buttonHandler = () =>{
  setState([...state, <><span style={{color: 'white',display: 'block'}}>Click me!</span>
  <span style={{color: 'white',display: 'block'}}>Click me!</span></>])
}

  return (
    <section className={styles['course-main']}>
      <h2>Як додати JavaScript на вашу сторінку?</h2>
      <p>{`JavaScript застосовується до вашої HTML-сторінки так само, як CSS. І якщо CSS використовує елементи <link> для зовнішніх стилів і <style> для вбудованих у HTML, то для JavaScript потрібен тільки один друг у HTML світі - елемент <script>. Давайте дізнаємося, як це працює.`}</p>
      <h4>Внутрішній JavaScript</h4>
      <ul className={styles['course-list']}>
        <li>Спочатку зробіть локальну копію нашого файлу-прикладу <a target='_blank' href='https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html'>apply-javascript.html.</a> Збережіть його в зручне для вас місце.</li>
        <li>Відкрийте цей файл у вашому браузері та у вашому текстовому редакторі. Ви побачите, що HTML створює просту веб-сторінку з активною кнопкою.</li>
        <li>{`Потім, перейдіть у текстовий редактор і додайте такі рядки перед закриваючим тегом </head>:`}
        <div className={styles['blockStyle']}>
          <span>{`<script>`}</span>
          <span className={styles['padding-left-20px']}>{`// тут буде JavaScript`}</span>
          <span>{`</script>`}</span>
          </div></li>
          <li>{`Тепер додамо JavaScript всередину елемента <script>, щоб зробити сторінку цікавішою - додайте такий код нижче рядка "// тут буде JavaScript":`}
          <div className={styles['blockStyle']}> 
            <span>{`document.addEventListener("DOMContentLoaded", function() {`}</span>
            <span className={styles['padding-left-20px']}>{`  function createParagraph() {`}</span>
            <span className={styles['padding-left-40px']}>{`    let para = document.createElement('p');`}</span>
            <span className={styles['padding-left-40px']}>{`    para.textContent = 'You clicked the button!';`}</span>
            <span className={styles['padding-left-40px']}>{`    document.body.appendChild(para);`}</span>
            <span className={styles['padding-left-20px']}>{`}`}</span>
            <span className={styles['padding-left-20px']}>{`  const buttons = document.querySelectorAll('button');`}</span>
            <span className={styles['padding-left-20px']}>{`  for(let i = 0; i < buttons.length ; i++) {`}</span>
            <span className={styles['padding-left-40px']}>{`    buttons[i].addEventListener('click', createParagraph);`}</span>
            <span className={styles['padding-left-20px']}>{`}`}</span>
            <span>{`});`}</span>
          </div>
          </li>
          <li>Збережіть файл і оновіть сторінку в браузері - тепер ви маєте побачити, що під час натискання на кнопку створюється новий абзац і поміщається нижче.</li>
      </ul>
      <div className={styles['notes']}><span className={styles['fw700']}>Примітка:</span> {`Якщо ваш приклад не працює, пройдіть ще раз усі кроки та перевірте, чи зробили ви все правильно. Чи зберегли ви вашу локальну копію початкового коду, як .html файл? Чи додали ваш <script> елемент після тега </body>? Чи ввели ви JavaScript саме так, як показано? JavaScript регістрозалежний, і дуже вибагливий. Тому вам потрібно вводити синтаксис саме так, як показано, інакше воно може не працювати.`}</div>
      <h4>Зовнішній JavaScript</h4>
      <p>Це чудово працює, але що якщо ми хочемо помістити наш JavaScript в окремий файл? Давайте зараз розберемося з цим.</p>
      <ul className={styles['course-list']}>
        <li>Спочатку створіть новий файл у тій самій папці, що й ваш файл-приклад HTML. Назвіть його script.js - переконайтеся, що в імені файлу розширення .js, бо воно розпізнається, як JavaScript.</li>
        <li>{`Замініть ваш поточний елемент <script> на наступний:`}
          <div className={styles['blockStyle']}>
            <span>{`<script src="script.js" defer></script>`}</span>
          </div>
        </li>
        <li>Усередині script.js додайте такий скрипт:
          <div className={styles['blockStyle']}>
            <span>{`function createParagraph() {`}</span>
            <span className={styles['padding-left-20px']}>{`  let para = document.createElement('p');`}</span>
            <span className={styles['padding-left-20px']}>{`  para.textContent = 'You clicked the button!';`}</span>
            <span className={styles['padding-left-20px']}>{`  document.body.appendChild(para);`}</span>
            <span>{`}`}</span>
            <span>{`const buttons = document.querySelectorAll('button');`}</span>
            <span>{`for(let i = 0; i < buttons.length ; i++) {`}</span>
            <span className={styles['padding-left-20px']}>{`  buttons[i].addEventListener('click', createParagraph);`}</span>
            <span>{`}`}</span>
          </div>
        </li>
        <li>Збережіть і оновіть сторінку в браузері, і ви побачите те ж саме! Все працює так само, але тепер у нас є JavaScript у зовнішньому файлі. Це, як правило, добре з погляду організації коду і його повторного використання в декількох HTML файлах. Крім того, HTML легше читати без величезних шматків коду, який накопичується в ньому.</li>
      </ul>
      <h4>Інлайнові JavaScript обробники</h4>
      <p>Зверніть увагу, що іноді можна зіткнутися з частинами JavaScript-коду, який живе всередині HTML. Це може виглядати приблизно так:</p>
      <div className={styles['falseBlockStyle']}>
          <span>{`function createParagraph() {`}</span>
          <span className={styles['padding-left-20px']}>{`  var para = document.createElement('p');`}</span>
          <span className={styles['padding-left-20px']}>{`  para.textContent = 'You clicked the button!';`}</span>
          <span className={styles['padding-left-20px']}>{`  document.body.appendChild(para);`}</span>
          <span>{`}`}</span>
      </div>
      <div className={styles['falseBlockStyle']}>
          <span>{`<button onclick="createParagraph()">Click me!</button>`}</span>
      </div>
      <p>Ви можете спробувати цю версію в нашій демонстрації нижче:</p>
      <div className={styles['course-example']} style={{maxHeight: '150px', overflow: 'auto'}}>
        <button style={{margin: '20px 20px', border: '1px solid white', borderRadius: '5px', padding: '5px'}} onClick={buttonHandler}>Click me!</button>
        <p>{state}</p>
      </div>
      <p>{`Ця демонстрація має ті самі функціональні можливості, що й у попередніх двох розділах, за винятком того, що елемент <button> містить вбудований обробник onclick, який запускає функцію під час натискання кнопки.`}</p>
      <p><span className={styles['fw700']}>Але будь ласка, не робіть цього.</span> Це погана практика - забруднювати ваш HTML кодом JavaScript, і вона не ефективна - вам потрібно буде додати атрибут onclick="createParagraph()" до кожної кнопки, до якої ви хочете підключити JavaScript.</p>
      <p>Использование чистой JavaScript конструкции, позволит вам выбрать все кнопки, используя одну команду. Код, который можно использовали для этой цели, выглядит следующим образом:</p>
      <div className={styles['blockStyle']}>
        <span>{`const buttons = document.querySelectorAll('button');`}</span>
        <span>{`for(let i = 0; i < buttons.length ; i++) {`}</span>
        <span className={styles['padding-left-20px']}>{`  buttons[i].addEventListener('click', createParagraph);`}</span>
        <span>{`}`}</span>
      </div>
      <p>Це може виглядати трохи довше, ніж атрибут onclick, але це буде працювати для всіх кнопок, незалежно від того, скільки їх на сторінці, і скільки їх видалять або додадуть. JavaScript змінювати не потрібно</p>
      <div className={styles['notes']}><span className={styles['fw700']}>Примітка:</span> Спробуйте відредагувати вашу версію apply-javascript.html і додати ще кілька кнопок у файл. Після перезавантаження ви повинні побачити, що всі кнопки створюють параграф, якщо клікнути на них. Класно, так?</div>
      <h4>Стратегії завантаження скриптів</h4>
      <p>Існує низка проблем, пов'язаних із завантаженням скриптів у потрібний час. Усе не так просто, як здається! Поширеною проблемою є те, що весь HTML-код на сторінці завантажується в тому порядку, в якому відображається. Якщо ви використовуєте JavaScript для маніпуляції елементами на сторінці (або, точніше, в DOM - Об'єктній Моделі Документу), ваш код не працюватиме, якщо JavaScript-код завантажиться та розпізнається раніше за HTML-код, з яким ви намагаєтеся взаємодіяти.</p>
    </section>
  )
}

export default AddingJs;