import React from 'react';
import styles from './style.module.css';

function WhatIsHtml() {

  return (
    <>
        <h2>Начало работы с HTML</h2>
        <p>В этой статье мы охватим азы HTML, необходимые для начала работы. Дадим определение «элементам», «атрибутам», «тегам» и прочим важным понятиям, о которых вы, возможно, слышали, а также об их роли в языке. Мы также покажем, как устроены HTML-элементы, типичная HTML-страница, и объясним другие важные аспекты языка. По ходу дела, чтобы вы не заскучали, мы поиграем с настоящей HTML-страницей!</p>
        <h2>Что такое HTML?</h2>
        <p>HTML (HyperText Markup Language - язык гипертекстовой разметки) не является языком программирования; это язык разметки, используемый для определения структуры веб-страниц, посещаемых пользователями. Они могут иметь сложную или простую структуру, всё зависит от замысла и желания веб-разработчика. HTML состоит из ряда элементов, которые вы используете для того, чтобы охватить, обернуть или разметить различные части содержимого, чтобы оно имело определённый вид или срабатывало определённым способом. Встроенные тэги могут преобразовать часть содержимого в гиперссылку, по которой можно перейти на другую веб-страницу, выделить курсивом слова и так далее. Например, рассмотрим следующую строку:</p>
        <div className={styles['blockStyle']}>
            <p>Мой кот очень сердитый</p>
        </div>
        <p>Если мы хотим, чтобы строка отобразилась в таком же виде, мы можем определить её, как "параграф", заключив её в теги элемента "параграф" (${`<p>`}), например:</p>
        <div className={styles['blockStyle']}>
            ${`<p>`}Мой кот очень сердитый${`</p>`}
        </div>
        <div className={styles['notes']}>
        Примечание: Метки в HTML нечувствительны к регистру, то есть они могут быть записаны в верхнем или нижнем регистре. Например, тег ${`<title>`} может быть записан как ${`<title>`}, ${`<TITLE>,`} ${`<Title>`}, ${`<TiTlE>`}, и т.д., и он будет работать нормально. Лучшей практикой, однако, является запись всех тегов в нижнем регистре для обеспечения согласованности, удобочитаемости и других причин.
        </div>
    </>
  )
}

export default WhatIsHtml;