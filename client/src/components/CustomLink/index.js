import { Link, useMatch } from 'react-router-dom';
import { navItems } from '../NavItems/NavItems';

function CustomLink({children, to, colorText, ...props}) {
    const match = useMatch({
      path: to,
      end: to.length === 1, 
    })
    let a;
    if(to === '/Course/html' || to === '/Course/css' || to === '/Course/js'){
      a = to + '/introduction'
    }else{
      a = false
    }
  return (
    <Link to={a ? a : to} {...props} style={{
        color: match ? 'blue' : colorText,
        listStyle: 'none',
        textDecoration: match ? 'underline' : 'none',
    }}>
        {children}
    </Link>
  )
}

export default CustomLink;