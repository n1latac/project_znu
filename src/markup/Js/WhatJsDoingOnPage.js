import React from 'react';
import styles from '../style.module.css';

function WhatJsDoingOnPage() {
  return (
    <section className={styles['course-main']}>
        <h2>Что JavaScript делает на вашей странице?</h2>
        <p>У цьому розділі ми розглянемо код і побачимо що ж дійсно відбувається, коли на сторінці запускається JavaScript.</p>
        <p>Давайте складемо короткий бриф, що ж відбувається, коли ми завантажуємо сторінку в браузері (перша згадка в статті Як працює CSS). Коли ви завантажуєте сторінку в браузері, ви запускаєте ваш код (HTML, CSS і JavaScript) всередині виконуваного середовища (всередині вкладки браузера). Це ніби фабрика бере сировину (якийсь код) і видає продукцію (веб-сторінку).</p>
        <img src='/img/js_what_js_doing_on_your_page.png' className={styles['first-elem']}/>
        <p>Код JavaScript виконується JavaScript-движком браузера, після того як код HTML і CSS був оброблений і сформований у веб-сторінку. Це гарантує, що структура і стиль сторінки вже сформовані до моменту запуску JavaScript.</p>
        <p>Це добре, оскільки часто використання JavaScript полягає в динамічній зміні HTML і CSS з метою оновлення користувацького інтерфейсу за допомогою Document Object Model API (як згадувалося вище). Якби запуск JavaScript здійснювався перед завантаженням HTML і CSS, то це призвело б до виникнення помилок.</p>
        <h4>Безпека браузера</h4>
        <p>Кожна вкладка браузера являє собою окрему коробку для запуску коду (в технічній мові, ці коробки називаються "середовищами виконання") - це означає, що в більшості випадків код на кожній вкладці запускається повністю окремо, а код однієї вкладки не може безпосередньо впливати на код іншої вкладки або на іншому веб-сайті. Це хороший захід безпеки - якби це було інакше, пірати могли б написати код, який крав інформацію з інших сайтів або робив інші погані речі.</p>
        <div className={styles['notes']}><span className={styles['fw700']}>Примітка:</span> Є способи надсилати код і дані між різними веб-сайтами/вкладками у безпечний спосіб, але це просунуті методи, які ми не розглядатимемо в межах цього курсу.</div>
        <h4>Послідовність виконання JavaScript</h4>
        <p>Зазвичай, коли браузер стикається з блоком JavaScript, він запускає його по порядку, зверху вниз. Це означає, що вам потрібно обережно вибирати порядок. Наприклад, повернемося до блоку JavaScript, який ми бачили в першому прикладі:</p>
        <div className={styles['blockStyle']}>
            <span>{`const para = document.querySelector('p');`}</span>
            <span>{`para.addEventListener('click', updateName);`}</span>
            <span>{`function updateName() {`}</span>
            <span className={styles['padding-left-20px']}>{`let name = prompt('Enter a new name');`}</span>
            <span className={styles['padding-left-20px']}>{`para.textContent = 'Player 1: ' + name;`}</span>
            <span>{`}`}</span>
        </div>
        <p>Тут ми вибираємо абзац тексту (рядок 1), а потім додаємо до нього виявлення подій (рядок 3), щоб під час натискання на цей абзац виконувався блок коду updateName() (рядки 5-8). Блок коду updateName() (ці типи багаторазово використовуваних блоків коду називаються "функції") запитує у користувача нове ім'я, а потім вставляє це ім'я в абзац для оновлення відображення.</p>
        <p>Якщо ви поміняєте порядок перших двох рядків коду, він перестане працювати - натомість ви отримаєте помилку, що повертається в консоль браузера - TypeError: para is undefined. Це означає, що об'єкт para ще не існує і ви не можете додати до нього виявлення подій.</p>
        <div className={styles['notes']}><span className={styles['fw700']}>Примітка:</span> Це дуже часта помилка - ви маєте бути обережними, щоб об'єкти, на які посилається ваш код, існували до того, як ви спробуєте щось із ними зробити.</div>
        <h4>Інтерпретований проти компільованого коду</h4>
        <p>У контексті програмування, ви можете почути терміни інтерпретація та компіляція. JavaScript є інтерпретованою мовою - код запускається зверху вниз і результат запуску негайно повертається. Вам не потрібно перетворювати код в іншу форму, перш ніж запускати в браузері.</p>
        <p>З іншого боку, компілируемые мови перетворюються (компілюються) в іншу форму, перш ніж вони будуть запущені комп'ютером. Наприклад, C / C ++ компілюються в мову асемблера, яку потім запускає комп'ютер.</p>
        <p>Обидва підходи мають різні переваги, які на даному етапі ми обговорювати не будемо.</p>
        <h4>Серверний проти клієнтського коду</h4>
        <p>Ви так само можете почути терміни <span className={styles['fw700']}>серверний</span> і <span className={styles['fw700']}>клієнтський код</span>, особливо в контексті веб-розробки. Клієнтський код - це код, який запускається на комп'ютері користувача. Під час перегляду веб-сторінки, клієнтський код завантажується, а потім запускається і відображається браузером. У цьому модулі JavaScript ми явно говоримо про<span className={styles['fw700']}> клієнтський JavaScript.</span></p>
        <p>З іншого боку, серверний код запускається на сервері, потім його результати завантажуються і відображаються в браузері. Приклади популярних серверних веб-мов включають PHP, Python, Ruby і ASP.NET. І JavaScript! JavaScript так само може використовуватися, як серверна мова, наприклад у популярному середовищі Node.js - ви можете більше дізнатися про серверний JavaScript у нашому розділі Dynamic Websites - Server-side programming.</p>
        <p>Слово <span className={styles['fw700']}>динамічний </span>використовується для опису і клієнтського JavaScript, і серверної мови - це стосується можливості оновлення відображення веб-сторінки/додатка, щоб показувати різні речі за різних обставин, генеруючи новий контент у міру необхідності. Серверний код динамічно генерує новий контент на сервері, наприклад дістає дані з бази даних, тоді як клієнтський JavaScript динамічно генерує новий вміст усередині браузера на клієнті, наприклад, створює нову HTML-таблицю, вставляючи в неї дані, отримані з сервера, потім відображає таблицю на веб-сторінці, яку бачить користувач. У цих двох контекстах значення трохи відрізняється, але пов'язане, і зазвичай обидва підходи (серверний і клієнтський) працюють разом.</p>
        <p>Веб-сторінка без динамічного оновлення контенту називається <span className={styles['fw700']}>статичною </span>- вона просто показує один і той самий контент весь час.</p>
    </section>
  )
}

export default WhatJsDoingOnPage;