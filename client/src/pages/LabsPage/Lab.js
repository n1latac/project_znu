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
          
        </ul>
          <Outlet/>
    </div>
</div>
  )
}

export default Lab;