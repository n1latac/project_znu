import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink';
import styles from './DropDownMenu.module.css';

function DropDownMenu(props) {
  const {obj} = props;
  return (
    <ul className={styles['dropDown-ul']}>
    {obj.map(el=>{
      
        const {name,path,title} = el;
        console.log(el);
        if(name==='Courses'){
        return(   
            <CustomLink to={path}> <li className={styles['dropDown-li']}>{title}</li></CustomLink> 
        )
    }
    })}
    </ul>
  )
}

export default DropDownMenu;