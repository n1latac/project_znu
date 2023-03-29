import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink';

export default function Header(props) {
  const {style} = props;
  return (
      <div className={styles.header} style={style ? style : null}>
        <p className={styles.logo}>Logo</p>
        <ul className={styles.menu}>
            <li>Courses</li>
            <li><CustomLink to='/'>Home</CustomLink></li>
            <li><CustomLink to='/Login'>Login</CustomLink></li>
            <li><CustomLink to='/Signup'>Signup</CustomLink></li>
        </ul>
      </div>
  )
}
