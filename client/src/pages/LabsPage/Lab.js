import React from 'react';
import styles from './style.module.css';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../../components/CustomLink';

function Lab() {
  return (
    <div className={styles['labs-body']}>
    <div className={styles['labs-content']}>
        <ul className={styles['labs-navbar']}>
        <li><CustomLink to='/Labs/first' colorText='black'>Перша лабораторна</CustomLink></li>
        <li><CustomLink to='/Labs/second' colorText='black'>Друга лабораторна</CustomLink></li>
        <li><CustomLink to='/Labs/third' colorText='black'>Третя лабораторна</CustomLink></li>
        <li><CustomLink to='/Labs/fourth' colorText='black'>Четверта лабораторна</CustomLink></li>
        <li><CustomLink to='/Labs/fifth' colorText='black'>П'ята лабораторна</CustomLink></li>
        <li><CustomLink to='/Labs/sixth' colorText='black'>Шоста лабораторна</CustomLink></li>
        <li><CustomLink to='/Labs/seventh' colorText='black'>Сьома лабораторна</CustomLink></li>
        <li><CustomLink to='/Labs/eighth' colorText='black'>Восьма лабораторна</CustomLink></li>
        <li><CustomLink to='/Labs/ninth' colorText='black'>Дев'ята лабораторна</CustomLink></li>


          
        </ul>
          <Outlet/>
    </div>
</div>
  )
}

export default Lab;