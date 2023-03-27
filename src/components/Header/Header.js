import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const {style} = props;
  return (
    <div className={styles.footer} style={style ? style : null}>
        <p className={styles.logo}>Logo</p>
        <ul className={styles.menu}>
            <li><Link to='/'>Courses</Link></li>
            <li>About</li>
            <li><Link to='/Login'>Login</Link></li>
            <li><Link to='/Signup'>Signup</Link></li>
        </ul>
    </div>
  )
}
