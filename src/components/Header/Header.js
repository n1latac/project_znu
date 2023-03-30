import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import  {navItems}  from '../NavItems/NavItems';
import { useState } from 'react';

export default function Header(props) {
  const [dropDown, setDropDown] = useState(false);

  const {style} = props;
  return (
    <>
      <div className={styles.header} style={style ? style : null}>
        <p className={styles.logo}>Logo</p>
        <ul className={styles.menu}>
            <li className={styles['header-li']} onMouseEnter={()=>{setDropDown(!dropDown)}} onMouseLeave={()=>setDropDown(false)}>Courses
            {dropDown ? <DropDownMenu obj={navItems}/> : null}</li>
            <CustomLink to='/'><li className={styles['header-li']}>Home</li></CustomLink>
            <CustomLink to='/Login'><li className={styles['header-li']}>Login</li></CustomLink>
            <CustomLink to='/Signup'><li className={styles['header-li']}>Signup</li></CustomLink>
        </ul>
      </div>
      </>
      
  )
}
