import React from 'react';
import styles from '../style.module.css';

function CssBlocks() {
  return (
    <section className={styles['course-main']}>
        <h2>Блоки, блоки і ще раз блоки</h2>
        <p>Одна річ, яку ви помітите в написанні CSS, полягає в тому, що багато чого з цього стосується блоків - налаштування їхнього розміру, кольору, положення тощо. Більшість HTML-елементів на сторінці можна розглядати як блоки, розташовані один над одним.</p>
        <img src='/img/css_blocks.jpg' className={styles['first-elem']}/>
        <p>Одна річ, яку ви помітите в написанні CSS, полягає в тому, що багато чого з цього стосується блоків - налаштування їхнього розміру, кольору, положення тощо. Більшість HTML-елементів на сторінці можна розглядати як блоки, розташовані один над одним.</p>
        <ul className={styles['course-list-disc']}>
            <li><span className={styles['fw700']}>padding</span>, простір тільки навколо контенту (наприклад, навколо абзацу тексту)</li>
            <li><span className={styles['fw700']}>border</span>, суцільна лінія, яка розташована поруч із padding</li>
            <li><span className={styles['fw700']}>margin</span>, простір навколо зовнішньої сторони елемента</li>
            <img src='/img/css_padding_margin_border.png' className={styles['first-elem']}/>
        </ul>
        <p>У цьому розділі ми також використовуємо:</p>
        <ul className={styles['course-list-disc']}>
            <li><span className={styles['fw700']}>width</span>(ширину елемента)</li>
            <li><span className={styles['fw700']}>background-color</span>, колір позаду контенту і padding елементів</li>
            <li><span className={styles['fw700']}>color</span>, колір контенту елемента (зазвичай тексту)</li>
            <li><span className={styles['fw700']}>text-shadow</span>: встановлює тінь на тексті всередині елемента</li>
            <li><span className={styles['fw700']}>display</span>: встановлює режим відображення елемента (поки що не хвилюйтеся про це)</li>
        </ul>
        <p>Отже, давайте почнемо і додамо більше CSS на нашій сторінці! Продовжуйте додавати ці нові правила, розташовані в нижній частині сторінки, і не бійтеся експериментувати зі зміною значень, щоб побачити, як це працює.</p>
        <h2>Зміна кольору сторінки</h2>
        <div className={styles['blockStyle']}>
            <span>{`html {`}</span>
            <span className={styles['padding-left-20px']}>{`background-color: #00539F;`}</span>
            <span>{`}`}</span>
        </div>
        <h2>Розбираємося з тілом</h2>
        <div className={styles['blockStyle']}>
            <span>{`body {`}</span>
            <span className={styles['padding-left-20px']}>{`width: 600px;`}</span>
            <span className={styles['padding-left-20px']}>{`margin: 0 auto;`}</span>
            <span className={styles['padding-left-20px']}>{`background-color: #FF9500;`}</span>
            <span className={styles['padding-left-20px']}>{`padding: 0 20px 20px 20px;`}</span>
            <span className={styles['padding-left-20px']}>{`border: 5px solid black;`}</span>
            <span>{`}`}</span>
        </div>
        <p>{`Тепер для <body> елемента. Тут є чимало декларацій, тож давайте пройдемо через них усіх по одному:`}</p>
        <ul className={styles['course-list-disc']}>
            <li><span className={styles['fw700']}>width: 600px; </span>- змушує тіло бути завжди 600 пікселів завширшки.</li>
            <li><span className={styles['fw700']}>margin: 0 auto; </span>- коли ви встановлюєте два значення для таких властивостей, як margin або padding, перше значення елемента впливає на верхню й нижню сторону (робить їх 0 у цьому разі), і друге значення на ліву й праву сторону (тут auto є особливим значенням, що ділить доступний простір за горизонталлю порівну ліворуч і праворуч). Ви також можете використовувати один, три або чотири значення, як описано тут.</li>
            <li><span className={styles['fw700']}>background-color: #FF9500; </span>- як і раніше, встановлює колір фону елемента. Я використовував червонувато-помаранчевий для тіла, на відміну від темно-синього кольору для {`<html>`} елемента, але не соромтеся й експериментуйте.</li>
            <li><span className={styles['fw700']}>padding: 0 20px 20px 20px;</span>- у нас є чотири значення, встановлені для padding, щоб зробити трохи простору навколо нашого контенту. Цього разу ми не встановлюємо padding на верхній частині тіла, але робимо 20 пікселів зліва, знизу і справа. Значення встановлюються зверху, справа, знизу, зліва, у такому порядку.</li>
            <li><span className={styles['fw700']}>border: 5px solid black;</span>- просто встановлює суцільну чорну рамку шириною 5 пікселів з усіх боків тіла.</li>
        </ul>
    </section>
  )
}

export default CssBlocks;
