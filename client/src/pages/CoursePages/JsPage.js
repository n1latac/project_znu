import React from 'react';
import styles from './Course.module.css';
import Header from '../../components/Header/Header';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../../components/CustomLink';

function JsPage() {
  return (
    <div className={styles['courses-body']}>
    <div className={styles['courses-content']}>
        <ul className={styles['courses-navbar']}>
         <li><CustomLink to='/Course/js/introduction' colorText='black'>Що таке JS?</CustomLink></li>
         <li><CustomLink to='/Course/js/what_is_js' colorText='black'>Введення у JS</CustomLink></li>
         <li><CustomLink to='/Course/js/what_js_doing' colorText='black'>Що робить Js?</CustomLink></li>
         <li><CustomLink to='/Course/js/what_js_doing_on_your_page' colorText='black'>Що Js робить на вашій сторінці?</CustomLink></li>
         <li><CustomLink to='/Course/js/adding_js_on_your_page' colorText='black'>Додавання Js на вашу сторінку</CustomLink></li>
        </ul>
          <Outlet/>
    </div>
</div>
  )
}

export default JsPage;