import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkAuth } from '../../redux/features/auth/authSlice';
import CustomLink from '../CustomLink';
import styles from './DropDownMenu.module.css';

function DropDownMenu(props) {
  const {obj} = props;
  const isAuth = useSelector(checkAuth)
  return (
    <ul className={styles['dropDown-ul']}>
    {obj.map(el=>{
      
        const {name,path,title} = el;
        console.log(el);
        if(name==='Courses'){
        return(   
          isAuth ? (
            <CustomLink to={path}> <li className={styles['dropDown-li-auth']}>{title}</li></CustomLink> 

          ) : (
            <li className={styles['dropDown-li-notAuth']} title='нужно зарегестрироваться'>{title}</li>
          )
        )
    }
    })}
    </ul>
  )
}

export default DropDownMenu;