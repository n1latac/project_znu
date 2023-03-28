import React from 'react';
import styles from './HtmlCourse.module.css';
import Header from '../Header/Header';

function HtmlCourse() {
  return (
    <div className={styles['html-body']}>
        <Header style={{padding: '0vh 10vw', margin: '0 auto', backgroundColor: 'black', backdropFilter: 'blur(20px)'}}/>
        <div className={styles['html-content']}>
            <div className={styles['html-navbar']}></div>
            <section className={styles['html-main']}>
                <h2>Введение в HTML</h2>
                <p>По сути, HTML довольно простой язык, состоящий из элементов, которые могут быть применены к частям текста, чтобы придавать им различные значения (Это абзац? Это маркированный список? Это часть таблицы?), разделять документ на логические секции (есть ли у документа шапка? три столбца с контентом? меню навигации?) и добавлять контент на Вашу страницу, такой как фото и видео. Этот модуль расскажет вам о первых двух возможностях HTML и научит фундаментальным концепциям и синтаксису, которые вам нужно знать, чтобы понять HTML.</p>
                <h2>Необходимые условия</h2>
                <p>Чтобы начать изучение этого модуля, вам не нужны никакие знания HTML, но вы должны иметь хотя бы базовые навыки обращения с компьютером и навыки пассивного использования Веба (т.е просто смотря на него, потребляя контент). У вас должна быть базовая рабочая среда, описанная в разделе Установка базового программного обеспечения), а также понимание, как создавать и управлять файлами, что подробно описано в статье Работа с файлами — обе статьи являются частью нашего модуля Начало работы с сетью.</p>
                <h2>Руководства</h2>
                <p>Этот модуль содержит следующие статьи, которые помогут изучить всю основную теорию HTML и предоставят широкие возможности для проверки некоторых навыков.</p>
                <h3>Начало работы с HTML</h3>
                <p>Охватывает базовые основы HTML, чтобы вы начали изучение - мы опишем элементы, атрибуты и все другие важные термины, о которых вы, возможно, уже слышали, а также где и как они располагаются в языке. Мы также покажем, структуру HTML-элемента, как устроена типичная страница HTML, и объясним другие важные языковые особенности. По ходу мы будем играть с HTML так, чтобы вам было интересно!</p>
                <h3>Что такое заголовок? Метаданные в HTML</h3>
                <p>Заголовок HTML — это часть документа, которая не отображается в браузере при загрузке страницы. Он содержит информацию, такую как: страница title, ссылки на CSS (если вы хотите стилизовать свой HTML при помощи CSS), ссылки на пользовательские значки и метаданные (которые представляют собой данные о HTML, например, кто его написал или важные ключевые слова, которые описывают документ).</p>
                <h3>Основы редактирования текста в HTML</h3>
                <p>Основной задачей HTML является придание тексту значения **(**также известно, как семантика), чтобы браузер знал, как его правильно отображать. В этой статье рассматривается то, как использовать HTML, чтобы разбить блок текста на структуру из заголовков и абзацев, добавить акцент/значение слов, создать списки и многое другое.</p>
                <h3>Создание гиперссылок</h3>
                <p>Гиперссылки очень важны — ведь именно они делают интернет интернетом. В этой статье описан синтаксис, необходимый для создания ссылок, а также описано их наилучшее применение на практике.</p>
                <h3>Углублённое форматирование текста</h3>
                <p>Существует множество других элементов HTML для редактирования текста, про которые мы вам не рассказали в статье Основы редактирования текста в HTML. Описанные здесь элементы менее известны, но о них также полезно знать. Здесь вы узнаете о разметке цитат, списках описания, компьютерном коде и другом сопутствующем тексте, нижнем и верхнем индексах, контактной информации и многом другом.</p>
                <h3>Структура документа и веб-сайта</h3>
                <p>Помимо определения отдельных частей страницы (таких как "абзац" или "изображение"), HTML также используется для определения отдельных зон веб-сайта (таких как "шапка", "меню навигации", "столбец с основным содержимым".) В этой статье рассматривается, как планировать базовую структуру веб-сайта и писать HTML для представления этой структуры.</p>
                <h3>Отладка HTML</h3>
                <p>Писать на HTML хорошо, но что, если что-то идёт не так, и вы не можете найти место ошибки в коде? В этой статье вы познакомитесь с некоторыми инструментами, которые могут вам помочь.</p>
            </section>
        </div>
    </div>
  )
}

export default HtmlCourse
