import { Link, useMatch } from 'react-router-dom';
import { navItems } from '../NavItems/NavItems';

function CustomLink({children, to, colorText, ...props}) {
  const path = navItems.reduce(val=>val)
    const match = useMatch({
      path: to,
      end: to.length === 1, 
    })
    let string = false;
    if(path.name === 'Courses'){
      string  = to + '/introduction'
    }
  return (
    <Link to={string ? string : to} {...props} style={{
        color: match ? 'blue' : colorText,
        listStyle: 'none',
        textDecoration: match ? 'underline' : 'none',
    }}>
        {children}
    </Link>
  )
}

export default CustomLink;