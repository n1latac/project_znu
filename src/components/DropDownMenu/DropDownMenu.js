import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink';
import styles from './DropDownMenu.module.css';

function DropDownMenu(props) {
    const {obj} = props;
  return (
    obj.map(el=>{
        const {name,path,title} = el;
        if(name==='Courses'){
        return(
            
            <ul className={styles['dropDown-ul']}>
               <CustomLink to={path}> <li className={styles['dropDown-li']}>{title}</li></CustomLink>
                <li className={styles['dropDown-li']}>Css</li>
                <li className={styles['dropDown-li']}>Js</li>
            </ul>
        )
    }
    })
    
  )
}

export default DropDownMenu;