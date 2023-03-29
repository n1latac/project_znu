import React from 'react';
import { Link } from 'react-router-dom';

function DropDownMenu(props) {
    const {obj} = props;
  return (
    obj.map(el=>{
        const {cname,path,title} = el;
        return(
            <ul className={cname ? cname : null}>
                <li><Link to={path}>{title}</Link></li>
            </ul>
        )
    })
    
  )
}

export default DropDownMenu;